import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

import renderItemSet from './ItemSet';
import React from 'react';
import RiotAPI from '../tools/RiotAPI';

import summonerSpells from '../jsons/summonerspells.json';

//URLS
const CHAMP_SQUARE_ASSET_URL = "http://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion";
const SUMM_SPELL_ASSET_URL = "http://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell";

export default class HistoryRow extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            fetched: false,
            match_id: props.match_id,
            puuid: props.puuid,
            match: [],
        }
    }

    componentDidMount()
    {
        let api = new RiotAPI();
        api.fetchMatch(this.state.match_id)
        .then((response) => {
            this.setState({
                match: response.data.info,
                fetched: true
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    getSummonerSpell( summonerSpellID )
    {
        const data = summonerSpells.data;
        let keys = Object.keys(data);
        let spellIndex = 0;
        for(let i=0; i < keys.length; i++)
        {
            if (data[keys[i]].key == summonerSpellID)
            {
                spellIndex = i;
                break;
            }
        }
        return `${keys[spellIndex]}.png`;

    }


    getParticipantId()
    {
        let participantId = null;
        const participants = this.state.match.participants
        for (let i = 0; i < participants.length; i++)
        {
            if ( participants[i].puuid === this.state.puuid )
            {
                participantId = i;
                break;
            }
        }

        return participantId;
    }

    getItems(participant)
    {
        let items = [];
        for(let i = 0; i < 6; i++)
        {
            items.push(participant[`item${i}`]);
        }

        return items;
    }

    calculateKP(participants, win)
    {
        let totalKills = 0;
        for(let i = 0; i < participants.length; i++ )
        {
            if ( participants[i]["win"] === win) 
            {
                totalKills += participants[i]["kills"];
            }
        }

        return totalKills;
    }

    render()
    {   
        
        if ( !this.state.fetched )
            return null;
        const match = this.state.match;
        const participantId = this.getParticipantId();
        const participant = match.participants[ participantId ];
        const items = this.getItems(participant);

        const historyContainer = participant["win"]?"historyContainer victory":"historyContainer defeat";

        const champIcon = `${CHAMP_SQUARE_ASSET_URL}/${participant["championName"]}.png`;
        const summonerSpell1 = `${SUMM_SPELL_ASSET_URL}/${this.getSummonerSpell(participant["summoner1Id"])}`;
        const summonerSpell2 = `${SUMM_SPELL_ASSET_URL}/${this.getSummonerSpell(participant["summoner2Id"])}`;
        const KDA = `${participant["kills"]}/${participant["deaths"]}/${participant["assists"]}`;
        const minionsKilled = participant["totalMinionsKilled"];

        const KPraw = ((participant["kills"] + participant["assists"])/this.calculateKP(match.participants, participant["win"]))*100;
        const KP = `${Number(KPraw).toFixed(0)}`;
        


        return(
            <div className={historyContainer}>
                <Row>
                    <Col xs={2}>
                        <Row>
                            <Image className="historyChampIcon" src={champIcon}/> 
                        </Row>
                        <Container className="d-flex p-2" >
                            <Image className="historySummonerSpell" src={summonerSpell1}/>
                            <Image className="historySummonerSpell mx-1" src={summonerSpell2}/>
                        </Container>
                    </Col>

                    <Col>
                        <Container className="d-flex flex-column">
                            <h3>{KDA}</h3>
                            <h5>{minionsKilled} CS - {KP}%kp</h5>
                        </Container>
                    </Col>

                    <Col>
                        {renderItemSet(items)}
                    </Col>
                </Row>
            </div>
        );
    }
}
        