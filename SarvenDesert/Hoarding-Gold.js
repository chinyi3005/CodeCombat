// Level: Hoarding Gold
// https://codecombat.com/play/level/hoarding-gold

// Collect 25 gold, and then tell Naria the total.
// Use break to stop collecting when totalGold >= 25.

var totalGold = 0;
while(true) {
    var coin = hero.findNearestItem();
    if(coin) {
        // Pick up the coin.
        hero.moveXY(coin.pos.x, coin.pos.y);
        // Add the coin's value to totalGold. (See the guide for more.)
        // Get its value with:  coin.value
        totalGold += coin.value;
    }
    if (totalGold >= 25) {
        // >= means totalGold is greater than or equal to 25.
        // This breaks out of the loop to run code at the bottom.
        break;
    }
}

// Done collecting gold!
hero.moveXY(58, 33);
// Go to Naria and say how much gold you collected.
hero.say("Hi Naria, I collected " + totalGold + " gold!");
