// Level: Sarven Sentry
// https://codecombat.com/play/level/sarven-sentry

// Use different colored flags to perform different tasks.

while(true) {
    var flagGreen = hero.findFlag("green");
    var flagBlack = hero.findFlag("black");

    // If there's a flagGreen...
    if (flagGreen) {
        hero.buildXY("fence", flagGreen.pos.x, flagGreen.pos.y);
        hero.pickUpFlag(flagGreen);
    }

    // If there's a flagBlack...
    else if (flagBlack) {
        hero.buildXY("fire-trap", flagBlack.pos.x, flagBlack.pos.y);
        hero.pickUpFlag(flagBlack);
    }

    // Move back to the center.
    else {
    hero.moveXY(43, 31);
    }
}