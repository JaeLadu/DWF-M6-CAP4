function initFooter() {
   class Footer extends HTMLElement {
      constructor() {
         super();
      }

      connectedCallback() {
         const container = document.createElement("div");
         const button = document.createElement("button");

         button.classList.add("button");
         button.textContent = "Vuelta";

         button.addEventListener("click", () => {
            history.pushState({}, "", "/");
            window.dispatchEvent(new PopStateEvent("popstate"));
         });

         container.append(button);
         this.append(container);
      }
   }
   customElements.define("footer-comp", Footer);
}

export { initFooter };
