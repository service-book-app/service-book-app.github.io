import { html } from "../lib/lit-html.js";

const guestNavTemplate = html`
<a href="/login" class="button">Login</a>
<a href="/register" class="button">Register</a>`;

const userNavTemplate = html`
<a href="/logout" class="button">Logout</a>`;

export const layoutTemplate = (userData, content) => html`
<div class="site">
    <header class="site-header">
        <nav>
            <a href="/">
                <i class="fa-solid fa-screwdriver-wrench" style="color: #FFD43B;"></i>
            </a>
            ${userData
            ? userNavTemplate
            : guestNavTemplate}
        </nav>
    </header>

    <main class="site-main">
        ${content}
    </main>

    <footer class="site-footer">

    </footer>
</div>`;