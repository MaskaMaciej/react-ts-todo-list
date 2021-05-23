/** @jsxImportSource theme-ui */

import { Flex } from "theme-ui";

import { TodoList } from "../../components/TodoList/TodoList";
import { TodoListStats } from "../../components/TodoListStats/TodoListStats";
import { TodoItemSearch } from "../../components/TodoItemSearch/TodoItemSearch";
import { TodoItemCreator } from "../../components/TodoItemCreator/TodoItemCreator";
import { todoAppContainer } from "../../styles/styles";

export const TodosScreen: React.FC = () => {
  return (
    <Flex sx={todoAppContainer}>
      <TodoListStats />
      <TodoItemCreator />
      <TodoItemSearch />
      <TodoList />
    </Flex>
  );
};
