import express, { Router } from "express";
import UserController from "../controller/userController";

const router: Router = express.Router()

router
  .get('/users', UserController.getAllUsers)
  .post('/users', UserController.registerUser)
  .get('/user/:id', UserController.getUserById)
  .put('/user/:id', UserController.updateUser)

export default router
