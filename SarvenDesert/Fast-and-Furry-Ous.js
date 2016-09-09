// Level: Fast and Furry-Ous
// https://codecombat.com/play/level/fast-and-furry-ous

// Fix the code to outrun the ogre.

while(true) {
    if (pet.pos.x > hero.pos.x) {
        hero.moveXY(hero.pos.x + 0.5, hero.pos.y);
    }
    else {
        pet.moveXY(pet.pos.x + 0.5, pet.pos.y);
    }
}