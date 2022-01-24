function generate(){
    let year = document.querySelector('#year').value;
    let month = (document.querySelector('#month').value);
    let date = document.querySelector('#date').value;
    let region = document.querySelector('#region').value;
    let sex = document.querySelector('#sex').value;

    let regNumFrom;
    let regNumTo;
    let oddOrEven;

    if(sex == 'male'){
        oddOrEven = 'нечетно';
    } else{
        oddOrEven = 'четно';
    }

    if(Number(year) < 1800 || Number(year) > 2099){
        document.querySelector('#output h2').textContent = `Грешни данни!`;
        document.querySelector('#result').textContent = `Годината трябва е между 1800 и 2099`;
    } 
    
    switch(month){
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
            if(Number(date) > 31){
                document.querySelector('#output h2').textContent = `Грешни данни!`;
                document.querySelector('#result').textContent = `Невалидна дата на раждане. Този месец има 31 дена.`;
                return;
            }
        break;
        case '4':
        case '6':
        case '9':
        case '11':
            if(Number(date) > 30){
                document.querySelector('#output h2').textContent = `Грешни данни!`;
                document.querySelector('#result').textContent = `Невалидна дата на раждане. Този месец  има 30 дена.`;
                return;
            }
        break;
        case '2':
            if((Number(year) % 4 == 0) && Number(date) > 29){
                document.querySelector('#output h2').textContent = `Грешни данни!`;
                document.querySelector('#result').textContent = `Невалидна дата на раждане. Месец февруари има 29 дена през ${year} година.`;
                return;
            } else if (Number(date) > 28){
                document.querySelector('#output h2').textContent = `Грешни данни!`;
                document.querySelector('#result').textContent = `Невалидна дата на раждане. Месец февруари има 28 дена през ${year} година.`;
                return;
            }
            break;
    }
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
    let egn = '';
    egn = year[2] + year[3] + padLeadZeros(month, 2) + padLeadZeros(date, 2) + 'ABCD';
    
    document.querySelector('#output h2').textContent = egn;
    let info = `ABC -> ${oddOrEven} число в интервала [${padLeadZeros(regNumFrom, 3)}; ${padLeadZeros(regNumTo, 3)}]`;
    let moreInfo = `D се изчислява по формулата: (${egn[0]}*2 + ${egn[2]}*4 + ${egn[3]}*8 + ${egn[4]}*5 + ${egn[5]}*10 + ${egn[6]}*9 + A*7 + B*3 + C*6) / 11`

    document.querySelector('#info').textContent = info;
    document.querySelector('#moreInfo').textContent = moreInfo;


    function padLeadZeros(num, size) {
        var res = num+"";
        while (res.length < size) res = "0" + res;
        return res;
    }
}