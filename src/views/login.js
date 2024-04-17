import { html } from "../lib/lit-html.js";
import { login } from "../service/auth.js";
import { onSubmitHandler, validateForm } from "../util.js";

const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onSubmit}>
            <input type="text" id="username" name="username" placeholder="Username">
            <input type="password" id="password" name="password"placeholder="Password">
            <button type="submit" class="button">Submit</button>
            <p class="alert"></p>
            <p>Don't have an account? <a href="/register">Create one</a></p>
        </form>
    <div>
</section>`;

export const loginView = (ctx) => {
    ctx.render(loginTemplate(onSubmitHandler(ctx, onSubmit)));
};

const onSubmit = async (ctx, data, e) => {
    const { username, password } = data;
    const isValid = validateForm(username, password);
    if (isValid) {
        await login(username.trim(), password.trim());
        e.target.reset();
        ctx.page.redirect('/');
    }
};