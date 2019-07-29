import Koa from 'koa';
import Logger from 'koa-morgan';
import config from '../config/server';
import router from './router';

const app = new Koa();
app.use(Logger('dev'));
app.use(router.routes());

export default app;
