/** @jsxImportSource theme-ui */

import { useRecoilValue } from "recoil";
import { Container, Divider } from "theme-ui";

import {
  charCountState,
  todoListStatsState,
} from "../../RecoilState/RecoilState";
import {
  todoListStatsContainer,
  todoListStatsDivider,
  todoListStatsElement,
} from "../../styles/styles";

export const TodoListStats: React.FC = () => {
  const { totalCompletedNum, totalUncompletedNum, totalNum } =
    useRecoilValue(todoListStatsState);
  const totalCharacterNum = useRecoilValue<number>(charCountState);

  return (
    <Container sx={todoListStatsContainer}>
      <li sx={todoListStatsElement}>Completed tasks: {totalCompletedNum}</li>
      <li sx={todoListStatsElement}>
        Uncompleted tasks: {totalUncompletedNum}
      </li>
      <Divider sx={todoListStatsDivider}></Divider>
      <li sx={todoListStatsElement}>
        Task character counter: {totalCharacterNum}
      </li>
    </Container>
  );
};
