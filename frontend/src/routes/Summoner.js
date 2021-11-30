import React from 'react';
import { useParams } from "react-router-dom";

import SummonerHandler from '../components/SummonerHandler';


/*
We can only use react's hooks at the top of a function
So we use a "middleman" that retrieve input from the Home Page
and gives it to the Handler
*/
export default function Summoner(){

  let params = useParams();
  
  return <SummonerHandler summonerName={params.summonerName}/>;
}