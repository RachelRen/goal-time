const Koa = require('koa')
const views = require('koa-views')
const static = require('koa-static')
const path = require('path')
// const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

const routers = require('./routers/index');

app.use(bodyParser());

app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

const staticPath = '../static';

app.use(static(
    path.join(__dirname, staticPath)
))

// app.use(async (ctx) => {
//     let title = 'hello';
//     await ctx.render('index', {
//         title
//     })
// })

// const router = new Router();
// router.get('/home', async (ctx) => {
//     console.log('router');
//     let html = `
//         router home
//     `
//     ctx.body = html;
// });

app
  .use(routers.routes())
  .use(routers.allowedMethods());

app.listen(3000, () => {
    console.log('ejs is starting');
})