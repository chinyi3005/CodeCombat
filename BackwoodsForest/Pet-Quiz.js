// Level: Pet Quiz
// https://codecombat.com/play/level/pet-quiz

// Let's ask your pet a little.

// Write an event handler function "petSay".
// The pet should say something in this function.
function petSay(event) {
    pet.say("Guten Tag!");
}

pet.on("hear", petSay);

hero.say("Do you understand me?");
hero.say("Are you a cougar?");
hero.say("How old are you?");
// Ask two more questions.
hero.say("What's your favorite food?");
hero.say("Do you like Garfield?");
