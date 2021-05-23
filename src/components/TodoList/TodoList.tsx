/** @jsxImportSource theme-ui */

import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Spinner, Flex, Container } from "theme-ui";

import {
  filteredTodoListState,
  todoListState,
  todoSearchState,
} from "../../RecoilState/RecoilState";
import {
  todoListHeading,
  todoListSpinner,
  todoListSpinnerContainer,
} from "../../styles/styles";
import { TodoItem } from "../TodoItem/TodoItem";
import { fetchTodos } from "../../api/todos";

export const TodoList: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const todoList = useRecoilValue(filteredTodoListState);
  const searchValue = useRecoilValue<string>(todoSearchState);
  const setTodoList = useSetRecoilState(todoListState);

  useEffect(() => {
    setIsLoading(true);

    const fetchTodosList = async () => {
      try {
        const data = await fetchTodos();
        setIsLoading(false);
        setTodoList(data);
      } catch (e) {
        setIsLoading(false);
      }
    };

    fetchTodosList();
  }, []);

  return !isLoading ? (
    <Container>
      {todoList.length ? (
        <ul>
          {todoList?.map((todoItem) => (
            <li key={todoItem.id}>
              <TodoItem item={todoItem} />
            </li>
          ))}
        </ul>
      ) : !searchValue ? (
        <h2 sx={todoListHeading}>All tasks are done! Great!</h2>
      ) : (
        <h2 sx={todoListHeading}>No items found!</h2>
      )}
    </Container>
  ) : (
    <Flex sx={todoListSpinnerContainer}>
      <Spinner sx={todoListSpinner} />
    </Flex>
  );
};
