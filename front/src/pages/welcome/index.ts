function initWelcomePage() {
   class WelcomePage extends HTMLElement {
      constructor() {
         super();
      }

      connectedCallback() {
         const header = document.createElement("header-comp");
         const container = document.createElement("div");
         const title = document.createElement("h1");
         const form = document.createElement("form-comp");
         const style = document.createElement("style");

         container.classList.add("container");

         title.classList.add("title");
         title.textContent = "Bienvenido";

         form.setAttribute("title", "Tu nombre");
         form.setAttribute("button", "Comenzar");

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
         }
         form-comp{
            margin-bottom: 70px;
         }
         `;

         container.append(title, form);
         this.append(header, container, style);
      }
   }

   customElements.define("welcome-page", WelcomePage);
}

export { initWelcomePage };
