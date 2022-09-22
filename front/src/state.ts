import { onValue, ref } from "firebase/database";
import { rtdb } from "./dataBase";

const state = {
   data: {
      messages: {
         fdijvbdsfkj: {
            user: "Jae",
            message: "Hola",
         },
         sfdijvbdsfkj: {
            user: "Jae",
            message: "Hola",
         },
         sdhbdsuy: {
            user: "So",
            message: "Hola",
         },
         fddijvbdsfkj: {
            user: "Jae",
            message: "Hola",
         },
         sffdijvbdsfkj: {
            user: "Jae",
            message: "Hola",
         },
         sdhsbdsuy: {
            user: "So",
            message: "Hola",
         },
      },
      userId: "Jae",
   },

   subscribed: [],

   connectDB() {
      onValue(ref(rtdb), (snap) => {
         console.log(snap.val());

         this.data.messages = { ...snap.val() };
         this.subscribed.forEach((f) => {
            f();
         });

         // return snap.val()
      });
   },

   subscribe(f) {
      this.subscribed.push(f);
   },

   getMessages() {
      return this.data.messages;
   },
   getUser() {
      return this.data.userId;
   },
};

export { state };
