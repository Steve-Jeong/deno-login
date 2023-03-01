import {Context} from 'https://deno.land/x/oak@v11.1.0/mod.ts'
import {renderFile}  from "https://deno.land/x/dejs@0.10.3/mod.ts";
import { users } from './users.ts';
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";

export const home = async (ctx:Context) => {
  ctx.response.body = await renderFile(`${Deno.cwd()}/views/home.ejs`, {})
}

export const login = async (ctx:Context) => {
  ctx.response.body = await renderFile(`${Deno.cwd()}/views/login.ejs`, {})
}

export const register = async (ctx:Context) => {
  ctx.response.body = await renderFile(`${Deno.cwd()}/views/register.ejs`, {})
}

export const protectedRoute = async (ctx:Context) => {
  ctx.response.body = await renderFile(`${Deno.cwd()}/views/protected.ejs`, {})
}

export const postLogin = async (ctx:Context) => {
  const body = await ctx.request.body().value;
  const username = body.get('username')
  console.log(username);
  const password = body.get('password')
  console.log(password);
  const user = users.find(user => user.username === username);
  if(user == null) {
    console.log('no user by that name');
    return ctx.response.redirect('/login')
  }
  if(await bcrypt.compare(password, user.password)) {
    console.log('user logged in');
  } else {
    console.log('password incorrect');
    return ctx.response.redirect('/login')
  }
  ctx.response.redirect('/protected')
}

export const postRegister = async (ctx:Context) => {
  const body = await ctx.request.body().value   

  console.log(body);

  // read onenote summary in Cloud_Note2/Deno/Deno Oak로 입력값을 주는 법
  // body is URLSearchParams object when form data is input
  const name = body.get('name')
  // console.log(name);
  const username = body.get('username')
  // console.log(username);
  const password = body.get('password')
  // console.log(password);

  const hashedPassword = await bcrypt.hash(password);
  // console.log(hashedPassword);

  const user = {
    name,
    username,
    password:hashedPassword
  }

  users.push(user)
  // console.log(users);

  // body is plain object when json data is input
  // console.log(body.name);
  // console.log(body.username);
  // console.log(body.password);
  ctx.response.redirect('/login')
}

export const logout = async (ctx:Context) => {
  ctx.response.body = await renderFile(`${Deno.cwd()}/views/home.ejs`, {})
}
