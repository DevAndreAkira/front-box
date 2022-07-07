const item = PIXI.Sprite.from('https://devandreakira.github.io//portfolio_devandreakira/static/media/css.cc09efccf14b8e30d1a9.png');

item.anchor.set(0.5);
item.width = 40;
item.height = 40;
item.x = 125;
item.y = 125;

app.stage.addChild(item);

function pegandoItem() {
    if (protagonista.x === item.x && protagonista.y === item.y && item.visible === true) {
        getItem.play();
        console.log("%cItem!", 'color:lime');
        item.visible = false;
        app.stage.removeChild(item);
    }
}