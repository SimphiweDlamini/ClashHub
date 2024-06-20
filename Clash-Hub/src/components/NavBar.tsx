import { HStack, Image } from "@chakra-ui/react";
import ColourModeSwitch from "./ColourModeSwitch";
import MyTabs from "./MyTabs";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between">
        <Image
          src="/barb.png"
          objectFit="cover"
          borderRadius="20px"
          borderColor="aqua"
          boxSize="60px"
          alt="Barbarian"
        />
        <MyTabs />
        <ColourModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
