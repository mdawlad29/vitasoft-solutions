import dynamic from "next/dynamic";
const TodoPage = dynamic(() => import("./todo/page"));

export default async function Home() {
  return (
    <div className="my-10 container md:mx-auto mx-5">
      <TodoPage />
    </div>
  );
}
