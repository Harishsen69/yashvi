import axios from 'axios'

const baseUrl = "http://127.0.0.1:5000"

// ✅ GET (All Data)
export const getData = async () => {
  const res = await axios.get(`${baseUrl}/api`)
  return res.data   // 👈 important
}


// ✅ CREATE (POST)
export const createUser = async (values) => {
  const res = await axios.post(`${baseUrl}/api`, values)
  return res.data
}


// ✅ GET (Single User)
export const getSingleUser = async (id) => {
  const res = await axios.get(`${baseUrl}/api/${id}`)
  return res.data
}

// ✅ UPDATE (PUT - full)
export const updateUser = async (id, data) => {
  const res = await axios.put(`${baseUrl}/api/${id}`, data)
  return res.data
}


// ✅ DELETE
export const deleteUser = async (id) => {
  await axios.delete(`${baseUrl}/api/${id}`)
}