import { html } from "../lib/lit-html.js";

const guestNavTemplate = html`
<div class="guest">
    <a href="/login" class="button">Login</a>
    <a href="/register" class="button">Register</a>
</div>`;

const userNavTemplate = html`
<div class="user">
    <a href="/logout" class="button">Logout</a>
</div>`;

export const layoutTemplate = (userData, content) => html`
<div class="site">
    <header class="site-header">
        <nav>
            <a href="/">
                <i class="fa-solid fa-screwdriver-wrench" style="color: #FFD43B;"></i>
            </a>
            <div class="nav-buttons">
                ${userData
                ? userNavTemplate
                : guestNavTemplate}
            </div>
        </nav>
    </header>

    <main class="site-main">
        ${content}
    </main>

    <footer class="site-footer">

    </footer>
</div>`;