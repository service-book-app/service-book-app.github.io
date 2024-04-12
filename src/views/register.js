import { html } from "../lib/lit-html.js";

const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="register-form" @submit=${onSubmit}>
        <input type="email" id="register-email" name="register-email" placeholder="email">
        <input type="password" id="register-password" name="register-password" placeholder="password">
        <input type="password" id="register-repass" name="register-repass" placeholder="repeat password">
        <button type="submit" class="button">Submit</button>
        <p>Already have an account? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export const registerView = (ctx) => {
    ctx.render(registerTemplate());
};