import { Button } from "antd";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <p className="text-3xl text-red-400 font-semibold mb-10">
        Page not found
      </p>

      <Link href={"/"}>
        <Button
          type="primary"
          className="!bg-red-400 text-md h-[25px] w-[100px] flex items-center gap-2"
        >
          <FaArrowLeftLong /> Back
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
