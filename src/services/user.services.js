import {sequelize} from '../database/connect.js';
import User from '../models/user.model.js';
import Administrator from '../models/administrator.model.js';
import Professor from '../models/professor.model.js';

const getAllUsers = async(params) => {
    try {
        const data = await User.findAll(params.body);
        return { data };
      } catch (error) {
        return { error: error.message };
      }
};

const getUser = async(params) => {
  try {
    const data = await User.findOne({
      where: {
        id: params.id
      }
    });
    return { data };
  } catch (error) {
    return { error: error.message };
  }
}

const addProfessorUser = async(request) => {
  try {
    const data = await User.create(request.user);
    const data_professor = await Professor.create({
      ...request.professor,
      id_user: data.id
    });
    return { data, data_professor };
  } catch (error) {
    return { error: error.message };
  }
}

const addAdminUser = async(request) => {
  try {
    const data = await User.create(request.user);
    const data_admin = await Administrator.create({
     ...request.admin,
      id_user: data.id
    });
    return { data, data_admin };
  } catch (error) {
    return { error: error.message };
  }
} 

const deleteProfessorUser = async(params) => {
  try {
    const data= await User.destroy({
      where: {
        id: params.id
      }
    });
    return { data };
  } catch (error) {
    return { error: error.message };
  }
}

export const userServices = {
    getAllUsers,
    addProfessorUser,
    addAdminUser,
    getUser,
    deleteProfessorUser
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