import CreateTodos from "@/components/CreateTodos";
import TodoList from "@/components/TodoList";
import { getAllTodos } from "../../api";

export default async function Home() {
  const tasks = await getAllTodos();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreateTodos />
      <TodoList tasks={tasks} />
    </main>
  );
}
