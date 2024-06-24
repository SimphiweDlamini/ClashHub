import fetchData from "./fetchData";


export interface League {
 name:string
}

const fetchLeague = ()=>{fetchData<League>('/leagues')}
    


export default fetchLeague;