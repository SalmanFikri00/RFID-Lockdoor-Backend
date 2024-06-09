import { Elysia } from 'elysia';
import { connectDB } from '../config/connDB';
import Route from './Routes/Route.routes';

const app = new Elysia()

  .get('/', () => ({
    message: 'server menyala abang kuh',
    menyala: true
  }))

  .group('/api' , (app) => app.use(Route))

  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

connectDB();
