// Level: The Mighty Sand Yak
// https://codecombat.com/play/level/the-mighty-sand-yak

// Let yaks get close, then move 10m right to dodge.
// Dodge 4 yaks to complete the level.

while(true) {
    // Get your current x and y position using your Sense Stone.
    var x = hero.pos.x;
    var y = hero.pos.y;
    
    // Find the nearest yak.
    var yak = hero.findNearestEnemy();
    
    // Use "if" to only move when a yak is less than 10m away.
    if (hero.distanceTo(yak) < 10) {
        // To move right, add 10 to your x position.
        x += 10;
        // Use moveXY to move!
        hero.moveXY(x, y);
    }
}
