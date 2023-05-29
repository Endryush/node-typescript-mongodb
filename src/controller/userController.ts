import { Request, Response } from "express";
import User from "../models/User"

class UserController {
  static async getAllUsers (req: Request, res: Response) : Promise<void> {
    try {
      const users = await User.find().exec()

      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ error: "An error occurred, please try again in a few minutes" })
    }
  }

  static async registerUser (req: Request, res: Response) : Promise<void> {
    try {
      const user = new User(req.body);
  
      await user.save();
  
      res.status(201).send(user.toJSON());
    } catch (error) {
      res.status(500).send({ message: error });
    }
  }

  static async getUserById (req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      
      const user = await User.findById(id).exec();
  
      if (!user) {
        res.status(404).send({ message: "Usuário não encontrado" });
        return;
      }
  
      res.status(200).send(user);
    } catch (error) {
      res.status(400).send({ message: error });
    }
  }

  static async updateUser (req: Request, res: Response) : Promise<void> {
    try {
      const { id } = req.params
      const userUpdated = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true }).exec()

      if (!userUpdated) {
        res.status(404).send({ message: 'Usuário não encontrado' + id })
        return
      }

      res.status(200).send({ message: 'Livro atualizado com sucesso' })
    } catch (error) {
      res.status(500).send({ message: error })
    }
  }

}

export default UserController