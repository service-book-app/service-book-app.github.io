import { html } from "../lib/lit-html.js";
import { addVehicle } from "../service/data.js";
import { onSubmitHandler } from "../util.js";

const addVehicleTemplate = (onSubmit) => html`
<section>
    <h2>Documents and data of the vehicle</h2>
    <form class="form" @submit=${onSubmit}>
        <label for="make">Make:</label>
        <input type="text" name="make" />
        <label for="model">Model:</label>
        <input type="text" name="model" />
        <label for="year">Year of manufacture:</label>
        <input type="text" name="year" />
        <label for="volume">Engine volume:</label>
        <input type="text" name="volume" />
        <label for="color">Color:</label>
        <input type="text" name="color" />
        <label for="seats">Seating capacity:</label>
        <input type="text" name="seats" />
        <label for="registration">Registration number:</label>
        <input type="text" name="registration" />
        <label for="vin">VIN:</label>
        <input type="text" name="vin" />
        <label for="engine">Engine number:</label>
        <input type="text" name="engine" />
        <label for="certificate">Vehicle registration certificate number:</label>
        <input type="text" name="certificate" />
        <label for="date">Registration date:</label>
        <input type="text" name="date" />
        <label for="info">Additional information:</label>
        <textarea name="info" rows="5" cols="30"></textarea>
        <button class="button">Submit</button>
    </form>
</section>`;

export const addVehicleView = (ctx) => {
    ctx.render(addVehicleTemplate(onSubmitHandler(ctx, onSubmit)))
};

const onSubmit = async (ctx, data, e) => {
    await addVehicle(data);
    e.target.reset();
    ctx.page.redirect('/all');
};