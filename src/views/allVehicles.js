import { html } from "../lib/lit-html.js";

const vehicleTemplate = () => html`
<div class="card">
    <h5 class="card-title">Model</h5>
    <p class="card-text">Short info</p>
    <a href="#" class="button">Replacement</a>
    <a href="#" class="button">Expenses</a>
    <a href="#" class="button">Repair</a>
    <a href="#" class="button">Delete</a>
</div>`;

const allVehiclesTemplate = () => html`
<h1>All</h1>
${vehicleTemplate()}`;

export const allVehiclesView = (ctx) => {
    ctx.render(allVehiclesTemplate());
};