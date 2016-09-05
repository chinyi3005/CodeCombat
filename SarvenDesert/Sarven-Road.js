// Sarven Road
// https://codecombat.com/play/level/sarven-road

// Get to the oasis. Watch out for new enemies: ogre scouts!
// Go up and right by adding to your current X and Y position.

hero.castOrAttack = function(enemy) {
    hero.canCast("magic-missile", enemy) ? hero.cast("magic-missile", enemy) : hero.attack(enemy);
};

while(true) {
    // Attack any enemies you see.
    var enemy = hero.findNearestEnemy();
    var xPos = hero.pos.x + 5;
    var yPos = hero.pos.y + 5;
    // Or, if there are no enemies in sight, keep moving up and to the right.
    enemy ? hero.castOrAttack(enemy) : 
    hero.moveXY(xPos, yPos);
}