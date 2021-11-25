import React from 'react';


export default class SummonerHistory extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            leaguePoints: props.leaguePoints,
            losses: props.losses,
            queueType: props.queueType,
            rank: props.rank,
            tier: props.tier,
            wins: props.win,
        };
    }

    setQueueName(queueType)
    {
        let name = "";

        switch (queueType)
        {
            case "RANKED_SOLO_5x5": name = "SOLO/DUO"; break;
            case "RANKED_FLEX_SR": name = "FLEX"; break;
        }
    }

    render()
    {
        console.log(this.state);
        return(
                 <p>
                    {this.state.queueType}
                </p>
    
        );
    }

}