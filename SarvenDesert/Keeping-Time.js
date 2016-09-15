// Level: Keeping Time
// https://codecombat.com/play/level/keeping-time

// Use your new skill to choose what to do: hero.now()

// SOLUTION 1 //
hero.castOrAttack = function(enemy) {
    if (hero.canCast("magic-missile", enemy)) {
        hero.cast("magic-missile", enemy);
    }
    else {
        hero.attack(enemy);
    }
};

while(true) {
    var enemy = hero.findNearestEnemy();
    // If it's the first 10 seconds, fight.
    if (hero.now() < 10) {
        if (enemy) {
            hero.castOrAttack(enemy);
        }
    }
    // Else, if it's the first 30 seconds, collect coins.
    else if (hero.now() < 35) {
        var coin = hero.findNearestItem();
        if (coin) {
            hero.moveXY(coin.pos.x, coin.pos.y);
        }
    } 
    // After 30 seconds, join the raid!
    else {
        hero.castOrAttack(enemy);
    }
}


// SOLUTION 2 //
hero.castOrAttack = function(enemy) {
    if (hero.canCast("magic-missile", enemy)) {
        hero.cast("magic-missile", enemy);
    }
    else {
        hero.attack(enemy);
    }
};

while(true) {
    var enemy = hero.findNearestEnemy();
    if (hero.now() < 10 || hero.now() > 35) {
        if (enemy) {
            hero.castOrAttack(enemy);
        }
    }
    else if (hero.now() <= 35) {
        var coin = hero.findNearestItem();
        if (coin) {
            hero.moveXY(coin.pos.x, coin.pos.y);
        }
    }
}