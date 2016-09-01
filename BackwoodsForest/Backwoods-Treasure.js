// Level: Backwoods Treasure
// https://codecombat.com/play/level/backwoods-treasure

// Collect 100 gold from two or three groves.
// If you win, it gets harder (and more rewarding).
// If you lose, you must wait a day before you can resubmit.
// Remember, each submission gets a new random seed.

function pickUpGold() {
    if (item) {
    var pos = item.pos;
    var x = pos.x;
    var y = pos.y;
    hero.moveXY(x, y);   
    }
    else {
        hero.moveXY(50, 50);
    }
}

function throwOrAttack() {
    if (hero.isReady("throw") && hero.distanceTo(enemy) < hero.throwRange) {
        hero.throw(enemy);
    }
    else {
        hero.attack(enemy);
    }
}

while(true) {
    var item = hero.findNearestItem();
    pickUpGold();
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        throwOrAttack();
    }
}