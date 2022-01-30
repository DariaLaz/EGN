function generate(){
    let onClick = () => {
        let birthDate = document.getElementsByTagName('input')[0].value;
       
        let [month, date, year] = birthDate.split('/');
        let region = document.querySelector('#region').value;
        let sex = document.querySelector('#sex').value;
        let oddOrEven;
        let [regNumFrom, regNumTo] = regionToNums(region)

        if(Number(year) > 1999){
           month = Number(month) + 40;
        } else if(Number(year) < 1900){
           month = Number(month) + 20;
        }

        if(sex == 'male'){
           oddOrEven = 'нечетно';
        } else{
           oddOrEven = 'четно';
        }

        let egn = '';
        egn = year[2] + year[3] + padLeadZeros(month, 2) + padLeadZeros(date, 2) + 'ABCD';

        document.querySelector('#output h2').textContent = egn;
        let info = `ABC -> ${oddOrEven} число в интервала [${padLeadZeros(regNumFrom, 3)}; ${padLeadZeros(regNumTo, 3)}]`;
        let moreInfo = `D се изчислява по формулата: (${egn[0]}*2 + ${egn[1]}*4 + ${egn[2]}*8 + ${egn[3]}*5 + ${egn[4]}*10 + ${egn[5]}*9 + A*7 + B*3 + C*6) / 11`
        document.querySelector('#info').textContent = info;
        document.querySelector('#moreInfo').textContent = moreInfo;
    }
    document.querySelector('button').addEventListener('click', onClick)
}

function padLeadZeros(num, size) {
    var res = num+"";
    while (res.length < size) res = "0" + res;
    return res;
}

function validateDate() {
    let birthDate = document.getElementsByTagName('input')[0];
    let pattern = /\w+\/\w+\/\w+/;
    const validator = (e) =>{
        if(!pattern.test(birthDate.value)){
            e.target.classList.add('error');
            document.querySelector('#output h2').textContent = '';
            document.querySelector('#info').textContent = 'Грешни данни';
            document.querySelector('#moreInfo').textContent = '';
        }
        else{
            e.target.classList.remove('error');
        }
    }
    birthDate.addEventListener('change', validator)
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