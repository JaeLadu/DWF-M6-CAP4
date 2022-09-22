function initForm() {
   class FormComp extends HTMLElement {
      constructor() {
         super();
      }

      connectedCallback() {
         const form = document.createElement("form");
         const style = document.createElement("style");
         const title = this.getAttribute("title");
         const buttonText = this.getAttribute("button");

         form.innerHTML = `
         <label class="input">
         ${title ? "<h5 class='form-title'>" + title + "</h5>" : ""}
            <input name="user" type="text">
        </label>
        <button class="button">${buttonText ? buttonText : ""}</button>
         `;

         form.addEventListener("submit", (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            history.pushState({}, "", "/chat");
            window.dispatchEvent(new PopStateEvent("popstate"));
         });

         style.textContent = `
        form{
            min-height: 125px;
            width: 100%;
        }
        .form-title{
            margin: 0px;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 24px;
        }
        .input>input{
            display: block;
            width: 100%;
            border: 2px solid black;
            border-radius: 4px;
            padding: 13px 20px;
            height: 55px;
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 22px;
        }
        .button{
            font-family: 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 22px;
            width: 100%;
            border-radius: 4px;
            padding: 13px 20px;
            height: 55px;
            background-color: #9CBBE9;
            margin-top: 16px;

        }
        `;

         this.append(form, style);
      }
   }
   customElements.define("form-comp", FormComp);
}

export { initForm };
