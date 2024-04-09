import { html } from "../lib/lit-html.js";

const homeTemplate = html`
<h1>Hello to your service book app</h1>`;

export const homeView = (ctx) => {
    ctx.render(homeTemplate);
};