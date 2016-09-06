// Level: Sarven Gaps
// https://codecombat.com/play/level/sarven-gaps

// Get to the Oasis by moving down 10m at a time.
// Build fences 20m to the left of each ogre.

while(true) {
    var enemy = hero.findNearestEnemy();
    var x = hero.pos.x;
    var y = hero.pos.y;
    if (enemy) {
        // Build fences 20 units to the enemy's left.
        hero.buildXY("fence", enemy.pos.x - 20, y);
    } else {
        // Move down 10 units at a time.
        hero.moveXY(x, y - 10);
    }
}
