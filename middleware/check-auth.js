export default function (context) {
  console.log("[Middleware] Check Auth");
  context.store.dispatch("posts/initAuth", context.req);
}
