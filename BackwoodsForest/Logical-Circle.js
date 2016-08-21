// Level: Logical Circle
// https://codecombat.com/play/level/logical-circle

// Move to the wizard and get their secret values.
hero.moveXY(20, 24);
var secretA = hero.findNearestFriend().getSecretA();
var secretB = hero.findNearestFriend().getSecretB();
var secretC = hero.findNearestFriend().getSecretC();

// If ALL three values are true, take the high path. Otherwise, take the low path.
var secretD = secretA && secretB && secretC;
if (secretD)
    hero.moveXY(30, 33);
else
    hero.moveXY(30, 15);

// If ANY of the three values are true, take the left path. Otherwise, go right.
var secretE = secretA || secretB || secretC;
if (secretE) {
    hero.moveXY(20, 24);
}
else {
    hero.moveXY(40, 24);
}

// If ALL five values are true, take the high path. Otherwise, take the low path.
var secretF = secretA && secretB & secretC && secretD && secretE;
if (secretF) {
    hero.moveXY(30, 33);
}
else {
    hero.moveXY(30, 15);
}
