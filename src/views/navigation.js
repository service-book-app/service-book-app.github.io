import { html } from "../../src/lib/lit-html.js";

const guestNavTemplate = html`
<a href="/login" class="button">Login</a>
<a href="/register" class="button">Register</a>`;

const userNavTemplate = (user) => html`
<p id="welcome">Welcome ${user}</p>
<a href="/add" class="button">Add vehicle</a>
<a href="/driver" class="button">Add driver</a>
<a href="/info" class="button">Info</a>
<a href="/logout" class="button">Logout</a>`;

export const navTemplate = (userData) => html`
<nav>
    <a href="/">
        <i class="fa-solid fa-screwdriver-wrench" style="color: #FFD43B;"></i>
    </a>
    ${userData
    ? userNavTemplate(userData.username)
    : guestNavTemplate}
</nav>`;