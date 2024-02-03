import { Button, Typography } from "antd";
import { useRouter } from "next/navigation";
import ModalLayout from "..";
import { deleteTodo } from "../../../../api";

const DeleteModal = ({
  open,
  setOpen,
  taskId,
}: {
  open: boolean;
  setOpen: any;
  taskId: string;
}) => {
  const router = useRouter();
  const handleDeleteTodo = async () => {
    await deleteTodo(taskId);
    setOpen(false);
    router.refresh();
  };

  return (
    <ModalLayout open={open} close={() => setOpen(false)}>
      <div>
        <Typography.Title className="!mt-8 !mb-12 !text-3xl">
          Are you sure delete this item?
        </Typography.Title>

        <div className="flex justify-end items-center mb-4 gap-2">
          <Button
            onClick={() => setOpen(false)}
            type="primary"
            htmlType="submit"
            className="!bg-red-400 text-md h-[35px] w-[100px]"
          >
            No
          </Button>
          <Button
            onClick={handleDeleteTodo}
            type="primary"
            htmlType="submit"
            className="!bg-cyan-400 text-md h-[35px] w-[100px]"
          >
            Yes
          </Button>
        </div>
      </div>
    </ModalLayout>
  );
};

export default DeleteModal;
