import { Button, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import { FormEventHandler } from "react";
import { isUuid } from "uuidv4";
import ModalLayout from "..";
import { addTodo } from "../../../../api";

type FieldType = {
  title?: string;
  desc?: string;
};

const AddTodoModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => boolean | void;
}) => {
  const router = useRouter();

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    value: any
  ) => {
    await addTodo({
      id: isUuid,
      title: value?.title,
      desc: value?.desc,
    });
    setOpen(false);
    router.refresh();
  };

  return (
    <ModalLayout open={open} close={() => setOpen(false)}>
      <div>
        <Typography.Title className="font-semibold text-gray-800 mt-8 mb-3 !text-2xl text-center">
          Create Todo
        </Typography.Title>

        <Form
          name="basic"
          onFinish={handleSubmit}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input className="h-[44px] !bg-[#eeebebcc]" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Descriptions"
            name="desc"
            rules={[
              { required: true, message: "Please input your description!" },
            ]}
          >
            <Input.TextArea className="h-[44px] !bg-[#eeebebcc]" rows={4} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="!bg-cyan-400 w-full mb-4 text-xl h-[40px]"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </ModalLayout>
  );
};

export default AddTodoModal;
