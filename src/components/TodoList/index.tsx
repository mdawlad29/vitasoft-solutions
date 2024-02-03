"use client";
import { Typography } from "antd";
import Link from "next/link";
import { FC, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { ITask } from "../../../types/tasks";
import DeleteModal from "../Modal/DeleteModal";
import EditTodoModal from "../Modal/EditTodo";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: FC<TodoListProps> = ({ tasks }) => {
  const [editOpenModal, setEditOpenModal] = useState<boolean | any>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<any>(false);

  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-6 gap-3 container mx-auto mb-12">
        {tasks?.map((task) => (
          <div
            key={task?.id}
            className=" bg-white rounded-md shadow-md p-4 relative"
          >
            {/*<----------------- Action Button --------------->*/}
            <div className="flex justify-end items-center gap-2 mb-4">
              <FaRegEdit
                onClick={() => setEditOpenModal(task)}
                className="cursor-pointer text-xl text-blue-400 hover:text-blue-600 duration-200 ease-in-out"
              />
              <MdDelete
                onClick={() => setOpenDeleteModal(task?.id)}
                className="cursor-pointer text-2xl text-red-400 hover:text-red-600 duration-200 ease-in-out"
              />
            </div>

            <Link href={`todo/${task?.id}`}>
              <Typography.Title className="font-semibold !text-blue-600 mb-3 !text-xl capitalize">
                {task?.title}
              </Typography.Title>
            </Link>

            <Typography.Text className="text-gray-600 text-lg mb-8 block">
              {task?.desc && task.desc.length > 60
                ? `${task.desc.substring(0, 60)}...`
                : task.desc}
            </Typography.Text>

            <Link
              href={`todo/${task?.id}`}
              className="absolute bottom-4 right-4 flex justify-end gap-2 items-center mt-6 group cursor-pointer duration-300 ease-in-out"
            >
              <Typography.Text className="text-md text-cyan-500 group-hover:text-cyan-600">
                Details
              </Typography.Text>

              <FaArrowRightLong className="text-md text-cyan-500 group-hover:text-cyan-600" />
            </Link>
          </div>
        ))}
      </div>

      {/*<----------------- Edit & Delete Modal --------------->*/}
      {editOpenModal && (
        <EditTodoModal
          editOpenModal={editOpenModal}
          setEditOpenModal={setEditOpenModal}
        />
      )}

      {openDeleteModal && (
        <DeleteModal
          open={openDeleteModal}
          setOpen={setOpenDeleteModal}
          taskId={openDeleteModal}
        />
      )}
    </>
  );
};

export default TodoList;
