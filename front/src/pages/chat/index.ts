function initChatPage() {
   class ChatPage extends HTMLElement {
      constructor() {
         super();
      }

      connectedCallback() {
         const header = document.createElement("header-comp");
         const container = document.createElement("div");
         const title = document.createElement("h1");
         const chat = document.createElement("chat-comp");
         const form = document.createElement("form-comp");
         const style = document.createElement("style");

         container.classList.add("container");

         title.classList.add("title");
         title.textContent = "Chat";

         form.setAttribute("button", "Enviar");

         style.textContent = `
          .container{
             padding: 1px 30px;
             display: flex;
             flex-direction: column;
             justify-content: space-between;
             height: calc(100vh - 60px);
          }
          .title{
             font-family: 'Roboto', sans-serif;
             font-size: 52px;
             font-weight: 700;
             margin: 16px 0;
          }
          form-comp{
             margin-bottom: 30px;
          }
          `;

         container.append(title, chat, form);
         this.append(header, container, style);
      }
   }

   customElements.define("chat-page", ChatPage);
}

export { initChatPage };
