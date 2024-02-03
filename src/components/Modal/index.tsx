import { Modal } from "antd";
import React from "react";

const ModalLayout = ({
  open,
  close,
  children,
}: {
  open?: boolean;
  close?: any;
  children: React.ReactNode;
}) => {
  return (
    <Modal open={open} onCancel={close} centered={true} footer={null}>
      {children}
    </Modal>
  );
};

export default ModalLayout;
