/** @jsxImportSource theme-ui */

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Flex, Text } from "theme-ui";

import "./App.css";
import { todoAppContainer } from "./styles/styles";
import { HomeScreen } from "./pages/HomeScreen/HomeScreen";
import { TodosScreen } from "./pages/TodosScreen/TodosScreen";

export const App: React.FC = () => {
  return (
    <Flex sx={todoAppContainer}>
      <Router>
        <Switch>
          <Route path="/todos" exact component={TodosScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </Router>
    </Flex>
  );
};
