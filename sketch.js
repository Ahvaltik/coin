/**
 * Created by Pawel on 2017-01-02.
 */

var coin;

function setup() {
    createCanvas(480, 480);
    coin = new Coin(240, 240, 60, 10);
}

function draw() {
    background(230, 230, 250);
    coin.show();
}

function mouseMoved() {
    coin.pitch = mouseY / 120;
    coin.roll = mouseX / 120;
    coin.show();
    return false;
}