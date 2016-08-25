// Level: Greed Traps
// https://codecombat.com/play/level/greed-traps


// We'll use gold coins to lure ogres.
// Patrol around the clearing and place traps ONLY if you see a coin.
// Move from one mark to another by clockwise and don't touch coins.

function maybeBuildTrap(x, y) {
    // Move to the x,y postion and build a 'fire-trap' if a coin is near.
    // Write this function.
    hero.moveXY(x, y);
    var item = hero.findNearestItem();
    if (item) {
        hero.buildXY("fire-trap", x, y);
    }
}

while (true) {
    // Call 'maybeBuildTrap' function for the top left passage.
    maybeBuildTrap(12, 56);
    // Now for the top right passage.
    maybeBuildTrap(68, 56);
    // Now for the bottom right passage.
    maybeBuildTrap(68, 12);
    // Now for the bottom left passage.
    maybeBuildTrap(12, 12);
}