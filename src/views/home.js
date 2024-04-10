import { html } from "../lib/lit-html.js";

const homeTemplate = html`
<h1>SERVICE BOOK</h1>
<h4>of your personal vehicle</h4>
<ul>
  <li>Repair</li>
  <li>Diagnostics</li>
  <li>Spare parts</li>
  <li>Administrative costs</li>
</ul>
<p>The service book gives you the opportunity to mark and monitor all costs and periodic events related to the repair and operation of your car.</p>`;

export const homeView = (ctx) => {
    ctx.render(homeTemplate);
};