//Brian Dilone, 4/13/2026, IT302-452, Phase 4 Read Node.js Data Using React Assignment, bd294@njit.edu
import axios from "axios";

class CatDataService {


  getAll(page = 0) {
    return axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/bd294/cats?page=${page}`
    );
  }
  get(id) {
    return axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/bd294/cats/id/${id}`
    );
  }

  find(query, by = "httpNumber", page = 0) {
    return axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/bd294/cats?${by}=${query}&page=${page}`
    )
  }

  createReview(data) {
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/bd294/cats/userDescription`, data)
  }

  updateReview(data) {
    return axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/v1/bd294/cats/userDescription`, data)
  }

  deleteReview(id, userId) {
    return axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/api/v1/bd294/cats/userDescription`,
      { data: { review_id: id, user_id: userId } }
    )
  }

  getCodes() {
    return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/bd294/cats/codes`)

  }


}
export default new CatDataService();