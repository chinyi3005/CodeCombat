// Level: Medical Attention
// https://codecombat.com/play/level/medical-attention

// Ask the healer for help when you're under one-half health.

while(true) {
    var currentHealth = hero.health;
    var healingThreshold = hero.maxHealth / 2;
    var enemy = hero.findNearestEnemy();
    // If your current health is less than the threshold,
    // move to the healing point and say, "heal me".
    // Otherwise, attack. You'll need to fight hard!
    if (currentHealth < healingThreshold) {
        hero.moveXY(65, 46);
        hero.say("heal me");
    }
    else {
        if (enemy) {
            if (hero.canCast("magic-missile", enemy)) {
                hero.cast("magic-missile", enemy);
            }
            else {
                hero.attack(enemy);
            }
        }
    }
}
