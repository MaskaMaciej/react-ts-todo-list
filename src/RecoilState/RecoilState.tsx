import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoNameState = atom({
  key: "todoNameState",
  default: "",
});

export const todoDescriptionState = atom({
  key: "todoDescriptionState",
  default: "",
});

export const todoSearchState = atom({
  key: "todoSearchState",
  default: "",
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "All",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter: string = get(todoListFilterState);
    const search: string = get(todoSearchState);
    const list = get(todoListState);

    switch (filter) {
      case "Uncompleted":
        return list?.filter(
          (item) =>
            !item.completed &&
            item?.title?.toLowerCase().indexOf(search.toLowerCase()) > -1
        );
      default:
        return list?.filter(
          (item) =>
            item?.title?.toLowerCase().indexOf(search.toLowerCase()) > -1
        );
    }
  },
});

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum: number = todoList.length;
    const totalCompletedNum: number = todoList?.filter(
      (item) => item.completed
    ).length;
    const totalUncompletedNum: number = totalNum - totalCompletedNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});

export const charCountState = selector({
  key: "charCountState",
  get: ({ get }): number => {
    const name: string = get(todoNameState);

    return name.length;
  },
});
