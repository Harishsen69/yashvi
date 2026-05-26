// import React from 'react';
// import { Input, QRCode, Space } from 'antd';
// const App = () => {
//   const [text, setText] = React.useState('https://www.yashvitech.com/');
//   return (
//     <Space vertical align="center">
//       <QRCode value={text || '-'} />
//       <Input placeholder="-" maxLength={60} value={text} onChange={e => setText(e.target.value)} />
//     </Space>
//   );
// };
// export default App;

import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Register
      </Button>
      <Modal
        title="CEO"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <p>i am harish sen from yashvitech IT Solution</p>
        
      </Modal>
    </>
  );
};
export default App;