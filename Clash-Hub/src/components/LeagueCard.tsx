import { Card, CardHeader, Heading } from "@chakra-ui/react";
import { League } from "../hooks/fetchLeague";

interface Props {
  league: League;
}

const LeagueCard = ({ league }: Props) => {
  return (
    <Card>
      <CardHeader>
        <Heading fontSize="2xl">{league.name}</Heading>
      </CardHeader>
    </Card>
  );
};

export default LeagueCard;
