import { html } from "../lib/lit-html.js";
import { register } from "../service/auth.js";
import { onSubmitHandler, validateForm } from "../util.js";

const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="register-form" @submit=${onSubmit}>
            <input type="text" id="username" name="username" placeholder="username">
            <input type="password" id="password" name="password" placeholder="password">
            <input type="password" id="repass" name="repass" placeholder="repeat password">
            <input type="email" id="email" name="email" placeholder="email">
            <button @submit=${onSubmit} type="submit" class="button">Submit</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export const registerView = (ctx) => {
    ctx.render(registerTemplate(onSubmitHandler(ctx, onSubmit)));
};

const onSubmit = async (ctx, data, e) => {
    const { username, password, repass, email } = data;
    const isValid = validateForm(username, password, email, repass);
    if (isValid) {
        await register(username.trim(), password.trim(), email.trim());
        e.target.reset();
        ctx.page.redirect('/');
    }
};