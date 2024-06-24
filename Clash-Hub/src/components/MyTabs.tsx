import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
// import ClanCard from "./ClanCard";
// import fetchClans from "../hooks/fetchClans";
// import LeagueCard from "./LeagueCard";
// import fetchLeague from "../hooks/fetchLeague";

const MyTabs = () => {
  // const { clanData, error } = fetchClans();
  // const { leagueData } = fetchLeague();

  return (
    <div>
      <Tabs size="lg" variant="soft-rounded" colorScheme="yellow">
        <TabList>
          <Tab>Main</Tab>
          <Tab>Clans</Tab>
          <Tab>Players</Tab>
          <Tab>Locations</Tab>
          <Tab>Leagues</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {/* //Main */}
            <Heading fontSize="2xl">Test Text</Heading>
          </TabPanel>
          <TabPanel>{/* <ClanCard clan={data[0]} /> */}</TabPanel>
          <TabPanel>{/* Players */}</TabPanel>
          <TabPanel>{/* Locations */}</TabPanel>
          <TabPanel>{/* <LeagueCard league={ leagueData[1]} /> */}</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default MyTabs;
