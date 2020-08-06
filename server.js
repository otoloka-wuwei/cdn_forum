const Koa = require('koa');

const Router = require('koa-router');

const next = require('next');

const dev = process.env.NODE_ENV === 'development';

const app = next({ dev });

const handle = app.getRequestHandler();

const port = dev ? 3000 : 23335;

app.prepare().then(() => {
  const server = new Koa();

  const router = new Router();

  // 目标URL: otoloka.id/forum/[categoryName]
  router.get('/forum/:categoryName', async (ctx) => {
    const { req, res, params } = ctx;
    const { categoryName } = params;
    res.statusCode = 200;
    await app.render(req, res, '/index', { categoryName });
    ctx.respond = false;
  });


  // 目标URL: otoloka.id/forum/threads/p/[id]
  router.get('/forum/threads/p/:id', async (ctx) => {
    const { req, res, params, request, query } = ctx;
    const {  id } = params;
    const path = request.href;
    res.statusCode = 200;
    await app.render(req, res, '/detail', {
      id: id,
      path
    });
    ctx.respond = false;
  });

    router.get('/forum/comment/:id', async (ctx) => {
      const { req, res, params, request, query } = ctx;
      const {  id } = params;
      const path = request.href;
      res.statusCode = 200;
      await app.render(req, res, '/comment', {
        id: id,
        path
      });
      ctx.respond = false;
    });


  // 这里的意思是只要不是上面列出的特殊情况, 全部都走nextjs的内部处理机制
  router.get('*', async (ctx) => {
    const { req, res } = ctx;
    await handle(req, res);
    ctx.respond = false;
  });

  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
