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
    dateValidator(date, month, year)
    if(dateValidator(date, month, year)){
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
        document.querySelector('#moreInfo').textContent = `Това ЕГН е на ${sex}, роден/а на ${date} ${getMonthAsText(month)} ${year} г. в област ${region} `;
    }
}


function dateValidator(date, month, year){
    let dateObj = new Date(Number(year), Number(month) - 1 , Number(date));
    if(!(dateObj.getFullYear() == year && dateObj.getMonth() == Number(month) - 1 && dateObj.getDate() == date)){  
        document.querySelector('#output h2').textContent = 'Невалидно!';
        document.querySelector('#moreInfo').textContent = ``;
        return false;
    }
    return true;
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