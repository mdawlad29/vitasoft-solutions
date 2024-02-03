"use client";
import { Button } from "antd";
import { useState } from "react";
import AddTodoModal from "../Modal/AddTodoModal";

const CreateTodos = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>

      {open && <AddTodoModal open={open} setOpen={setOpen} />}
    </div>
  );
};

export default CreateTodos;
