/** @jsxImportSource theme-ui */

import { useState } from "react";
import { useRecoilState } from "recoil";
import { Flex, Input, Text } from "theme-ui";
import { MdModeEdit, MdDelete, MdDone } from "react-icons/md";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

import {
  deleteTodo,
  updateIsCompleteTodo,
  updateTitleTodo,
} from "../../api/todos";
import {
  todoInput,
  todoName,
  todoRow,
  todoRowIcons,
} from "../../styles/styles";
import { todoListState } from "../../RecoilState/RecoilState";

export const TodoItem = ({ item }: any) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [title, setTitle] = useState<string>(item.title);
  const [isInEditMode, setIsInEditMode] = useState<boolean>(false);

  const index = todoList.findIndex((listItem) => listItem === item);

  const toggleItemCompletion = () => {
    updateIsCompleteTodo(item.id, item.completed);

    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      completed: !item.completed,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    deleteTodo(item.id);

    setTodoList(todoList.filter((todoItem) => todoItem.id !== item.id));
  };

  const enableItemEditMode = () => {
    setIsInEditMode(true);
  };

  const handleTitleChange = (value: string) => {
    if (value === "" || value === title) return;

    setTitle(value);
  };

  const updateTodoTitle = () => {
    updateTitleTodo(item.id, title);

    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      title: title,
    });

    setTodoList(newList);

    setIsInEditMode(false);
  };

  const replaceItemAtIndex = (
    arr: string[],
    index: number,
    newValue: object
  ) => [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];

  return (
    <Flex sx={item.completed ? todoRow(0.4) : todoRow(1)}>
      {!item.completed ? (
        <FaRegCircle sx={todoRowIcons} onClick={toggleItemCompletion} />
      ) : (
        <FaRegCheckCircle sx={todoRowIcons} onClick={toggleItemCompletion} />
      )}
      {isInEditMode ? (
        <Input
          sx={todoInput("#161a2b", "70%")}
          defaultValue={title}
          onChange={({ target: { value } }) => handleTitleChange(value)}
        />
      ) : (
        <Text sx={todoName}>{item.title}</Text>
      )}

      {isInEditMode ? (
        <MdDone sx={todoRowIcons} onClick={updateTodoTitle} />
      ) : (
        <MdModeEdit
          sx={todoRowIcons}
          onClick={item.completed ? null : enableItemEditMode}
        />
      )}
      <MdDelete sx={todoRowIcons} onClick={deleteItem} />
    </Flex>
  );
};
