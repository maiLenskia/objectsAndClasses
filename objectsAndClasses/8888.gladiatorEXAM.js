function gladiator(input) {
    let inventory = input.shift().split(' ');

    input.forEach((line) => {
        let [command, equipment] = line.split(' ');
        let indexOfEqup = inventory.indexOf(equipment);

        if (command === 'Buy' && indexOfEqup === -1) {
            inventory.push(equipment)
        } else if (command === 'Trash' && indexOfEqup !== -1) {
            inventory.splice(indexOfEqup, 1)
        } else if (command === 'Repair' && indexOfEqup !== -1) {
            inventory.splice(indexOfEqup, 1)
            inventory.push(equipment)
        } else if (command === 'Upgrade') {
            let tokens = equipment.split('-');
            equipment = tokens[0];
            let upgrade = tokens[1];
            indexOfEqup = inventory.indexOf(equipment);

            if (indexOfEqup !== 1) {
                inventory.splice(indexOfEqup + 1, 0, `${equipment}:${upgrade}`)
            }
        }
    });

    console.log(inventory.join(' '))
}
gladiator(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
])