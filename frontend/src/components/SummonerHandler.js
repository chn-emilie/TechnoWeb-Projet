import React from 'react';
import RiotAPI  from '../tools/RiotAPI';

import SummonerBrief from '../components/SummonerBrief';
import SummonerHistory from '../components/SummonerHistory';

export default class SummonerHandler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fetched: false,
            name: props.summonerName,
            account: []  
        };      
    }
    componentDidMount()
    {
        this.fetchAccount();
    }

    fetchAccount()
    {
        let api = new RiotAPI();
        api.fetchSummonerByName(this.state.name)
        .then((response) => {
            this.setState({
                account: response.data,
                fetched: true
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render()
    {
        if( !this.state.fetched ) 
            return null;
        return (
            <div>
               <SummonerBrief account={this.state.account} /> 
               <SummonerHistory puuid={this.state.account.puuid}/>
            </div>
        );
    }
}