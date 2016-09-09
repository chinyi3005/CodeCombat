// Level: Thunderhooves
// https://codecombat.com/play/level/thunderhooves

// Get to the oasis,
// fencing off paths with randomized yaks on them as you go.

while(true) {
    var yak = hero.findNearestEnemy();
    var x = hero.pos.x;
    var y = hero.pos.y;
    if (yak) {
        // A yak is above you if yak.pos.y is greater than your pos.y.
        if (yak.pos.y > hero.pos.y) {
            // If the yak is above you, build a fence 10m below it.
            hero.buildXY("fence", x, y + 5);
        }
        else {
            // If the yak is below you, build a fence 10m above it.
            hero.buildXY("fence", x, y - 5);
        }
    } 
    else {
        // Move right 10m towards the oasis.
        hero.moveXY(x + 10, y);
    }
}
