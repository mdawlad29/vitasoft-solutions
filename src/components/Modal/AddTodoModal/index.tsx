import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { isUuid } from "uuidv4";
import { addTodo } from "../../../../api";

const AddTodoModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => boolean | void;
}) => {
  const router = useRouter();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const [newTaskValue, setNewTaskValue] = useState<any>({
    title: "",
    desc: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await addTodo({
      id: isUuid,
      title: newTaskValue?.title,
      desc: newTaskValue?.desc,
    });
    setOpen(false);
    router.refresh();
  };

  return (
    <Modal
      title="Title"
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold text-3xl">Add new task</h2>
        <div className="modal-action">
          <input
            type="text"
            value={newTaskValue?.title}
            onChange={(e) =>
              setNewTaskValue({ ...newTaskValue, title: e.target.value })
            }
            className="border-[red] border"
          />
          <input
            type="text"
            value={newTaskValue?.desc}
            onChange={(e) =>
              setNewTaskValue({ ...newTaskValue, desc: e.target.value })
            }
            className="border-[red] border"
          />
          <button type="submit" className="bg-[red] px-5 py-1">
            submit
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTodoModal;
