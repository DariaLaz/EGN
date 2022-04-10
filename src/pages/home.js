import { html } from "../lib.js";

const homeTemplate = () => html`
    <section id='index'>
        <h1 >Изберете услуга: </h1>
        <a href="/validator"><button type="button" class="bigBut">Валидирай ЕГН</button></a>
        <a href="/generator"><button type="button" class="bigBut">Генерирай ЕГН</button></a>
    </section>`

export async function homePage(ctx){
    ctx.render(homeTemplate())
}