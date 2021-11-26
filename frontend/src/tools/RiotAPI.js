import axios from 'axios';

const API_KEY = "RGAPI-de76e826-5db6-4624-898f-208f8bb3f64d";
const API_URL = "https://euw1.api.riotgames.com";

const API_MATCH_URL = "https://europe.api.riotgames.com";

/* ROUTES */
const API_SUMMONER = "lol/summoner/v4/summoners";
const API_TFT_SUMMONER = "tft/summoner/v1/summoners";

const API_MATCH = "lol/match/v5/matches"
const API_TFT_MATCH = "tft/match/v1/matches"

const API_LEAGUE = "lol/league/v4/entries";
const API_TFT_LEAGUE = "tft/league/v1/entries";

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

    fetchTFTSummonerByName(name)
    {
        const URL = `${API_URL}/${API_TFT_SUMMONER}/by-name/${name}?api_key=${API_KEY}`;
        return axios
        .get(URL, config)
    }

    fetchMatchesHistory(puuid){

        const URL = `${API_MATCH_URL}/${API_MATCH}/by-puuid/${puuid}/ids?start=0&count=8&api_key=${API_KEY}`;
        return axios
        .get(URL, config)

    }

    fetchMatchesTFTHistory(puuid){

        const URL = `${API_MATCH_URL}/${API_TFT_MATCH}/by-puuid/${puuid}/ids?start=0&count=8&api_key=${API_KEY}`;
        return axios
        .get(URL, config)

    }


    fetchLeague(encryptedSummonerId){

        const URL = `${API_URL}/${API_LEAGUE}/by-summoner/${encryptedSummonerId}?api_key=${API_KEY}`;
        return axios
        .get(URL, config)

    }

    fetchLeagueTFT(encryptedSummonerId){

        const URL = `${API_URL}/${API_TFT_LEAGUE}/by-summoner/${encryptedSummonerId}?api_key=${API_KEY}`;
        return axios
        .get(URL, config)

    }

    fetchMatch(matchId)
    {
        const URL = `${API_MATCH_URL}/${API_MATCH}/${matchId}?api_key=${API_KEY}`;
        return axios
        .get(URL, config)
    }

    fetchMatchTFT(matchId)
    {
        const URL = `${API_MATCH_URL}/${API_TFT_MATCH}/${matchId}?api_key=${API_KEY}`;
        return axios
        .get(URL, config)
    }
}