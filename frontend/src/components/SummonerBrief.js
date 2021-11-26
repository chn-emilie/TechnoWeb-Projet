import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import RiotAPI  from '../tools/RiotAPI';
import SummonerLeague from './SummonerLeague';

const PROFILE_ICON_URL = 'http://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon';
export default class SummonerBrief extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            game: props.game,
            fetched: false,
            account: props.account,
            league:     []
        }
            
    }

    /*
    First, to fetch all our data from Riot Games we need the account id and the puuid.
    We start by fetching the League of Legends account by Summoner Name,
    then if we don't have errors, we fetch the leagues where the player currently is
    */
   componentDidMount()
   {
    if( this.state.game === "lol")
        this.setLeagueLOL();
    else
        this.setLeagueTFT();
   }

    setLeagueLOL()
    {
        let api = new RiotAPI();
        api.fetchLeague(this.state.account.id)
        .then((response) => {
            this.setState({
                fetched: true,
                league: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    setLeagueTFT()
    {
        let api = new RiotAPI();
        api.fetchLeagueTFT(this.state.account.id)
        .then((response) => {
            this.setState({
                fetched: true,
                league: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }



    render(){
        if (!this.state.fetched)
            return null;
        const summonerName = this.state.account["name"];
        const profileIcon = `${PROFILE_ICON_URL}/${this.state.account["profileIconId"]}.png`
        const leagues = this.state.league;
        let leagueTab = [];
        let leagueNames = [];
        let unranked = null;
        if( leagues.length === 0)
        {
            unranked = <Tab eventKey={`league0`} key={`league0`} title={"UNRANKED"} >
                        </Tab>;
        }
        else
        {
            for(let i = 0; i < leagues.length; i++)
            {
            let league = leagues[i];
            if( league.queueType == "RANKED_TFT_PAIRS")
                continue;
            else if ( league.queueType == "RANKED_FLEX_SR" )
            {
                leagueNames.push("FLEX");
            }
            else if (league.queueType == "RANKED_TFT")
            {
                leagueNames.push("RANKED TFT")
            }
            else
            {
                leagueNames.push("SOLO/DUO");
            }

            leagueTab.push( <SummonerLeague leaguePoints={league.leaguePoints} losses={league.losses} queueType={league.queueType} rank={league.rank} tier={league.tier} wins={league.wins}/> ); 
            }
        }
        

        return(
            <div className="summonerBrief">
            <Container>
            <Row>
                <Col>
                <Container className="sumBriefContainer">
                    <Row>
                        <Col xs={2}><Image className="sumBriefImg" src={profileIcon} roundedCircle/></Col>
                        <Col><h3>{ summonerName }</h3>
                        <p> Level {this.state.account["summonerLevel"]}</p></Col>
                    </Row>
                </Container>
                </Col>
            <Col>
            <Container className="sumBriefContainer">
                <Tabs defaultActiveKey="league0" id="uncontrolled-tab-example" className="mb-3 tabLink" variant="pills">
                {leagueTab.map((leagueData, index) => 
                    <Tab eventKey={`league${index}`} key={`league${index}`} title={leagueNames[index]} >
                         {leagueData}
                    </Tab>
                 )}
                 {unranked}
                </Tabs> 
            </Container>
            </Col>
            </Row>
            </Container>
            </div>
        );
    }
}