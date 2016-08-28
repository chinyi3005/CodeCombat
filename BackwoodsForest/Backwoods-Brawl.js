// Level: Backwoods Brawl
// https://codecombat.com/play/level/backwoods-brawl

// Stay alive for one minute.
// If you win, it gets harder (and more rewarding).
// If you lose, you must wait a day before you can resubmit.
// Remember, each submission gets a new random seed.

function throwOrAttack(target) {
    if (hero.isReady("throw") && hero.distanceTo(enemy) < hero.throwRange) {
        hero.throw(target);
    }
    else {
        hero.attack(target);
    }
}

while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        throwOrAttack(enemy);
    }
}
