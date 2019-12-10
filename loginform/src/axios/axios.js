import axios from "axios";
const BASE_URL = "http://localhost:8081";

export function getStudents() {
  return axios.get(`${BASE_URL}/admin/students`).then(response => response);
}
export function deleteStudent(id) {
  return axios
    .post(`${BASE_URL}/admin/student/delete/${id}`)
    .then(response => response)
    .catch(err => Promise.reject(err.message));
}
export function createStudent(data) {
  return axios
    .post(`${BASE_URL}/admin/student/create`, {
      firstname: data.firstname,
      lastname: data.lastname,
      gender: data.gender,
      batch: data.batch,
      username: data.username,
      password: data.password
    })
    .then(response => {
      return response.data;
    })
    .catch(err => Promise.reject(err.message));
}
export function createAdmin(data) {
  return axios
    .post(`${BASE_URL}/admin/createadmin`, {
      username: data.username,
      password: data.password
    })
    .then(response => {
      return response.data;
    })
    .catch(err => Promise.reject(err.message));
}

export function loginAdmin(data) {
  return axios
    .post(`${BASE_URL}/login`, {
      username: data.username,
      password: data.password
    })
    .then(response => {
      return response.data;
    })
    .catch(err => Promise.reject(err.message));
}

export function updateStudent(data, id) {
  return axios
    .post(`${BASE_URL}/admin/student/update/${id}`, { data })
    .then(response => {
      return response.data;
    })
    .catch(err => Promise.reject(err.message));
}

export function showAnswers() {
  return axios.get(`${BASE_URL}/students/previuosAnswers`).then(response => {
    console.log(response)
    return response.data;
  });
}
