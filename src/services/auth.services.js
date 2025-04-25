import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import { userServices } from './user.services.js';

export const authServices = {
  login: async (params) => {

    const { user_name, password } = params;

    try {
      const { data: user, error } = await userServices.getAllUsers({
        
          user_name: user_name,
          password: password 
           
      });
      //console.log('user', user_name, password);
      if (error || !user) {
        throw new Error('Credenciales inválidas');
      }


      const token = jwt.sign(
        { 
          id: user.id, 
          user_name: user.user_name,
        },
        config.JWT_SECRET,
        { expiresIn: '1h' }
      );

      return { data: { token, user } };
    } catch (error) {
      return { error: error.message };
    }
  },


};