import { html, nothing } from "../../src/lib/lit-html.js";

const guestNavTemplate = html`
<a href="/login" class="button">Login</a>
<a href="/register" class="button">Register</a>`;

const userNavTemplate = html`
<a href="/info" class="button">Info</a>
<a href="/add" class="button">Add vehicle</a>
<a href="/all" class="button">My vehicles</a>
<a href="/logout" class="button">Logout</a>`;

export const navTemplate = (userData) => html`
<div class="left-nav-container">
    <a href="/" id="logo-holder"><i class="fa-solid fa-screwdriver-wrench" style="color: #FFD43B;"></i></a>
    ${userData ? html`<p id="welcome">Welcome, ${userData.username}!</p>` : nothing}
</div>
<div class="right-nav-container">
    <nav class="main-nav">
        ${userData
        ? userNavTemplate
        : guestNavTemplate}
    </nav>
</div>`;