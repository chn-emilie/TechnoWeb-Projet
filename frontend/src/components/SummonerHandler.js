import React from 'react';
import RiotAPI from '../tools/RiotAPI';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import SummonerBrief from '../components/SummonerBrief';
import SummonerHistory from '../components/SummonerHistory';

export default class SummonerHandler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: false,
            fetchedTFT: false,
            fetchedLOL: false,
            name: props.summonerName,
            accountLOL: [],
            accountTFT: [],
        };  
        
        console.log(this.state.name);
    }
    componentDidMount()
    {
        this.fetchaccountLOL();
        this.fetchaccountTFT();   
    }

    fetchaccountLOL()
    {
        let api = new RiotAPI();
        api.fetchSummonerByName(this.state.name)
        .then((response) => {
            this.setState({
                accountLOL: response.data,
                fetchedLOL: true
            });
        })
        .catch((error) => {
            this.setState({
                error: true,
                fetchedLOL: true,
            });
            console.log(error);
        });
    }

    fetchaccountTFT()
    {
        let api = new RiotAPI();
        api.fetchTFTSummonerByName(this.state.name)
        .then((response) => {
            this.setState({
                accountTFT: response.data,
                fetchedTFT: true
            });
        })
        .catch((error) => {
            this.setState({
                error: true,
                fetchedTFT: true,
            });
            console.log(error);
        });
    }



    render()
    {
        if( !this.state.fetchedTFT || !this.state.fetchedLOL ) 
            return null;

        
        if ( this.state.error )
            return <p>error</p>

        return (
            <div>
                <Tabs defaultActiveKey="League of Legends" className="mb-3">
                    <Tab eventKey="League of Legends" title="League of Legends">
                        <SummonerBrief account={this.state.accountLOL} game={"lol"} /> 
                        <SummonerHistory puuid={this.state.accountLOL.puuid} game={"lol"}/>
                    </Tab>
                    <Tab eventKey="Teamfight Tactics" title="Teamfight Tactics">
                        <SummonerBrief account={this.state.accountTFT} game={"TFT"}/> 
                        <SummonerHistory puuid={this.state.accountTFT.puuid} game={"TFT"}/>
                    </Tab>
               </Tabs>
            </div>
        );
    }
}