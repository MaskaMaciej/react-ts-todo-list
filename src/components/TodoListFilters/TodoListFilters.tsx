/** @jsxImportSource theme-ui */

import { useRecoilState } from "recoil";
import { Button } from "theme-ui";

import { todoListFilterState } from "../../RecoilState/RecoilState";
import { addTodoButton } from "../../styles/styles";

export const TodoListFilters: React.FC = () => {
  const [filter, setFilter] = useRecoilState<string>(todoListFilterState);

  const updateFilter = (e: any) => {
    e.preventDefault();

    filter === "All" ? setFilter("Uncompleted") : setFilter("All");
  };

  return (
    <>
      <Button
        sx={addTodoButton("4px", "150px")}
        onClick={(e) => updateFilter(e)}
      >
        {filter === "All" ? "Hide completed" : "Show all"}
      </Button>
    </>
  );
};
