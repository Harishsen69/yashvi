// import React, { useState } from "react";
// import { Table, Button, Modal, Form, Input, Space, message } from "antd";

// const AntdFormEditTable = () => {
//   // ---------------- DATA ----------------
//   const [data, setData] = useState([
//     {
//       key: "1",
//       name: "Vikas Yadu",
//       email: "vikas@gmail.com",
//       city: "Raipur",
//     },
//     {
//       key: "2",
//       name: "Amit Sharma",
//       email: "amit@gmail.com",
//       city: "Bhopal",
//     },
//   ]);

//   // ---------------- STATE ----------------
//   const [open, setOpen] = useState(false);
//   const [form] = Form.useForm();
//   const [editingKey, setEditingKey] = useState(null);

//   // ---------------- EDIT CLICK ----------------
//   const handleEdit = (record) => {
//     setEditingKey(record.key);

//     // 👇 IMPORTANT (best feature of antd form)
//     form.setFieldsValue({
//       name: record.name,
//       email: record.email,
//       city: record.city,
//     });

//     setOpen(true);
//   };

//   // ---------------- SAVE ----------------
//   const handleSave = () => {
//     form
//       .validateFields()
//       .then((values) => {
//         const updatedData = data.map((item) =>
//           item.key === editingKey ? { ...item, ...values } : item
//         );

//         setData(updatedData);
//         setOpen(false);
//         message.success("Updated successfully");
//       })
//       .catch(() => {
//         message.error("Please fill all fields");
//       });
//   };

//   // ---------------- TABLE ----------------
//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//     },
//     {
//       title: "Email",
//       dataIndex: "email",
//     },
//     {
//       title: "City",
//       dataIndex: "city",
//     },
//     {
//       title: "Action",
//       render: (_, record) => (
//         <Space>
//           <Button type="primary" onClick={() => handleEdit(record)}>
//             Edit
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div style={{ padding: 20 }}>

//       {/* ================= TABLE ================= */}
//       <Table
//         dataSource={data}
//         columns={columns}
//         bordered
//         pagination={false}
//       />

//       {/* ================= MODAL FORM ================= */}
//       <Modal
//         title="Edit User"
//         open={open}
//         onCancel={() => setOpen(false)}
//         onOk={handleSave}
//         okText="Save"
//       >

//         <Form
//           form={form}
//           layout="vertical"
//         >

//           <Form.Item
//             label="Name"
//             name="name"
//             rules={[{ required: true, message: "Name is required" }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             label="Email"
//             name="email"
//             rules={[{ required: true, message: "Email is required" }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             label="City"
//             name="city"
//             rules={[{ required: true, message: "City is required" }]}
//           >
//             <Input />
//           </Form.Item>

//         </Form>

//       </Modal>

//     </div>
//   );
// };

// export default AntdFormEditTable;


// import React, { useEffect, useState } from "react";
// import { Table, Button, Modal, Form, Input, message, Popconfirm } from "antd";

// // 👉 Import your API functions
// import { getData, createUser, updateUser, deleteUser } from "../api";

// const CrudPage = () => {
//   const [data, setData] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingId, setEditingId] = useState(null);

//   const [form] = Form.useForm();

//   // ✅ LOAD DATA
//   const loadData = async () => {
//     const res = await getData();
//     setData(res);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   // ✅ OPEN MODAL
//   const handleOpen = (record = null) => {
//     setIsModalOpen(true);

//     if (record) {
//       setEditingId(record.id);
//       form.setFieldsValue(record);
//     } else {
//       setEditingId(null);
//       form.resetFields();
//     }
//   };

//   // ✅ SUBMIT (CREATE + UPDATE)
//   const onFinish = async (values) => {
//     try {
//       if (editingId) {
//         await updateUser(editingId, values);
//         message.success("Updated Successfully");
//       } else {
//         await createUser(values);
//         message.success("Created Successfully");
//       }

//       setIsModalOpen(false);
//       loadData();
//     } catch {
//       message.error("Error");
//     }
//   };

//   // ✅ DELETE
//   const handleDelete = async (id) => {
//     await deleteUser(id);
//     message.success("Deleted");
//     loadData();
//   };

//   const columns = [
//     { title: "Username", dataIndex: "username" },
//     { title: "Email", dataIndex: "email" },
//     { title: "City", dataIndex: "city" },
//     {
//       title: "Action",
//       render: (_, record) => (
//         <>
//           <Button
//             onClick={() => handleOpen(record)}
//             style={{ marginRight: 8 }}
//           >
//             Edit
//           </Button>

//           <Popconfirm
//             title="Are you sure?"
//             onConfirm={() => handleDelete(record.id)}
//           >
//             <Button danger>Delete</Button>
//           </Popconfirm>
//         </>
//       ),
//     },
//   ];

//   return (
//     <div style={{ padding: 20 }}>

//       {/* ADD BUTTON */}
//       <Button type="primary" onClick={() => handleOpen()}>
//         Add User
//       </Button>

//       {/* TABLE */}
//       <Table
//         columns={columns}
//         dataSource={data}
//         rowKey="id"
//         style={{ marginTop: 20 }}
//       />

//       {/* MODAL */}
//       <Modal
//         title={editingId ? "Edit User" : "Add User"}
//         open={isModalOpen}
//         onCancel={() => setIsModalOpen(false)}
//         footer={null}
//       >
//         <Form form={form} layout="vertical" onFinish={onFinish}>

//           <Form.Item
//             name="username"
//             label="Username"
//             rules={[{ required: true }]}
//           >
//             <Input />
//           </Form.Item>

//           <Form.Item
//             name="email"
//             label="Email"
//             rules={[{ required: true }]}
//           >
//             <Input />
//           </Form.Item>

//           {/* 👇 Only show in create */}
//           {!editingId && (
//             <Form.Item
//               name="password"
//               label="Password"
//               rules={[{ required: true }]}
//             >
//               <Input.Password />
//             </Form.Item>
//           )}

//           <Form.Item name="city" label="City">
//             <Input />
//           </Form.Item>

//           <Button type="primary" htmlType="submit" block>
//             {editingId ? "Update" : "Create"}
//           </Button>

//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default CrudPage;




// import React, { useEffect, useState } from 'react'
// import { Table, Input, Button, Modal, Form } from 'antd'
// import { getData, createUser,updateUser } from '../api'
// function About() {
//   const [data, setData] = useState([])
//   const [open, setOpen] = useState(null)
//   const [editid, setEditID] = useState(null)
//   const [form] = Form.useForm()
//   useEffect(() => {
//     getDataCall()
//   }, [])

//   const getDataCall = async () => {
//     const res = await getData()
//     setData(res)
//     console.log(res)
//   }
//   const handleEditCall = async (record) => {
//     setEditID(record.id)
//     setOpen(true)
//     form.setFieldsValue(record)
//   }
//   const handleCancel = async () => {
//     setOpen(false)
//     form.resetFields()
//   }
//   const handleFinish = async (values) => {
//     if(!editid){
//     const res = await createUser(values)
//     }
//     else{
//        const res = await updateUser(editid,values)
//     }
//   }
//   const col = [
//     { key: 1, title: 'Name', dataIndex: 'username' },
//     { key: 2, title: 'Email', dataIndex: 'email' },
//     { key: 3, title: 'Role', dataIndex: 'role' },
//     {
//       key: 4, title: 'Action', render: (_, record) => (
//         <Button onClick={() => handleEditCall(record)}>
//           Edit
//         </Button>
//       )
//     }
//   ]
//   return (
//     <div>
//       <Modal open={open} onCancel={handleCancel}>
//         <Form form={form} onFinish={handleFinish}>
//           <Form.Item lable="Name" name='username'>
//             <Input />
//           </Form.Item>
//           <Form.Item lable="Email" name='email'>
//             <Input />
//           </Form.Item>
//           <Form.Item lable="Role" name='role'>
//             <Input />
//           </Form.Item>
//           <Form.Item lable="Password" name='password'>
//             <Input />
//           </Form.Item>
//           <Button htmlType='submit'>submit</Button>
//         </Form>
//       </Modal>
//       <Table columns={col} dataSource={data} />
//     </div>
//   )
// }

// export default About


import React from 'react';
import { Form, Input, Button } from 'antd';

function About() {
  const handlSubmit=(values)=>{
          console.log(values)
  }
  return (
    <div>
      <Form onFinish={handlSubmit}>
        <Form.Item label='Name' name='name'>
          <Input />
        </Form.Item>
        <Form.Item label='Email' name='email'>
          <Input />
        </Form.Item>
        <Form.Item label='Address' name='address'>
          <Input />
        </Form.Item>
        <Form.Item label='Contact' name='contact'>
          <Input />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input />
        </Form.Item>
        <Button htmlType='submit'>submit</Button>
      </Form>
    </div>
  )
}

export default About