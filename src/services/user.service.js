import http from "../http-common";

class UserDataService {
  getAll() {
    return http.get("/userprofiles");
  }

  get(id) {
    return http.get(`/userprofiles/${id}`);
  }

  create(data) {
    return http.post("/userprofiles", data);
  }

  update(id, data) {
    return http.put(`/userprofiles/${id}`, data);
  }

  delete(id) {
    return http.delete(`/userprofiles/${id}`);
  }

  deleteAll() {
    return http.delete(`/userprofiles`);
  }

  findById(id) {
    return http.get(`/userprofiles?id=${id}`);
  }
}

export default new UserDataService();
