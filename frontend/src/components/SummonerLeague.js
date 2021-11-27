import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SummonerPie from './SummonerPie';

const ASSET_EMBLEM = "../assets/emblems/Emblem";
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

    //????
    setQueueName(queueType)
    {
        let name = "";

        switch (queueType)
        {
            case "RANKED_SOLO_5x5": name = "SOLO/DUO"; break;
            case "RANKED_FLEX_SR": name = "FLEX"; break;
            default: name = "UNRANKED";
        }

        return name;
    }

    render()
    {
        const league = this.state;
        const EMBLEM_PATH = `${ASSET_EMBLEM}_${league.tier}.png`;
        return(        
            <div>
            <Row>
               <Col> <Image className="leagueImg" src={EMBLEM_PATH} /><br/><br/>
                    <h5>{league.tier} {league.rank}</h5>
                </Col>
               <Col><SummonerPie wins={league.wins} losses={league.losses}/></Col>
           </Row>
       </div>
        );
    }

}

/*
{league.tier} {league.rank}&nbsp;-
&nbsp;{league.wins}W/{league.losses}L


*/