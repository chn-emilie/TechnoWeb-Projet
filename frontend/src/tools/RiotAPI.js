import axios from 'axios';

const API_KEY = "RGAPI-796722fb-2d6e-4dc8-ad24-320308b610c1";
const API_URL = "https://euw1.api.riotgames.com";

const API_MATCH_URL = "https://europe.api.riotgames.com";

/* ROUTES */
const API_SUMMONER = "lol/summoner/v4/summoners";
const API_MATCH = "lol/match/v5/matches"
const API_LEAGUE = "lol/league/v4/entries";

//Empty for now.. CORS disabled manualy
const config = {
    headers:{
            }
  };

export default class RiotAPI {

    fetchSummonerByName(name){

        const URL = `${API_URL}/${API_SUMMONER}/by-name/${name}?api_key=${API_KEY}`;
        return axios
        .get(URL, config)
    }

    fetchMatchesHistory(puuid){

        const URL = `${API_MATCH_URL}/${API_MATCH}/by-puuid/${puuid}/ids?start=0&count=20&api_key=${API_KEY}`;
        return axios
        .get(URL, config)

    }

    fetchLeague(encryptedSummonerId){

        const URL = `${API_URL}/${API_LEAGUE}/by-summoner/${encryptedSummonerId}?api_key=${API_KEY}`;
        return axios
        .get(URL, config)

    }

    fetchMatch(matchId)
    {
        const URL = `${API_MATCH_URL}/${API_MATCH}/${matchId}?api_key=${API_KEY}`;
        return axios
        .get(URL, config)
    }
}