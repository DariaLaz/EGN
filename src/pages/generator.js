import { html, render } from "../lib.js";
import { footerTemplate } from "./footerTemplate.js";

const generatorTemplate = (onChange, onSubmit) => html`
    <section>
        <span id='backBut'>
            <a href="/">Назад</a>
        </span>
        <h1>ЕГН Генератор</h1>
        <span id='input'>
            <form @submit=${onSubmit}>
                <div>
                    <label>Дата на раждане (въведете дата между 1800 и 2099 год):</label>
                    <div class="input-group date">
                        <input id="date" placeholder="дд-мм-гггг" name="birthDate" @change=${onChange}>
                    </div>
                </div>
                <div>
                    <label>Област:</label>
                    <select id="region" name="region">
                        <option value = "Благоевград">Благоевград</option>
                        <option value = "Бургас">Бургас</option>
                        <option value = "Варна">Варна</option>
                        <option value = "Велико Търново">Велико Търново</option>
                        <option value = "Видин">Видин</option >
                        <option value = "Враца">Враца</option >
                        <option value = "Габрово">Габрово</option >
                        <option value = "Кърджали">Кърджали</option >
                        <option value = "Кюстендил">Кюстендил</option >
                        <option value = "Ловеч">Ловеч</option >
                        <option value = "Монтана">Монтана</option >
                        <option value = "Пазарджик">Пазарджик</option >
                        <option value = "Перник">Перник</option >
                        <option value = "Плевен">Плевен</option >
                        <option value = "Пловдив">Пловдив</option >
                        <option value = "Разград">Разград</option >
                        <option value = "Русе">Русе</option >
                        <option value = "Силистра">Силистра</option >
                        <option value = "Сливен">Сливен</option >
                        <option value = "Смолян">Смолян</option >
                        <option value = "София - град">София - град</option >
                        <option value = "София - окръг">София - окръг</option >
                        <option value = "Стара Загора">Стара Загора</option >
                        <option value = "Добрич">Добрич</option >
                        <option value = "Търговище">Търговище</option >
                        <option value = "Хасково">Хасково</option >
                        <option value = "Шумен">Шумен</option >
                        <option value = "Ямбол">Ямбол</option >
                        <option value = "Друг/Неизвестен">Друг/Неизвестен</option>
                    </select>
                </div>
                <div>
                    <label>Пол:</label>
                    <select id="sex" name="sex">
                    <option value="male">Мъж</option>
                    <option value="female">Жена</option>
                    </select>
                </div>
                <button type="submit" id="generateBut" class="bigBut" >Генерирай</button>
            </form>
            
        </span>
        <div id='output'>
            <h2></h2> 
            <div id='info'></div>
            <div id='moreInfo'></div>
        </div>
    </section>
    
    ${footerTemplate()}`

function validator(birthDate){
    let pattern = /[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}/gi;
    let [date, month, year] = Boolean(birthDate.match(pattern)) ? birthDate.split('-') : [0,0,0];
    let dateObj = new Date(Number(year), Number(month) - 1 , Number(date));
    if(dateObj.getFullYear() == year && dateObj.getMonth() == Number(month) - 1 && dateObj.getDate() == date && year >= 1800 && year < 3000){
        return true;
    } else{
        return false;
    }
}



export async function generatorPage(ctx){
    ctx.render(generatorTemplate(onChange, onSubmit))

    let outputRoot = document.querySelector('#output h2');
    let infoRoot = document.querySelector('#info');
    let moreinfoRoot = document.querySelector('#moreInfo');



    function onChange(e){
        let date = e.target;
        let genBtn = document.querySelector('button')
        if(!validator(date.value)){
            date.classList.add('error');
            render(html`Грешни данни`, outputRoot)
            genBtn.disabled = true;
        } else{
            date.classList.remove('error');
            render(html``, outputRoot);
            genBtn.disabled = false;
        }
    }

    function onSubmit(e){
        e.preventDefault()

        let formData = new FormData(e.target)

        let birthDate = formData.get('birthDate');
        let [month, date, year] = birthDate.split('-');
        if(Number(year) > 1999){
            month = Number(month) + 40;
         } else if(Number(year) < 1900){
            month = Number(month) + 20;
         }
        let region = formData.get('region');
        let sex = formData.get('sex');
        let oddOrEven = sex == 'male' ? 'нечетно' : 'четно';
        let [regNumFrom, regNumTo] = regionToNums(region)

        let egn = year[2] + year[3] + padLeadZeros(month, 2) + padLeadZeros(date, 2) + 'ABCD';
        let info = `ABC -> ${oddOrEven} число в интервала [${padLeadZeros(regNumFrom, 3)}; ${padLeadZeros(regNumTo, 3)}]`;
        let moreInfo = `D се изчислява по формулата: (${egn[0]}*2 + ${egn[1]}*4 + ${egn[2]}*8 + ${egn[3]}*5 + ${egn[4]}*10 + ${egn[5]}*9 + A*7 + B*3 + C*6) / 11`
        
        render(html`${egn}`, outputRoot)
        render(html`${info}`, infoRoot)
        render(html`${moreInfo}`, moreinfoRoot)
    }
}

function regionToNums(region){
    let regNumFrom = 0;
    let regNumTo = 0;
    switch(region){
        case 'Благоевград':
            regNumFrom = 0;
            regNumTo = 43;
            break;
        case 'Бургас':
            regNumFrom = 44;
            regNumTo = 93;
            break;
        case 'Варна':
            regNumFrom = 94;
            regNumTo = 139;
            break;
        case 'Велико Търново':
            regNumFrom = 140;
            regNumTo = 169
            break;
        case 'Видин':
            regNumFrom = 170;
            regNumTo = 183
            break;
        case 'Враца':
            regNumFrom = 184;
            regNumTo = 217
            break;
        case 'Габрово':
            regNumFrom = 218;
            regNumTo = 233
            break;
        case 'Кърджали':
            regNumFrom = 234;
            regNumTo = 281
            break;
        case 'Кюстендил':
            regNumFrom = 282;
            regNumTo = 301
            break;
        case 'Ловеч':
            regNumFrom = 302;
            regNumTo = 319
            break;
        case 'Монтана':
            regNumFrom = 320;
            regNumTo = 341
            break;
        case 'Пазарджик':
            regNumFrom = 342;
            regNumTo = 377
            break;
        case 'Перник':
            regNumFrom = 378;
            regNumTo = 395
            break;
        case 'Плевен':
            regNumFrom = 396;
            regNumTo = 435
            break;
        case 'Пловдив':
            regNumFrom = 436;
            regNumTo = 501
            break;
        case 'Разград':
            regNumFrom = 502;
            regNumTo = 527
            break;
        case 'Русе':
            regNumFrom = 528;
            regNumTo = 555
            break;
        case 'Силистра':
            regNumFrom = 556;
            regNumTo = 575
            break;
        case 'Сливен':
            regNumFrom = 576;
            regNumTo = 601;
            break;
        case 'Смолян':
            regNumFrom = 602;
            regNumTo = 623
            break;
        case 'София – град':
            regNumFrom = 624
            regNumTo = 721
            break;
        case 'София – окръг':
            regNumFrom = 722;
            regNumTo = 751
            break;
        case 'Стара Загора':
            regNumFrom = 752;
            regNumTo = 789
            break;
        case 'Добрич ':
            regNumFrom = 790;
            regNumTo = 821
            break;
        case 'Търговище':
            regNumFrom = 822;
            regNumTo = 843
            break;
        case 'Хасково':
            regNumFrom = 844;
            regNumTo = 871
            break;
        case 'Шумен':
            regNumFrom = 872;
            regNumTo = 903;
            break;
        case 'Ямбол':
            regNumFrom = 904;
            regNumTo = 925;
            break;
        case 'Друг/Неизвестен':
            regNumFrom = 926;
            regNumTo = 999;
            break;
    }
    return [regNumFrom, regNumTo];
}

function padLeadZeros(num, size) {
    var res = num+"";
    while (res.length < size) res = "0" + res;
    return res;
}