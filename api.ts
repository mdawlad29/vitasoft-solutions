import { ITask } from "./types/tasks";

const baseUrl = "http://localhost:3001";

export const getAllTodos = async (): Promise<ITask[]> => {
  try {
    const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch todos. Status: ${res.status}`);
    }

    const todos = await res.json();
    return todos;
  } catch (error) {
    console.error("Get all todos error:", error);
    throw error;
  }
};

export const getTodoDetails = async (id: number | string): Promise<ITask> => {
  try {
    const res = await fetch(`${baseUrl}/tasks/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Failed to fetch todo details. Status: ${res.status}`);
    }

    const todoDetails = await res.json();
    return todoDetails;
  } catch (error) {
    console.error(`Get todo details for id ${id} error:`, error);
    throw error;
  }
};

export const addTodo = async (todo: ITask) => {
  try {
    const res = await fetch(`${baseUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const newTodo = await res.json();
    return newTodo;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  try {
    const res = await fetch(`${baseUrl}/tasks/${todo?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (!res.ok) {
      throw new Error(`Failed to update todo. Status: ${res.status}`);
    }

    const updatedTodo = await res.json();
    return updatedTodo;
  } catch (error) {
    console.error("Edit todo error:", error);
    throw error;
  }
};

export const deleteTodo = async (id: string): Promise<void> => {
  try {
    const res = await fetch(`${baseUrl}/tasks/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Failed to delete todo. Status: ${res.status}`);
    }
  } catch (error) {
    console.error("Delete todo error:", error);
    throw error;
  }
};
