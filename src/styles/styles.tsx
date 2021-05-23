export const todoAppContainer = (): any => ({
  flexDirection: "column",
  width: "600px",
  margin: "28px auto",
});

export const todoRow = (opacity: number) => ({
  justifyContent: "space-between",
  alignItems: "center",
  width: "90%",
  margin: "4px auto 20px",
  padding: "10px 16px",
  background: `linear-gradient(
    270deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
    );`,
  color: "#fff",
  borderRadius: "5px",
  lineHeight: "20px",
  opacity: opacity,
});

export const todoName = (): any => ({
  width: "70%",
  padding: "6px 0",
  color: "white",
  userSelect: "none",
});

export const todoInput = (background: string, width: string) => ({
  width: width,
  padding: "14px 32px 14px 16px",
  border: `2px solid rgba(255, 84, 17, 1) `,
  borderRadius: "4px 0 0 4px",
  outline: "none",
  background: background,
  color: "#fff",
  fontSize: "16px",
  "&::placeholder": { color: "white", fontSize: "20px" },
});

export const addTodoButton = (
  borderRadius: string,
  minWidth?: string
): any => ({
  minWidth: minWidth,
  height: "50px",
  padding: "16px",
  border: "none",
  borderRadius: borderRadius,
  cursor: "pointer",
  outline: "none",
  background: `linear-gradient(
    270deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
    );`,
  color: "white",
  fontSize: "16px",
});

export const todoRowIcons = () => ({
  fontSize: "30px",
  color: "white",
  cursor: "pointer",
});

export const todoListHeading = (): any => ({
  maxWidth: "540px",
  margin: "5px auto",
  padding: "10px",
  textAlign: "center",
  backgroundColor: "rgba(255, 84, 17, 1)",
  borderRadius: "5px",
});

export const todoItemCreatorForm = (): any => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px auto 28px",
});

export const todoItemSearchContainer = (): any => ({
  justifyContent: "center",
  alignItems: "center",
  margin: "10px auto 20px",
});

export const todoListSpinnerContainer = () => ({
  justifyContent: "center",
  alignItems: "center",
});

export const todoListSpinner = () => ({
  margin: "10px",
  color: "rgba(255, 84, 17, 1)",
});

export const todoListStatsContainer = (): any => ({
  fontSize: "20px",
  textAlign: "center",
});

export const todoListStatsElement = (): any => ({
  color: "white",
});

export const todoListStatsDivider = (): any => ({
  width: "50%",
  margin: "2px auto",
  color: "rgba(255, 84, 17, 1)",
});

export const homeScreenContainer = (): any => ({
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const homeScreenLink = (): any => ({ marginTop: "20px" });
