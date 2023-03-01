import {Context} from 'https://deno.land/x/oak@v11.1.0/mod.ts'
import {renderFile}  from "https://deno.land/x/dejs@0.10.3/mod.ts";

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
  ctx.response.body = await renderFile(`${Deno.cwd()}/views/home.ejs`, {})
}

export const postRegister = async (ctx:Context) => {
  const body = await ctx.request.body().value   

  // console.log(body);

  // read onenote summary in Cloud_Note2/Deno/Deno Oak로 입력값을 주는 법
  // body is URLSearchParams object when form data is input
  const name = body.get('name')
  console.log(name);
  const username = body.get('username')
  console.log(username);
  const password = body.get('password')
  console.log(password);


  // body is plain object when json data is input
  // console.log(body.name);
  // console.log(body.username);
  // console.log(body.password);
  ctx.response.redirect('/')
}

export const logout = async (ctx:Context) => {
  ctx.response.body = await renderFile(`${Deno.cwd()}/views/home.ejs`, {})
}
