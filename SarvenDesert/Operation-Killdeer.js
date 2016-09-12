// Level: Operation Killdeer
// https://codecombat.com/play/level/operation-killdeer

// Lure the ogres into a trap.
// These ogres are careful.
// They will only follow if the hero is injured.

// This function checks the hero's health 
// and returns a Boolean value.
function shouldRun() {
    if (hero.health < hero.maxHealth / 2) {
        return true;
    } else {
        return false;
    }
}

while (true) {
    // Run to the X only if shouldRun() is true
    if (shouldRun()) {
        hero.moveXY(75, 37);
    }
    // Otherwise, fight!
    else {
        var enemy = hero.findNearestEnemy();
        if (enemy) {
            if (hero.canCast("magic-missile", enemy)) {
                hero.cast("magic-missile", enemy);
            }
            else {
                hero.attack(enemy);
            }
        }
    }
}