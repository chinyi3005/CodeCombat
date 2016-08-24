// Level: Closed Crossroad
// https://codecombat.com/play/level/closed-crossroad


// Use fire traps for the top and the bottom passages.
// Use fences for the left and the right passages.
// Only build if you see an enemy, there are also peasants using the crossroad.

// The function defines THREE parameters: a string and two numbers.
function maybeBuildSomething(buildType, x, y) {
    // Move to the position specified by the x and y parameters.
    hero.moveXY(x, y);
    // Find the nearest enemy.
    var enemy = hero.findNearestEnemy();
    // If there is an enemy
    if (enemy) {
         // then buildXY() using the parameters: buildType, x, and y
         hero.buildXY(buildType, x, y);
    }
}

while(true) {
    // Call maybeBuildSomething() with "fire-trap" and the coordinates of the bottom X.
    maybeBuildSomething("fire-trap", 40, 20);
    // Call maybeBuildSomething(), with "fence" at the left X!
    maybeBuildSomething("fence", 26, 34);
    // Call maybeBuildSomething() with "fire-trap" at the top X!
    maybeBuildSomething("fire-trap", 40, 50);
    // Call maybeBuildSomething() with "fence" at the right X!
    maybeBuildSomething("fence", 54, 35);
}
