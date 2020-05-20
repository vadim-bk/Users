import Axios from "axios";

const allUsersUrl = "http://77.120.241.80:8911/api/users";
const userUrl = "http://77.120.241.80:8911/api/user/";

const getAllUsers = () => Axios.get(allUsersUrl);

const createUser = (data) => Axios.post(allUsersUrl, data);

const editUser = (id) => Axios.put(userUrl + id);

const removeUser = (id) => Axios.delete(userUrl + id);

export default { getAllUsers, createUser, editUser, removeUser };
