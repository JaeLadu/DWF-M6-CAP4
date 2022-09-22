import { Router } from "@vaadin/router";

function initRouter(root: Element) {
   const router = new Router(root);

   router.setRoutes([
      {
         path: "/",
         component: "welcome-page",
      },
      {
         path: "/chat",
         component: "chat-page",
      },
   ]);
}

export { initRouter };
