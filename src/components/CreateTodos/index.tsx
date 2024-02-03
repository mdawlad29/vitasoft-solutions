"use client";
import { Button } from "antd";
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import AddTodoModal from "../Modal/AddTodoModal";

const CreateTodos = () => {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <div className="flex justify-end my-8 container md:mx-auto mx-5">
      <Button
        type="primary"
        onClick={() => setOpenAddModal(true)}
        className="!bg-blue-400 w-40 flex items-center justify-center gap-2 text-lg h-[48px]"
      >
        <MdAdd className="text-xl" />
        Add Todo
      </Button>

      {openAddModal && (
        <AddTodoModal open={openAddModal} setOpen={setOpenAddModal} />
      )}
    </div>
  );
};

export default CreateTodos;
