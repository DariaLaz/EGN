function validate(){
    let egnEl = document.querySelector('#egn').value;
    if(!egnEl.match(/^\d{10}$/g)){
        document.querySelector('#output h2').textContent = 'Невалидно';
        document.querySelector('#moreInfo').textContent = 'ЕГН трябва да е точно 10 ЦИФРИ';
        return;
    }
    let year = '';
    year += egnEl[0] + egnEl[1];
    let month = '';
    month = egnEl[2] + egnEl[3];
    let date = '';
    date = egnEl[4] + egnEl[5];
    let region = '';
    let regionNum = Number(egnEl[6] + egnEl[7]  + egnEl[8]);
    let sex = '';
    let monthText;


    if(Number(egnEl[8]) % 2 != 0){
        sex = 'жена';
    } else{
        sex = 'мъж';
    }

    if(Number(month) < 20){
        year = '18' + year;
        month = Number(month) - 20;
    } else if(Number(month) < 40) {
        year = '19' + year;
    } else {
        year = '20' + year;
        month = Number(month) - 40;
    }

    if(Number(month) > 12){
        document.querySelector('#output h2').textContent = 'Невалидно!';
        document.querySelector('#moreInfo').textContent = `Невалиден месец на раждане.`;
        return;
    }
    switch(Number(month)){
        case 1: monthText = 'януари'; break;
        case 2: monthText = 'февруари';break;
        case 3: monthText = 'март';break;
        case 4: monthText = 'април';break;
        case 5: monthText = 'май';break;
        case 6: monthText = 'юни';break;
        case 7: monthText = 'юли';break;
        case 8: monthText = 'август';break;
        case 9: monthText = 'септември';break;
        case 10: monthText = 'октомври';break;
        case 11: monthText = 'ноември';break;
        case 12: monthText = 'декември';break;

    }
    
    switch(Number(month)){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if(Number(date) > 31){
                document.querySelector('#output h2').textContent = 'Невалидно!';
                document.querySelector('#moreInfo').textContent = `Невалидна дата на раждане. Месец ${monthText} има 31 дена.`;
                return;
            }
        break;
        case 4:
        case 6:
        case 9:
        case 11:
            if(Number(date) > 30){
                document.querySelector('#output h2').textContent = 'Невалидно!';
                document.querySelector('#moreInfo').textContent = `Невалидна дата на раждане. Месец ${monthText} има 30 дена.`;
                return;
            }
        break;
        case 2:
            if((Number(year) % 4 == 0) && Number(date) > 29){
                document.querySelector('#output h2').textContent = 'Невалидно!';
                document.querySelector('#moreInfo').textContent = `Невалидна дата на раждане. Месец ${monthText} има 29 дена през ${year} година.`;
                return;
            } else if (Number(date) > 28){
                document.querySelector('#output h2').textContent = 'Невалидно!';
                document.querySelector('#moreInfo').textContent = `Невалидна дата на раждане. Месец ${monthText} има 28 дена през ${year} година.`;
                return;
            }
            break;
    }
    

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

    
    document.querySelector('#output h2').textContent = 'Валидно!';
    document.querySelector('#moreInfo').textContent = `Това ЕГН е на ${sex}, роден/а на ${date} ${monthText} ${year} г. в област ${region} `;
    
}