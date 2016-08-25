// Level: Go Fetch
// https://codecombat.com/play/level/go-fetch

// You've been caught in a burl trap!
// Send your pet to fetch the health potions!

function goFetch() {
    // You can use loops in a handler function.
    while(true) {
        var potion = hero.findNearestItem();
        if(potion) {
            // Use pet.fetch() to have your pet fetch a potion:
        pet.fetch(potion);
        }
    }
}

// When your pet is summoned, it triggers a "spawn" event.
// This tells your pet to run goFetch() at the start of the level
pet.on("spawn", goFetch);