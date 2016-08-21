// A star shower is a time when gems and coins appear around you.
// Metal coins disappear quickly, run for them only they are close (< 20m).
// Gems don't disappear, run for them every time when you see them.

while (true) {
    var item = hero.findNearestItem();
    var distance = hero.distanceTo(item);
    var pos = item.pos;
    // If the item's type is 'gem' OR the distance to the item less than 20 metres:
    if (item.type == "gem" || distance < 20) {
        // Take it.
        hero.move(pos);
    }
}
