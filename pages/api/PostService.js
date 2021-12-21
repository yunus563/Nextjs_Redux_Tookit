import axios from 'axios'
export default class ApiTodos {
  static async getTodos(limit,) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
        },
      }
    );
    return response.data;
  }
}
