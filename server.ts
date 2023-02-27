import {Application, Router} from 'https://deno.land/x/oak@v11.1.0/mod.ts'
import { home, login, register, protectedRoute, postLogin, postRegister, logout, } from './routes.ts'

const app = new Application()

const router = new Router()

router
  .get('/', home)
  .get('/login', login)
  .get('/register', register)
  .get('/protected', protectedRoute)
  .post('/login', postLogin)
  .post('/register', postRegister)
  .get('/logout', logout)

app.use(router.routes())
app.use(router.allowedMethods())

app.addEventListener('error', e => {
  console.log('error event : ', e.error);
})

app.listen({port:8081})
console.log('server is running on port 8081');