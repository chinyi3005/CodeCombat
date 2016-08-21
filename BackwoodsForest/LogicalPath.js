// Get two secret true/false values from the wizard.
hero.moveXY(14, 24);
var secretA = hero.findNearestFriend().getSecretA();
var secretB = hero.findNearestFriend().getSecretB();

// If BOTH secretA and secretB are true, take the high path; otherwise, take the low path.
// Check the guide for notes on how to write logical expressions.
var secretC = secretA && secretB;
if (secretC) {
    hero.moveXY(20, 33);
}
else {
    hero.moveXY(20, 15);
}
hero.moveXY(26, 24);

// If EITHER secretA or secretB is true, take the high path.
var secretD = secretA || secretB;
if (secretD) {
    hero.moveXY(32, 33);
}
else {
    hero.move(32, 15);   
}
hero.moveXY(38, 24);

// If secretB is NOT true, take the high path.
var secretE =! secretB;
if (secretE) {
    hero.moveXY(44, 33);
}
else {
    hero.moveXY(44, 15);
}
hero.moveXY(50, 24);
