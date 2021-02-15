import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import useLogin from "./functions/useLogin.ts";

const app = new Application();
const router = new Router();

router.post("/api/admin/login", async (ctx) => {
  ctx.response.headers.set('Access-Control-Allow-Origin', '*')
  const gasx = await ctx.request.body().value;
  const gas = JSON.parse(gasx);
  const resp = await useLogin(gas);
  //console.log(gas, resp);
  ctx.response.body = resp;
});

// app.use(({ response }) => {
//   response.body = "Deno server running at https://localhost:6969";
// });

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 6969 });
