let app;

app = new PIXI.Application({
  backgroundColor: 'black',
  backgroundAlpha: 1,
  // opacity: .5,
  antialias: true,
  width: 850,
  height: 650
});
document.body.appendChild(app.view);

let nivel = 1;
let voltando = 0;
let vezes98 = 0;

// ? GRID STYLE

let quadraHori = 0;
let quadraVerti = 0;

for (i = 0; quadraHori < Math.round(document.querySelector("canvas").offsetHeight); i++) {
  quadraHori = i * 50;

  let gridHoriz = new PIXI.Graphics();
  gridHoriz.beginFill(0x367e7f);
  // gridHoriz.beginFill(0x0064c1);
  gridHoriz.drawRect(0, quadraHori, 850, 1);
  gridHoriz.alpha = .2;
  app.stage.addChild(gridHoriz);
}

for (i = 0; quadraVerti < Math.round(document.querySelector("canvas").offsetWidth); i++) {
  quadraVerti = i * 50;

  let gridVert = new PIXI.Graphics();
  gridVert.beginFill(0x367e7f);
  gridVert.drawRect(quadraVerti, 0, 1, 650);
  gridVert.alpha = .2;
  app.stage.addChild(gridVert);
}

// & CONTAINERS
let titleScreen;
titleScreen = new PIXI.Container();
app.stage.addChild(titleScreen);

// ? SOUND
const opening = PIXI.sound.Sound.from('./sound/Cursor1.mp3');
opening.volume = 0.25;
const openingClickPlay = () => {
  opening.play();
}

const resetSound = PIXI.sound.Sound.from('./sound/reset.mp3');
resetSound.volume = 0.25;
const soundResetPlay = () => {
  resetSound.play();
}

const next = PIXI.sound.Sound.from('./sound/Item1.mp3');
next.volume = 0.25;
const soundNextPlay = () => {
  next.play();
}

const error = PIXI.sound.Sound.from('./sound/error.mp3');
error.volume = 0.25;
const soundErrorPlay = () => {
  error.play();
}

const tada = PIXI.sound.Sound.from('./sound/tada.mp3');
tada.volume = 0.25;
const soundTadaPlay = () => {
  tada.play();
}

const freeze = PIXI.sound.Sound.from('./sound/freeze.mp3');
freeze.volume = 0.5;
const soundFreezePlay = (turn) => {
  if (turn === false) {
    freeze.stop();
  }
  else {
    freeze.play(({
      loop: true,
    }));
  }
}

const music = PIXI.sound.Sound.from('./sound/adventure.ogg');
music.volume = 0.05;
const soundMusicPlay = (turn) => {
  if (turn === false) {
    music.stop();
  }
  else {
    music.play(({
      loop: true,
    }));
  }
}

const win = PIXI.sound.Sound.from('./sound/win.ogg');
win.volume = 0.05;
const soundWinPlay = (turn) => {
  if (turn === false) {
    win.stop();
  }
  else {
    win.play(({
      loop: true,
    }));
  }
}

// Load them google fonts before starting...!
window.WebFontConfig = {
  google: {
    families: ['Happy Monkey'],
  },

  active() {
    if (localStorage.getItem("secret") === '1') {
      alert("He is free now :)")
    }
    else {
      init();
    }
  },
};

/* eslint-disable */
// include the web-font loader script
(function () {
  const wf = document.createElement('script');
  wf.src = `${document.location.protocol === 'https:' ? 'https' : 'http'
    }://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js`;
  wf.type = 'text/javascript';
  wf.async = 'true';
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
}());
/* eslint-enabled */

// TELA DE INÍCIO

function init() {

  console.clear();

  const favicon = PIXI.Sprite.from('./img/favicon.png');
  favicon.anchor.set(0.5);
  favicon.x = (app.screen.width / 2) - 149.5;
  favicon.y = (app.screen.height / 2) + .5;
  favicon.interactive = true;
  favicon.buttonMode = true;
  favicon.on('pointerdown', onButtonDown);


  // create some white text using the Snippet webfont
  const textSample = new PIXI.Text('Fruit-box', {
    fontFamily: 'Happy Monkey',
    fontSize: 50,
    fill: 'white',
    align: 'left',
  });
  textSample.anchor.set(0.5);
  textSample.position.set((app.screen.width / 2) + 6, (app.screen.height / 2) + 2);
  textSample.resolution = 2;
  textSample.interactive = true;
  textSample.buttonMode = true;
  textSample.on('pointerdown', onButtonDown);

  // create some white text using the Snippet webfont
  const textDOS = new PIXI.Text('Front-box', {
    fontFamily: 'Happy Monkey',
    fontSize: 56,
    fill: 'white',
    align: 'left',
  });
  textDOS.anchor.set(0.5);
  textDOS.position.set((app.screen.width / 2) + 6, (app.screen.height / 2) + 2);
  textDOS.resolution = 2;

  const textSample1 = new PIXI.Text('Created by DevAndreAkira', {
    fontFamily: 'Happy Monkey',
    fontSize: 20,
    fill: 'white',
    align: 'left',
  });
  textSample1.anchor.set(0.5);
  textSample1.resolution = 2;
  textSample1.position.set(app.screen.width / 2, (app.screen.height / 2) - 150);
  //console.clear()

  const textSample2 = new PIXI.Text('Press to start', {
    fontFamily: 'Happy Monkey',
    fontSize: 20,
    fill: 'white',
    align: 'left',
  });
  textSample2.resolution = 2;
  textSample2.interactive = true;
  textSample2.buttonMode = true;
  textSample2.on('pointerdown', onButtonDown);
  textSample2.anchor.set(0.5);
  textSample2.resolution = 2;
  textSample2.position.set(app.screen.width / 2, (app.screen.height / 2) + 65);
  //console.clear()

  setTimeout(() => {
    // titleScreen.addChild(textDOS);
    // textoFade(textDOS, 'in', 'DOS Games August Jam 2022', 20, 0, 0, 'white')
    // setTimeout(() => {
    //   textoFade(textDOS, 'out');
    //   setTimeout(() => {
    //     soundMusicPlay();
    //   }, 3000)
    // }, 4000)
    titleScreen.addChild(favicon);
    titleScreen.addChild(textSample);
    titleScreen.addChild(textSample1);
    titleScreen.addChild(textSample2);
  }, 500)


  function onButtonDown() {
    // soundMusicPlay(true);
    textSample.interactive = false;
    textSample.buttonMode = false;
    textSample2.interactive = false;
    textSample2.buttonMode = false;
    favicon.interactive = false;
    favicon.buttonMode = false;
    // openingClickPlay();
    textoFade(textSample, 'out');
    textoFade(textSample1, 'out');
    textoFade(textSample2, 'out');
    textoFade(favicon, 'out');
    setTimeout(() => {
      // textoFade(textSample, 'in', "What happens to the technology\nwhen it get unusual?", 20, 0, 0, 'white')
      // setTimeout(() => {
      //   textoFade(textSample, 'out');
      //   setTimeout(() => {
      // soundMusicPlay();
      //   }, 5000)
      // }, 3000)
      comecarGame()
      soundMusicPlay(true);
    }, 5500)
  }
}

//* GAME START

function comecarGame() {

  let nivelScreen;
  nivelScreen = new PIXI.Container();
  app.stage.addChild(nivelScreen);

  let ultimoPasso;
  let valido = true;
  let arrayParedesX;
  let arrayParedesY;
  let arrayBtnsX;
  let arrayBtnsY;
  let arrayBoxX;
  let arrayBoxY;
  let arrayParedes = [];
  let arrayBtns = [];
  let arrayBox = [];
  let bug = 0;
  let clickOff = 3;

  let textureRight = PIXI.Texture.from('./img/address_book_user_right.png');
  let textureLeft = PIXI.Texture.from('./img/address_book_user.png');

  const protagonista = PIXI.Sprite.from(textureRight);
  protagonista.anchor.set(0.5);
  protagonista.width = 40;
  protagonista.height = 40;

  // ^NÍVEL 1
  function nivel1() {
    console.clear();
    console.log("%cHey! It's no time to explain, you need get out here!", "background: green")
    protagonista.x = app.screen.width / 2;
    protagonista.y = app.screen.height / 2;
    if (bug >= clickOff) {
      arrayParedesX = [];
      arrayParedesY = [];
    }
    else {
      arrayParedesX = [425, 425, 425, 375, 325, 325, 325, 325, 275, 225, 225, 225, 275, 325, 375, 375, 375, 425, 475, 475, 475, 475, 525, 575, 575, 575, 525, 475];
      arrayParedesY = [225, 175, 125, 125, 125, 175, 225, 275, 275, 275, 325, 375, 375, 375, 375, 425, 475, 475, 475, 425, 375, 325, 325, 325, 275, 225, 225, 225];
    }
    arrayBtnsX = [425, 275, 375, 525];
    arrayBtnsY = [425, 325, 175, 275];
    arrayBoxX = [475, 375, 375, 425];
    arrayBoxY = [275, 275, 325, 375];
    return arrayParedesX, arrayParedesY, arrayBtnsX, arrayBtnsY, arrayBoxX, arrayBoxY
  }

  // ^NÍVEL 2
  function nivel2() {
    console.clear();
    console.log("%cYou will repeat this situacion infinity times.\nThey will never let you go because you are dead.", "background: green")
    protagonista.x = 225;
    protagonista.y = 175;
    arrayParedesX = [225, 275, 325, 375, 425, 425, 425, 425, 425, 475, 525, 525, 525, 575, 625, 625, 625, 625, 625, 625, 575, 525, 475, 475, 475, 425, 375, 325, 275, 275, 275, 275, 275, 325, 325, 225, 175, 175, 175, 175, 175];
    arrayParedesY = [125, 125, 125, 125, 125, 175, 225, 275, 325, 325, 325, 275, 225, 225, 225, 275, 325, 375, 425, 475, 475, 475, 475, 425, 525, 525, 525, 525, 525, 475, 425, 375, 325, 325, 375, 325, 325, 275, 225, 175, 125];
    arrayBtnsX = [575, 575, 575];
    arrayBtnsY = [275, 325, 375];
    arrayBoxX = [375, 325, 325];
    arrayBoxY = [225, 225, 275];
    return arrayParedesX, arrayParedesY, arrayBtnsX, arrayBtnsY, arrayBoxX, arrayBoxY
  }

  // ^NÍVEL 3
  function nivel3() {
    console.clear();
    console.log("%cThey want you to work in this boxes forever!\nBecause you are obsolete... Nobody needs you, no more.", "background: green")
    protagonista.x = 275;
    protagonista.y = 275;
    arrayParedesX = [225, 275, 325, 375, 425, 475, 525, 525, 575, 625, 625, 625, 625, 575, 575, 575, 525, 475, 425, 375, 325, 275, 225, 225, 175, 175, 175, 175, 225, 225, 375, 375, 325, 375, 425];
    arrayParedesY = [125, 125, 125, 125, 125, 125, 125, 175, 175, 175, 225, 275, 325, 325, 375, 425, 425, 425, 425, 425, 425, 425, 425, 375, 375, 325, 275, 225, 225, 175, 375, 325, 225, 225, 225];
    arrayBtnsX = [275, 275, 325, 325];
    arrayBtnsY = [325, 375, 375, 325];
    arrayBoxX = [275, 375, 475, 525];
    arrayBoxY = [225, 275, 325, 275];
    return arrayParedesX, arrayParedesY, arrayBtnsX, arrayBtnsY, arrayBoxX, arrayBoxY
  }

  // ^NÍVEL 4
  function nivel4() {
    console.clear();
    console.log("%cSome manage to get out of here. So they can work in their role again. But first, you need get out here.", "background: green")
    protagonista.x = 375;
    protagonista.y = 275;
    arrayParedesX = [375, 425, 475, 525, 525, 525, 525, 575, 575, 575, 575, 575, 525, 475, 425, 375, 325, 325, 325, 325, 325, 325, 325, 375, 375, 375];
    arrayParedesY = [175, 175, 175, 175, 225, 275, 325, 325, 375, 425, 475, 525, 525, 525, 525, 525, 525, 475, 425, 375, 325, 275, 225, 225, 325, 375];
    arrayBtnsX = [375, 375, 425, 475, 525];
    arrayBtnsY = [425, 475, 475, 475, 475];
    arrayBoxX = [425, 425, 475, 425, 475];
    arrayBoxY = [275, 325, 375, 425, 475];
    return arrayParedesX, arrayParedesY, arrayBtnsX, arrayBtnsY, arrayBoxX, arrayBoxY
  }

  // ^NÍVEL 5
  function nivel5() {
    protagonista.x = 325;
    protagonista.y = 175;
    arrayParedesX = [275, 325, 375, 425, 475, 475, 525, 525, 525, 575, 575, 575, 575, 575, 525, 475, 425, 375, 325, 275, 225, 225, 225, 225, 225, 275, 275, 275, 275, 225, 325, 325, 425, 425, 475];
    arrayParedesY = [125, 125, 125, 125, 125, 175, 175, 225, 275, 275, 275, 325, 375, 425, 475, 475, 475, 475, 475, 475, 475, 475, 425, 375, 325, 275, 275, 225, 175, 275, 275, 325, 275, 325, 375];
    arrayBtnsX = [275, 275, 275];
    arrayBtnsY = [325, 375, 425];
    arrayBoxX = [375, 475, 325];
    arrayBoxY = [225, 425, 375];
    return arrayParedesX, arrayParedesY, arrayBtnsX, arrayBtnsY, arrayBoxX, arrayBoxY
  }

  // ^NÍVEL 6
  function nivel6() {
    console.clear();
    protagonista.x = 325;
    protagonista.y = 325;
    arrayParedesX = [225, 275, 325, 325, 325, 375, 425, 475, 525, 575, 575, 575, 575, 575, 525, 525, 525, 475, 425, 375, 375, 325, 275, 225, 225, 225];
    arrayParedesY = [275, 275, 275, 225, 175, 175, 175, 175, 175, 175, 225, 275, 325, 375, 375, 425, 475, 475, 475, 475, 425, 425, 425, 425, 375, 325];
    arrayBtnsX = [425, 475, 475, 425, 375];
    arrayBtnsY = [325, 325, 375, 375, 375];
    arrayBoxX = [325, 375, 375, 425, 475];
    arrayBoxY = [375, 325, 275, 275, 275];
    return arrayParedesX, arrayParedesY, arrayBtnsX, arrayBtnsY, arrayBoxX, arrayBoxY
  }

  // ^NÍVEL 7
  function nivel7() {
    console.clear();
    protagonista.x = 475;
    protagonista.y = 175;
    arrayParedesX = [225, 275, 325, 325, 375, 425, 475, 525, 525, 525, 575, 575, 575, 575, 525, 525, 475, 425, 375, 325, 325, 325, 275, 225, 225, 225];
    arrayParedesY = [175, 175, 175, 125, 125, 125, 125, 125, 175, 225, 225, 275, 325, 375, 375, 425, 425, 425, 425, 425, 375, 325, 325, 325, 275, 225];
    arrayBtnsX = [425, 375, 425, 475];
    arrayBtnsY = [225, 275, 325, 275];
    arrayBoxX = [375, 425, 425, 475];
    arrayBoxY = [225, 275, 325, 325];
    return arrayParedesX, arrayParedesY, arrayBtnsX, arrayBtnsY, arrayBoxX, arrayBoxY
  }

  // ^NÍVEL 8
  function nivel8() {
    console.clear();
    protagonista.x = 475;
    protagonista.y = 175;
    arrayParedesX = [375, 425, 475, 525, 525, 525, 575, 575, 575, 625, 625, 625, 625, 575, 525, 475, 425, 375, 325, 275, 275, 275, 275, 325, 325, 325, 375, 375, 425];
    arrayParedesY = [125, 125, 125, 125, 175, 225, 225, 275, 325, 325, 375, 425, 475, 475, 475, 475, 475, 475, 475, 475, 425, 375, 325, 325, 275, 225, 225, 175, 375];
    arrayBtnsX = [425, 475, 475, 525];
    arrayBtnsY = [175, 175, 225, 275];
    arrayBoxX = [475, 425, 475, 525];
    arrayBoxY = [275, 325, 375, 375];
    return arrayParedesX, arrayParedesY, arrayBtnsX, arrayBtnsY, arrayBoxX, arrayBoxY
  }

  // ^NÍVEL 9
  function nivel9() {
    console.clear();
    protagonista.x = 325;
    protagonista.y = 275;
    arrayParedesX = [275, 325, 375, 425, 475, 525, 575, 625, 625, 625, 625, 625, 625, 625, 575, 525, 475, 425, 375, 325, 275, 275, 275, 275, 275, 275, 425, 425, 575];
    arrayParedesY = [125, 125, 125, 125, 125, 125, 125, 125, 175, 225, 275, 325, 375, 425, 425, 425, 425, 425, 425, 425, 425, 375, 325, 275, 225, 175, 175, 375, 275];
    arrayBtnsX = [425, 425, 425, 475, 475, 475];
    arrayBtnsY = [225, 275, 325, 325, 275, 225];
    arrayBoxX = [375, 375, 375, 475, 525, 525];
    arrayBoxY = [225, 275, 325, 275, 225, 325];
    return arrayParedesX, arrayParedesY, arrayBtnsX, arrayBtnsY, arrayBoxX, arrayBoxY
  }

  // ^NÍVEL 10
  function nivel10() {
    console.clear();
    protagonista.x = 325;
    protagonista.y = 275;
    arrayParedesX = [325, 325, 375, 425, 475, 525, 575, 575, 625, 625, 625, 625, 625, 575, 525, 525, 475, 425, 375, 375, 325, 275, 275, 275, 275, 275];
    arrayParedesY = [175, 125, 125, 125, 125, 125, 125, 175, 175, 225, 275, 325, 375, 375, 375, 425, 425, 425, 425, 375, 375, 375, 325, 275, 225, 175];
    arrayBtnsX = [325, 375, 425, 475, 525, 575];
    arrayBtnsY = [275, 275, 275, 275, 275, 275];
    arrayBoxX = [375, 475, 525, 525, 425, 375];
    arrayBoxY = [225, 225, 225, 325, 325, 325];
    return arrayParedesX, arrayParedesY, arrayBtnsX, arrayBtnsY, arrayBoxX, arrayBoxY
  }

  // // ^NÍVEL 98
  // function nivel98() {
  //   soundFreezePlay(false);
  //   protagonista.x = 25;
  //   protagonista.y = 325;
  //   // console.clear();
  //   vezes98 = vezes98 + 1;
  //   if (vezes98 === 1) {
  //     soundMusicPlay(false);
  //     app.renderer.backgroundAlpha = 1;
  //     app.renderer.backgroundColor = 0x0028b6;
  //   }
  //   if (vezes98 === 2) {
  //     app.renderer.backgroundColor = 0x0d3da9;
  //   }
  //   if (vezes98 === 3) {
  //     app.renderer.backgroundColor = 0x1b539b;
  //   }
  //   if (vezes98 === 4) {
  //     app.renderer.backgroundColor = 0x28688e;
  //   }
  //   if (vezes98 === 5) {
  //     protagonista.width = 35;
  //     protagonista.height = 35;
  //     soundTadaPlay();
  //     app.renderer.backgroundColor = 0x367E7F;
  //     const background = PIXI.Sprite.from('./img/desktop-screen.png');
  //     background.width = app.screen.width;
  //     background.height = app.screen.height;
  //     // background.width = app.screen.width + 500;
  //     // background.height = app.screen.height + 500;
  //     background.anchor.set(0.5);
  //     background.x = app.screen.width / 2;
  //     background.y = app.screen.height / 2;
  //     nivelScreen.addChild(background);
  //     setTimeout(() => {
  //       app.renderer.backgroundColor = 0x000000;
  //       nivel = 11;
  //       reset();
  //     }, 5000)
  //   }
  //   arrayParedesX = [];
  //   arrayParedesY = [];
  //   arrayBtnsX = [];
  //   arrayBtnsY = [];
  //   arrayBoxX = [];
  //   arrayBoxY = [];
  //   return arrayParedesX, arrayParedesY, arrayBtnsX, arrayBtnsY, arrayBoxX, arrayBoxY
  // }

  if (nivel === 1) {
    nivel1();
    configsTela()
    geradorParedes((arrayParedesX.length) - 1);
    geradorBtns((arrayBtnsX.length) - 1);
    geradorBox((arrayBoxX.length) - 1);
  }
  else if (nivel === 2) {
    nivel2();
    configsTela()
    geradorParedes((arrayParedesX.length) - 1);
    geradorBtns((arrayBtnsX.length) - 1);
    geradorBox((arrayBoxX.length) - 1);
  }
  else if (nivel === 3) {
    nivel3();
    configsTela()
    geradorParedes((arrayParedesX.length) - 1);
    geradorBtns((arrayBtnsX.length) - 1);
    geradorBox((arrayBoxX.length) - 1);
  }
  else if (nivel === 4) {
    nivel4();
    configsTela()
    geradorParedes((arrayParedesX.length) - 1);
    geradorBtns((arrayBtnsX.length) - 1);
    geradorBox((arrayBoxX.length) - 1);
  }
  else if (nivel === 5) {
    nivel5();
    configsTela()
    geradorParedes((arrayParedesX.length) - 1);
    geradorBtns((arrayBtnsX.length) - 1);
    geradorBox((arrayBoxX.length) - 1);
  }
  else if (nivel === 6) {
    nivel6();
    configsTela()
    geradorParedes((arrayParedesX.length) - 1);
    geradorBtns((arrayBtnsX.length) - 1);
    geradorBox((arrayBoxX.length) - 1);
  }
  else if (nivel === 7) {
    nivel7();
    configsTela()
    geradorParedes((arrayParedesX.length) - 1);
    geradorBtns((arrayBtnsX.length) - 1);
    geradorBox((arrayBoxX.length) - 1);
  }
  else if (nivel === 8) {
    nivel8();
    configsTela()
    geradorParedes((arrayParedesX.length) - 1);
    geradorBtns((arrayBtnsX.length) - 1);
    geradorBox((arrayBoxX.length) - 1);
  }
  else if (nivel === 9) {
    nivel9();
    configsTela()
    geradorParedes((arrayParedesX.length) - 1);
    geradorBtns((arrayBtnsX.length) - 1);
    geradorBox((arrayBoxX.length) - 1);
  }
  else if (nivel === 10) {
    nivel10();
    configsTela()
    geradorParedes((arrayParedesX.length) - 1);
    geradorBtns((arrayBtnsX.length) - 1);
    geradorBox((arrayBoxX.length) - 1);
  }
  else if (nivel === 11) {
    nivelScreen.destroy();
    protagonista.width = 0;
    protagonista.height = 0;
    nivelScreen.removeChild(protagonista);
    soundMusicPlay(false);
    soundWinPlay();

    // create some white text using the Snippet webfont
    const textEnd = new PIXI.Text((vezes98 === 5) ? 'Congratulations!' : 'Congratulations!', {
      fontFamily: 'Happy Monkey',
      fontSize: 50,
      fill: 'white',
      align: 'left',
    });
    textEnd.anchor.set(0.5);
    textEnd.position.set((app.screen.width / 2), (app.screen.height / 2 - 25));
    textEnd.resolution = 2;
    textEnd.interactive = true;
    textEnd.buttonMode = true;
    textEnd.on('pointerdown', onButtonDown);
    app.stage.addChild(textEnd);

    const textEnd2 = new PIXI.Text((vezes98 === 5) ? "You got all the fruits!" : 'You got all the fruits!', {
      fontFamily: 'Happy Monkey',
      fontSize: 22,
      fill: 'white',
      align: 'left',
    });
    textEnd2.anchor.set(0.5);
    textEnd2.position.set((app.screen.width / 2), (app.screen.height / 2 + 25));
    textEnd2.resolution = 2;
    textEnd2.interactive = true;
    textEnd2.buttonMode = true;
    textEnd2.on('pointerdown', onButtonDown);
    app.stage.addChild(textEnd2);

    function onButtonDown() {
      // localStorage.setItem("secret", 1)
      // FINAL
      window.location.reload();
      // nivel = 1;
      // nivelScreen.destroy();
      // soundMusicPlay(false);
      // init();
    }
  }
  // else if (nivel === 98) {
  //   nivel98();
  // geradorParedes((arrayParedesX.length) - 1);
  // geradorBtns((arrayBtnsX.length) - 1);
  // geradorBox((arrayBoxX.length) - 1);
  // }


  //~ GERADORES

  function configsTela() {
    gerandoBtnConfig('Reset', resetandoNivel, 575, 75, 575, 75);
    gerandoBtnConfig('Mute', tirandoMusica, 625, 75, 625, 75);
  }

  function gerandoBtnConfig(nome, funcao, x, y, textX, textY) {

    const btnConfig = PIXI.Sprite.from('./img/btn_config.png');
    const textureButtonOver = PIXI.Texture.from('./img/btn_config_hover.png');
    const textureButton = PIXI.Texture.from('./img/btn_config.png');

    btnConfig.anchor.set(0.5);
    btnConfig.width = 45;
    btnConfig.height = 50;
    btnConfig.x = x;
    btnConfig.y = y;
    btnConfig.interactive = true;
    btnConfig.buttonMode = true;
    btnConfig.on('pointerdown', funcao)
      .on('pointerover', onButtonOver)
      .on('pointerout', onButtonOut)

    function onButtonOver() {
      this.isOver = true;
      if (this.isdown) {
        return;
      }
      this.texture = textureButtonOver;
    }

    function onButtonOut() {
      this.isOver = false;
      if (this.isdown) {
        return;
      }
      this.texture = textureButton;
    }

    const textConfig = new PIXI.Text(nome, {
      fontFamily: 'Happy Monkey',
      fontSize: 12,
      fill: 'black',
      align: 'left',
    });
    textConfig.anchor.set(0.5);
    textConfig.position.set(textX, textY);
    textConfig.resolution = 2;
    textConfig.interactive = true;
    textConfig.buttonMode = true;
    textConfig.on('pointerdown', funcao);

    return nivelScreen.addChild(btnConfig), nivelScreen.addChild(textConfig);
  }


  function geradorBox(numeroVezes) {
    for (i = 0; i <= numeroVezes; i++) {
      const caixa = PIXI.Sprite.from('./img/box.png');
      arrayBox.push(caixa);
    }

    arrayBox.forEach((e, i) => {
      arrayBox[i].anchor.set(0.5);
      arrayBox[i].width = 50;
      arrayBox[i].height = 50;
      arrayBox[i].x = arrayBoxX[i];
      arrayBox[i].y = arrayBoxY[i];
      nivelScreen.addChild(arrayBox[i]);
    })
  }

  function geradorBtns(numeroVezes) {
    for (i = 0; i <= numeroVezes; i++) {
      let fruits = ["fruit1", "fruit2", "fruit3", "fruit4", "fruit5"];
      const btn = PIXI.Sprite.from('./img/' + fruits[Math.floor(Math.random() * 5) + 0] + '.png');
      arrayBtns.push(btn);
    }

    arrayBtns.forEach((e, i) => {
      arrayBtns[i].anchor.set(0.5);
      arrayBtns[i].width = 30;
      arrayBtns[i].height = 30;
      arrayBtns[i].x = arrayBtnsX[i];
      arrayBtns[i].y = arrayBtnsY[i];
      nivelScreen.addChild(arrayBtns[i]);
    })
  }

  function geradorParedes(numeroVezes) {
    for (i = 0; i <= numeroVezes; i++) {
      const parede = PIXI.Sprite.from('./img/tijolo.png');
      arrayParedes.push(parede);
    }

    arrayParedes.forEach((e, i) => {
      arrayParedes[i].anchor.set(0.5);
      arrayParedes[i].width = 50;
      arrayParedes[i].height = 50;
      arrayParedes[i].x = arrayParedesX[i];
      arrayParedes[i].y = arrayParedesY[i];
      nivelScreen.addChild(arrayParedes[i]);
      colisaoParede(protagonista, '', '', arrayParedes[i])
    })
  }

  //! APAGADORES
  function apagandoBox(numeroVezes) {
    for (i = 0; i <= numeroVezes; i++) {
      const caixa = PIXI.Sprite.from('./img/box.png');
      arrayBox.push(caixa);
    }

    arrayBox.forEach((e, i) => {
      arrayBox[i].anchor.set(0.5);
      arrayBox[i].width = 50;
      arrayBox[i].height = 50;
      arrayBox[i].x = arrayBoxX[i];
      arrayBox[i].y = arrayBoxY[i];
    })
  }

  function apagandoBtns(numeroVezes) {
    for (i = 0; i <= numeroVezes; i++) {
      const btn = PIXI.Sprite.from('./img/btn.png');
      arrayBtns.push(btn);
    }

    arrayBtns.forEach((e, i) => {
      arrayBtns[i].anchor.set(0.5);
      arrayBtns[i].width = 50;
      arrayBtns[i].height = 50;
      arrayBtns[i].x = arrayBtnsX[i];
      arrayBtns[i].y = arrayBtnsY[i];
    })
  }

  function apagandoParedes(numeroVezes) {
    for (i = 0; i <= numeroVezes; i++) {
      const parede = PIXI.Sprite.from('./img/tijolo.png');
      arrayParedes.push(parede);
    }

    arrayParedes.forEach((e, i) => {
      arrayParedes[i].anchor.set(0.5);
      arrayParedes[i].width = 50;
      arrayParedes[i].height = 50;
      arrayParedes[i].x = arrayParedesX[i];
      arrayParedes[i].y = arrayParedesY[i];
      colisaoParede(protagonista, '', '', arrayParedes[i])
    })
  }

  // * FUNÇÕES DO GAME

  function resetandoNivel() {
    if (bug >= clickOff) {

    }
    else {
      soundResetPlay();
      reset();
    }
  }

  function tirandoMusica() {
    soundNextPlay();
    if (music.isPlaying == true) {
      // console.log("Music off")
      soundMusicPlay(false);
      bug = bug + 1;
      if (bug >= clickOff && protagonista.x == 525 && protagonista.y == 425) {
        console.clear();
        soundMusicPlay(false);
        soundErrorPlay();
        setTimeout(() => {
          soundFreezePlay();
        }, 2000)
        protagonista.x = 575;
        protagonista.y = 475;
        app.renderer.backgroundAlpha = 0;
      }
    }
    else {
      soundMusicPlay();
    }
  }

  function reset() {

    apagandoParedes((arrayParedesX.length) - 1);
    apagandoBtns((arrayBtnsX.length) - 1);
    apagandoBox((arrayBoxX.length) - 1);
    for (i = arrayBox.length; i > 0; i--) {
      arrayBox.pop();
    }
    for (i = arrayBtns.length; i > 0; i--) {
      arrayBtns.pop();
    }
    for (i = arrayParedes.length; i > 0; i--) {
      arrayParedes.pop();
    }

    nivelScreen.destroy({ children: true, texture: true, baseTexture: true });
    comecarGame();
  }

  function ganhando() {
    let vezes = 0;
    arrayBtns.forEach((e, i) => {
      arrayBox.forEach((e, j) => {
        if (arrayBtns[i].x === arrayBox[j].x && arrayBtns[i].y === arrayBox[j].y) {
          vezes = vezes + 1;
          // console.log("%cCaixas colocadas: " + vezes, "background:blue");
          if (vezes === arrayBtns.length) {
            soundNextPlay();
            nivel = nivel + 1;
            ganhou = true;
            reset();
          }
        }
      })
    })
  }

  function caixaColisaoParede(xProt, yProt) {
    arrayParedes.forEach((e, i) => {
      arrayBox.forEach((e, j) => {
        if (arrayBox[j].x === arrayParedesX[i] && arrayBox[j].y === arrayParedesY[i]
          || arrayBox[j].x > Math.round(document.querySelector("canvas").offsetWidth)
          || arrayBox[j].x <= 0
          || arrayBox[j].y > Math.round(document.querySelector("canvas").offsetHeight)
          || arrayBox[j].y <= 0) {
          // console.log("%cParede caixa!", 'color:purple');
          arrayBox[j].x = ultimoPassoCaixa.positionX;
          arrayBox[j].y = ultimoPassoCaixa.positionY;
          protagonista.x = xProt;
          protagonista.y = yProt;
        }
      })
    })
  }

  function caixaColisaoCaixa() {
    arrayBox.forEach((e, i) => {
      arrayBox.forEach((e, j) => {
        if (i === 0 && j === 0) {
          // console.log("%cVerificando caixas...", "background: indigo");
        }
        if (i === j) {
        }
        else {
          if (arrayBox[i].x === arrayBox[j].x && arrayBox[i].y === arrayBox[j].y) {
            if (i === 2) {
              // console.log("%cNo mesmo lugar", 'background: red');
            }
            valido = false;
          }
        }
      })
    })
  }

  function colisaoParede(persona, x, y, parede) {

    if (parede.length > 0) {
      parede.forEach((e, i) => {
        if (persona.x === parede[i].x && persona.y === parede[i].y || persona.x > Math.round(document.querySelector("canvas").offsetWidth) || persona.x <= 0 || persona.y > Math.round(document.querySelector("canvas").offsetHeight) || persona.y <= 0) {
          // console.log("%cParede!", 'color:red');
          persona.x = x;
          persona.y = y;
        }
      })
    }
    else {
      if (persona.x === parede.x && persona.y === parede.y || persona.x > Math.round(document.querySelector("canvas").offsetWidth) || persona.x <= 0 || persona.y > Math.round(document.querySelector("canvas").offsetHeight) || persona.y <= 0) {
        // console.log("%cParede!", 'color:red');
        persona.x = x;
        persona.y = y;
      }
    }


    if (nivel === 5 && protagonista.x === 825) {
      nivel = 98;
      ganhando();
    }
  }

  function empurrandoCaixas(x, y) {
    valido = true;

    if (arrayBox.length > 0) {
      arrayBox.forEach((e, i) => {
        if (protagonista.x === arrayBox[i].x && protagonista.y === arrayBox[i].y) {
          // console.log("%cCaixa!", 'color:orange');
          if (x > protagonista.x) {
            ultimoPassoCaixa = {
              positionX: arrayBox[i].x,
              positionY: arrayBox[i].y
            }

            arrayBox[i].x -= 50;
            caixaColisaoCaixa();
            if (valido === false) {
              protagonista.x = x;
              arrayBox[i].x += 50;
            }
          }
          if (x < protagonista.x) {
            ultimoPassoCaixa = {
              positionX: arrayBox[i].x,
              positionY: arrayBox[i].y
            }

            arrayBox[i].x += 50;
            caixaColisaoCaixa();
            if (valido === false) {
              protagonista.x = x;
              arrayBox[i].x -= 50;
            }
          }
          if (y > protagonista.y) {
            ultimoPassoCaixa = {
              positionX: arrayBox[i].x,
              positionY: arrayBox[i].y
            }

            arrayBox[i].y -= 50;
            caixaColisaoCaixa();
            if (valido === false) {
              protagonista.y = y;
              arrayBox[i].y += 50;
            }
          }
          if (y < protagonista.y) {
            ultimoPassoCaixa = {
              positionX: arrayBox[i].x,
              positionY: arrayBox[i].y
            }

            arrayBox[i].y += 50;
            caixaColisaoCaixa();
            if (valido === false) {
              protagonista.y = y;
              arrayBox[i].y -= 50;
            }
          }
        }
      })
    }
  }

  nivelScreen.addChild(protagonista);

  // CONTROLES

  document.addEventListener('keydown', function (e) {
    if (!protagonista.transform) {
      return;
    }
    else {
      ultimoPasso = {
        positionX: protagonista.x,
        positionY: protagonista.y
      }
    }

    if (e.key === "ArrowRight") {
      protagonista.texture = textureRight;
      protagonista.x += 50;
    }
    if (e.key === "ArrowLeft") {
      protagonista.texture = textureLeft;
      protagonista.x -= 50;
    }
    if (e.key === "ArrowUp") {
      protagonista.y -= 50;
    }
    if (e.key === "ArrowDown") {
      protagonista.y += 50;
    }

    if (nivel === 5 && protagonista.x === 825 || nivel === 98 && protagonista.x === 825 && vezes98 <= 4) {
      nivel = 98
      ganhou = true;
      reset();
    }

    colisaoParede(protagonista, ultimoPasso.positionX, ultimoPasso.positionY, arrayParedes);

    if (nivel === 98) {
    }
    else {
      colisaoParede(protagonista, ultimoPasso.positionX, ultimoPasso.positionY, arrayParedes);
      empurrandoCaixas(ultimoPasso.positionX, ultimoPasso.positionY);
      caixaColisaoParede(ultimoPasso.positionX, ultimoPasso.positionY);
      ganhando();
    }

  })


  if (innerWidth <= 767) {

    alert("Warning\nThe mobile version is limited.")

    //* ARROWS MOBILE
    const arrowTop = PIXI.Sprite.from('./img/top.png');
    arrowTop.anchor.set(0.5);
    arrowTop.x = app.screen.width / 2;
    arrowTop.y = app.screen.height / 2 + 250;
    arrowTop.interactive = true;
    arrowTop.buttonMode = true;
    app.stage.addChild(arrowTop);
    arrowTop.on('pointerdown', moveTop);

    function moveTop() {
      if (!protagonista.transform) {
        return;
      }
      else {
        ultimoPasso = {
          positionX: protagonista.x,
          positionY: protagonista.y
        }
      }
      protagonista.y -= 50;
      empurrandoCaixas(ultimoPasso.positionX, ultimoPasso.positionY);
      colisaoParede(protagonista, ultimoPasso.positionX, ultimoPasso.positionY, arrayParedes);
      caixaColisaoParede(ultimoPasso.positionX, ultimoPasso.positionY);
      ganhando();
    }

    const arrowBottom = PIXI.Sprite.from('./img/bottom.png');
    arrowBottom.anchor.set(0.5);
    arrowBottom.x = app.screen.width / 2;
    arrowBottom.y = app.screen.height / 2 + 300;
    arrowBottom.interactive = true;
    arrowBottom.buttonMode = true;
    app.stage.addChild(arrowBottom);
    arrowBottom.on('pointerdown', moveBottom);

    function moveBottom() {
      if (!protagonista.transform) {
        return;
      }
      else {
        ultimoPasso = {
          positionX: protagonista.x,
          positionY: protagonista.y
        }
      }
      protagonista.y += 50;
      empurrandoCaixas(ultimoPasso.positionX, ultimoPasso.positionY);
      colisaoParede(protagonista, ultimoPasso.positionX, ultimoPasso.positionY, arrayParedes);
      caixaColisaoParede(ultimoPasso.positionX, ultimoPasso.positionY);
      ganhando();
    }

    const arrowLeft = PIXI.Sprite.from('./img/left.png');
    arrowLeft.anchor.set(0.5);
    arrowLeft.x = app.screen.width / 2 - 50;
    arrowLeft.y = app.screen.height / 2 + 300;
    arrowLeft.interactive = true;
    arrowLeft.buttonMode = true;
    app.stage.addChild(arrowLeft);
    arrowLeft.on('pointerdown', moveLeft);

    function moveLeft() {
      if (!protagonista.transform) {
        return;
      }
      else {
        ultimoPasso = {
          positionX: protagonista.x,
          positionY: protagonista.y
        }
      }
      protagonista.x -= 50;
      empurrandoCaixas(ultimoPasso.positionX, ultimoPasso.positionY);
      colisaoParede(protagonista, ultimoPasso.positionX, ultimoPasso.positionY, arrayParedes);
      caixaColisaoParede(ultimoPasso.positionX, ultimoPasso.positionY);
      ganhando();
    }

    const arrowRight = PIXI.Sprite.from('./img/right.png');
    arrowRight.anchor.set(0.5);
    arrowRight.x = app.screen.width / 2 + 50;
    arrowRight.y = app.screen.height / 2 + 300;
    arrowRight.interactive = true;
    arrowRight.buttonMode = true;
    app.stage.addChild(arrowRight);
    arrowRight.on('pointerdown', moveRight);

    function moveRight() {
      if (!protagonista.transform) {
        return;
      }
      else {
        ultimoPasso = {
          positionX: protagonista.x,
          positionY: protagonista.y
        }
      }
      protagonista.x += 50;
      empurrandoCaixas(ultimoPasso.positionX, ultimoPasso.positionY);
      colisaoParede(protagonista, ultimoPasso.positionX, ultimoPasso.positionY, arrayParedes);
      caixaColisaoParede(ultimoPasso.positionX, ultimoPasso.positionY);
      ganhando();
    }
  }
}


//TODO CONTROLE DE CENAS
//TODO FADE BACKGROUND
function bgFade(fade, tilingSprite) {
  if (fade === 'in') {
    fade = 1;
    tilingSprite.alpha = 0;
    TweenMax.to(tilingSprite, 3.0, { alpha: fade, repeat: 0, yoyo: false });
    app.stage.addChild(tilingSprite);
  }
  else if (fade === 'out') {
    fade = 0;
    TweenMax.to(tilingSprite, 3.0, { alpha: fade, repeat: 0, yoyo: false });
    setTimeout(() => {
      app.stage.removeChild(tilingSprite);
    }, 3000)
  }
}

//TODO FADE TEXTOS E SPRITES
function textoFade(textSample, fade, textoIn, tamanho, w, h, color) {
  if (fade === 'in') {
    fade = 1;
    textSample.style.fontSize = tamanho;
    textSample.style.align = 'center';
    textSample.style.fill = color;
    textSample.text = textoIn;
    textSample.anchor.set(0.5);
    textSample.alpha = 0;
    textSample.x = app.screen.width / 2 + w;
    textSample.y = app.screen.height / 2 + h;
    TweenMax.to(textSample, 5.0, { alpha: fade, repeat: 0, yoyo: false });
  }
  else if (fade === 'out') {
    fade = 0;
    TweenMax.to(textSample, 3.0, { alpha: fade, repeat: 0, yoyo: false });
    setTimeout(() => {
      app.stage.removeChild(textSample);
    }, 3000)
  }
}