const date = new Date();
const tsNow = Math.floor(Date.now() / 1000);

const tsInput = document.getElementById('timestamp');
const timestamp2 = document.getElementById('timestamp2');
tsInput.value = tsNow;
timestamp2.innerText = tsNow;

const dateNow = document.getElementById('dateNow');
dateNow.innerText = date.toLocaleString('fr-FR', {timeZone: 'Europe/Paris'});

const browserTime = document.getElementById('browserTime');
browserTime.innerText = date.toLocaleTimeString('fr-FR', {timeZone: 'Europe/Paris'});
setInterval(function() {
    const date = new Date();
    browserTime.innerText = date.toLocaleTimeString('fr-FR', {timeZone: 'Europe/Paris'});
}, 1000);

const yearSelect = document.getElementById('annee')
for(let year = date.getFullYear() + 2; year >= 1900 ; year--) {
    const opt = document.createElement('option');
    opt.value = year;
    opt.innerText = year;
    if (year === date.getFullYear()) opt.selected = true;
    yearSelect.add(opt, null);
}

const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aout',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
];

const monthSelect = document.getElementById('mois');
months.forEach((m, k) => {
    const opt = document.createElement('option');
    opt.value = k;
    opt.innerText = (k < 9 ? '0' : '') + (k + 1) + ' - ' + m;
    if (date.getMonth() === k) {
        opt.selected = true;
    }
    monthSelect.add(opt, null);
});

const daySelect = document.getElementById('jour');
for (let day = 1; day <= 31; day++) {
    const opt = document.createElement('option');
    opt.value = day;
    opt.innerText = day;

    if (date.getDate() === day) opt.selected = true;
    daySelect.add(opt, null);
}

const hourSelect = document.getElementById('heure');
for (let hour = 0; hour < 24; hour++) {
    const opt = document.createElement('option');
    opt.value = hour;
    opt.innerText = hour;

    if (date.getHours() === hour) opt.selected = true;
    hourSelect.add(opt, null);
}

const minutesSelect = document.getElementById('minute');
for (let minute = 0; minute < 60; minute++) {
    const opt = document.createElement('option');
    opt.value = minute;
    opt.innerText = minute;

    if (date.getMinutes() === minute) opt.selected = true;
    minutesSelect.add(opt, null);
}

const secondsSelect = document.getElementById('seconde');
for (let second = 0; second < 60; second++) {
    const opt = document.createElement('option');
    opt.value = second;
    opt.innerText = second;

    if (date.getSeconds() === second) opt.selected = true;
    secondsSelect.add(opt, null);
}



document.getElementById('dateToTimestamp').addEventListener('click', function(e) {
    e.preventDefault();
    const dateToConvert = new Date();
    dateToConvert.setFullYear(parseInt(yearSelect.value));
    dateToConvert.setMonth(parseInt(monthSelect.value));
    dateToConvert.setHours(parseInt(hourSelect.value));
    dateToConvert.setDate(parseInt(daySelect.value));
    dateToConvert.setSeconds(parseInt(secondsSelect.value));
    timestamp2.innerText = Math.floor(dateToConvert.getTime() / 1000);
});

document.getElementById('timestampToDate').addEventListener('click', function (e) {
    e.preventDefault();
    const dateToConvert = new Date();
    dateToConvert.setTime(tsInput.value * 1000);
    dateNow.innerText = dateToConvert.toLocaleString('fr-FR', {timeZone: 'Europe/Paris'});
})