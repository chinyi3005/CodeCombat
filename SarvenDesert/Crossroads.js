// Level: Crossroads
// https://codecombat.com/play/level/crossroads

// Use fire-traps to defeat the ogres attacking the trading post.

while(true) {
    var enemy = hero.findNearestEnemy();
    var x = hero.pos.x;
    var y = hero.pos.y;
    if(enemy) {
        if(enemy.pos.x < hero.pos.x) {
            // If the enemy is to the left, build a fire-trap to the left.
            hero.buildXY("fire-trap", x-15, y);
        } else if (enemy.pos.x > hero.pos.x) {
            // If the enemy is to the right, build a fire-trap to the right.
            hero.buildXY("fire-trap", x+15, y);
        } else if (enemy.pos.y < hero.pos.y) {
            // If the enemy is below the hero, build a fire-trap below.
            hero.buildXY("fire-trap", x, y-15);
        } else if (enemy.pos.y > hero.pos.y) {
            // If the enemy is above the hero, build a fire-trap above.
            hero.buildXY("fire-trap", x, y+15);
        }
    }
    hero.moveXY(40, 34);
}