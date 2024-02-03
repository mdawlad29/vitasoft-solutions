import dynamic from "next/dynamic";
const TodoDetails = dynamic(() => import("@/components/TodoList/TodoDetails"));

const SingleTotoPage = () => {
  return (
    <>
      <TodoDetails />
    </>
  );
};

export default SingleTotoPage;
