import { html } from "../../src/lib/lit-html.js";

const guestNavTemplate = html`
<a href="/login" class="button">Login</a>
<a href="/register" class="button">Register</a>`;

const userNavTemplate = html`
<a href="/logout" class="button">Logout</a>`;

export const navTemplate = (userData) => html`
<nav>
    <a href="/">
        <i class="fa-solid fa-screwdriver-wrench" style="color: #FFD43B;"></i>
    </a>
    ${userData
    ? userNavTemplate
    : guestNavTemplate}
</nav>`;

