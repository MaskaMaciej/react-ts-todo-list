/** @jsxImportSource theme-ui */

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Box, Button, Input } from "theme-ui";

import {
  filteredTodoListState,
  todoListState,
  todoNameState,
  todoSearchState,
} from "../../RecoilState/RecoilState";
import {
  addTodoButton,
  todoInput,
  todoItemCreatorForm,
} from "../../styles/styles";
import { addTodo } from "../../api/todos";

let userId = 1;

export const TodoItemCreator: React.FC = () => {
  const [todoNameValue, setTodoNameValue] =
    useRecoilState<string>(todoNameState);
  const setTodoList = useSetRecoilState(todoListState);
  const todoList = useRecoilValue(filteredTodoListState);
  const [todoSearchValue, setTodoSearchValue] =
    useRecoilState<string>(todoSearchState);

  // workaround solution to satisfy gorest api with post/put requests
  let user_id = todoList[0]?.user_id;

  const addItem = async (e: any) => {
    e.preventDefault();

    if (!todoNameValue || /^\s*$/.test(todoNameValue)) return;

    try {
      const data = await addTodo({
        user_id: user_id,
        title: todoNameValue,
        completed: false,
      });

      setTodoList((oldTodoList) => [data, ...oldTodoList]);
    } catch (e) {
      setTodoList((oldTodoList) => [
        {
          id: userId,
          user_id: userId,
          title: todoNameValue,
          completed: false,
        },
        ...oldTodoList,
      ]);

      userId++;
    }

    setTodoSearchValue("");
    setTodoNameValue("");
  };

  const onNameChange = ({ target: { value } }: any) => {
    setTodoSearchValue("");
    setTodoNameValue(value);
  };

  return (
    <Box as="form" sx={todoItemCreatorForm}>
      <Input
        sx={todoInput("transparent", "300px")}
        placeholder="Add a todo"
        type="text"
        value={todoNameValue}
        onChange={onNameChange}
      />
      <Button
        sx={addTodoButton("0 4px 4px 0", "150px")}
        type="submit"
        className="todo-button"
        onClick={addItem}
      >
        Add todo
      </Button>
    </Box>
  );
};
