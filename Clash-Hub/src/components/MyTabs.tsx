import { Tab, TabList, Tabs } from "@chakra-ui/react";

const MyTabs = () => {
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
      </Tabs>
    </div>
  );
};

export default MyTabs;
