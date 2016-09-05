// Cursed Valley
// https://codecombat.com/play/level/cursed-valley

// It's too hot out here! Every second you will lose health.
// You need to kill 3 enemy skeletons.
// You can only drink one potion. Choose your time wisely.
// Graverobbing is bad luck! Do not steal the coins.

while (true) {
    var enemy = hero.findNearestEnemy();
    // Attack only skeletons AND skeletons that are on the "ogres" team.
    if (enemy && enemy.team === "ogres" && enemy.type === "skeleton") {
        hero.attack(enemy);
    }
    
    var item = hero.findNearestItem();
    // Take only the items with a "potion" type AND only when your health is less than a quarter of the maxHealth.
    if (item && item.type === "potion" && hero.health < hero.maxHealth / 4) {
        var x = item.pos.x;
        var y = item.pos.y;
        hero.moveXY(x, y);
    }
}