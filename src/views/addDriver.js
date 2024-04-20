import { html } from "../lib/lit-html.js";

const addDriverTemplate = html`
<section>
    <div class="form">
        <h2>Driver's personal data</h2>
        <form>
            <label for="first-name">First Name:</label>
            <input type="text" name="first-name" />
            <label for="middle-name">Middle Name:</label>
            <input type="text" name="middle-name" />
            <label for="last-name">Last Name:</label>
            <input type="text" name="last-names" />
            <label for="id">ID Number:</label>
            <input type="text" name="id" />
            <label for="city">City:</label>
            <input type="text" name="city" />
            <label for="telephone">Tel. Number:</label>
            <input type="text" name="telephone" />
            <label for="driving-license">Driving License Number:</label>
            <input type="text" name="driving-license" />
            <label for="category">Category:</label>
            <input type="text" name="category" />
            <label for="blood-type">Blood Type:</label>
            <input type="text" name="blood-type" />
            <label for="rhesus-factor">Rhesus Factor:</label>
            <input type="text" name="rhesus-factor" />
            <label for="info">Additional information:</label>
            <textarea name="info" rows="5" cols="30"></textarea>
            <button class="button">Submit</button>
        </form>
    </div>
</section>`;

export const addDriverView = (ctx) => {
    ctx.render(addDriverTemplate);
};