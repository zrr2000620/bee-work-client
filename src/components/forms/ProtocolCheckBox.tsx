import { Checkbox, Modal } from 'antd';
import { useState } from 'react';

interface ProtocolCheckBoxProps {
  children?: React.ReactNode;
}

export const ProtocolCheckBox = (props: ProtocolCheckBoxProps) => {
  const { children } = props;
  const [confirm] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Checkbox
        checked={confirm}
        onChange={() => {
          setOpen(true);
        }}
      >
        {children}
      </Checkbox>
      <Modal
        footer={null}
        title=""
        open={open}
        onCancel={() => setOpen(false)}
      ></Modal>
    </>
  );
};

export default ProtocolCheckBox;
