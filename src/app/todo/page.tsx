"use client";
import CreateTodos from "@/components/CreateTodos";
import TodoList from "@/components/TodoList";
import { useEffect, useState } from "react";
import { getAllTodos } from "../../../api";

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedTasks: any = await getAllTodos();
        setTasks(fetchedTasks);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <>
      <CreateTodos />
      <TodoList tasks={tasks} />
    </>
  );
};

export default TodoPage;
