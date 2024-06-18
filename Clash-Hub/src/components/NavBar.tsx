import { HStack, Image } from "@chakra-ui/react";
import ColourModeSwitch from "./ColourModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image
          src="/barb.png"
          objectFit="cover"
          borderRadius="20px"
          boxSize="75px"
          alt="Barbarian"
        />
        <ColourModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
