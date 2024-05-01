import { html } from "../lib/lit-html.js";

const vehicleTemplate = () => html`
<div class="card">
    <img src="" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">Model</h5>
        <p class="card-text">Short info</p>
        <div class="card-buttons">
            <a href="/replacement" class="button">Replacement</a>
            <a href="#" class="button">Expenses</a>
            <a href="#" class="button">Repair</a>
            <a href="#" class="button del">Delete</a>
        </div>
    </div>
</div>`;

const allVehiclesTemplate = () => html`
${vehicleTemplate()}`;

export const allVehiclesView = (ctx) => {
    ctx.render(allVehiclesTemplate());
};