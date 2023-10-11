import { Card, CardBody, CardHeader, Flex, Heading } from "@chakra-ui/react";

export const Dashboard = () => {
  return (
    <Flex
      w={"100vw"}
      h={"calc(100vh - 70px)"}
      direction={"column"}
      justify={"center"}
      align={"center"}
    >
      <Card
        w={"50vw"}
        spacing="8"
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <CardHeader>
          <Heading size="md">Star wars</Heading>
        </CardHeader>
        <CardBody
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          Star Wars is an American epic space opera media franchise created by
          George Lucas, which began with the eponymous 1977 film and quickly
          became a worldwide pop culture phenomenon. The franchise has been
          expanded into various films and other media, including television
          series, video games, novels, comic books, theme park attractions, and
          themed areas, comprising an all-encompassing fictional universe. Star
          Wars is one of the highest-grossing media franchises of all time.
        </CardBody>
      </Card>
    </Flex>
  );
};
