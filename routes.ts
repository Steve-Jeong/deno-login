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
  ctx.response.body = await renderFile(`${Deno.cwd()}/views/home.ejs`, {})
}

export const logout = async (ctx:Context) => {
  ctx.response.body = await renderFile(`${Deno.cwd()}/views/home.ejs`, {})
}