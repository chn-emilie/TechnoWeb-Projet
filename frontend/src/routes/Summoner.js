import React from 'react';
import { useParams } from "react-router-dom";

import SummonerHandler from '../components/SummonerHandler';


/*
Fonction intermédiaire pour récupérer les paramètres passés en input 
*/

export default function Summoner(){

  let params = useParams();
  
  return <SummonerHandler summonerName={params.summonerName}/>;

}