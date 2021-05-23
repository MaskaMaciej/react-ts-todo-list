/** @jsxImportSource theme-ui */

import { useRecoilState } from "recoil";
import { Flex, Input } from "theme-ui";

import { todoSearchState } from "../../RecoilState/RecoilState";
import { todoInput, todoItemSearchContainer } from "../../styles/styles";
import { TodoListFilters } from "../TodoListFilters/TodoListFilters";

export const TodoItemSearch: React.FC = () => {
  const [todoSearchValue, setTodoSearchValue] =
    useRecoilState<string>(todoSearchState);

  const onSearchChange = ({ target: { value } }: any) => {
    setTodoSearchValue(value);
  };

  return (
    <>
      <Flex sx={todoItemSearchContainer}>
        <Input
          sx={todoInput("transparent", "300px")}
          placeholder="Search a todo"
          type="text"
          value={todoSearchValue}
          onChange={onSearchChange}
        />
        <TodoListFilters />
      </Flex>
    </>
  );
};
