import { html } from "../lib/lit-html.js";

const replacementTemplate = () => html`
<section class="replacement">
    <h2>Replacement</h2>
    <div class="rpl">
        <a href="/belts" class="button rpl">Belts</a>
        <a href="/plugs" class="button rpl">Plugs</a>
        <a href="/oil" class="button rpl">Oils And Filters</a>
    </div>
</section>`;

export const replacementView = (ctx) => {
    ctx.render(replacementTemplate());
};