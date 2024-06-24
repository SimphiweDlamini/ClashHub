import { Clan } from "../hooks/fetchClans";
import { Card, CardHeader, Heading } from "@chakra-ui/react";

interface Props {
  clan: Clan;
}

const ClanCard = ({ clan }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Heading fontSize="2xl">{clan.name}</Heading>
      </CardHeader>
    </Card>
  );
};

export default ClanCard;
