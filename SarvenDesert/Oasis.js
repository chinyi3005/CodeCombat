// Level: Oasis
// https://codecombat.com/play/level/oasis

// Move right to reach the oasis,
// but move left to avoid nearby yaks.
while(true) {
    var x = hero.pos.x;
    var y = hero.pos.y;
    var enemy = hero.findNearestEnemy();
    if (enemy && hero.distanceTo(enemy) < 10) {
        // Move to the left by subtracting 10 from your X coordinate.
        x -= 10;
    } else {
        // Move to the right by adding 10 to your X coordinate.
        x += 10;
    }
    hero.moveXY(x, y);
}
