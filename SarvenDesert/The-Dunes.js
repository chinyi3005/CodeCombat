// Level: The Dunes
// https://codecombat.com/play/level/the-dunes

// Collect coins. Ignore sand yaks and burls. Fight throwers and ogres.
while(true) {
    var enemy = hero.findNearestEnemy();
    var item = hero.findNearestItem();

    if (enemy) {
        if (enemy.type == "sand-yak" || enemy.type == "burl") {
            // Don't fight sand yaks or burls! Just keep collecting coins.
            var pos = item.pos;
            hero.moveXY(item.pos.x, item.pos.y);
        } 
        else {
            // But if the enemy is type "thrower" or "ogre", attack them. 
            if (enemy.type == "thrower" || enemy.type == "ogre") {
                if (hero.isReady("throw") && hero.distanceTo(enemy) < hero.throwRange) {
                    hero.throw(enemy);
                }
                else {
                    hero.attack(enemy);
                }
            }
        }
    } else if (item) {
        // Collect coins.
        hero.moveXY(item.pos.x, item.pos.y);
    }
}