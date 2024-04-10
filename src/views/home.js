import { html } from "../lib/lit-html.js";

const homeTemplate = html`
<h1>Hello to your service book app</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos quod eum minus atque voluptas! Porro dolorum fugit accusantium similique atque molestias eum libero numquam magnam delectus doloribus odit, a reiciendis!</p>`;

export const homeView = (ctx) => {
    ctx.render(homeTemplate);
};