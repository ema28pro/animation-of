import Vue from "vue";
import App from "./app.vue";
import Typewriter from "typewriter-effect/dist/core";
import GraphemeSplitter from "grapheme-splitter";

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");

const innerdemo = document.getElementById("inner-demo-2");

const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
};

const typewriter = new Typewriter(innerdemo, {
    loop: true,
    delay: 45,
    stringSplitter,
});

typewriter
    .typeString("Hi, I'm Emanuel 👋")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Future systems engineer 🚀")
    .pauseFor(1000)
    .deleteAll()
    .typeString("I Love Programming ❤️")
    .pauseFor(1000)
    .deleteAll()
    .start();
