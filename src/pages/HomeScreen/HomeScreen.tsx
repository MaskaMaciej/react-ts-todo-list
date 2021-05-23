/** @jsxImportSource theme-ui */

import { Link } from "react-router-dom";
import { Button, Flex, Heading } from "theme-ui";

import {
  addTodoButton,
  homeScreenContainer,
  homeScreenLink,
} from "../../styles/styles";

export const HomeScreen: React.FC = () => {
  return (
    <Flex sx={homeScreenContainer}>
      <Heading>Welcome in Todo App. To start, click the button below!</Heading>
      <Link sx={homeScreenLink} to="/todos">
        <Button sx={addTodoButton("5px", "150px")}>Start app</Button>
      </Link>
    </Flex>
  );
};
