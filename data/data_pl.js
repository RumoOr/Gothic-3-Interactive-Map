var localization = {
    "websiteTitle": "Interaktywna mapa Gothic 3",
    "sidebarSearch": "Szukaj",
    "sidebarMenu": "Znaczniki",
    "sidebarSettings": "Ustawienia",
    "tabWorldmap": "Mapa świata",
    "tabAlShedim": "Al Shedim",
    "tabImprint": "Impressum",
    "mapLayerColor": "Kolor",
    "mapLayerSepia": "Sepia",
    "mapLayerGrayscale": "Szarość",
    "searchHint": "Nazwa / Miejsce / Potwór ...",
    "settingsResetMap": "Zresetuj mapa"
}

var jsonMenu = [
    {
        "title": "Ogólne",
        "color": "#555555",
        "icon": "ic_group_general",
        "items": [
            {
                "id": "location",
                "name": "Miejsca",
                "checked": true,
                "map": "all"
            },
        	/*{
        		"id": "area",
        		"name": "Regiony",
        		"checked": false
        	},*/
            {
                "id": "teleporter",
                "name": "Kam. teleportacyjne",
                "checked": false,
                "map": "world"
            },
            {
                "id": "general_0",
                "name": "Chramy Innosa",
                "checked": false,
                "map": "world"
            },
            {
                "id": "general_1",
                "name": "Chramy Beliara",
                "checked": false,
                "map": "world"
            },
            {
                "id": "knowledge_3",
                "name": "Pulpity z wiedzą",
                "checked": false,
                "map": "world"
            },
            {
                "id": "knowledge_4",
                "name": "Pulpity z alchemią",
                "checked": false,
                "map": "world"
            },
            {
                "id": "knowledge_0",
                "name": "Kamienne tabliczki",
                "checked": false,
                "map": "all"
            },
            {
                "id": "knowledge_1",
                "name": "Sfat. kam. tabliczki",
                "checked": false,
                "map": "all"
            },
            {
                "id": "knowledge_2",
                "name": "Kamienne tablice",
                "checked": false,
                "map": "all"
            }
        ]
    },
    {
        "title": "NPC",
        "color": "#6b8eff",
        "icon": "ic_group_npc",
        "items": [
            {
                "id": "npc_0",
                "name": "Ludzie",
                "checked": false,
                "map": "all"
            },
            {
                "id": "npc_1",
                "name": "Orkowie",
                "checked": false,
                "map": "all"
            }
        ]
    },
    {
        "title": "Zadaniowe",
        "color": "#f559f3",
        "icon": "ic_group_quest",
        "items": [
            {
                "id": "quest_0",
                "name": "Ogniste puchary",
                "checked": false,
                "map": "world"
            },
            {
                "id": "quest_3",
                "name": "Artefakty Adanosa",
                "checked": false,
                "map": "all"
            },
            {
                "id": "quest_1",
                "name": "Groby przodków",
                "checked": false,
                "map": "world"
            },
            {
                "id": "quest_2",
                "name": "Klucze do świątyni",
                "checked": false,
                "map": "all"
            }
        ]
    },
    {
        "title": "Skrzynie",
        "color": "#d1b91e",
        "icon": "ic_group_treasures",
        "items": [
            {
                "id": "treasure_0",
                "name": "Sol. metalowe kufry",
                "checked": false,
                "map": "world"
            },
            {
                "id": "treasure_1",
                "name": "Stare skrzynie",
                "checked": false,
                "map": "all"
            },
            {
                "id": "treasure_2",
                "name": "Ciężkie skrzynie",
                "checked": false,
                "map": "all"
            },
            {
                "id": "treasure_3",
                "name": "Arcytrudne zamki",
                "checked": false,
                "map": "world"
            }
        ]
    },
    {
        "title": "Rośliny",
        "color": "#4CAF50",
        "icon": "ic_group_plants",
        "items": [
            {
                "id": "plant_0",
                "name": "Szczaw królewski",
                "checked": false,
                "map": "world"
            },
            {
                "id": "plant_1",
                "name": "Goblińska jagoda",
                "checked": false,
                "map": "world"
            },
            {
                "id": "plant_2",
                "name": "Dragrot",
                "checked": false,
                "map": "world"
            },
            {
                "id": "plant_3",
                "name": "Ognista jagoda",
                "checked": false,
                "map": "world"
            },
            {
                "id": "plant_4",
                "name": "Ziele pancerza",
                "checked": false,
                "map": "all"
            },
            {
                "id": "plant_5",
                "name": "Ziele królewskie",
                "checked": false,
                "map": "world"
            }
        ]
    },
    {
        "title": "Surowce",
        "color": "#409893",
        "icon": "ic_group_resources",
        "items": [
            {
                "id": "resource_0",
                "name": "Żyła żelaza",
                "checked": false,
                "map": "world"
            },
            {
                "id": "resource_1",
                "name": "Żyła rudy",
                "checked": false,
                "map": "world"
            },
            {
                "id": "resource_2",
                "name": "Żyła złota",
                "checked": false,
                "map": "all"
            },
            {
                "id": "resource_3",
                "name": "Żyła siarki",
                "checked": false,
                "map": "world"
            }
        ]
    },
    {
        "title": "Potwory",
        "color": "#ff7200",
        "icon": "ic_group_monster",
        "items": [
            {
                "id": "monster_0",
                "name": "Pełzacz",
                "checked": false,
                "map": "world"
            },
            {
                "id": "monster_1",
                "name": "Pełzacz piaskowy",
                "checked": false,
                "map": "all"
            },
            {
                "id": "monster_2",
                "name": "Smok",
                "checked": false,
                "map": "world"
            },
            {
                "id": "monster_3",
                "name": "Potwór",
                "checked": false,
                "map": "world"
            },
            {
                "id": "monster_4",
                "name": "Troll",
                "checked": false,
                "map": "world"
            },
            {
                "id": "monster_5",
                "name": "Czarny troll",
                "checked": false,
                "map": "world"
            },
            {
                "id": "monster_6",
                "name": "Cieniostwór",
                "checked": false,
                "map": "world"
            },
            {
                "id": "monster_7",
                "name": "Szabloząb",
                "checked": false,
                "map": "world"
            },
            {
                "id": "monster_8",
                "name": "Ogr",
                "checked": false,
                "map": "all"
            },
            {
                "id": "monster_9",
                "name": "Kamienny golem",
                "checked": false,
                "map": "world"
            },
            {
                "id": "monster_10",
                "name": "Ognisty golem",
                "checked": false,
                "map": "all"
            },
            {
                "id": "monster_11",
                "name": "Lodowy golem",
                "checked": false,
                "map": "world"
            },
            {
                "id": "monster_12",
                "name": "Zombie",
                "checked": false,
                "map": "all"
            },
            {
                "id": "monster_13",
                "name": "Szkielet",
                "checked": false,
                "map": "all"
            },
            {
                "id": "monster_14",
                "name": "Mumia",
                "checked": false,
                "map": "all"
            },
            {
                "id": "monster_15",
                "name": "Kapłan ożywieńców",
                "checked": false,
                "map": "all"
            },
            {
                "id": "monster_16",
                "name": "Gargulec",
                "checked": false,
                "map": "all"
            },
            {
                "id": "monster_17",
                "name": "Strażnik świątynny",
                "checked": false,
                "map": "all"
            }
            // {
            //     "id": "monster_18",
            //     "name": "Demon",
            //     "checked": false,
            //     "map": "all"
            // }
        ]
    }
]

var jsonData = [
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Ardea",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                89259,
                -10758
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Bakaresh",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                42877, -98774
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Ben Erai",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -35000, -66000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Ben Sala",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                17000, -93000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Braga",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -86000, -52000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Faring",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                62000, 59000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Klan Ognia",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                24000, 165000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Geldern",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -57000, 47000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Gotha",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                34000, 50000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Klan Młota",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                59000, 130000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Ishtar",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -205000, -152000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Cape Dun",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                49000, -29000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Lago",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -17000, -54000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Vengard",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                86784, 36096
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Klasztor",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16000, 151104
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Montera",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12529, 22426
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Mora Sul",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -95456, -140518
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Nemora",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -75123, 3171
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Okara",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -4920, 65820
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Reddock",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                69504, -17216
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Silden",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -31152, 73582
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Trelis",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -44879, 12283
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Klan Wilka",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47696, 108102
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Wieża Xardasa",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                96633, 136694
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Al Shedim",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true,
            "map": "world"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -44964, -154504
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Świątynia",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true,
            "map": "alshedim"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -43964, -156504
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Ruiny strażników umarłych",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true,
            "map": "alshedim"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -59000, -158000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Szkoła wojowników",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true,
            "map": "alshedim"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -50000, -174000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Prastara biblioteka",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true,
            "map": "alshedim"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -24000, -152000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Kwatery kapłanów",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true,
            "map": "alshedim"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -51000, -146000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "location",
            "name": "Kwatery uzdrowicieli",
            "index": -1,
            "description": "",
            "screen": "",
            "tag": "",
            "label": true,
            "map": "alshedim"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -34000, -169000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Ardei",
            "index": -1,
            "world": 0,
            "description": "Leży na stole orkowego pułkownika.",
            "screen": "teleporter_ardea.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                89259,
                -10758
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Bakareshu",
            "index": -1,
            "world": 1,
            "description": "Na studni obok Silvio.",
            "screen": "teleporter_bakaresh.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                41986,
                -102282
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Ishtar",
            "index": -1,
            "world": 1,
            "description": "Po lewej stronie przy wejściu na drewnianym stoliku.",
            "screen": "teleporter_ishtar.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -202479,
                -153777
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Klanu Ognia",
            "index": -1,
            "world": 2,
            "description": "Na drugiej półce po lewej stronie.",
            "screen": "teleporter_fire_clan.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                20780,
                162312
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do świątyni Beliara",
            "index": -1,
            "world": 1,
            "description": "W przedsionku świątyni, w skarbcu.",
            "screen": "teleporter_beliar_temple.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                39700,
                -93473
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Ben Erai",
            "index": -1,
            "world": 1,
            "description": "Na beczce na prawo od wejścia do kopalni.",
            "screen": "teleporter_ben_erai.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -31807,
                -66574
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Ben Sali",
            "index": -1,
            "world": 1,
            "description": "Naprzeciwko kuźni, koło schodów.",
            "screen": "teleporter_ben_sala.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                17264,
                -97340
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Bragi",
            "index": -1,
            "world": 1,
            "description": "Na skrzyniach niedaleko kowadła.",
            "screen": "teleporter_braga.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -87842,
                -55610
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Faring",
            "index": -1,
            "world": 0,
            "description": "Na końcu jaskini przy wejściu do wioski (gdzie stoi i kopie Rocko).",
            "screen": "teleporter_faring.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                59096,
                57873
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Geldern",
            "index": -1,
            "world": 0,
            "description": "Blisko bramy miasta, koło skrzyni i paru szkieletów.",
            "screen": "teleporter_geldern.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -61196,
                38020
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Gothy",
            "index": -1,
            "world": 0,
            "description": "Pod zamkiem Gotha, w budynku po prawej stronie drogi.",
            "screen": "teleporter_gotha.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                35162,
                47390
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Klanu Młota",
            "index": -1,
            "world": 2,
            "description": "Na stole w chacie.",
            "screen": "teleporter_hammer_clan.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                62933,
                131068
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do klasztoru",
            "index": -1,
            "world": 2,
            "description": "W skrzyni, na samym dole biblioteki.",
            "screen": "teleporter_monastery.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                13351,
                147594
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Cape Dun",
            "index": -1,
            "world": 0,
            "description": "W magazynie Urkrassa.",
            "screen": "teleporter_kap_dun.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47076,
                -31486
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do sali tronowej Rhobara II",
            "index": -1,
            "world": 0,
            "description": "Nad salą tronową.",
            "screen": "teleporter_throne_vengard.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                96761,
                33815
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Lago",
            "index": -1,
            "world": 1,
            "description": "Leży w kupie gnoju za areną.",
            "screen": "teleporter_lago.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -12747,
                -50973
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Mora Sul",
            "index": -1,
            "world": 1,
            "description": "Na stole za Bandaro.",
            "screen": "teleporter_mora_sul.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -98265,
                -146245
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Nemory",
            "index": -1,
            "world": 0,
            "description": "W skrzyni po prawej stronie wejścia do Nemory.",
            "screen": "teleporter_nemora.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -74950,
                4280
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Okary",
            "index": -1,
            "world": 0,
            "description": "Tuż przy wejściu na kamieniu.",
            "screen": "teleporter_okara.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -6987,
                58817
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Reddock",
            "index": -1,
            "world": 0,
            "description": "W jednej ze skrzyń w południowych jaskiniach.",
            "screen": "teleporter_reddock.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                75030,
                -6000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Silden",
            "index": -1,
            "world": 0,
            "description": "Przy kamiennym kręgu na północ od Silden.",
            "screen": "teleporter_silden.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -32860,
                81010
            ]
        }
    }, {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Trelis",
            "index": -1,
            "world": 0,
            "description": "W skrzyni za chramem Beliara.",
            "screen": "teleporter_trelis.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47131,
                4779
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do świątyni w Vengardzie",
            "index": -1,
            "world": 0,
            "description": "Do znalezienia w Gocie w jaskini pod zamkiem.",
            "screen": "teleporter_temple_vengard.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                31774,
                54655
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Klanu Wilka",
            "index": -1,
            "world": 2,
            "description": "W zamkniętej skrzyni w chacie.",
            "screen": "teleporter_wolf_clan.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47602,
                109080
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do wieży Xardasa",
            "index": -1,
            "world": 2,
            "description": "Na stole.",
            "screen": "teleporter_xardas.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                95313,
                137205
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Zubena",
            "index": -1,
            "world": 1,
            "description": "W sypialni Zubena obok jego łóżka.",
            "screen": "teleporter_zuben.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -219632,
                -155756
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "teleporter",
            "name": "Kamień teleportacyjny do Montery",
            "index": -1,
            "world": 0,
            "description": "W chacie naprzeciwko magazyniera Sanforda.",
            "screen": "teleporter_montera.jpg",
            "tag": ""
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                8541,
                23040
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 0,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -112231,
                -155432
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -9713,
                -94750
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -63450,
                26256
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 3,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -51837,
                1893
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 4,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -35526,
                -1787
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 5,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -24316,
                33962
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 6,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -12099,
                -26794
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 7,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11854,
                -26694
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 8,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -30011,
                -7504
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 9,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -78484,
                -20472
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 10,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11348,
                93968
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 11,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -4486,
                89858
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 12,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -9168,
                81952
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 13,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -18345,
                88446
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 14,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                6846,
                115784
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 15,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                79341,
                23237
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 16,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                67457,
                -17859
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 17,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                78017,
                -23842
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 18,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                71167,
                1423
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 19,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11573,
                74826
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 20,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -4134,
                78984
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 21,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                7533,
                78052
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 22,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12709,
                67457
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 23,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47006,
                13381
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 24,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45340,
                -9607
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 25,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -6208,
                -3636
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 26,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                7605,
                29137
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 27,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -13762,
                12363
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 28,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45418,
                -9682
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 29,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -7745,
                15865
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 30,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -66239,
                62816
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 31,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -72442,
                67369
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 32,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -70930,
                71491
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 33,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -63605,
                50136
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 34,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -37535,
                51561
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 35,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -57378,
                26864
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 36,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -57177,
                34569
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 37,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -70347,
                21564
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 38,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26510,
                51348
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 39,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                88704,
                -4719
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 40,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                80997,
                -14157
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 41,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                93086,
                -2566
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 42,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                87874,
                -22807
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 43,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                89358,
                -23418
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 44,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43153,
                -30607
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 45,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                34550,
                55013
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 46,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                39529,
                155145
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Goblińska jagoda",
            "index": 47,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                42333,
                121287
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 0,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46831,
                -114586
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -202629,
                -170395
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -131831,
                -188694
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 3,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26365,
                -105111
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 4,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -6253,
                -50326
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 5,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -28124,
                -61826
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 6,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -36884,
                -54045
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 7,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -85823,
                -46346
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 8,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -198993,
                -67576
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 9,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -70725,
                -109462
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 10,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77062,
                20269
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 11,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -48661,
                4367
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 12,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -35304,
                -24432
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 13,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -20320,
                -17483
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 14,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -73353,
                92411
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 15,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -28953,
                111868
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 16,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -20536,
                95468
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 17,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                5281,
                87600
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 18,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                1167,
                115242
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 19,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -2067,
                105635
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 20,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                6331,
                71678
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 21,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                80521,
                5704
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 22,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                65002,
                -8543
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 23,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                99392,
                -15273
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 24,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                87433,
                -21429
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 25,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -4153,
                54680
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 26,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -1937,
                57023
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 27,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                50577,
                15609
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 28,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -2499,
                15184
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 29,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -5450,
                -9155
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 30,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                9182,
                30293
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 31,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -17256,
                13678
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 32,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2262,
                19749
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 33,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -2208,
                -6333
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 34,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -71318,
                35419
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 35,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -71698,
                60110
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 36,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -65265,
                65193
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 37,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -69400,
                79096
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 38,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -68559,
                99148
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 39,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -79203,
                59178
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 40,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -58269,
                38855
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 41,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                40052,
                52548
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 42,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                85373,
                -12893
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 43,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                76402,
                -3315
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 44,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                93148,
                -8010
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 45,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                77961,
                -7927
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 46,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                81301,
                -10942
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 47,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                88910,
                -1611
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 48,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                108255,
                132367
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 49,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                72623,
                160086
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 50,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                44602,
                139296
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 51,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                35194,
                118874
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 52,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                42848,
                116933
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 53,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                48773,
                94353
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 54,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                106634,
                84367
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 55,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                70727,
                160185
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 56,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                100450,
                145928
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Szczaw królewski",
            "index": 57,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                90739,
                113118
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 0,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -2177,
                -21985
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -25573,
                -128283
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 2,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -33577,
                -108966
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 3,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46236,
                37981
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 4,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46270,
                25113
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 5,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -72881,
                -27260
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 6,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -12487,
                -26388
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 7,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11327,
                -26783
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 8,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11558,
                -27547
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 9,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -44227,
                84931
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 10,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -29425,
                107032
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 11,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -13328,
                115264
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 12,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -2078,
                101374
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 13,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -7796,
                89410
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 14,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                5750,
                76232
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 15,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -48871,
                73096
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 16,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                85798,
                9890
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 17,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                70705,
                17003
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 18,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                69153,
                -22639
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 19,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                68672,
                -17175
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 20,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -2023,
                54588
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 21,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47872,
                15226
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 22,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -19016,
                3450
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 23,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -5617,
                -11026
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 24,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                22494,
                54490
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 25,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -15266,
                15821
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 26,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                32010,
                -18788
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 27,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -63729,
                81107
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 28,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -63687,
                81295
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 29,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -76154,
                58798
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 30,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -76403,
                59402
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 31,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -75853,
                59875
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 32,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                25177,
                58385
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 33,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                87564,
                -3396
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 34,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                90859,
                -19588
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 35,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                85528,
                -137
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 36,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                95633,
                -15435
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 37,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                41792,
                -28924
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 38,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                72056,
                141345
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Dragrot",
            "index": 39,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                17037,
                153987
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 0,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -232573,
                -142796
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -102569,
                -153478
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 2,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -30234,
                3383
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 3,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -27701,
                17080
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 4,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -71572,
                43550
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 5,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -12034,
                -26868
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 6,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                11842,
                65550
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 7,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -41051,
                83415
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 8,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -42086,
                79645
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 9,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -28097,
                85079
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 10,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -29099,
                79565
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 11,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                60205,
                -5853
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 12,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                68592,
                -19115
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 13,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                67155,
                12085
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 14,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57673,
                -22139
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 15,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -2968,
                56343
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 16,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16245,
                60357
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 17,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14458,
                63924
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 18,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43134,
                -2367
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 19,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                51215,
                -11261
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 20,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -16346,
                1693
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 21,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11990,
                13963
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 22,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                17694,
                31165
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 23,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                4809,
                12975
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 24,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                27004,
                68983
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 25,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                29416,
                64217
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 26,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                80376,
                -7342
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 27,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                98714,
                -22174
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 28,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                87188,
                -20897
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 29,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                77823,
                -7883
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 30,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                77112,
                -15813
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 31,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                27140,
                44129
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 32,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                35788,
                140203
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ognista jagoda",
            "index": 33,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                53068,
                138299
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 0,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                5045,
                -61956
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 1,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -24826,
                -139808
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 2,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -65695,
                32381
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 3,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -55216,
                17395
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 4,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -30684,
                23272
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 5,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -27903,
                9097
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 6,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -20617,
                13480
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 7,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -79495,
                -18474
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 8,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -67515,
                24945
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 9,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -74009,
                -5115
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 10,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -58348,
                7118
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 11,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -35374,
                -4263
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 12,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -62406,
                97442
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 13,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -69071,
                86858
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 14,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11000,
                88885
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 15,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -4517,
                106551
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 16,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                7176,
                117579
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 17,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -1413,
                108205
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 18,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                10606,
                70290
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 19,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                4376,
                73250
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 20,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                51683,
                505
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 21,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                76432,
                28276
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 22,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                71406,
                -32404
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 23,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                81673,
                -12272
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 24,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47711,
                -455
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 25,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -15380,
                1484
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 26,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12506,
                39809
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 27,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -9576,
                13891
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 28,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                19139,
                62555
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 29,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                11397,
                35300
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 30,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                5558,
                17098
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 31,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                18553,
                -4575
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 32,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -66353,
                62859
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 33,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -78635,
                67861
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 34,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -60577,
                73284
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 35,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -63626,
                81466
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 36,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -70030,
                80088
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 37,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -72397,
                83860
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 38,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46163,
                62932
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 39,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -81924,
                57500
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 40,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77593,
                62845
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 41,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                75525,
                -10236
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 42,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                89790,
                -20739
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 43,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                87281,
                -13825
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 44,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45383,
                -30770
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 45,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                75886,
                118285
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele pancerza",
            "index": 46,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                78152,
                132009
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 0,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -207131,
                -64916
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 1,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                25678,
                -103384
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 2,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -71259,
                36716
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 3,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -61343,
                6914
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 4,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -43193,
                -17683
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 5,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -52283,
                1849
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 6,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                6754,
                71239
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 7,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -6724,
                72881
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 8,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2917,
                68530
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 9,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -36428,
                81836
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 10,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47253,
                72146
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 11,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -39025,
                67198
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 12,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                66300,
                5994
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 13,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                68627,
                8664
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 14,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                87903,
                25501
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 15,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -15425,
                65292
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 16,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                5392,
                68958
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 17,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -3632,
                79258
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 18,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                20229,
                -16555
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 19,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -10529,
                -3441
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 20,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                1366,
                -8197
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 21,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -3379,
                -4536
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 22,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                1775,
                -12038
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 23,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                10487,
                6666
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 24,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -72456,
                93496
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 25,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -61056,
                51951
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 26,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -54892,
                55766
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 27,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -53732,
                63777
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 28,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -49597,
                60692
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 29,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46970,
                50698
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 30,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -52928,
                51352
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 31,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43106,
                62640
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 32,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                95258,
                -19000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 33,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                98067,
                -6583
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 34,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                90278,
                -5505
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 35,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                84058,
                -14242
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 36,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                89067,
                -19855
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 37,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                40743,
                -30401
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 38,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                50267,
                46610
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 39,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                128412,
                110377
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 40,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                78504,
                142253
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "plant",
            "name": "Ziele królewskie",
            "index": 41,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                30244,
                103230
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 0,
            "description": "",
            "screen": "treasure_0_1.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -320,
                -159412
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 1,
            "description": "",
            "screen": "treasure_0_2.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -96890,
                -142852
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 2,
            "description": "",
            "screen": "treasure_0_3.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16806,
                -94403
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 3,
            "description": "",
            "screen": "treasure_0_4.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                39493,
                -93494
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 4,
            "description": "",
            "screen": "treasure_0_5.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                39847,
                -92104
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 5,
            "description": "",
            "screen": "treasure_0_6.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                91242,
                29538
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 6,
            "description": "",
            "screen": "treasure_0_7.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                79083,
                23848
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 7,
            "description": "",
            "screen": "treasure_0_8.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -45494,
                12176
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 8,
            "description": "",
            "screen": "treasure_0_9.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -26371,
                72103
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 9,
            "description": "",
            "screen": "treasure_0_10.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -17110,
                111761
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 10,
            "description": "",
            "screen": "treasure_0_11.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                18260,
                61270
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 11,
            "description": "",
            "screen": "treasure_0_12.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                28524,
                56801
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 12,
            "description": "",
            "screen": "treasure_0_13.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43371,
                -29672
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Solidny metalowy kufer",
            "index": 13,
            "description": "",
            "screen": "treasure_0_14.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                64823,
                56171
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 0,
            "description": "",
            "screen": "treasure_1_1.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                32160,
                128148
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 1,
            "description": "",
            "screen": "treasure_1_2.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                82227,
                138521
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 2,
            "description": "",
            "screen": "treasure_1_3.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                51748,
                165213
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 3,
            "description": "",
            "screen": "treasure_1_4.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                13382,
                147565
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 4,
            "description": "",
            "screen": "treasure_1_5.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                33123,
                131466
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 5,
            "description": "",
            "screen": "treasure_1_6.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                122317,
                90811
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 6,
            "description": "",
            "screen": "treasure_1_7.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                88579,
                106078
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 7,
            "description": "",
            "screen": "treasure_1_8.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                113703,
                122319
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 8,
            "description": "",
            "screen": "treasure_1_9.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                58537,
                132712
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 9,
            "description": "",
            "screen": "treasure_1_10.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                18492,
                122160
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 10,
            "description": "",
            "screen": "treasure_1_11.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -98543,
                -142863
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 11,
            "description": "",
            "screen": "treasure_1_12.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -102288,
                -179322
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 12,
            "description": "",
            "screen": "treasure_1_13.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46351,
                -164615
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 13,
            "description": "",
            "screen": "treasure_1_14.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -204778,
                -159014
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 14,
            "description": "",
            "screen": "treasure_1_15.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26397,
                -102680
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 15,
            "description": "",
            "screen": "treasure_1_16.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                63385,
                -86569
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 16,
            "description": "",
            "screen": "treasure_1_17.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                40466,
                -87035
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 17,
            "description": "",
            "screen": "treasure_1_18.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -27766,
                -125451
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 18,
            "description": "",
            "screen": "treasure_1_19.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -59672,
                -157236
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 19,
            "description": "",
            "screen": "treasure_1_20.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46877,
                -170862
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 20,
            "description": "",
            "screen": "treasure_1_21.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -36506,
                -105227
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 21,
            "description": "",
            "screen": "treasure_1_22.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -35246,
                -54437
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 22,
            "description": "",
            "screen": "treasure_1_23.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -116789,
                -94509
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 23,
            "description": "",
            "screen": "treasure_1_24.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -126358,
                -72895
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 24,
            "description": "",
            "screen": "treasure_1_25.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -96677,
                -33619
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 25,
            "description": "",
            "screen": "treasure_1_26.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -20426,
                -130085
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 26,
            "description": "",
            "screen": "treasure_1_27.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -219713,
                -154071
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 27,
            "description": "",
            "screen": "treasure_1_28.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16877,
                154160
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 28,
            "description": "",
            "screen": "treasure_1_29.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                39851,
                16452
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 29,
            "description": "",
            "screen": "treasure_1_30.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                86240,
                40863
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 30,
            "description": "",
            "screen": "treasure_1_31.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                96690,
                34015
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 31,
            "description": "",
            "screen": "treasure_1_32.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                75009,
                28480
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 32,
            "description": "",
            "screen": "treasure_1_33.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -28242,
                73958
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 33,
            "description": "",
            "screen": "treasure_1_34.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                75361,
                42479
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 34,
            "description": "",
            "screen": "treasure_1_35.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -22808,
                1344
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 35,
            "description": "",
            "screen": "treasure_1_36.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -22539,
                3471
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 36,
            "description": "",
            "screen": "treasure_1_37.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -12098,
                -27494
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 37,
            "description": "",
            "screen": "treasure_1_38.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -17172,
                108282
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 38,
            "description": "",
            "screen": "treasure_1_39.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                9426,
                88063
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 39,
            "description": "",
            "screen": "treasure_1_40.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                67746,
                -12973
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 40,
            "description": "",
            "screen": "treasure_1_41.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -2719,
                55699
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 41,
            "description": "",
            "screen": "treasure_1_42.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -3520,
                30349
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 42,
            "description": "",
            "screen": "treasure_1_43.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -3490,
                67121
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 43,
            "description": "",
            "screen": "treasure_1_44.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                27471,
                68869
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 44,
            "description": "",
            "screen": "treasure_1_45.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                41384,
                -27618
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 45,
            "description": "",
            "screen": "treasure_1_46.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                30606,
                46604
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 46,
            "description": "",
            "screen": "treasure_1_47.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                29229,
                56083
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 47,
            "description": "",
            "screen": "treasure_1_48.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -54321,
                45003
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 48,
            "description": "",
            "screen": "treasure_1_49.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -55582,
                46703
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Stara skrzynia",
            "index": 49,
            "description": "",
            "screen": "treasure_1_50.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -61009,
                42545
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 0,
            "description": "",
            "screen": "treasure_2_1.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                55869,
                100553
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 1,
            "description": "",
            "screen": "treasure_2_2.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                83349,
                167545
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 2,
            "description": "",
            "screen": "treasure_2_3.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                76113,
                100753
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 3,
            "description": "",
            "screen": "treasure_2_4.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                24049,
                160651
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 4,
            "description": "",
            "screen": "treasure_2_5.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57318,
                133494
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 5,
            "description": "",
            "screen": "treasure_2_6.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                46436,
                106591
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 6,
            "description": "",
            "screen": "treasure_2_7.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                59112,
                157544
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 7,
            "description": "",
            "screen": "treasure_2_8.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                61152,
                95690
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 8,
            "description": "",
            "screen": "treasure_2_9.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                24054,
                161114
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 9,
            "description": "",
            "screen": "treasure_2_10.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -97160,
                -142845
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 10,
            "description": "",
            "screen": "treasure_2_11.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -102084,
                -176549
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 11,
            "description": "",
            "screen": "treasure_2_12.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -155386,
                -143913
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 12,
            "description": "",
            "screen": "treasure_2_13.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47863,
                -159381
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 13,
            "description": "",
            "screen": "treasure_2_14.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -38069,
                -145559
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 14,
            "description": "",
            "screen": "treasure_2_15.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -235168,
                -123844
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 15,
            "description": "",
            "screen": "treasure_2_16.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -226146,
                -133964
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 16,
            "description": "",
            "screen": "treasure_2_17.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -204992,
                -158846
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 17,
            "description": "",
            "screen": "treasure_2_18.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -175761,
                -121251
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 18,
            "description": "",
            "screen": "treasure_2_19.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                18770,
                -94839
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 19,
            "description": "",
            "screen": "treasure_2_20.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                72068,
                -79096
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 20,
            "description": "",
            "screen": "treasure_2_21.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                80485,
                -102090
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 21,
            "description": "",
            "screen": "treasure_2_22.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -25213,
                -152442
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 22,
            "description": "",
            "screen": "treasure_2_23.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -219894,
                -153925
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 23,
            "description": "",
            "screen": "treasure_2_24.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                38219,
                -22321
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 24,
            "description": "",
            "screen": "treasure_2_25.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14475,
                46896
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 25,
            "description": "",
            "screen": "treasure_2_26.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                91762,
                43935
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 26,
            "description": "",
            "screen": "treasure_2_27.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                97262,
                32310
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 27,
            "description": "",
            "screen": "treasure_2_28.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                76964,
                27242
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 28,
            "description": "",
            "screen": "treasure_2_29.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47649,
                11914
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 29,
            "description": "",
            "screen": "treasure_2_30.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47748,
                2395
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 30,
            "description": "",
            "screen": "treasure_2_31.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                93490,
                58805
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 31,
            "description": "",
            "screen": "treasure_2_32.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -42735,
                20151
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 32,
            "description": "",
            "screen": "treasure_2_33.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -17600,
                -3458
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 33,
            "description": "",
            "screen": "treasure_2_34.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -63393,
                81565
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 34,
            "description": "",
            "screen": "treasure_2_35.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -74560,
                75750
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 35,
            "description": "",
            "screen": "treasure_2_36.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -76721,
                59016
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 36,
            "description": "",
            "screen": "treasure_2_37.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                67448,
                -7109
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 37,
            "description": "",
            "screen": "treasure_2_38.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                1494,
                67150
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 38,
            "description": "",
            "screen": "treasure_2_39.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -88767,
                -32187
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 39,
            "description": "",
            "screen": "treasure_2_40.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                85734,
                -312
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 40,
            "description": "",
            "screen": "treasure_2_41.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -1842,
                68907
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 41,
            "description": "",
            "screen": "treasure_2_42.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26733,
                68983
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 42,
            "description": "",
            "screen": "treasure_2_43.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                41389,
                -25611
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 43,
            "description": "",
            "screen": "treasure_2_44.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                44902,
                -35386
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 44,
            "description": "",
            "screen": "treasure_2_45.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                33344,
                54946
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Ciężka skrzynia",
            "index": 45,
            "description": "",
            "screen": "treasure_2_46.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -58572,
                49382
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 0,
            "description": "",
            "screen": "treasure_3_1.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57268,
                127960
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 1,
            "description": "",
            "screen": "treasure_3_2.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                21085,
                -133561
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 2,
            "description": "",
            "screen": "treasure_3_3.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -101766,
                -144168
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 3,
            "description": "",
            "screen": "treasure_3_4.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -98224,
                -144629
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 4,
            "description": "",
            "screen": "treasure_3_5.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -220108,
                -154018
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 5,
            "description": "",
            "screen": "treasure_3_6.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -217770,
                -156409
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 6,
            "description": "",
            "screen": "treasure_3_7.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -86622,
                -54405
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 7,
            "description": "",
            "screen": "treasure_3_8.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                18392,
                -95209
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 8,
            "description": "",
            "screen": "treasure_3_9.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -39039,
                -67205
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 9,
            "description": "",
            "screen": "treasure_3_10.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                39208,
                -93883
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 10,
            "description": "",
            "screen": "treasure_3_11.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                39421,
                -94091
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 11,
            "description": "",
            "screen": "treasure_3_12.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                30656,
                -94579
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 12,
            "description": "",
            "screen": "treasure_3_13.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                6599,
                -2392
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 13,
            "description": "",
            "screen": "treasure_3_14.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                82903,
                31530
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 14,
            "description": "",
            "screen": "treasure_3_15.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                81681,
                37965
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 15,
            "description": "",
            "screen": "treasure_3_16.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                94652,
                37493
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 16,
            "description": "",
            "screen": "treasure_3_17.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -33092,
                75015
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 17,
            "description": "",
            "screen": "treasure_3_18.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                63255,
                12128
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 18,
            "description": "",
            "screen": "treasure_3_19.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -23728,
                21136
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 19,
            "description": "",
            "screen": "treasure_3_20.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -61177,
                101968
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 20,
            "description": "",
            "screen": "treasure_3_21.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -67497,
                108859
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 21,
            "description": "",
            "screen": "treasure_3_22.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                41161,
                -27814
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 22,
            "description": "",
            "screen": "treasure_3_23.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                29815,
                56071
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 23,
            "description": "",
            "screen": "treasure_3_24.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -54117,
                40770
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 24,
            "description": "",
            "screen": "treasure_3_25.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                66695,
                57442
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "treasure",
            "name": "Arcytrudny zamek",
            "index": 25,
            "description": "",
            "screen": "treasure_3_26.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                65603,
                56298
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 0,
            "count": 9,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -208787,
                -56981
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 1,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                102415,
                122637
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 2,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                83814,
                111660
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 3,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43036,
                141762
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 4,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                73480,
                132802
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 5,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                67721,
                -7808
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 6,
            "count": 9,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11794,
                63947
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 7,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -89180,
                -32027
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 8,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -44857,
                63848
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 9,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                40258,
                16603
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 10,
            "count": 10,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                21690,
                58909
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 11,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -10353,
                74767
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 12,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47217,
                -32992
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 13,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                44595,
                -27927
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz",
            "index": 14,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                20519,
                64561
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 0,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -88234,
                -93342
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 0,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -87891,
                -94148
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 1,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -107532,
                -161311
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 2,
            "count": 11,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -123039,
                -163964
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 3,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -125748,
                -142630
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 4,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -130492,
                -146064
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 5,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -135722,
                -137174
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 6,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -136499,
                -143055
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 7,
            "count": 11,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -140994,
                -146538
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 8,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -54504,
                -114779
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 9,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -59924,
                -112695
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 10,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47781,
                -110649
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 11,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -63227,
                -121009
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 12,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -163332,
                -119183
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 13,
            "count": 11,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -142426,
                -116406
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 14,
            "count": 8,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -152140,
                -95330
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 15,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -165824,
                -94998
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 16,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -167019,
                -100679
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 17,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -159105,
                -102724
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 18,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -248,
                -79487
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 19,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                23616,
                -113599
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 20,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -177391,
                -61753
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 21,
            "count": 28,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -36894,
                -52729
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 22,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -19950,
                -132392
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 23,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                17568,
                -115978
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 24,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -105167,
                -134291
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 25,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -100582,
                -117408
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 26,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -103558,
                -87843
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 27,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -104465,
                -77218
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 28,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                53371,
                -88015
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 29,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57822,
                -85112
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 30,
            "count": 9,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -28280,
                -150565
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 31,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -33419,
                -150969
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Pełzacz piaskowy",
            "index": 32,
            "count": 8,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47403,
                -138458
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Smok",
            "index": 0,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -25471,
                -127684
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Smok",
            "index": 1,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -75855,
                59369
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Smok",
            "index": 2,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                41960,
                -26989
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Potwór",
            "index": 0,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -110699,
                -152983
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Potwór",
            "index": 1,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -117178,
                -92850
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Potwór",
            "index": 2,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -144492,
                -159023
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Potwór",
            "index": 3,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -33551,
                -108932
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Potwór",
            "index": 4,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -59117,
                75664
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Potwór",
            "index": 5,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -62767,
                79395
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Potwór",
            "index": 6,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -82804,
                -4974
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Potwór",
            "index": 7,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -82924,
                715
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Potwór",
            "index": 8,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -22000,
                -16468
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Potwór",
            "index": 9,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -18243,
                -21608
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Czarny troll",
            "index": 0,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                88390,
                105508
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Czarny troll",
            "index": 1,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                75276,
                118156
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Czarny troll",
            "index": 2,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                33086,
                132780
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Czarny troll",
            "index": 3,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -61035,
                101201
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Czarny troll",
            "index": 4,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -73232,
                75509
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Czarny troll",
            "index": 5,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "5"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                30136,
                56953
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 0,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -67944,
                -24465
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 1,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                87175,
                69140
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 2,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43593,
                158495
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 3,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                49589,
                131457
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 4,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                36511,
                110038
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 5,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                23872,
                112369
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 6,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45737,
                92285
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 7,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                72733,
                160507
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 8,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                62144,
                151242
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 9,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                129852,
                109355
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 10,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -60313,
                102110
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 11,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -64411,
                81686
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 12,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -17723,
                41162
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 13,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -75675,
                75216
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 14,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                9753,
                80869
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 15,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16252,
                62041
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 16,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -26538,
                -10688
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Troll",
            "index": 17,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                66194,
                49441
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 0,
            "description": "",
            "screen": "stone_tablet_1.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -177088,
                -61444
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 1,
            "description": "",
            "screen": "stone_tablet_2.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -177014,
                -62012
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 2,
            "description": "",
            "screen": "stone_tablet_3.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -89386,
                -175954
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 3,
            "description": "",
            "screen": "stone_tablet_4.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -92708,
                -175594
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 4,
            "description": "",
            "screen": "stone_tablet_5.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -103358,
                -170607
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 5,
            "description": "",
            "screen": "stone_tablet_6.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -118737,
                -170714
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 6,
            "description": "",
            "screen": "stone_tablet_7.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -118959,
                -158807
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 7,
            "description": "",
            "screen": "stone_tablet_8.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -147883,
                -156096
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 8,
            "description": "",
            "screen": "stone_tablet_9.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -50130,
                -144989
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 9,
            "description": "",
            "screen": "stone_tablet_10.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -26153,
                -151256
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 10,
            "description": "",
            "screen": "stone_tablet_11.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -31718,
                -163835
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 11,
            "description": "",
            "screen": "stone_tablet_12.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -39675,
                -166375
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tabliczka",
            "index": 12,
            "description": "",
            "screen": "stone_tablet_13.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -48064,
                -171142
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Sfatygowana kamienna tabliczka",
            "index": 0,
            "description": "",
            "screen": "old_stone_tablet_1.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -146540,
                -146596
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Sfatygowana kamienna tabliczka",
            "index": 1,
            "description": "",
            "screen": "old_stone_tablet_2.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -25470,
                -153349
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Sfatygowana kamienna tabliczka",
            "index": 2,
            "description": "",
            "screen": "old_stone_tablet_3.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -45341,
                63575
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tablica",
            "index": 0,
            "description": "",
            "screen": "stone_pillar_1.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -41127,
                -155586
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tablica",
            "index": 1,
            "description": "",
            "screen": "stone_pillar_2.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                49390,
                -98041
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tablica",
            "index": 2,
            "description": "",
            "screen": "stone_pillar_3.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -124484,
                -85949
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tablica",
            "index": 3,
            "description": "",
            "screen": "stone_pillar_4.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -104812,
                -174783
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tablica",
            "index": 4,
            "description": "",
            "screen": "stone_pillar_5.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -205469,
                -58564
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Kamienna tablica",
            "index": 5,
            "description": "",
            "screen": "stone_pillar_6.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -205500,
                -58240
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 0,
            "description": "",
            "screen": "knowledge_3_1.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                90640,
                -13947
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 1,
            "description": "",
            "screen": "knowledge_3_2.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                65805,
                57235
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 2,
            "description": "",
            "screen": "knowledge_3_3.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                66250,
                58159
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 3,
            "description": "",
            "screen": "knowledge_3_4.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -54978,
                44954
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 4,
            "description": "",
            "screen": "knowledge_3_5.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -54683,
                46332
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 5,
            "description": "",
            "screen": "knowledge_3_6.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                32991,
                55572
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 6,
            "description": "",
            "screen": "knowledge_3_7.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                51405,
                -32323
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 7,
            "description": "",
            "screen": "knowledge_3_8.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -26656,
                71028
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 8,
            "description": "",
            "screen": "knowledge_3_9.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -44755,
                9096
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 9,
            "description": "",
            "screen": "knowledge_3_10.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                96065,
                32127
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 10,
            "description": "",
            "screen": "knowledge_3_11.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                13791,
                146339
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 11,
            "description": "",
            "screen": "knowledge_3_12.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                94767,
                136889
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 12,
            "description": "",
            "screen": "knowledge_3_13.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -86285,
                -53871
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z prastarą wiedzą",
            "index": 13,
            "description": "",
            "screen": "knowledge_3_14.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -220160,
                -155378
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 0,
            "description": "",
            "screen": "knowledge_4_1.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                94236,
                -10584
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 1,
            "description": "",
            "screen": "knowledge_4_2.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                62632,
                58634
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 2,
            "description": "",
            "screen": "knowledge_4_3.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                62279,
                58825
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 3,
            "description": "",
            "screen": "knowledge_4_4.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                65570,
                55985
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 4,
            "description": "",
            "screen": "knowledge_4_5.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -61662,
                42185
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 5,
            "description": "",
            "screen": "knowledge_4_6.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -62686,
                42131
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 6,
            "description": "",
            "screen": "knowledge_4_7.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -61908,
                43815
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 7,
            "description": "",
            "screen": "knowledge_4_8.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -55815,
                46983
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 8,
            "description": "",
            "screen": "knowledge_4_9.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -56541,
                47447
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 9,
            "description": "",
            "screen": "knowledge_4_10.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -55354,
                45823
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 10,
            "description": "",
            "screen": "knowledge_4_11.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                49560,
                -30278
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 11,
            "description": "",
            "screen": "knowledge_4_12.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -72482,
                2284
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 12,
            "description": "",
            "screen": "knowledge_4_13.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -3578,
                66718
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 13,
            "description": "",
            "screen": "knowledge_4_14.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                68055,
                -13488
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 14,
            "description": "",
            "screen": "knowledge_4_15.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -28730,
                73793
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 15,
            "description": "",
            "screen": "knowledge_4_16.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -45493,
                8882
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 16,
            "description": "",
            "screen": "knowledge_4_17.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                88686,
                38712
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 17,
            "description": "",
            "screen": "knowledge_4_18.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                95973,
                32680
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 18,
            "description": "",
            "screen": "knowledge_4_19.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                96946,
                33433
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 19,
            "description": "",
            "screen": "knowledge_4_20.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14345,
                151431
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 20,
            "description": "",
            "screen": "knowledge_4_21.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12482,
                147291
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 21,
            "description": "",
            "screen": "knowledge_4_22.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                95557,
                136292
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 22,
            "description": "",
            "screen": "knowledge_4_23.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -38943,
                -69436
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "knowledge",
            "name": "Pulpit z alchemią",
            "index": 23,
            "description": "",
            "screen": "knowledge_4_24.jpg",
            "tag": "4"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -206713,
                -150461
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Innosa",
            "index": 0,
            "description": "",
            "screen": "general_0_1.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                15085,
                147668
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Innosa",
            "index": 1,
            "description": "",
            "screen": "general_0_2.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26502,
                163175
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Innosa",
            "index": 2,
            "description": "",
            "screen": "general_0_3.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                93610,
                33764
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Innosa",
            "index": 3,
            "description": "",
            "screen": "general_0_4.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                94523,
                37534
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Innosa",
            "index": 4,
            "description": "",
            "screen": "general_0_5.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -26679,
                16243
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Innosa",
            "index": 5,
            "description": "",
            "screen": "general_0_6.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -5358,
                63698
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Innosa",
            "index": 6,
            "description": "",
            "screen": "general_0_7.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                91754,
                -14376
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 0,
            "description": "",
            "screen": "general_1_1.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -96919,
                -143366
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 1,
            "description": "",
            "screen": "general_1_2.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -99564,
                -143814
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 2,
            "description": "",
            "screen": "general_1_3.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -210825,
                -154994
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 3,
            "description": "",
            "screen": "general_1_4.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -208696,
                -154289
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 4,
            "description": "",
            "screen": "general_1_5.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -205613,
                -150851
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 5,
            "description": "",
            "screen": "general_1_6.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43030,
                -98382
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 6,
            "description": "",
            "screen": "general_1_7.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                1111,
                15743
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 7,
            "description": "",
            "screen": "general_1_8.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -27248,
                73437
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 8,
            "description": "",
            "screen": "general_1_9.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                76296,
                27890
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 9,
            "description": "",
            "screen": "general_1_10.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -4976,
                28156
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 10,
            "description": "",
            "screen": "general_1_11.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -22227,
                75256
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 11,
            "description": "",
            "screen": "general_1_12.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47153,
                5155
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 12,
            "description": "",
            "screen": "general_1_13.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11999,
                -26464
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "general",
            "name": "Chram Beliara",
            "index": 13,
            "description": "",
            "screen": "general_1_14.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                52467,
                -24175
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 0,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -82767,
                88264
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 1,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                73318,
                158031
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 2,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -146796,
                -76429
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 3,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                53230,
                154314
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 4,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                120707,
                88093
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 5,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                104168,
                109205
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 6,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                105008,
                125444
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 7,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                72555,
                141886
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 8,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                80620,
                125547
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 9,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43043,
                116804
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 10,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                31917,
                134980
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 11,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                85503,
                105438
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 12,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                40284,
                127630
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 13,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                38299,
                139987
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 14,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -25460,
                98407
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 15,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -88979,
                89237
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 16,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -86116,
                94401
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 17,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -83461,
                82762
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 18,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -78651,
                78840
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 19,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -76919,
                67095
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 20,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11429,
                42817
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 21,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                9554,
                87694
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 22,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                1545,
                68212
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 23,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -56418,
                -22456
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 24,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                46514,
                -12594
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 25,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                668,
                -24133
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 26,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                35905,
                53898
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 27,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -70879,
                87979
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 28,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                55092,
                71853
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 29,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                38738,
                -22184
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 30,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -74569,
                11671
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 31,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -155996,
                -143808
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Cieniostwór",
            "index": 32,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "6"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -89400,
                -176483
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 0,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                78261,
                119297
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 1,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                49955,
                111114
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 2,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                39154,
                99278
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 3,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                88239,
                82440
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 4,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                100236,
                89692
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 5,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                96698,
                83538
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 6,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                77999,
                83332
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 7,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                89942,
                109123
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 8,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                106556,
                113535
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 9,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                105363,
                144253
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 10,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                82603,
                150612
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 11,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                60915,
                147233
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 12,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                69950,
                157513
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 13,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                59161,
                136898
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 14,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                69404,
                143589
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 15,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                70129,
                133920
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 16,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                64582,
                152763
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 17,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                92430,
                151420
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 18,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                86271,
                119668
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 19,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                77674,
                130584
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 20,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                65829,
                123642
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 21,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                56993,
                109059
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 22,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                41419,
                112910
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 23,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26799,
                109343
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 24,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43930,
                152189
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 25,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                36396,
                126452
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 26,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                60719,
                119318
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 27,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                61278,
                112082
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 28,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                34518,
                113057
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 29,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43180,
                119137
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 30,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                28150,
                161422
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 31,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                15269,
                164734
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 32,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                35655,
                139400
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 33,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                21976,
                119796
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 34,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                55097,
                89207
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 35,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                68657,
                77819
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 36,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                44222,
                95251
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 37,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                82059,
                106875
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 38,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                70771,
                98087
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 39,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                44914,
                84298
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 40,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                35812,
                79502
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 41,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                38132,
                143749
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 42,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                42010,
                125832
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 43,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47945,
                139342
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 44,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                98189,
                117589
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 45,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                61681,
                106486
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szabloząb",
            "index": 46,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "7"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -64822,
                5579
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 0,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -227461,
                -94747
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 1,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -14038,
                23711
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 2,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -175431,
                -97107
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 3,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -162071,
                -95892
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 4,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -71530,
                -126336
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 5,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -138549,
                -115907
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 6,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -1781,
                -70615
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 7,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -34579,
                -95598
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 8,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                516,
                -160003
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 9,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -167393,
                -126279
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 10,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -175333,
                -121516
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 11,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -68481,
                -51588
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 12,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -15625,
                -131841
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 13,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -25366,
                -140073
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 14,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -37492,
                -145256
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 15,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                55572,
                117598
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 16,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                9529,
                160617
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 17,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                58752,
                91133
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 18,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                40553,
                91103
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 19,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                35589,
                134623
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 20,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                108518,
                139153
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 21,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                70518,
                128866
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 22,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                34625,
                117779
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 23,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                44697,
                139962
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 24,
            "count": 8,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                93527,
                58420
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 25,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -50086,
                4541
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 26,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -68308,
                67179
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 27,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                25008,
                94178
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 28,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -1858,
                55804
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 29,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -67367,
                39093
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 30,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                92607,
                -11313
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 31,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43471,
                -28032
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ogr",
            "index": 32,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "8"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                46891,
                -31986
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Kamienny golem",
            "index": 0,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "9"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -75721,
                37797
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Kamienny golem",
            "index": 1,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "9"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47935,
                56301
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Kamienny golem",
            "index": 2,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "9"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43773,
                62788
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Kamienny golem",
            "index": 3,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "9"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77106,
                9180
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ognisty golem",
            "index": 0,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "10"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -146248,
                -146335
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ognisty golem",
            "index": 1,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "10"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -135335,
                -164172
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ognisty golem",
            "index": 2,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "10"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -113717,
                -175466
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ognisty golem",
            "index": 3,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "10"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -214595,
                -152821
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ognisty golem",
            "index": 4,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "10"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -202180,
                -90759
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ognisty golem",
            "index": 5,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "10"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -9928,
                -99464
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ognisty golem",
            "index": 6,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "10"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -15925,
                -111071
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ognisty golem",
            "index": 7,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "10"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -33616,
                -174366
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Ognisty golem",
            "index": 8,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "10"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -65281,
                -160762
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Lodowy golem",
            "index": 0,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                64290,
                90710
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Lodowy golem",
            "index": 1,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                105110,
                120639
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Lodowy golem",
            "index": 2,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                98415,
                130887
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Lodowy golem",
            "index": 3,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                67352,
                143389
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Lodowy golem",
            "index": 4,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                92353,
                153385
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Lodowy golem",
            "index": 5,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                61674,
                107524
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Lodowy golem",
            "index": 6,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                46103,
                143165
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Lodowy golem",
            "index": 7,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45268,
                148664
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Lodowy golem",
            "index": 8,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                28043,
                166015
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Lodowy golem",
            "index": 9,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                35017,
                141294
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Lodowy golem",
            "index": 10,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                19583,
                110975
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Lodowy golem",
            "index": 11,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "11"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                27042,
                112372
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 0,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                34468,
                52895
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 1,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                29390,
                55876
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 2,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                30528,
                48268
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 3,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                35329,
                46731
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 4,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -4527,
                32002
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 5,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -50589,
                -65397
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 6,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                18100,
                -90676
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 7,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                5567,
                -86098
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 8,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11735,
                -89589
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 9,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -4368,
                -99850
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 10,
            "count": 21,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -7108,
                -92462
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 11,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                25764,
                -102273
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 12,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                23931,
                -93711
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 13,
            "count": 42,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                13773,
                -102468
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 14,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                11345,
                -94193
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 15,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                7290,
                -97312
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 16,
            "count": 27,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                499,
                -97991
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 17,
            "count": 8,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -12142,
                -96175
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 18,
            "count": 9,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                5100,
                -91552
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 19,
            "count": 11,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -58929,
                -158300
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 20,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -55521,
                -154319
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 21,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -24500,
                -267
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 22,
            "count": 9,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                62402,
                19479
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 23,
            "count": 10,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                27280,
                68945
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 24,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -90214,
                82180
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 25,
            "count": 9,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -106867,
                -171396
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 26,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -94271,
                -175805
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 27,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -116094,
                -174848
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 28,
            "count": 11,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -122173,
                -165297
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 29,
            "count": 9,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -112276,
                -167409
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Zombie",
            "index": 30,
            "count": 8,
            "description": "",
            "screen": "",
            "tag": "12"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -128197,
                -152071
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 0,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -85912,
                -87622
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 1,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                36629,
                48490
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 2,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                30698,
                47197
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 3,
            "count": 15,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                34614,
                53086
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 4,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -5467,
                28459
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 5,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                13866,
                146926
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 6,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                80027,
                -102104
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 7,
            "count": 9,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -101493,
                -175297
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 8,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                24845,
                -84758
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 9,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -12300,
                -96491
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 10,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -8422,
                -91323
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 11,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -5020,
                -98262
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 12,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                22749,
                -97006
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 13,
            "count": 18,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -58687,
                -156336
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 14,
            "count": 14,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47415,
                -158413
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 15,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -53459,
                -156514
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 16,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46933,
                -163637
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 17,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                96330,
                137255
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 18,
            "count": 10,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                81828,
                137727
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 19,
            "count": 16,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                84788,
                133316
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 20,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                31895,
                129258
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 21,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                51615,
                163207
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 22,
            "count": 11,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                46267,
                161736
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 23,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                35526,
                135107
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 24,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                89337,
                168334
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 25,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                84242,
                168130
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 26,
            "count": 21,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                60755,
                99552
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 27,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                55079,
                100316
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 28,
            "count": 19,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                76169,
                95539
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 29,
            "count": 104,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                75959,
                100603
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 30,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -25804,
                913
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 31,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -18809,
                -3200
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 32,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -16606,
                108148
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 33,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                18524,
                72260
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 34,
            "count": 11,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                61843,
                20135
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 35,
            "count": 11,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                25631,
                56644
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 36,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -90387,
                84690
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Szkielet",
            "index": 37,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "13"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -129487,
                -153391
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 0,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -34224,
                -143962
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 1,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -101872,
                -176248
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 2,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                23416,
                -87987
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 3,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                17847,
                -90629
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 4,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                5149,
                -86118
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 5,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -59972,
                -159078
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 6,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47353,
                -162214
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 7,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -53742,
                -155672
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 8,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                88849,
                168661
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 9,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                56232,
                100034
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 10,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                76148,
                100442
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 11,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                35999,
                133926
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Mumia",
            "index": 12,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "14"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                63574,
                21249
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Kapłan ożywieńców",
            "index": 0,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "15"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                80303,
                -102012
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Kapłan ożywieńców",
            "index": 1,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "15"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -103434,
                -179657
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Kapłan ożywieńców",
            "index": 2,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "15"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                24993,
                -84512
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Kapłan ożywieńców",
            "index": 3,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "15"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -7435,
                -92873
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Kapłan ożywieńców",
            "index": 4,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "15"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47501,
                -161913
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Gargulec",
            "index": 0,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -1936,
                -20132
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Gargulec",
            "index": 1,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -207084,
                -63507
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Gargulec",
            "index": 2,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -27055,
                -148507
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Gargulec",
            "index": 3,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -24214,
                -152834
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Gargulec",
            "index": 4,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                75758,
                42463
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Gargulec",
            "index": 5,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -12926,
                -25991
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Gargulec",
            "index": 6,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                25213,
                61835
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Gargulec",
            "index": 7,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                20615,
                59397
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Gargulec",
            "index": 8,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26342,
                67237
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Gargulec",
            "index": 9,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -92473,
                83540
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Gargulec",
            "index": 10,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "16"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                20905,
                64688
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Strażnik świątynny",
            "index": 0,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "17"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -106294,
                -161636
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Strażnik świątynny",
            "index": 1,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "17"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -150910,
                -95447
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Strażnik świątynny",
            "index": 2,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "17"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -8933,
                -92011
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Strażnik świątynny",
            "index": 3,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "17"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -8045,
                -121646
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Strażnik świątynny",
            "index": 4,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "17"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -60552,
                -159093
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Strażnik świątynny",
            "index": 5,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "17"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -49059,
                -167953
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Strażnik świątynny",
            "index": 6,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "17"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47721,
                -155135
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Strażnik świątynny",
            "index": 7,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "17"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -26063,
                -426
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "monster",
            "name": "Demon",
            "index": 0,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "18"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                32656,
                52440
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Flint",
            "index": 0,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                56272,
                56689
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Gnar",
            "index": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57730,
                53595
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Tom",
            "index": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                54619,
                55433
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Wilson",
            "index": 3,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                54838,
                55225
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Connor",
            "index": 4,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                55398,
                54269
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ali",
            "index": 5,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                55295,
                55762
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Gorok",
            "index": 6,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                55613,
                55251
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Mojok",
            "index": 7,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57627,
                62381
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Tarok",
            "index": 8,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                62135,
                55838
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Zakosh",
            "index": 9,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                62426,
                55241
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Koraz",
            "index": 10,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                60240,
                55989
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ur-Gosh",
            "index": 11,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                61146,
                56603
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Curtis",
            "index": 12,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                55146,
                58843
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Goran",
            "index": 13,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                54833,
                59327
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Muff",
            "index": 14,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                54593,
                59427
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Spike",
            "index": 15,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                54400,
                59499
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Mortis",
            "index": 16,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                61836,
                56148
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Vigo",
            "index": 17,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                61589,
                56459
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Tukash",
            "index": 18,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                61478,
                56347
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Rozhov",
            "index": 19,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                61753,
                56298
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Rocko",
            "index": 20,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57916,
                54083
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Mitch",
            "index": 21,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                60420,
                53722
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Nemrok",
            "index": 22,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -57715,
                43817
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hamil",
            "index": 23,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -53056,
                41090
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kulak",
            "index": 24,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -54404,
                39782
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Agenak",
            "index": 25,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -53476,
                39980
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Gembak",
            "index": 26,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -54645,
                40319
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Gunock",
            "index": 27,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -58396,
                46968
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Samuel",
            "index": 28,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -60809,
                46966
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Jared",
            "index": 20,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -59778,
                45126
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Mirzo",
            "index": 30,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -56445,
                42358
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Peratur",
            "index": 31,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -59903,
                44448
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Dimitar",
            "index": 32,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -54770,
                40788
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sulfock",
            "index": 33,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -66774,
                50830
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Grimboll",
            "index": 34,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -61474,
                42118
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Mazin",
            "index": 35,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -76892,
                42551
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Narkan",
            "index": 36,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                34556,
                40183
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Potros",
            "index": 37,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                36136,
                41971
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Uruk",
            "index": 38,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                51438,
                -32852
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Tangach",
            "index": 39,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                51236,
                -31902
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Gamal",
            "index": 40,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                52167,
                -29474
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Bufford",
            "index": 41,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                49530,
                -32625
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Deckard",
            "index": 42,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45355,
                -32175
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Silas",
            "index": 43,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                53077,
                -27414
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Cyrus",
            "index": 44,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45850,
                -32811
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Esiel",
            "index": 45,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                50110,
                -31422
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Grobock",
            "index": 46,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                52476,
                -28504
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Arokkh",
            "index": 47,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                42776,
                -34094
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Darmok",
            "index": 48,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                44628,
                -34599
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Fadi",
            "index": 49,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43748,
                -35253
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Varek",
            "index": 50,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                18214,
                21499
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kor-Shach",
            "index": 51,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16667,
                20813
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Yorik",
            "index": 52,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14767,
                18818
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Basir",
            "index": 53,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                10289,
                19676
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sobota",
            "index": 54,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                10991,
                22335
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Marik",
            "index": 55,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                13450,
                21096
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Bradley",
            "index": 56,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                9627,
                18231
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Thorek",
            "index": 57,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                10256,
                23671
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ashton",
            "index": 58,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16341,
                24352
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Fedor",
            "index": 59,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                17146,
                25477
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Goose",
            "index": 60,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16844,
                25348
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Dan",
            "index": 61,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                17127,
                24201
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ugo",
            "index": 62,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16777,
                24550
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Folleck",
            "index": 63,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14666,
                23453
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Dennis",
            "index": 64,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2615,
                25125
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Elber",
            "index": 65,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16800,
                31166
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Rufus",
            "index": 66,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                17478,
                33727
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kelvin",
            "index": 67,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                4663,
                24816
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Leon",
            "index": 68,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                4556,
                25205
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Trano",
            "index": 69,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                5451,
                14912
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Osko",
            "index": 70,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12909,
                15371
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ford",
            "index": 71,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                7370,
                19518
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Russel",
            "index": 72,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -76195,
                2436
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Dudley",
            "index": 73,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -76009,
                1184
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Karlen",
            "index": 74,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -64069,
                -12923
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hengley",
            "index": 75,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -73983,
                3994
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kippler",
            "index": 76,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -74670,
                710
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Rendell",
            "index": 77,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -76055,
                -1004
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Finley",
            "index": 78,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -73890,
                2817
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Tyler",
            "index": 79,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -74015,
                2596
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Roland",
            "index": 80,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -1467,
                68937
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Mannig",
            "index": 81,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -7358,
                64202
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Shawn",
            "index": 82,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -2042,
                66897
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kent",
            "index": 83,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                11145,
                70570
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Candela",
            "index": 84,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                864,
                74501
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Fraser",
            "index": 85,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                566,
                74068
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Owen",
            "index": 86,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -4242,
                51920
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Randall",
            "index": 87,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -18258,
                58889
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Javier",
            "index": 88,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                70975,
                -11619
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Brenton",
            "index": 89,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                74959,
                -14518
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kliff",
            "index": 90,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                66396,
                -20546
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Norris",
            "index": 91,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                69961,
                -11505
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Marlo",
            "index": 92,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                68360,
                -11076
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Copper",
            "index": 93,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                70786,
                -10411
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Joey",
            "index": 94,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                72178,
                -10966
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sebastian",
            "index": 95,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                68106,
                -13208
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Gelford",
            "index": 96,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                74304,
                -13790
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Barrack",
            "index": 97,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -31621,
                71471
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Umbrak",
            "index": 98,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -26676,
                72046
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Grompel",
            "index": 99,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -28276,
                73540
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Gambal",
            "index": 100,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -30553,
                73067
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Zapotek",
            "index": 101,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -33386,
                74785
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Jerek",
            "index": 102,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -33062,
                76619
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Quadir",
            "index": 103,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -39022,
                74932
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Bozep",
            "index": 104,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -51015,
                75083
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Stan",
            "index": 105,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -33904,
                69675
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Denpok",
            "index": 106,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -29271,
                72140
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kadok",
            "index": 107,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -37949,
                73483
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Gancka",
            "index": 108,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -36045,
                76368
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Frillock",
            "index": 109,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -32464,
                69788
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Brontobb",
            "index": 110,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -29108,
                68405
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Irmak",
            "index": 111,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -38395,
                75659
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Givess",
            "index": 112,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -38754,
                72820
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Temmy",
            "index": 113,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -29548,
                66868
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Jarock",
            "index": 114,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -30050,
                73300
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Jaroll",
            "index": 115,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -34582,
                72856
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Trompok",
            "index": 116,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -31340,
                72530
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Khabir",
            "index": 117,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46833,
                12444
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Milok",
            "index": 118,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -43119,
                11750
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Pranck",
            "index": 119,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46188,
                10655
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Thorus",
            "index": 120,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46259,
                7281
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Cobryn",
            "index": 121,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                90455,
                34123
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Abe",
            "index": 122,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                89369,
                35087
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Keldron",
            "index": 123,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                94503,
                31903
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Vandorn",
            "index": 124,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                93986,
                34781
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Georg",
            "index": 125,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                92543,
                38982
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Thordir",
            "index": 126,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                89733,
                27004
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Szef kopalni",
            "index": 127,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                60468,
                128806
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Wódz doliny",
            "index": 128,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47760,
                124666
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Dargoth",
            "index": 129,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                13807,
                148152
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Altus",
            "index": 130,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                13113,
                149383
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Olivier",
            "index": 131,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14907,
                147824
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kilian",
            "index": 132,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16647,
                149373
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Pyran",
            "index": 133,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                15321,
                154181
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Aidan",
            "index": 134,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14677,
                149067
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Innostian",
            "index": 135,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                14300,
                151698
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Lardo",
            "index": 136,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                83551,
                -20103
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Fobart",
            "index": 137,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                42688,
                90101
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Alina",
            "index": 138,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                44543,
                108034
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sonja",
            "index": 139,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                41168,
                109775
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Diego",
            "index": 140,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                88540,
                -10058
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Milten",
            "index": 141,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                88348,
                -10372
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Gorn",
            "index": 142,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                88086,
                -10659
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Lester",
            "index": 143,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                84042,
                -18824
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kurt",
            "index": 144,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -96534,
                -33937
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Nefarius",
            "index": 145,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -195968,
                -81934
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kayor",
            "index": 146,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -131015,
                -128366
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Merdarion",
            "index": 147,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -131069,
                -126646
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sanuyem",
            "index": 148,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -134637,
                -148025
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Murat",
            "index": 149,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -113820,
                -136979
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Cruz",
            "index": 150,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -67889,
                -107572
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hassan",
            "index": 151,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -145681,
                -172544
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Shakyor",
            "index": 152,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -23150,
                -54448
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kafa",
            "index": 153,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -214039,
                -136740
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Giacomo",
            "index": 154,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -205942,
                -137788
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Malir",
            "index": 155,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -102183,
                -49135
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Taklar",
            "index": 156,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -85363,
                -68959
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Riordian",
            "index": 157,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -84075,
                -59022
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ayitos",
            "index": 158,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -124829,
                -84574
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Marus",
            "index": 159,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -123926,
                -85358
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Aila",
            "index": 160,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -123834,
                -85857
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Asaru",
            "index": 161,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -123948,
                -85606
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Miguel",
            "index": 162,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16700,
                -101746
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Yespas",
            "index": 163,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47616,
                -74924
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sugut",
            "index": 164,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -52264,
                -101906
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hurit",
            "index": 165,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -38394,
                -102184
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sinikar",
            "index": 166,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                25143,
                -105456
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Rasarus",
            "index": 167,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                41194,
                -86809
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Cronos",
            "index": 168,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -10412,
                -112197
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Knut",
            "index": 169,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -386,
                -125506
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Redge",
            "index": 170,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                1479,
                -124321
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ateras",
            "index": 171,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -648,
                -123962
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Orknarok",
            "index": 172,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -95101,
                -148061
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Angar",
            "index": 173,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -100112,
                -147611
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Anktos",
            "index": 174,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -100290,
                -147462
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Oelk",
            "index": 175,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -100419,
                -147310
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Paladyn",
            "index": 176,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -100060,
                -147911
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Gonzales",
            "index": 177,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -97550,
                -143595
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Masil",
            "index": 178,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -95698,
                -148772
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Rasul",
            "index": 179,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -15957,
                -52435
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Vatras",
            "index": 180,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -16689,
                -50614
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Fabio",
            "index": 181,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -17964,
                -52181
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Myxir",
            "index": 182,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -48615,
                -144854
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Onatas",
            "index": 183,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -27906,
                -157632
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Pakwan",
            "index": 184,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -33813,
                -164118
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Saturas",
            "index": 185,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -50905,
                -140840
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Wutras",
            "index": 186,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -51870,
                -140916
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Zuben",
            "index": 187,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -212659,
                -155937
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Lukar",
            "index": 188,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -39100,
                -67703
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Murak",
            "index": 189,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                40147,
                -90755
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Xardas",
            "index": 190,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                96598,
                137332
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Grim",
            "index": 191,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                49779,
                106343
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Larson",
            "index": 192,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45353,
                106840
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hogar",
            "index": 193,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45671,
                108769
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ronar",
            "index": 194,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47542,
                107742
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Rune",
            "index": 195,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45062,
                110679
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Gunnar",
            "index": 196,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47246,
                107842
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Bogir",
            "index": 197,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                48570,
                105044
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Garik",
            "index": 198,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                42976,
                108842
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Corwyn",
            "index": 199,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                33124,
                101129
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Pedar",
            "index": 200,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                61891,
                96868
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Rathgar",
            "index": 201,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                59415,
                72260
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Vibald",
            "index": 202,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45083,
                126251
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hanson",
            "index": 203,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                85652,
                118416
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Szaroskóry",
            "index": 204,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                85542,
                118169
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Osmund",
            "index": 205,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                76996,
                90648
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ur Arash",
            "index": 206,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43116,
                139667
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Brant",
            "index": 207,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                74173,
                134567
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Volkar",
            "index": 208,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                74398,
                134186
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Jensgar",
            "index": 209,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                27511,
                118732
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Jorn",
            "index": 210,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26726,
                118746
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Lisk",
            "index": 211,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26818,
                118971
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Tjalf",
            "index": 212,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                61947,
                131260
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Reto",
            "index": 213,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57737,
                126451
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ingvar",
            "index": 214,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                56952,
                133168
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Rovold",
            "index": 215,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                59481,
                124281
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Mort",
            "index": 216,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57440,
                125987
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Stejnar",
            "index": 217,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57026,
                128355
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hauke",
            "index": 218,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                50971,
                128103
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ketil",
            "index": 219,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                56455,
                129221
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hjalte",
            "index": 220,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                53671,
                119978
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ugolf",
            "index": 221,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                60408,
                132526
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Lee",
            "index": 222,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                23072,
                165076
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Thorald",
            "index": 223,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26720,
                162400
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kalan",
            "index": 224,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                24150,
                161576
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kerth",
            "index": 225,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                22460,
                162963
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kaelin",
            "index": 226,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                27427,
                167880
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Leif",
            "index": 227,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26480,
                164870
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sivert",
            "index": 228,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                28870,
                162882
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Frithjof",
            "index": 229,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26775,
                162846
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Rhobar",
            "index": 230,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                97435,
                33591
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Markus",
            "index": 231,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                93320,
                38080
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Karrypto",
            "index": 232,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                96525,
                33391
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Konrad",
            "index": 233,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47616,
                10912
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Vak",
            "index": 234,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -44083,
                12444
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Treslott",
            "index": 235,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -72661,
                1948
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Lars",
            "index": 236,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -34264,
                77529
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hatlod",
            "index": 237,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -31154,
                67952
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Inog",
            "index": 238,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -29543,
                74852
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Pavel",
            "index": 239,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -31320,
                74913
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ortega",
            "index": 240,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57086,
                8615
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Chris",
            "index": 241,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                73249,
                7693
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kapotth",
            "index": 242,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -57458,
                8323
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Derec",
            "index": 243,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -26815,
                15089
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ben",
            "index": 244,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -27440,
                13667
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Cole",
            "index": 245,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -48944,
                -1943
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Farmon",
            "index": 246,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -48096,
                -1827
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Josh",
            "index": 247,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -42524,
                21135
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Peer",
            "index": 248,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -43627,
                21516
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Avogadro",
            "index": 249,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -43040,
                20736
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Tempeck",
            "index": 250,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -28319,
                -5627
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kamak",
            "index": 251,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -22899,
                3543
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Steve",
            "index": 252,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -24156,
                5091
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Charles",
            "index": 253,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -23799,
                8620
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Anog",
            "index": 254,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -4984,
                83888
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Tragak",
            "index": 255,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16252,
                84553
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Freman",
            "index": 256,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -10739,
                87612
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Will",
            "index": 257,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -51452,
                73062
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Lukjan",
            "index": 258,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -37448,
                91072
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Bram",
            "index": 259,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47946,
                86501
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Falk",
            "index": 260,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -37439,
                91526
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Topork",
            "index": 261,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                67712,
                -21162
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Domenik",
            "index": 262,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                19307,
                -12131
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Armon",
            "index": 263,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45270,
                -1061
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Mason",
            "index": 264,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                4758,
                32105
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Otis",
            "index": 265,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -3473,
                14859
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Daryl",
            "index": 266,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                13033,
                9339
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Harek",
            "index": 267,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                48119,
                -27101
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Jens",
            "index": 268,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57644,
                -23632
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Iomar",
            "index": 269,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                57823,
                1879
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Torn",
            "index": 270,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -64407,
                25623
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ivan",
            "index": 271,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -56213,
                65354
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Dawson",
            "index": 272,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -70915,
                76427
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Runak",
            "index": 273,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -82471,
                88182
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ballock",
            "index": 274,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -77370,
                82461
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Tippler",
            "index": 275,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                66868,
                46821
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Jack",
            "index": 276,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                97201,
                -25676
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sanford",
            "index": 277,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                11379,
                22400
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Bengerd",
            "index": 278,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12892,
                16387
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Rakus",
            "index": 279,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -3265,
                29885
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Arakos",
            "index": 280,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -4818,
                -10044
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Porgan",
            "index": 281,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -4848,
                -11428
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Wenzel",
            "index": 282,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45804,
                -34977
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Phil",
            "index": 283,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47483,
                -30420
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Seruk",
            "index": 284,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                46237,
                -30790
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Urkrass",
            "index": 285,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47250,
                -31831
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Lares",
            "index": 286,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -60081,
                47118
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Marius",
            "index": 287,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -61953,
                44277
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Grok",
            "index": 288,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -54269,
                45692
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Renwik",
            "index": 289,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -59643,
                46340
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hamlar",
            "index": 290,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                89151,
                -10641
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Tamkosch",
            "index": 291,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -37241,
                -158681
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Tizgar",
            "index": 292,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                31058,
                -93357
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sigmor",
            "index": 293,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                39360,
                -101168
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Jaffar",
            "index": 294,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                44472,
                -99003
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Carlos",
            "index": 295,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                46350,
                -98058
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Najazd",
            "index": 296,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                43513,
                -91260
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Aldo",
            "index": 297,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45702,
                -100047
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Aschnu",
            "index": 298,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45654,
                -97288
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hernando",
            "index": 299,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47217,
                -94359
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Achmed",
            "index": 300,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47612,
                -94937
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Irhabar",
            "index": 301,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47672,
                -94073
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Mufassa",
            "index": 302,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47463,
                -95133
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Benito",
            "index": 303,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                30295,
                -102860
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Silvio",
            "index": 304,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                42050,
                -102583
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Akrabor",
            "index": 305,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                46327,
                -85334
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Amul",
            "index": 306,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                45389,
                -93440
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sancho",
            "index": 307,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -39219,
                -67867
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Eusebio",
            "index": 308,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -38449,
                -69620
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Campa",
            "index": 309,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -40208,
                -71619
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Vasco",
            "index": 310,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -36491,
                -66507
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Navaras",
            "index": 311,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -35634,
                -68452
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Daro",
            "index": 312,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                17731,
                -95023
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Julio",
            "index": 313,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                17123,
                -94895
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Enzo",
            "index": 314,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16231,
                -96601
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Giores",
            "index": 315,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16461,
                -97757
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Dolok",
            "index": 316,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                17932,
                -99611
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Bernado",
            "index": 317,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -86456,
                -51681
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Nafalem",
            "index": 318,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -86654,
                -53701
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Jose",
            "index": 319,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -87848,
                -53888
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Luca",
            "index": 320,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -87610,
                -52547
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Abbas",
            "index": 321,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -83253,
                -45348
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Tufail",
            "index": 322,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -85041,
                -46261
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Muntasir",
            "index": 323,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -204963,
                -152764
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Surus",
            "index": 324,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -208165,
                -151734
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Delazar",
            "index": 325,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -207892,
                -153237
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Makas",
            "index": 326,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -206975,
                -160072
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ugrasal",
            "index": 327,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -204010,
                -156362
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kasim",
            "index": 328,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -205442,
                -157164
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Musan",
            "index": 329,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -205214,
                -158273
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sven",
            "index": 330,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -207314,
                -159307
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Emet",
            "index": 331,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -204965,
                -158477
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Nerusul",
            "index": 332,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -206359,
                -151712
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Asam",
            "index": 333,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -202407,
                -153045
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Karmok",
            "index": 334,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -205727,
                -152538
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Grubuz",
            "index": 335,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -15158,
                -54449
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Mamuk",
            "index": 336,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -15551,
                -52780
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Sibur Narad",
            "index": 337,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -18569,
                -53274
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ningal",
            "index": 338,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -97837,
                -143751
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hamid",
            "index": 339,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -93918,
                -148840
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Hector",
            "index": 340,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -94110,
                -140485
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Bandaro",
            "index": 341,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -98005,
                -146314
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Faesul",
            "index": 342,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -99623,
                -140994
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ilja",
            "index": 343,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -97948,
                -139671
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ramon",
            "index": 344,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -99969,
                -144884
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Felipe",
            "index": 345,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -100604,
                -147259
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ismael",
            "index": 346,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -93165,
                -142107
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kirk",
            "index": 347,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -93724,
                -139649
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kaffu",
            "index": 348,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -86687,
                -142380
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Yasmin",
            "index": 349,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -113492,
                -136188
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Alima",
            "index": 350,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -113287,
                -136278
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Nasib",
            "index": 351,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -96184,
                -146102
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ernesto",
            "index": 352,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -96907,
                -144982
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Kalesch",
            "index": 353,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -97959,
                -174298
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Fasim",
            "index": 354,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -94112,
                -174423
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Mezir",
            "index": 355,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -116312,
                -168386
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Ramirez",
            "index": 356,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -128565,
                -167503
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Zarkos",
            "index": 357,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -201692,
                -109999
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "npc",
            "name": "Yussuf",
            "index": 358,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -68813,
                -108634
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Klucz do świątyni Al Shedim",
            "index": 0,
            "description": "Dostaniemy go od Saturasa, jeśli tylko przyniesiemy mu pozostałe 4 klucze.",
            "screen": "quest_2_1.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -50676,
                -142006
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Klucz do świątyni Al Shedim",
            "index": 1,
            "description": "W skrzyni za strażnikiem świątynnym.",
            "screen": "quest_2_2.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -60000,
                -159500
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Klucz do świątyni Al Shedim",
            "index": 2,
            "description": "W skrzyni nad schodami.",
            "screen": "quest_2_3.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -45500,
                -168500
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Klucz do świątyni Al Shedim",
            "index": 3,
            "description": "W skrzyni pilnowanej przez pełzacze piaskowe.",
            "screen": "quest_2_4.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -26500,
                -150800
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Klucz do świątyni Al Shedim",
            "index": 4,
            "description": "Od Lestera, który kopie w piasku za namiotem niedaleko orka Tamkoscha.",
            "screen": "quest_2_5.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -37000,
                -156800
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Klucz do świątyni Mora Sul",
            "index": 0,
            "description": "Od niewolnika Yussufa po tym, jak dowiadujemy się od Bandaro, że posiada on informacje o kluczach. Wspomina również, gdzie szukać pozostałych.",
            "screen": "quest_2_6.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -68000,
                -109000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Klucz do świątyni Mora Sul",
            "index": 1,
            "description": "Od Ilji, jeśli obiecamy, że przyniesiemy mu wazę ze świątyni.",
            "screen": "quest_2_7.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -98800,
                -140000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Klucz do świątyni Mora Sul",
            "index": 2,
            "description": "Po uzyskaniu 75% reputacji w Mora Sul możemy złożyć wizytę Gonzalesowi. Warto kupić od niego klucz za 10 000 złotych monet, jeśli chcemy zostawić go przy życiu.",
            "screen": "quest_2_8.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -97000,
                -143000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Klucz do świątyni Mora Sul",
            "index": 3,
            "description": "Od Kirka, jeśli damy się zaciągnąć poza miasto.",
            "screen": "quest_2_9.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -93000,
                -139500
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Klucz do świątyni Mora Sul",
            "index": 4,
            "description": "Od orka Kalescha, kiedy poinformujemy go, że mamy pozostałe 4 klucze.",
            "screen": "quest_2_10.jpg",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -97600,
                -175000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Grobowiec Akashy",
            "index": -1,
            "description": "Wejście znajduje się wewnątrz obozu orków na północ od wieży Xardasa.",
            "screen": "quest_1_1.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                90000,
                159500
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Grobowiec Snorre’a",
            "index": -1,
            "description": "Na wschód od Klanu Młota.",
            "screen": "quest_1_2.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                84300,
                128000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Grobowiec Baldara",
            "index": -1,
            "description": "Na wschód od Klanu Ognia, nad ścieżką przy trollu.",
            "screen": "quest_1_3.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                47000,
                157000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Grobowiec Angira",
            "index": -1,
            "description": "Wejście znajduje się w górach na południowy wschód od Klanu Wilka, w pobliżu którego znajdziemy Nordmarczyka Osmunda.",
            "screen": "quest_1_4.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                76000,
                90000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Grobowiec Bereka",
            "index": -1,
            "description": "Wejście znajduje się na zachód od Klanu Młota za kamiennym kręgiem, w którym orkowie odprawiają jakiś obrzęd.",
            "screen": "quest_1_5.jpg",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                42000,
                139000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Ognisty puchar",
            "index": 0,
            "description": "Ognisty puchar jest w posiadaniu opiekuna magazynu Urkrassa. Sprzeda nam go, jeśli wcześniej rozmawialiśmy z Gamalem (Asasynem przy wejściu do wioski).",
            "screen": "quest_0_1.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                12700,
                17000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Ognisty puchar",
            "index": 1,
            "description": "Bradley, jeden z najemników orków, każe nam wysłać dwóch niewolników z wykopalisk na farmę Dennisa. Bengerd, jeden z niewolników w świątyni, odda nam ognisty puchar, jeśli tylko go zmienimy.",
            "screen": "quest_0_2.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                46400,
                -32000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Ognisty puchar",
            "index": 2,
            "description": "Puchar znajdziemy w kieszeni Kurta, paladyna-renegata, który czai się na nas na trakcie. Jeszcze w Myrtanie, niedaleko Nemory, przebywa paladyn imieniem Karlen, który również ma niewyrównane rachunki z Kurtem. Warto przyjąć jego pomoc.",
            "screen": "quest_0_3.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -95500,
                -33000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Ognisty puchar",
            "index": 3,
            "description": "W Trelis natkniemy się na paladyna imieniem Konrad, który odda nam swój puchar po krótkiej rozmowie.",
            "screen": "quest_0_4.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46500,
                10800
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Ognisty puchar",
            "index": 4,
            "description": "Za areną w Geldern znajduje się kopalnia. Puchar znajdziemy w wąskim korytarzu.",
            "screen": "quest_0_5.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -45746,
                42409
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Ognisty puchar",
            "index": 5,
            "description": "Kupiec Masil nagrodzi nas pucharem, jeśli wykonamy dla niego kilka zleceń.",
            "screen": "quest_0_6.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -95400,
                -148400
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Ognisty puchar",
            "index": 6,
            "description": "W domu nadzorcy niewolników Zapoteka.",
            "screen": "quest_0_7.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -33148,
                75168
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Ognisty puchar",
            "index": 7,
            "description": "Na północny wschód od Mora Sul znajdują się dwa namioty, w których przesiadują niewolnik Yussuf i paladyn Cruz. Rozmawiamy z paladynem i pomagamy mu odzyskać puchar.",
            "screen": "quest_0_8.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -68000,
                -108000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Ognisty puchar",
            "index": 8,
            "description": "Mag Ognia Treslott ofiaruje kolejny puchar po wykonaniu zadania.",
            "screen": "quest_0_9.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -72000,
                1300
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Ognisty puchar",
            "index": 9,
            "description": "Paladyn Markus przekaże bohaterowi puchar po teleportacji do Vengardu.",
            "screen": "quest_0_10.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                93800,
                37400
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Ognisty puchar",
            "index": 10,
            "description": "Dostaniemy go od Maga Ognia Rakusa po pozbyciu się dla niego ożywieńców.",
            "screen": "quest_0_11.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -2600,
                29000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Ognisty puchar",
            "index": 11,
            "description": "Jedyny taki puchar na lodowej pustyni znajduje się w rękach Miltena. Wystarczy z nim porozmawiać.",
            "screen": "quest_0_12.jpg",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                15300,
                143000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Święty pierścień życia",
            "index": -1,
            "description": "Ma go demon z Gothy.",
            "screen": "quest_3_1.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                31600,
                52000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Święty pierścień magii",
            "index": -1,
            "description": "Właścicielem pierścienia jest Akasha w najbardziej wysuniętym na północ grobie przodków w Nordmarze.",
            "screen": "quest_3_2.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                95000,
                165000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Korona Adanosa",
            "index": -1,
            "description": "Korona znajduje się w świątyni Mora Sul.",
            "screen": "quest_3_3.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -99300,
                -172000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Szata Adanosa",
            "index": -1,
            "description": "Do znalezienia w świątyni Al Shedim.",
            "screen": "quest_3_4.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -46800,
                -156000
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "quest",
            "name": "Amulet Adanosa",
            "index": -1,
            "description": "Ork Vak w Trelis sprzeda nam ten artefakt za 50 000 złotych monet.",
            "screen": "quest_3_5.jpg",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -44000,
                11300
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 0,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -8414,
                66401
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 1,
            "count": 8,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -3074,
                66047
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 2,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -8138,
                60839
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 3,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -13873,
                61837
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 4,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                50601,
                128992
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 5,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                41167,
                140593
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 6,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                26444,
                159975
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 7,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                32618,
                156915
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 8,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                27933,
                166984
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 9,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                98642,
                145839
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 10,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                13407,
                154130
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 11,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                10341,
                162147
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 12,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                24844,
                110658
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 13,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                34541,
                112402
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 14,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                55989,
                109966
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 15,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                76092,
                96411
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 16,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                73220,
                132009
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 17,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                40568,
                99300
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 18,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                63377,
                75914
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 19,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                15167,
                -101553
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła żelaza",
            "index": 20,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "0"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11369,
                -58972
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 0,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -75051,
                37213
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 1,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11810,
                64580
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 2,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                54931,
                132464
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 3,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                63565,
                126317
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 4,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                51084,
                128371
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 5,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                56890,
                126629
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 6,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                54247,
                121838
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 7,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                46020,
                123133
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 8,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                33693,
                121358
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 9,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                74209,
                133898
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 10,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                50326,
                110808
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 11,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                79548,
                143308
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 12,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                29750,
                167504
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 13,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                41622,
                140122
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 14,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                28370,
                160283
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 15,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                33944,
                139017
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 16,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                34279,
                154634
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 17,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                100186,
                145651
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 18,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                8393,
                164416
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 19,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                11083,
                158147
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 20,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                22022,
                157168
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 21,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                33347,
                113564
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 22,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                41311,
                116863
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 23,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                68579,
                111575
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 24,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                67019,
                99545
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 25,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                74558,
                91208
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 26,
            "count": 9,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                79857,
                111888
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 27,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                42544,
                89916
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 28,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                64987,
                82365
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 29,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                84260,
                75696
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 30,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                83372,
                106142
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 31,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                86844,
                112307
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 32,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                93507,
                102235
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 33,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                16844,
                -101309
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła rudy",
            "index": 34,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "1"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                23309,
                -97106
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 0,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -45107,
                38080
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 1,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -44055,
                43737
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 2,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -73355,
                40005
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 3,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -70948,
                77411
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 4,
            "count": 4,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -63365,
                72003
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 5,
            "count": 6,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -47912,
                60988
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 6,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -9843,
                62073
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 7,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                51006,
                131736
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 8,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                53311,
                124502
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 9,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                37604,
                115612
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 10,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                9712,
                157166
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 11,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                44698,
                114076
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 12,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                63654,
                94275
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 13,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                33802,
                130329
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 14,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                74759,
                113937
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 15,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                84549,
                72271
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 16,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                64964,
                101946
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 17,
            "count": 17,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -31506,
                -66667
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 18,
            "count": 5,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -10740,
                -59378
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 19,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -5905,
                -108532
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 20,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                13998,
                -101843
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 21,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                23961,
                -94915
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 22,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -57584,
                -125371
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 23,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -30061,
                -140533
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 24,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -28799,
                -124689
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 25,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -11258,
                -93268
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 26,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -21695,
                -112997
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 27,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -111740,
                -111352
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła złota",
            "index": 28,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "2"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -136025,
                -134306
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 0,
            "count": 7,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -66800,
                45876
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 1,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -74938,
                39820
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 2,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -6651,
                61478
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 3,
            "count": 3,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -12311,
                63461
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 4,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                15419,
                -103557
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 5,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -9721,
                -58271
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 6,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -19762,
                -135523
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 7,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -18799,
                -116286
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 8,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -10014,
                -110658
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 9,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -12168,
                -94936
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 10,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -24786,
                -120876
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 11,
            "count": 2,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -114303,
                -123946
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 12,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -122134,
                -132282
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "type": "resource",
            "name": "Żyła siarki",
            "index": 13,
            "count": 1,
            "description": "",
            "screen": "",
            "tag": "3"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -146880,
                -68890
            ]
        }
    }
];