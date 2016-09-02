// Uh oh, a stampede! Use your cunning to make it to the oasis.

// Level: Basin Stampede
// https://codecombat.com/play/level/basin-stampede

while(true) {
    var enemy = hero.findNearestEnemy();
    var xPos = hero.pos.x + 5;
    var yPos = 17;
    if(enemy) {
        // You only need to shift up/down 1m to dodge the yaks!
        if(enemy.pos.y > hero.pos.y) {
            // If the Yak is above you, adjust yPos downwards!
            yPos -= 1;
        } else if (enemy.pos.y < hero.pos.y) {
            // If the Yak is below you, adjust yPos upwards!
            yPos += 1;
        }
    }
    hero.moveXY(xPos, yPos);
}
