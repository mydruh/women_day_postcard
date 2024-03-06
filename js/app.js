// const InitAuth = require("./auth.js").InitAuth;
// import dotenv from 'dotenv';
import { InitAuth, GetUserInfo } from "./auth.js";
import Typed from 'typed.js';

// dotenv.config();

const main = async () => {
  await InitAuth();
  const userInfo = GetUserInfo()
  console.log(userInfo);

  /* https://greensock.com/gsap */
  // TweenLite.set("#petals", { perspective:600 })
  TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" });

  var total = 50;
  var warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

  for (let i = 0; i < total; i++) {
    var Div = document.createElement("div");
    TweenLite.set(Div, {
      attr: { class: "dot" },
      x: R(0, w),
      y: R(-200, -150),
      z: R(-200, 200),
    });
    warp.appendChild(Div);
    animm(Div);
  }

  function animm(elm) {
    TweenMax.to(elm, R(6, 15), {
      y: h + 100,
      ease: Linear.easeNone,
      repeat: -1,
      delay: -15,
    });
    TweenMax.to(elm, R(4, 8), {
      x: "+=100",
      rotationZ: R(0, 180),
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
    });
    TweenMax.to(elm, R(2, 8), {
      rotationX: R(0, 360),
      rotationY: R(0, 360),
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
      delay: -5,
    });
  }

  function R(min, max) {
    return min + Math.random() * (max - min);
  }

  if (window.screen.width < 500) {
    var card = document.getElementById("card");

    card.style.maxWidth = "300px";
    card.style.transform = "translate3d(-47%, -50%, 0) rotateY(10deg)";
  }

  var title_block = document.getElementById("title");
  const congrats = {
    'islamova.s@appleity.kz': {
      title: "Сабина, с 8 марта!",
      message:
        "Дорогая наша, от всей дружной компании хотим поздравить тебя с Международным Женским Днем! Пусть этот день будет наполнен радостью, улыбками и теплом. Желаем тебе счастья, любви и удачи во всех начинаниях!",
    },
    'ismagulova.a@appleity.kz': {
      title: "Альбина, с 8 марта!",
      message:
        "С праздником, дорогая! Пусть в этот день тебя окружают только светлые и радостные моменты. Желаем тебе крепкого здоровья, море позитива и улыбок на каждый день!",
    },
    'khovina.v@appleity.kz': {
      title: "Валерия, с 8 марта!",
      message:
        "Поздравляем тебя с Международным Женским Днем! Пусть этот день принесет тебе много радости, улыбок и приятных сюрпризов. Будь счастлива и любима",
    },
    'kuanysheva.a@appleity.kz': {
      title: "Адема, с 8 марта!",
      message:
        "Поздравляем тебя с Международным Женским Днем! Пусть в твоей жизни будет много радости, улыбок и любви. Желаем тебе быть всегда такой же яркой и удивительной, как сегодня!",
    },
    'amantayeva.k@appleity.kz': {
      title: "Куралай, с 8 марта!",
      message:
        "С днем весны тебя! Пусть этот день будет началом новых свершений и ярких событий. Желаем тебе ярких эмоций, удачи и счастья!",
    },
    'barskaya.n@appleity.kz': {
      title: "Наталья, с 8 марта!",
      message:
        "С праздником тебя! Пусть этот день принесет тебе много радости, улыбок и приятных сюрпризов. Желаем тебе быть счастливой каждый день и в любой ситуации!",
    },
    'kairzhanova.z@appleity.kz': {
      title: "Жанель, с 8 марта!",
      message:
        "Поздравляем тебя с Международным Женским Днем! Пусть этот день будет наполнен теплом, заботой и любовью. Желаем тебе счастья, успехов и благополучия!",
    },
    'seilova.g@appleity.kz': {
      title: "Галия, с 8 марта!",
      message:
        "С праздником весны тебя! Пусть этот день будет полон радости, улыбок и приятных сюрпризов. Желаем тебе быть всегда такой же чудесной и веселой, как сегодня!",
    },
    'tsay.v@appleity.kz': {
      title: "Валентина, с 8 марта!",
      message:
        "Поздравляем тебя с Международным Женским Днем! Пусть этот день станет началом новых достижений и свершений. Желаем тебе быть счастливой и уверенной в себе каждый день!",
    },
    'yesbolatov.s@applecity.kz': {
      title: `С 8 марта, Султан!`,
      message: 'Skrillex top1!'
    },
    default: {
      title: `С 8 марта, ${userInfo.givenName}!`,
      message:
        "Поздравляем тебя с Международным Женским Днем! Пусть этот день станет началом новых достижений и свершений. Желаем тебе быть счастливой и уверенной в себе каждый день!",
    },
  }
  const congrat = congrats[userInfo.email] || congrats.default;
  title_block.innerText = congrat.title;
  var with_love = congrat?.message


  /* https://mattboldt.com/typed.js/ */
  var typed = new Typed("#text", {
    strings: [with_love],
    startDelay: 3000,
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function () {
      var author = document.getElementById("author");
      author.style.opacity = 1;

        setTimeout(() => {
          var button  = document.getElementById("next-button");
          button.style.opacity = 1;
        }, 2000);
    },
  });
};

main();
