import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

/* 
1. Список всех задач: https://jsonplaceholder.typicode.com/todos
2. Список задач пользователя: https://jsonplaceholder.typicode.com/todos?userId=1
3. Информация о пользователе: https://jsonplaceholder.typicode.com/users?id=1
*/

export default {
  getAllTasks: async () => {
    return await axios.get('/todos')
  },
  getUserTasks: async (userId) => {
    return await axios.get(`/todos?userId=${userId}`)
  },
  getUserInfo:  async (userId) => {
    return await axios.get(`/users?id=${userId}`)
  },
  getAllUsers:  async () => {
    return await axios.get('/users')
  },
}