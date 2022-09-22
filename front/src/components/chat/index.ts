import { state } from "../../state";

function initChat() {
   class ChatComp extends HTMLElement {
      constructor() {
         super();
         state.subscribe(() => this.render());
      }

      connectedCallback() {
         const container = document.createElement("div");
         this.append(container);

         this.render();
      }
      render() {
         const container =
            this.querySelector("div") || document.createElement("div");
         const messages = state.getMessages();
         const user = state.getUser();

         container.innerHTML = "";
         for (const m in messages) {
            const message = document.createElement("message-comp");
            if (messages[m].user == user) {
               message.setAttribute("user", "own");
            } else {
               message.setAttribute("user", "other");
            }
            message.setAttribute("message", messages[m].message);

            container.append(message);
         }
      }
   }

   customElements.define("chat-comp", ChatComp);
}

export { initChat };
