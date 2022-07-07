const app = new PIXI.Application({
  backgroundColor: 0x050512,
  backgroundAlpha: 0.05,
  opacity: .5,
  antialias: true,
  width: 850,
  height: 650
});
document.body.appendChild(app.view);

let nivel = 0;

const soundClick = PIXI.sound.Sound.from('../sound/Cursor1.ogg');
soundClick.volume = 0.25;
const next = PIXI.sound.Sound.from('../sound/Item1.ogg');
next.volume = 0.25;
const music = PIXI.sound.Sound.from('../sound/How_s-It-Supposed-to-Feel-_Instrumental_-NEFFEX.mp3');
music.volume = 0.05;
// AQUI

// Load them google fonts before starting...!
window.WebFontConfig = {
  google: {
    families: ['Share Tech Mono', 'Arvo:700italic', 'Podkova:700'],
  },

  active() {
    init();
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

function init() {

  // create a new Sprite from an image path
  const favicon = PIXI.Sprite.from('../img/favicon.png');
  favicon.anchor.set(0.5);
  favicon.x = (app.screen.width / 2) - 150;
  favicon.y = (app.screen.height / 2);
  favicon.interactive = true;
  favicon.buttonMode = true;
  favicon.on('pointerdown', onButtonDown);
  app.stage.addChild(favicon);


  // create some white text using the Snippet webfont
  const textSample = new PIXI.Text('Front-box', {
    fontFamily: 'Share Tech Mono',
    fontSize: 50,
    fill: 'white',
    align: 'left',
  });
  textSample.anchor.set(0.5);
  textSample.position.set((app.screen.width / 2) + 6, (app.screen.height / 2) + 2);
  textSample.interactive = true;
  textSample.buttonMode = true;
  textSample.on('pointerdown', onButtonDown);
  app.stage.addChild(textSample);

  const textSample1 = new PIXI.Text('Criado por DevAndreAkira', {
    fontFamily: 'Share Tech Mono',
    fontSize: 20,
    fill: 'white',
    align: 'left',
  });
  textSample1.anchor.set(0.5);
  textSample1.position.set(app.screen.width / 2, (app.screen.height / 2) - 150);
  app.stage.addChild(textSample1);

  function onButtonDown() {
    textSample.interactive = false;
    textSample.buttonMode = false;
    favicon.interactive = false;
    favicon.buttonMode = false;
    soundClick.play();
    textoFade(textSample, 'out');
    textoFade(textSample1, 'out');
    textoFade(favicon, 'out');
    setTimeout(() => {
      music.play(({
        loop: true,
      }));
      comecarGame()
    }, 3000)

  }
}

//* GAME START

function comecarGame() {

  let ultimoPasso = '';
  let valido = true;

  const protagonista = PIXI.Sprite.from('https://devandreakira.github.io//portfolio_devandreakira/static/media/mee.679235d04d16d0f63579.webp');
  protagonista.anchor.set(0.5);
  protagonista.width = 50;
  protagonista.height = 50;
  protagonista.x = 375;
  protagonista.y = 225;
  protagonista.x = app.screen.width / 2;
  protagonista.y = app.screen.height / 2;

  let arrayParedesX;
  let arrayParedesY;
  let arrayBtnsX;
  let arrayBtnsY;
  let arrayBoxX;
  let arrayBoxY;

  let arrayParedes = [];
  let arrayBtns = [];
  let arrayBox = [];

  // ^NÍVEL 1
  function nivel1() {
    arrayParedesX = [425, 425, 425, 375, 325, 325, 325, 325, 275, 225, 225, 225, 275, 325, 375, 375, 375, 425, 475, 475, 475, 475, 525, 575, 575, 575, 525, 475];
    arrayParedesY = [225, 175, 125, 125, 125, 175, 225, 275, 275, 275, 325, 375, 375, 375, 375, 425, 475, 475, 475, 425, 375, 325, 325, 325, 275, 225, 225, 225];
    arrayBtnsX = [425, 275, 375, 525];
    arrayBtnsY = [425, 325, 175, 275];
    arrayBoxX = [475, 375, 375, 425];
    arrayBoxY = [275, 275, 325, 375];
    return arrayParedesX, arrayParedesY, arrayBtnsX, arrayBtnsY, arrayBoxX, arrayBoxY
  }

  if (nivel === 0) {
    nivel1();
  }
  else if (nivel === 1) {
    alert("Nivel 2");
  }

  geradorParedes(27);
  geradorBtns(3);
  geradorBox(3);

  let pontos = 0;
  app.stage.addChild(protagonista);

  //? SOUND
  const getItem = PIXI.sound.Sound.from('./sound/Item1.ogg');
  getItem.volume = 0.05;

  //~ GERADORES
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
      app.stage.addChild(arrayBox[i]);
    })
  }

  function geradorBtns(numeroVezes) {
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
      app.stage.addChild(arrayBtns[i]);
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
      app.stage.addChild(arrayParedes[i]);
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
      app.stage.removeChild(arrayBox[i]);
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
      app.stage.removeChild(arrayBtns[i]);
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
      app.stage.removeChild(arrayParedes[i]);
      colisaoParede(protagonista, '', '', arrayParedes[i])
    })
  }

  // * FUNÇÕES DO GAME

  function reset() {
    apagandoParedes(27);
    apagandoBtns(3);
    apagandoBox(3);
    for (i = arrayBox.length; i > 0; i--) {
      arrayBox.pop();
    }
    for (i = arrayBtns.length; i > 0; i--) {
      arrayBtns.pop();
    }
    for (i = arrayParedes.length; i > 0; i--) {
      arrayParedes.pop();
    }

    // app.stage.removeChild(protagonista);

  }

  function ganhando() {
    let vezes = 0;
    arrayBtns.forEach((e, i) => {
      arrayBox.forEach((e, j) => {
        if (arrayBtns[i].x === arrayBox[j].x && arrayBtns[i].y === arrayBox[j].y) {
          vezes = vezes + 1;
          console.log("%cCaixas colocadas: " + vezes, "background:blue");
          if (vezes === arrayBtns.length) {
            next.play();
            reset();
          }
        }
      })
    })
  }

  function caixaColisaoParede(xProt, yProt) {

    arrayParedes.forEach((e, i) => {
      arrayBox.forEach((e, j) => {
        if (arrayBox[j].x === arrayParedesX[i] && arrayBox[j].y === arrayParedesY[i]) {
          console.log("%cParede caixa!", 'color:purple');
          arrayBox[j].x = ultimoPassoCaixa.positionX;
          arrayBox[j].y = ultimoPassoCaixa.positionY;
          protagonista.x = xProt;
          protagonista.y = yProt;
        }
      })
    })

  }

  function caixaColisaoCaixa(x, y) {
    arrayBox.forEach((e, i) => {
      arrayBox.forEach((e, j) => {
        console.log("%cVeiricando caixas...", "background: indigo");
        if (i === j) {

        }
        else {
          if (arrayBox[i].x === arrayBox[j].x && arrayBox[i].y === arrayBox[j].y) {
            console.log("%cNo mesmo lugar", 'background: red');
            valido = false;
          }
        }
      })
    })
  }


  function colisaoParede(persona, x, y, parede) {
    if (parede.length > 0) {
      parede.forEach((e, i) => {
        if (persona.x === parede[i].x && persona.y === parede[i].y || persona.x > document.querySelector("canvas").offsetWidth || persona.x <= 0 || persona.y > document.querySelector("canvas").offsetHeight || persona.y <= 0) {
          console.log("%cParede!", 'color:red');
          persona.x = x;
          persona.y = y;
        }
      })
    }
    else {

      if (persona.x === parede.x && persona.y === parede.y || persona.x > document.querySelector("canvas").offsetWidth || persona.x <= 0 || persona.y > document.querySelector("canvas").offsetHeight || persona.y <= 0) {
        console.log("%cParede!", 'color:red');
        persona.x = x;
        persona.y = y;
      }
    }
  }

  function empurrandoCaixas(x, y) {
    valido = true;

    if (arrayBox.length > 0) {
      arrayBox.forEach((e, i) => {

        if (protagonista.x === arrayBox[i].x && protagonista.y === arrayBox[i].y) {
          console.log("%cCaixa!", 'color:orange');
          if (x > protagonista.x) {
            ultimoPassoCaixa = {
              positionX: arrayBox[i].x,
              positionY: arrayBox[i].y
            }

            // console.log("Caixa: " + i);
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


            // console.log("Caixa: " + i);
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


            // console.log("Caixa: " + i);
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

            // console.log("Caixa: " + i);
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

  //CONTROLES
  document.addEventListener('keydown', function (e) {
    ultimoPasso = {
      positionX: protagonista.x,
      positionY: protagonista.y
    }

    if (e.key === "ArrowRight") {
      protagonista.x += 50;
    }
    if (e.key === "ArrowLeft") {
      protagonista.x -= 50;
    }
    if (e.key === "ArrowUp") {
      protagonista.y -= 50;
    }
    if (e.key === "ArrowDown") {
      protagonista.y += 50;
    }

    empurrandoCaixas(ultimoPasso.positionX, ultimoPasso.positionY);
    colisaoParede(protagonista, ultimoPasso.positionX, ultimoPasso.positionY, arrayParedes);
    caixaColisaoParede(ultimoPasso.positionX, ultimoPasso.positionY);
    ganhando()

    console.log("x:" + protagonista.x + " y:" + protagonista.y);

  })


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

//TODO FADE TEXTOS
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
    TweenMax.to(textSample, 3.0, { alpha: fade, repeat: 0, yoyo: false });
  }
  else if (fade === 'out') {
    fade = 0;
    TweenMax.to(textSample, 3.0, { alpha: fade, repeat: 0, yoyo: false });
    setTimeout(() => {
      app.stage.removeChild(textSample);
    }, 3000)
  }
}
