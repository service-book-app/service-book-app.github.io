import { html } from "../lib/lit-html.js";

const infoTemplate = html`
<section>
    <h2>Introduction</h2>
    <h3>Purpose of the service book</h3>
    <p>The service book is a document reflecting the condition of your car. Precise and regular completion of it will help you:</p>
    <div class="ulist">
        <ul>
            <li><i class="fa-solid fa-gear fa-lg"></i>monitor the technical condition of your car</li>
            <li><i class="fa-solid fa-gear fa-lg"></i>record all actual expenses related to the car</li>
            <li><i class="fa-solid fa-gear fa-lg"></i>perform the timely replacement of especially important components: belts, spark plugs, oil, filters, tires...</li>
            <li><i class="fa-solid fa-gear fa-lg"></i>compare the quality of the spare parts and repair services used</li>
        </ul>
    </div>
    <h6>At Repair</h6>
    <p>The service book is the history of your car - be sure to fill it out during repairs. It shows all repair activities conducted on the car up to this point. The information in it will be invaluable assistance for any service technician. Demand from the service you use to describe in detail the repairs carried out.</p>
    <h6>At Purchase Or Sale</h6>
    <p>The service book is a document indicative of the car's condition. It shows how and at what intervals repairs and servicing have been carried out on the car. Insist on having it when buying the car!</p>
    <h6>Fill In</h6>
    <p>Strive to timely and accurately record all events related to the repair and maintenance of your car in a consistent manner. These efforts will pay off with proper maintenance of all systems in the car and trouble-free operation.</p>
    <p class="italic">Following the guidelines for how to enter events into the relevant sections will help you ensure the proper operation and technical reliability of your car.</p>
    <h6>Replacement</h6>
    <p>As a reminder, in the "Replacement" section, record either the time or mileage for the next consumables replacement. Simultaneously, enter the corresponding details/consumables in the "Expenses" section as well.</p>
    <h6>Expenses</h6>
    <p>Here, record all expenses related to the car: <strong>spare parts, oil, coolant, new equipment, as well as services like car washes, insurance, technical inspections, fines, etc.</strong> <em>Please do not duplicate amounts that have already been described in the "Repairs" section.</em></p>
    <h6>Repair</h6>
    <p>It is of great importance to accurately record all <strong>repair activities, adjustments, replacements, and diagnostics</strong> performed on your car. <em>Please request that this be done at the service center you use!<em></p>
</section>`;

export const infoView = (ctx) => {
    ctx.render(infoTemplate);
};