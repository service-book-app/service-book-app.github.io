import { html } from "../lib/lit-html.js";

const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="register-form" @submit=${onSubmit}>
            <input type="text" id="register-username" name="register-username" placeholder="username">
            <input type="password" id="register-password" name="register-password" placeholder="password">
            <input type="password" id="register-repass" name="register-repass" placeholder="repeat password">
            <input type="email" id="register-email" name="register-email" placeholder="email">
            <button type="submit" class="button">Submit</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export const registerView = (ctx) => {
    ctx.render(registerTemplate());
};