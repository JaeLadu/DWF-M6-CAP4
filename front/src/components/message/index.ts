function initMessage() {
   class Message extends HTMLElement {
      constructor() {
         super();
      }

      connectedCallback() {
         const container = document.createElement("div");
         const message = document.createElement("p");
         const messageContent = this.getAttribute("message");
         const user = this.getAttribute("user");
         const style = document.createElement("style");
         container.classList.add(`${user}`);

         message.textContent = messageContent;

         style.textContent = `
        .own{
            background-color: #B9E97C;
            height: 50px;
            align-self: flex-end;
        }
        .other{
            background-color: #D8D8D8;
            height: 50px;
            align-self: flex-start;
        }
        `;

         container.append(message);
         this.append(container, style);
      }
   }
   customElements.define("message-comp", Message);
}

export { initMessage };
