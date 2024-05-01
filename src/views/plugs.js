import { html } from "../lib/lit-html.js";

export const plugsTemplate = () => html`
<form class="form">
    <label for="date">Date of replacement:</label>
    <input type="date" name="date" min="1924-01-01" max="2030-12-31">
    <label for="mileage">Mileage:</label>
    <input type="number" name="mileage">
    <label for=""></label>
    <input type="text">
    <label for=""></label>
    <input type="text">
    <button class="button">Submit</button>
</form>`;