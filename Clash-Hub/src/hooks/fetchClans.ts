import fetchData from "./fetchData";


export interface Clan {
 name:string
}

const fetchClans = ()=>{fetchData<Clan>('/clans?name=Bewilderment')}
    


export default fetchClans;
    
