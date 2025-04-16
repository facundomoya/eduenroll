import {sequelize} from '../database/connect.js';
import User from '../models/user.model.js';
import Administrator from '../models/administrator.model.js';

const getAllUsers = async(params) => {
    try {
        const data = await User.findAll(params.body);
        return { data };
      } catch (error) {
        return { error: error.message };
      }
};

const addUser = async(request) => {
  try {
    const data = await User.create(request.body);
    const data_admin = await Administrator.create({
     ...request.body,
      id_user: data.id
    });
    return { data, data_admin };
  } catch (error) {
    return { error: error.message };
  }
} 

export const userServices = {
    getAllUsers,
    addUser
};


/* {
  "user": {
    "user_name": "eusebio",
    "password": "eusebio1234"
  },
  "admin": {
    "name": "Eusebio",
    "lastname": "Paze",
    "email": "eu_paz@hotmail.com",
    "age": 28,
    "administratorId": 104
  }
}
 */

/* const { user, admin } = req.body;

const createdUser = await User.create(user);
const createdAdmin = await Administrator.create({
  ...admin,
  id_user: createdUser.id
});
 */