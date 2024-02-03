import { Button, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import ModalLayout from "..";
import { editTodo } from "../../../../api";

type FieldType = {
  title?: string;
  desc?: string;
};

const EditTodoModal = ({
  editOpenModal,
  setEditOpenModal,
}: {
  editOpenModal: any;
  setEditOpenModal: (editOpenModal: boolean) => boolean | void;
}) => {
  const router = useRouter();
  console.log(editOpenModal);
  const handleCancel = () => {
    setEditOpenModal(false);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    value: any
  ) => {
    await editTodo({
      id: editOpenModal?.id || "",
      title: value?.title,
      desc: value?.desc,
    });
    setEditOpenModal(false);
    router.refresh();
  };

  return (
    <ModalLayout open={editOpenModal} close={handleCancel}>
      <div>
        <Typography.Title className="font-semibold text-gray-800 mt-8 mb-3 !text-2xl text-center">
          Update Todo
        </Typography.Title>

        <Form
          name="basic"
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{
            title: editOpenModal?.title,
            desc: editOpenModal?.desc,
          }}
        >
          <Form.Item<FieldType> label="Title" name="title">
            <Input className="h-[44px] !bg-[#eeebebcc]" />
          </Form.Item>

          <Form.Item<FieldType> label="Descriptions" name="desc">
            <Input.TextArea className="h-[44px] !bg-[#eeebebcc]" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="!bg-cyan-400 w-full mb-4 text-xl h-[40px]"
            >
              Updated
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ModalLayout>
  );
};

export default EditTodoModal;
