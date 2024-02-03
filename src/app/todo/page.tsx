import CreateTodos from "@/components/CreateTodos";
import TodoList from "@/components/TodoList";
import { getAllTodos } from "../../../api";

const TodoPage = async () => {
  const tasks = await getAllTodos();
  return (
    <>
      <CreateTodos />
      <TodoList tasks={tasks} />
    </>
  );
};

export default TodoPage;
