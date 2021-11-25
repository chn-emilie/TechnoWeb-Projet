import React from 'react';
import RiotAPI  from '../tools/RiotAPI.js';
import HistoryRow from './HistoryRow.js';




export default class SummonerHistory extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            puuid: props.puuid,
            matches_id:  []   
        };

    }

    componentDidMount()
    {
       this.getMatchesHistory();
    }
       
    getMatchesHistory()
    {
        const api = new RiotAPI();
        api.fetchMatchesHistory(this.state.puuid)
        .then((response) => {
            this.setState({
                matches_id: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render(){
        let historyRows = [];
      
        for( let i = 0; i < (this.state.matches_id.length-5); i++)
        {
            historyRows[i] = <HistoryRow match_id={this.state.matches_id[i]} puuid={this.state.puuid} />
        }

        return (
            <div>
                {historyRows.map( (row, index) => <div key={`row${index}`}> {row} </div>)}
            </div>
        );
    }
}