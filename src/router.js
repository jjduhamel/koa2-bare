import Router from 'koa-router';

const router = new Router;

/*
 * Error handling middleware
 */
router.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error(err.message, err.stack);
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

/*
 * Default landing page
 */
router.get('/', async ctx => {
  ctx.body = 'OK';
});

router.post('/boom', async ctx => {
  ctx.throw(400, 'BOOM');
});

export default router;
