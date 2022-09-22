import { initRouter } from "./router";
import { initFooter } from "./components/footer";
import { initHeader } from "./components/header";
import { initWelcomePage } from "./pages/welcome";
import { initForm } from "./components/form";
import { initChatPage } from "./pages/chat";
import { initChat } from "./components/chat";
import { state } from "./state";
import { initMessage } from "./components/message";

(() => {
   initHeader();
   initFooter();
   initForm();
   initMessage();
   initChat();
   initWelcomePage();
   initChatPage();

   const root =
      document.querySelector(".root") || document.createElement("div");

   state.connectDB();
   initRouter(root);
})();
