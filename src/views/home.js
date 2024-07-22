import { html } from "../lib/lit-html.js";

const homeTemplate = () => html`
<h1>SERVICE BOOK</h1>
<h3><i>of your personal vehicle</i></h3>
<ul class="list">
  <li><i class="fa-solid fa-gear fa-lg"></i>Repair</li>
  <li><i class="fa-solid fa-gear fa-lg"></i>Diagnostics</li>
  <li><i class="fa-solid fa-gear fa-lg"></i>Spare parts</li>
  <li><i class="fa-solid fa-gear fa-lg"></i>Administrative costs</li>
</ul>
<p>The service book gives you the opportunity to mark and monitor all costs and periodic events related to the repair and operation of your car.</p>`;

export const homeView = (ctx) => {
    ctx.render(homeTemplate());
};