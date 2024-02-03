"use client";
import { Button, Typography } from "antd";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getTodoDetails } from "../../../../api";
import { ITask } from "../../../../types/tasks";

const TodoDetails = () => {
  const params = useParams();
  const id: any = params.id;
  const [todoDetails, setTodoDetails] = useState<ITask | null>(null);

  useEffect(() => {
    const fetchTodoDetails = async () => {
      try {
        const details = await getTodoDetails(id);
        setTodoDetails(details);
      } catch (error) {
        console.error("Error fetching todo details:", error);
      }
    };

    if (id) {
      fetchTodoDetails();
    }
  }, [id]);

  if (!todoDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className="h-screen w-full container md:mx-auto mx-5 rounded-md p-8 border shadow-md my-12">
      <div className="mb-10">
        <Link href={"/todo"}>
          <Button
            type="primary"
            className="!bg-red-400 text-md h-[25px] w-[100px] flex items-center gap-2"
          >
            <FaArrowLeftLong /> Back
          </Button>
        </Link>
      </div>

      <Typography.Title className="!text-3xl text-center !mb-5 !text-blue-600 capitalize">
        {todoDetails?.title}
      </Typography.Title>

      <Typography.Text className="text-xl text-gray-700">
        {todoDetails?.desc}
      </Typography.Text>
    </div>
  );
};

export default TodoDetails;
