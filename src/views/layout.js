import { html } from "../lib/lit-html.js";
import { navTemplate } from "./navigation.js";
import { footerTemplate } from "./footer.js"


export const layoutTemplate = (userData, content) => html`
<div class="site">
    <header class="site-header">
        ${navTemplate(userData)}
    </header>

    <main class="site-main">
        ${content}
    </main>

    <footer class="site-footer">
        ${footerTemplate}
    </footer>
</div>`;