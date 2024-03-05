/* https://greensock.com/gsap */
// TweenLite.set("#petals", { perspective:600 })
TweenLite.set("img", { xPercent:"-50%", yPercent:"-50%" })

var total = 50;
var warp = document.getElementById("petals"),
w = window.innerWidth,
h = window.innerHeight;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    TweenLite.set(Div, { attr: { class:'dot' }, x:R(0,w), y:R(-200,-150), z:R(-200,200)});
    warp.appendChild(Div);
    animm(Div);
}

function animm(elm) {
    TweenMax.to(elm,R(6,15), { y:h+100, ease:Linear.easeNone, repeat:-1, delay:-15 });
    TweenMax.to(elm,R(4,8), { x:'+=100', rotationZ:R(0,180), repeat:-1, yoyo:true, ease:Sine.easeInOut });
    TweenMax.to(elm,R(2,8), { rotationX:R(0,360), rotationY:R(0,360), repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:-5 });
};

function R(min,max) { return min+Math.random() * (max-min) };

var title_block = document.getElementById('title')

if(location.search.split('for=')[1] == 'sabina'){
    title_block.innerText = 'Сабина, с 8 марта!'
    var with_love = 'Дорогая наша, от всей дружной компании хотим поздравить тебя с Международным Женским Днем! Пусть этот день будет наполнен радостью, улыбками и теплом. Желаем тебе счастья, любви и удачи во всех начинаниях!'
}else if(location.search.split('for=')[1] == 'albina'){
    title_block.innerText = 'Альбина, с 8 марта!'
    var with_love = 'С праздником, дорогая! Пусть в этот день тебя окружают только светлые и радостные моменты. Желаем тебе крепкого здоровья, море позитива и улыбок на каждый день!'
}else if(location.search.split('for=')[1] == 'valeriya'){
    title_block.innerText = 'Валерия, с 8 марта!'
    var with_love = 'Поздравляем тебя с Международным Женским Днем! Пусть этот день принесет тебе много радости, улыбок и приятных сюрпризов. Будь счастлива и любима'
}else if(location.search.split('for=')[1] == 'adema'){
    title_block.innerText = 'Адема, с 8 марта!'
    var with_love = 'Поздравляем тебя с Международным Женским Днем! Пусть в твоей жизни будет много радости, улыбок и любви. Желаем тебе быть всегда такой же яркой и удивительной, как сегодня!'
}else if(location.search.split('for=')[1] == 'kuralay'){
    title_block.innerText = 'Куралай, с 8 марта!'
    var with_love = 'С днем весны тебя! Пусть этот день будет началом новых свершений и ярких событий. Желаем тебе ярких эмоций, удачи и счастья!'
}else if(location.search.split('for=')[1] == 'natalya'){
    title_block.innerText = 'Наталья, с 8 марта!'
    var with_love = 'С праздником тебя! Пусть этот день принесет тебе много радости, улыбок и приятных сюрпризов. Желаем тебе быть счастливой каждый день и в любой ситуации!'
}else if(location.search.split('for=')[1] == 'zhanel'){
    title_block.innerText = 'Жанель, с 8 марта!'
    var with_love = 'Поздравляем тебя с Международным Женским Днем! Пусть этот день будет наполнен теплом, заботой и любовью. Желаем тебе счастья, успехов и благополучия!'
}else if(location.search.split('for=')[1] == 'galiya'){
    title_block.innerText = 'Галия, с 8 марта!'
    var with_love = 'С праздником весны тебя! Пусть этот день будет полон радости, улыбок и приятных сюрпризов. Желаем тебе быть всегда такой же чудесной и веселой, как сегодня!'
}else if(location.search.split('for=')[1] == 'valentina'){
    title_block.innerText = 'Валентина, с 8 марта!'
    var with_love = 'Поздравляем тебя с Международным Женским Днем! Пусть этот день станет началом новых достижений и свершений. Желаем тебе быть счастливой и уверенной в себе каждый день!'
}

/* https://mattboldt.com/typed.js/ */
var typed = new Typed('#text', {
    strings: [with_love],
    startDelay: 3000,
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function() {
        var author = document.getElementById("author");
        author.style.opacity = 1;
    }
});
