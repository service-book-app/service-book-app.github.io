import { html } from "../lib/lit-html.js";

const vehicleTemplate = () => html`
`;

const allVehiclesTemplate = () => html`
<h1>All</h1>`;

export const allVehiclesView = (ctx) => {
    ctx.render(allVehiclesTemplate());
};