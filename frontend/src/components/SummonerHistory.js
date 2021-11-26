import React from 'react';
import RiotAPI  from '../tools/RiotAPI';
import HistoryRow from './HistoryRow';
import Accordion from 'react-bootstrap/Accordion'



export default class SummonerHistory extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            game: props.game,
            puuid: props.puuid,
            matches_id:  []   
        };
    }

    componentDidMount()
    {
        if (this.state.game === "lol")
         this.getMatchesHistory();
        else
         this.getMatchesTFTHistory();
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

    getMatchesTFTHistory()
    {
        const api = new RiotAPI();
        api.fetchMatchesTFTHistory(this.state.puuid)
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
      
        for( let i = 0; i < (this.state.matches_id.length); i++)
        {
            historyRows[i] = <HistoryRow match_id={this.state.matches_id[i]} puuid={this.state.puuid} game={this.state.game} />
        }

        return (
            <Accordion>
                {historyRows.map( (row, index) => <Accordion.Item className="historyRow" eventKey={`row${index}`} key={`row${index}`}> {row} </Accordion.Item>)}
            </Accordion>
        );

    }
}