import { html } from "../lib/lit-html.js";

const infoTemplate = html`
<section>
    <h2>Introduction</h2>
    <h3>Purpose of the service book</h3>
    <p>The service book is a document reflecting the condition of your car. Precise and regular completion of it will help you:</p>
    
</section>`;

export const infoView = (ctx) => {
    ctx.render(infoTemplate);
};