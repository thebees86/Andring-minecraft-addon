import { system, world } from "@minecraft/server";
import { ActionFormData, MessageFormData, ModalFormData } from "@minecraft/server-ui";

const months = [
    {
        name: 'Jardar',
        length: 32
    },
    {
        name: 'Fastrar',
        length: 32
    },
    {
        name: 'Penthar',
        length: 24
    },
    {
        name: 'Vanar',
        length: 32
    },
    {
        name: 'Meerar',
        length: 32
    },
    {
        name: 'Valdar',
        length: 32
    },
    {
        name: 'Andrar',
        length: 32
    },
    {
        name: 'Doxar',
        length: 24
    },
    {
        name: 'Himmelar',
        length: 32
    },
    {
        name: 'Feuar',
        length: 30
    },
    {
        name: 'Tempest',
        length: 8
    }
];

const days = [
    'Lackday',
    'Siday',
    'Reday',
    'Neday',
    'Stronday',
    'Slidday',
    'Driftay',
    'Fallday'
];

const yearLengths = [
    302,
    302,
    302,
    310
];

const warpDestinations = [
    {
        name: 'Abingus Induldigum',
        isCategory: false,
        location: [521, 90, 532],
        rotation: [90, 10],
        description: 'Historic Woodland'
    },
    {
        name: 'Closetton',
        isCategory: false,
        location: [299, -42, 539],
        rotation: [0, 0],
        description: 'Autonomous underground city-state'
    },
    {
        name: 'Fastriksburg',
        isCategory: false,
        location: [1007, 85, 73.5],
        rotation: [180, 25],
        description: 'Logging colony of Nor Nökheym'
    },
    {
        name: 'Godisramat',
        isCategory: false,
        location: [-25, 66, 402],
        rotation: [90, 0],
        description: 'Frozen Communist Haven'
    },
    {
        name: 'Hungry Wolf',
        isCategory: false,
        location: [468, 71, 538],
        rotation: [180, -30],
        description: 'Legendary restaurant and inn'
    },
    {
        name: 'Ice Cream Sundae Land',
        isCategory: false,
        location: [46, 67.5, 40],
        rotation: [-150, 0],
        description: '(Not its actual name)'
    },
    {
        name: 'Jebville',
        isCategory: false,
        location: [1022, 72, 993],
        rotation: [0, 0],
        description: 'Independent mining town'
    },
    {
        name: 'Katastan',
        isCategory: false,
        location: [2275, 81, 365],
        rotation: [-90, 0],
        description: 'Snow golem prison colony'
    },
    {
        name: 'Mapleville',
        isCategory: false,
        location: [881, 68, 660],
        rotation: [57, -5],
        description: 'Independent merchants\'s haven'
    },
    {
        name: 'Nij Viesplets',
        isCategory: false,
        location: [1206, 63, 227],
        rotation: [-90, 5],
        description: 'Sworn enemies of the Sea People'
    },
    {
        name: 'Nij Venets',
        isCategory: false,
        location: [-1123, 67, 936],
        rotation: [45, 0],
        description: 'Anneville\'s government-in-exile'
    },
    {
        name: 'Nor Nökheym',
        description: 'A city-state that needs building up',
        isCategory: true,
        subdestinations: [
            {
                name: 'Creeperbahn',
                location: [542, 67, 262],
                rotation: [0, 0],
                description: 'Semi-autonomous zone'
            },
            {
                name: '\'Hotel Delzell\'',
                location: [765, 65, 257],
                rotation: [162, -53],
                description: 'The accursed salt shaker'
            },
            {
                name: 'Hub Station',
                location: [649, 64, 140],
                rotation: [180, -35],
                description: 'Rail hub in Nor Nökheym'
            },
            {
                name: 'Island of Branchville',
                location: [700, 66, 244],
                rotation: [0, 0],
                description: 'Heart of Nor Nökheym'
            },
            {
                name: 'Xenia von Axt Academy',
                location: [584, 81, 151],
                rotation: [150, -40],
                description: 'The finest boarding school in Nökheym'
            }
        ]
    },
    {
        name: 'Ökheym',
        isCategory: true,
        description: 'World\'s largest city',
        subdestinations: [
            {
                name: 'City center',
                location: [388, 63, 245],
                rotation: [-75, -15],
                description: 'Heart of Ökheym'
            },
            {
                name: 'Confederation of Nations',
                location: [323, 78, 260],
                rotation: [-90, 0],
                description: 'Heart of the Confederation'
            },
            {
                name: 'Hawken Hotel',
                location: [223, 98, 264],
                rotation: [129, -5],
                description: 'The finest hotel in Nökheym'
            },
            {
                name: 'Library',
                location: [470.0, 64, 329],
                rotation: [0, -20],
                description: 'Promoting better litaracy'
            },
            {
                name: 'UCN',
                location: [350, 34, 374],
                rotation: [-90, 0],
                description: 'University of the Confederation of Nations'
            },
            {
                name: 'Will Street',
                location: [448, 64, 374],
                rotation: [-90, 0],
                description: 'The center of Ökheym\'s financial district'
            }
        ]
    },
    {
        name: 'Sueden Archipelago',
        description: 'A multinational colonization effort in the Sea of Mysteries',
        isCategory: true,
        subdestinations: [
            {
                name: 'Island of Baur',
                location: [-2027, 63, 570],
                rotation: [180, 0],
                description: 'Overseas colony of Ökheym'
            },
            {
                name: 'Island of Bhatt',
                location: [-1850, 66, 325],
                rotation: [90, 0],
                description: 'Property of Bhatt\'s Boats'
            },
            {
                name: 'Island of Broden',
                location: [-1998, 64, 318],
                rotation: [90, 0],
                description: 'Overseas colony of Nor Nökheym'
            },
            {
                name: 'Island of Lorenc',
                location: [-2042, 63, 453],
                rotation: [45, -30],
                description: 'Condominium of Ökheym and Nor Nökheym'
            }
        ]
    },
    {
        name: 'Tempest',
        isCategory: false,
        location: [-903, 69, 216],
        rotation: [90, 10],
        description: 'Former capital of Anneville'
    },
    {
        name: 'Vacation Lac',
        isCategory: false,
        location: [688.0, 66, 381],
        rotation: [0, 5],
        description: 'Resort town of Nor Nökheym'
    },
    {
        name: 'Waldzburg',
        destination: '\'The Tempest of the East\'',
        isCategory: true,
        subdestinations: [
            {
                name: 'Ward I',
                location: [182, 70, 635],
                rotation: [90, 0],
                description: 'Residential district'
            },
            {
                name: 'Ward II',
                location: [264, 70, 553],
                rotation: [190, -5],
                description: 'Farming district'
            },
            {
                name: 'Ward III',
                location: [385, 70, 609],
                rotation: [-45, -40],
                description: 'Workers\' district'
            },
            {
                name: 'Ward IV',
                location: [442, 70, 710],
                rotation: [90, 0],
                description: 'Government district'
            },
            {
                name: 'Ward V',
                location: [335, 70, 734],
                rotation: [90, 0],
                description: 'Business district'
            },
            {
                name: 'Ward VI',
                location: [261, 70, 635],
                rotation: [90, 0],
                description: 'Mansion district'
            },
            {
                name: 'Ward VII',
                location: [289, 70, 647.0],
                rotation: [-90, -30],
                description: 'The melting pot'
            }
        ]
    },
    {
        name: 'West Corea',
        isCategory: false,
        location: [1756, 80, -55],
        rotation: [-160, -15],
        description: 'Tommunist military state'
    },
    {
        name: 'Willemshaven',
        isCategory: false,
        location: [175, 64, 109],
        rotation: [90, -5],
        description: 'Home in the tundra'
    },
];

const startYear = 860;

let hasUpdatedDateToday = false;

function displayCurrentDay() {
    let currentCumulativeDay = world.getDay() + 1;
    let currentDay = days[(world.getMoonPhase() + 4) % 8];
    let currentMonth = 0;
    let currentYear = startYear;
    while (currentCumulativeDay > yearLengths[currentYear % 4]) {
        currentCumulativeDay -= yearLengths[currentYear % 4];
        currentYear++;
    }
    while (currentCumulativeDay > months[currentMonth].length) {
        currentCumulativeDay -= months[currentMonth].length;
        currentMonth++;
    }
    let message = currentDay + ", " + months[currentMonth].name + " " + currentCumulativeDay + " (" + currentYear + " A.R.T.)"
    let players = world.getAllPlayers();
    for (const player of players) {
        player.onScreenDisplay.setActionBar(message);
    }
}

function getCurrentDayMessage() {
    let currentCumulativeDay = world.getDay() + 1;
    let currentDay = days[(world.getMoonPhase() + 4) % 8];
    let currentMonth = 0;
    let currentYear = startYear;
    while (currentCumulativeDay > yearLengths[currentYear % 4]) {
        currentCumulativeDay -= yearLengths[currentYear % 4];
        currentYear++;
    }
    while (currentCumulativeDay > months[currentMonth].length) {
        currentCumulativeDay -= months[currentMonth].length;
        currentMonth++;
    }
    let message = currentDay + ", " + months[currentMonth].name + " " + currentCumulativeDay + " (" + currentYear + " A.R.T.)"
    return message;
}

system.afterEvents.scriptEventReceive.subscribe((event) => {
    let id = event.id;
    // let source = event.sourceEntity;
    // world.sendMessage("_" + source.typeId);
    let message = event.message;
    if (id == "andring:date") {
        if (message == "query")
            displayCurrentDay()
    }
})

system.runInterval(() => {
    let currentTime = world.getTimeOfDay();
    if (hasUpdatedDateToday == false && currentTime > 0 && currentTime < 1000) {
        // world.sendMessage("It's time to update!");
        hasUpdatedDateToday = true;
        displayCurrentDay();
    }
    if (hasUpdatedDateToday == true && currentTime > 1000)
        hasUpdatedDateToday = false;
}, 60);

function showSubWarpForm(selection, player) {
    let destination = warpDestinations[selection];
    let form = new ActionFormData();
    form.title(destination.name);
    form.body(destination.description);
    for (let item of destination.subdestinations) {
        form.button(item.name);
    }
    form.show(player).then(r => {
        if (r.canceled) return;
        let selection = r.selection;
        let finalDestination = destination.subdestinations[selection];
        let coordinates = { x: finalDestination.location[0], y: finalDestination.location[1], z: finalDestination.location[2] };
        let rot = { x: finalDestination.rotation[1], y: finalDestination.rotation[0] }; //No idea why there are swapped, but they just are. Easier this way, since this way rotation can go into the big array in the form of /tp
        player.teleport(coordinates, { rotation: rot });
        player.onScreenDisplay.setTitle(finalDestination.name, {
            stayDuration: 69,
            fadeInDuration: 10,
            fadeOutDuration: 10,
            subtitle: finalDestination.description
        });
    }).catch((e) => {
        console.error(e, e.stack);
    });
}

world.afterEvents.itemUse.subscribe(event => {
    if (event.itemStack.typeId === "minecraft:clock") { //Show date if using clock
        event.source.onScreenDisplay.setActionBar(getCurrentDayMessage())
    } else if (event.itemStack.typeId === "minecraft:compass") { //Allow warp if using compass
        //Construct UI
        let form = new ActionFormData();
        form.title("Warp Destinations");
        form.body("Choose a category or destination from the list below");
        for (let item of warpDestinations) {
            form.button(item.name);
        };

        //Display warp UI
        form.show(event.source).then(r => {
            if (r.canceled) return;
            //Else
            let selection = r.selection;
            let destination = warpDestinations[selection];
            if (destination.isCategory) {
                showSubWarpForm(selection, event.source);
            } else {
                let coordinates = { x: destination.location[0], y: destination.location[1], z: destination.location[2] };
                let rot = { x: destination.rotation[1], y: destination.rotation[0] };
                event.source.teleport(coordinates, { rotation: rot });
                event.source.onScreenDisplay.setTitle(destination.name, {
                    stayDuration: 69,
                    fadeInDuration: 10,
                    fadeOutDuration: 10,
                    subtitle: destination.description
                });
            };
        }).catch((e) => {
            console.error(e, e.stack);
        });
    };
})