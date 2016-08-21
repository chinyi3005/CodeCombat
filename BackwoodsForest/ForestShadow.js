// Big ogres can't see you in the forest.
// Kill only the small ogres in the forest.
// Collect coins and gems only.
// Don't leave the forest and don't eat/drink anything.

while (true) {
    // Find the nearest enemy.
    // Attack it only if its type is "thrower" or "munchkin".
    var enemy = hero.findNearestEnemy();
    if (enemy.type == "thrower" || enemy.type == "munchkin") {
        hero.attack(enemy);
    }
    // Find the nearest item.
    // Collect it only if its type is "gem" or "coin".
    var item = hero.findNearestItem();
    var pos = item.pos;
    if (item.type == "gem" || item.type == "coin") {
        hero.move(pos);
    }
}
