import {sequelize} from '../database/connect.js';
import User from '../models/user.model.js';

const getAllUsers = async(params) => {
    try {
        const data = await User.findAll(params);
        return { data };
      } catch (error) {
        return { error: error.message };
      }
};

export const userServices = {
    getAllUsers,
};