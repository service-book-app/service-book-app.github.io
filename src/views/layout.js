import { html } from "../lib/lit-html.js";

const guestNavTemplate = html`
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>`;

const userNavTemplate = html`
<li><a href="/logout">Logout</a></li>`;

export const layoutTemplate = (userData, content) => html`
<div class="site">
    <header class="site-header">
        <nav>
            <ul>
                <li><a href="/"></a>Home</li>
                ${userData
                ? userNavTemplate
                : guestNavTemplate}
            </ul>
        </nav>
    </header>

    <main class="site-main">
        ${content}
    </main>

    <footer class="site-footer">

    </footer>
</div>`;