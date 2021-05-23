import { env } from "../env";

const apiURL = "https://gorest.co.in/public-api/todos/";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${env.authorizationToken}`,
};

enum FetchMethod {
  "POST",
  "DELETE",
  "PATCH",
}

export const fetchTodos = async () => {
  try {
    const response: Response = await fetch(apiURL);

    return (await response.json()).data;
  } catch (e) {
    throw e;
  }
};

export const addTodo = async (data: any) => {
  try {
    const response: Response = await fetch(apiURL, {
      method: FetchMethod.POST.toString(),
      headers: headers,
      body: JSON.stringify(data),
    });

    return (await response.json()).data;
  } catch (e) {
    throw e;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    await fetch(`${apiURL}${id}`, {
      method: FetchMethod.DELETE.toString(),
      headers: headers,
    });
  } catch (e) {
    throw e;
  }
};

export const updateTitleTodo = async (id: string, title: string) => {
  try {
    await fetch(`${apiURL}${id}`, {
      method: FetchMethod.PATCH.toString(),
      headers: headers,
      body: JSON.stringify({ title: title }),
    });
  } catch (e) {
    throw e;
  }
};

export const updateIsCompleteTodo = async (id: string, completed: boolean) => {
  try {
    await fetch(`${apiURL}${id}`, {
      method: FetchMethod.PATCH.toString(),
      headers: headers,
      body: JSON.stringify({ completed: !completed }),
    });
  } catch (e) {
    throw e;
  }
};
