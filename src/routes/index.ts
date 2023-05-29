import express, { Application, Request, Response } from 'express';
import user  from './userRoutes'

const routes = (app: Application) : void => {
    app.route('/').get((req: Request, res: Response) => { res.status(200).send({message: 'Welcome'})})
    app.use(
        express.json(),
        user
    )
}

export default routes