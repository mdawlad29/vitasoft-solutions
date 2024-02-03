"use client";
import { FC, useState } from "react";
import { deleteTodo } from "../../../api";
import { ITask } from "../../../types/tasks";
import EditTodoModal from "../Modal/EditTodo";

interface TodoListProps {
  tasks: ITask[];
}

const TodoList: FC<TodoListProps> = ({ tasks }) => {
  const [editOpenModal, setEditOpenModal] = useState<boolean | any>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {tasks?.map((task) => (
          <div
            key={task?.id}
            className="max-w-md w-full mx-auto bg-white rounded-md shadow-md overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {task?.title}
              </h2>
              <p className="text-gray-600 mt-2">{task?.desc}</p>
            </div>
            <div className="p-4 bg-gray-100">
              <p className="text-sm text-gray-500">
                Published on: January 1, 2024
              </p>
            </div>
          </div>
        ))}
      </div>

      {editOpenModal && (
        <EditTodoModal
          editOpenModal={editOpenModal}
          setEditOpenModal={setEditOpenModal}
        />
      )}
    </>
  );
};

export default TodoList;
