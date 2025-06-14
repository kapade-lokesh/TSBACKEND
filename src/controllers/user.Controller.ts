import { Request, Response } from "express";
import { User } from "../models/user.Model";
const createUser = async (
  req: Request,
  res: Response
  //   next: NextFunction
): Promise<void> => {
  const { name, email, password } = req.body;
  try {
    //check for existing user
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      res.status(400).json({ message: "user already exist with this email" });
      return;
    }

    const user = await User.create({ name, email, password });

    res.status(200).json({ message: "user created", user });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
    return;
  }
};

export { createUser };
