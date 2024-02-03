import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";

const EditTodoModal = ({
  editOpenModal,
  setEditOpenModal,
}: {
  editOpenModal: boolean;
  setEditOpenModal: (editOpenModal: boolean) => boolean | void;
}) => {
  const router = useRouter();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setEditOpenModal(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setEditOpenModal(false);
  };
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  };

  return (
    <Modal
      title="Title"
      open={editOpenModal}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="font-bold text-3xl">Edit task</h2>
        <div className="modal-action">
          <input
            type="text"
            value={newTaskValue}
            onChange={(e) => setNewTaskValue(e.target.value)}
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

export default EditTodoModal;
