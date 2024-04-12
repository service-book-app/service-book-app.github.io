import { html } from "../lib/lit-html.js";

const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onSubmit}>
            <input type="email" id="login-email" name="login-email" placeholder="email">
            <input type="password" id="login-password" name="login-password"placeholder="password">
            <button type="submit" class="button">Submit</button>
            <p>Don't have an account? <a href="/register">Create one</a></p>
        </form>
    <div>
</section>`;

export const loginView = (ctx) => {
    ctx.render(loginTemplate());
};