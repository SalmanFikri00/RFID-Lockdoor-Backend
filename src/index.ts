import { Elysia } from 'elysia';
import { connectDB } from '../config/connDB';
import Route from './Routes/Route.routes';
import { deviceController } from './controllers/DeviceController';

const app = new Elysia()

  .get('/', () => ({
    message: 'server menyala abang kuh',
    menyala: true
  }))

  .post( '/' , deviceController)

  .group('/api' , (app) => app.use(Route))

  .listen(80);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

connectDB();
