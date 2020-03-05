function invetory(input) {
    let heroes = [];

    input.forEach((line) => {
        let [heroName, level, items] = line.split(' / ');
        //Array
        items = items.split(', ');
        items.sort();
        let hero = {
            name: heroName,
            level: Number(level),
            items: items
        }

        heroes.push(hero);
        console.log(items.join(', '))
    });
    // object array
    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}
invetory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])