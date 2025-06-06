import { mixParams } from "../utils/formatData.utils.js";
import { userServices } from "../services/user.services.js";

const getAllUsers = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await userServices.getAllUsers(params);
  
  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const getUser = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await userServices.getUser(params);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const addProfessorUser = async (req, res) => {
  const request = mixParams(req);
  const { data, error } = await userServices.addProfessorUser(request);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const addAdminUser = async (req, res) => {
const request = mixParams(req);
const { data, error } = await userServices.addAdminUser(request);
if(error){
  return res.status(500).json({ error, code: 500 });
}

return res.status(200).json({ data, code: 200 });
};

const deleteUser = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await userServices.deleteProfessorUser(params);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const updateUser = async (req, res) => {
  const params = mixParams(req);
  const { data, error } = await userServices.updateUser(params);

  if (error) {
    return res.status(500).json({ error, code: 500 });
  }

  return res.status(200).json({ data, code: 200 });
};

const getUserPdf = async (req, res) => {
  const { userId } = req.params;
  
  const { data, error } = await userServices.getUserPdf(userId);

  if (error) {
    return res.status(404).json({ error });
  }

  // Si querés mostrar el archivo en navegador, usá res.sendFile
  return res.download(data.filePath, data.filename);
};

export const userController = {
  getAllUsers,
  addProfessorUser,
  addAdminUser,
  getUser,
  getUserPdf,
  deleteUser,
  updateUser
};
