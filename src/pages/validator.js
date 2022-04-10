import { html, render } from "../lib.js";
import { footerTemplate } from "./footerTemplate.js";

const validatorTemplate = (validate) => html`
    <section>
        <span id='backBut'>
            <a href="/">Назад</a>
        </span>
        <h1>ЕГН Валидатор</h1>
        <div id='input'>
            <form @submit=${validate}>
                <label>Въведете ЕГН:</label>
                <input type="text" id="egn" name="egn">
                <button type="submit" id="validateBut" class="bigBut">Валидирай</button>
            </form>
        </div>
        <div id='output'>
            <h2></h2> <!--- Валидно; невалидно егн --->
            <span id='moreInfo'></span>
        </div>
    </section>
    ${footerTemplate()}`

export async function validatorPage(ctx){
    ctx.render(validatorTemplate(validate))

    function validate(e){
        e.preventDefault()
        const formData = new FormData(e.target);
        let egn = formData.get('egn')
        
        let outputRoot = document.querySelector('#output h2');
        let moreinfoRoot = document.querySelector('#moreInfo');

        if(dateValidator(getDateMonthAndYear(egn)[2], getDateMonthAndYear(egn)[0], getDateMonthAndYear(egn)[1])){
            render(html`<span>Валидно</span> `, outputRoot)
            render(html`<span>${egn} e ЕГН на ${getGender(egn)}, роден/а на ${getDateMonthAndYear(egn)[2]} ${getMonthAsText(getDateMonthAndYear(egn)[0])} ${getDateMonthAndYear(egn)[1]} г. в област ${getRegion(egn)}</span>`, moreinfoRoot)
            e.target.reset();
        } else{
            render(html`<span>Невалидно</span> `, outputRoot)
            render(html``, moreinfoRoot)
        }
    }
}



function getGender(egn){
    if(Number(egn[8]) % 2 != 0){
       return 'жена';
    } else{
       return 'мъж';
    }
}

function getDateMonthAndYear(egn){
    let year = `${egn[0]}${egn[1]}`;
    let month = `${egn[2]}${egn[3]}`;
    let date = `${egn[4]}${egn[5]}`

    if(Number(month) < 20){
        year = '18' + year;
        month = Number(month) - 20;
    } else if(Number(month) < 40) {
        year = '19' + year;
    } else {
        year = '20' + year;
        month = Number(month) - 40;
    }

    return [month, year, date]
}


function dateValidator(date, month, year){
    let dateObj = new Date(Number(year), Number(month) - 1 , Number(date));
    if(!(dateObj.getFullYear() == year && dateObj.getMonth() == Number(month) - 1 && dateObj.getDate() == date)){  
        return false;
    }
    return true;
}

function getRegion(egn){
    let regionNum = Number(egn[6] + egn[7]  + egn[8])
    let region = ''
    if(regionNum <= 43){
        region = 'Благоевград'
    } else if(regionNum <= 93){
        region = 'Бургас'
    } else if(regionNum <= 139){
        region = 'Варна'
    }  else if(regionNum <= 169){
        region = 'Велико Търново'
    }  else if(regionNum <= 183){
        region = 'Видин'
    }  else if(regionNum <= 217){
        region = 'Враца'
    }  else if(regionNum <= 233){
        region = 'Габрово'
    }  else if(regionNum <= 281){
        region = 'Кърджали'
    }  else if(regionNum <= 301){
        region = 'Кюстендил'
    }  else if(regionNum <= 319){
        region = 'Ловеч'
    }  else if(regionNum <= 341){
        region = 'Монтана'
    }  else if(regionNum <= 377){
        region = 'Пазарджик'
    }  else if(regionNum <= 395){
        region = 'Перник'
    }  else if(regionNum <= 435){
        region = 'Плевен'
    }  else if(regionNum <= 501){
        region = 'Пловдив'
    }  else if(regionNum <= 527){
        region = 'Разград'
    }  else if(regionNum <= 555){
        region = 'Русе'
    }  else if(regionNum <= 575){
        region = 'Силистра'
    }  else if(regionNum <= 601){
        region = 'Сливен'
    }  else if(regionNum <= 623){
        region = 'Смолян'
    }  else if(regionNum <= 721){
        region = 'София - град'
    }  else if(regionNum <= 751){
        region = 'София - окръг'
    }  else if(regionNum <= 789){
        region = 'Стара Загора'
    }  else if(regionNum <= 821){
        region = 'Добрич'
    }  else if(regionNum <= 843){
        region = 'Търговище'
    }  else if(regionNum <= 871){
        region = 'Хасково'
    }  else if(regionNum <= 903){
        region = 'Шумен'
    }  else if(regionNum <= 925){
        region = 'Ямбол'
    } else{
        region = 'Друг/Неизвестен'
    }
    return region;
}

function getMonthAsText(n){
    switch(n){
        case 1: return 'януари'; 
        case 2: return 'февруари';
        case 3: return 'март';
        case 4: return 'април';
        case 5: return 'май';
        case 6: return 'юни';
        case 7: return 'юли';
        case 8: return 'август';
        case 9: return 'септември';
        case 10: return 'октомври';
        case 11: return 'ноември';
        case 12: return 'декември';
    }
}