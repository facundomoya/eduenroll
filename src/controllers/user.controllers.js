import User from "../models/user.model.js";
import Administrator from "../models/administrator.model.js";

export const createUserAndAdministrator = async (req, res) => {
  const { user_name, password, admin_name, admin_lastname, admin_email, admin_age, admin_id } = req.body;

  try {
    const user = await User.create({
      user_name,
      password,
    });

    const administrator = await Administrator.create({
      name: admin_name,
      lastname: admin_lastname,
      email: admin_email,
      age: admin_age,
      administratorId: admin_id,
      id_user: user.id,
    });

    await user.setAdministrator(administrator);

    return res.status(201).json({
      user: user,
      administrator: administrator
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error POST user" });
  }
};

export const getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll({
        include: Administrator, 
      });
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error GET user" });
    }
  };