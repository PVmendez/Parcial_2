import jwt from "jsonwebtoken";
import { users } from "../data/users";

export const userController = {
  login: (req: any, res: any) => {
    try {
      const { username, password } = req.body;
      const user = users.find((user) => user.username === username && user.password === password);

      if (user) {
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY!, {
          algorithm: "HS256",
          expiresIn: "24h",
        });

        res.status(200).json({ token: token });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Error when trying log in" });
    }
  },
};
