import { render } from "../lib/lit-html.js";
import { getUserData } from "../util.js";
import { layoutTemplate } from "../views/layout.js";

const root = document.body;

const renderer = (content) => {
    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
};

export const decorateContext = (ctx, next) => {
    ctx.render = renderer;
    next();
};