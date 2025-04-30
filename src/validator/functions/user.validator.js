import { mixParams } from "../../utils/formatData.utils.js";
import { userSchema } from "../user.schema.js";

const save = async (req, res, next) => {
  try {
    const data = mixParams(req);
    const result = userSchema.safeParse(data.user);
    if (!result.success) return res.json(({error: result.error.issues,code:400})).status(400);
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message, code: 500 });
  }
}

export const userValidator = {
  save
};