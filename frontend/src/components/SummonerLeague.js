import React from 'react';
import Image from 'react-bootstrap/Image';

const ASSET_EMBLEM = "./assets/emblems/Emblem"
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
            wins: props.wins,
        };
    }

    setQueueName(queueType)
    {
        let name = "";

        switch (queueType)
        {
            case "RANKED_SOLO_5x5": name = "SOLO/DUO"; break;
            case "RANKED_FLEX_SR": name = "FLEX"; break;
            default: name = "UNRANKED";
        }
    }

    render()
    {
        const league = this.state;
        const EMBLEM_PATH = `${ASSET_EMBLEM}_Gold.png`;
        return(
                 <p>
                    <Image className="navLogo" src={EMBLEM_PATH} />
                    {league.tier} {league.rank}&nbsp;-
                    &nbsp;{league.wins}W/{league.losses}L
                </p>
    
        );
    }

}