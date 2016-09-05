// Level: Basin Stampede
// https://codecombat.com/play/level/basin-stampede

// Uh oh, a stampede! Use your cunning to make it to the oasis.
// SOLUTION 1
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


// SOLUTION 2
while(true) {
    var enemy = hero.findNearestEnemy();
    var xPos = hero.pos.x + 5;
    var yPos = 17;
    switch (enemy.pos.y > hero.pos.y) {
        case true: yPos -= 1;
        break;
        case false: yPos += 1;
        break;
    }
    hero.moveXY(xPos, yPos);
}


// SOLUTION 3
// Uh oh, a stampede! Use your cunning to make it to the oasis.

while(true) {
    var enemy = hero.findNearestEnemy();
    var xPos = hero.pos.x + 5;
    var yPos = 17;
    enemy.pos.y > hero.pos.y ? yPos -= 1 : yPos += 1;
    hero.moveXY(xPos, yPos);
}
