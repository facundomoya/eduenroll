import { userSchema } from "../user.schema.js";

const save = async (req, res, next) => {
  try {
    const {body} = req;
    console.log(body);
    const result = userSchema.safeParse(body);
    if (!result.success) return res.json(({error: result.error.issues,code:400})).status(400);
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message, code: 500 });
  }
}

export const userValidator = {
  save
};