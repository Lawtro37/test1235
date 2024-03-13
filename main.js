let i = document.createElement('iframe');
                        document.body.append(i);
                        window.prompt = i.contentWindow.prompt.bind(window);
                        i.remove();

                        let { stateNode } = Object.values(document.querySelector('body div[id] > div > div'))[1].children[0]._owner;

                        //defining vars
                        let nameOfbot = prompt("Name of bots: ");
                        let gameId = stateNode.props.client.hostId;
                        prompt(stateNode.props.client.hostId)
                        let numberOfBots = prompt("How many Bots: ");

                        let he = ["Chick", "Chicken", "Cow", "Goat", "Horse", "Pig", "Sheep", "Duck", "Dog", "Cat", "Rabbit", "Goldfish", "Hamster", "Turtle", "Kitten", "Puppy", "Bear", "Moose", "Fox", "Raccoon", "Squirrel", "Owl", "Hedgehog", "Tiger", "Orangutan", "Cockatoo", "Parrot", "Anaconda", "Jaguar", "Macaw", "Toucan", "Panther", "Capuchin", "Snowy Owl", "Polar Bear", "Arctic Fox", "Baby Penguin", "Penguin", "Arctic Hare", "Seal", "Walrus", "Witch", "Wizard", "Elf", "Fairy", "Slime Monster", "Jester", "Dragon", "Queen", "Unicorn", "King", "Agent Owl", "Master Elf", "Phantom King", "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts", "Toast", "Cereal", "Yogurt", "Breakfast Combo", "Orange Juice", "Milk", "Waffle", "Pancakes", "French Toast", "Pizza", "Sandwich", "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Astronaut", "Red Astronaut", "Blue Astronaut", "Green Astronaut", "Pink Astronaut", "Orange Astronaut", "Yellow Astronaut", "Black Astronaut", "Purple Astronaut", "Brown Astronaut", "Cyan Astronaut", "Lime Astronaut", "Tim the Alien", "Rainbow Astronaut", "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot", "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot", "Old Boot", "Jellyfish", "Clownfish", "Frog", "Crab", "Pufferfish", "Blobfish", "Octopus", "Narwhal", "Baby Shark", "Megalodon", "Rainbow Jellyfish", "Blizzard Clownfish", "Lovely Frog", "Lucky Frog", "Spring Frog", "Poison Dart Frog", "Lemon Crab", "Pirate Pufferfish", "Donut Blobfish", "Crimson Octopus", "Rainbow Narwhal", "Panda", "Sloth", "Tenrec", "Flamingo", "Zebra", "Elephant", "Lemur", "Peacock", "Chameleon", "Lion", "Rainbow Panda", "White Peacock", "Tiger Zebra", "Amber", "Dino Egg", "Dino Fossil", "Stegosaurus", "Velociraptor", "Brontosaurus", "Triceratops", "Tyrannosaurus Rex", "Ice Bat", "Ice Bug", "Ice Elemental", "Rock Monster", "Dink", "Donk", "Bush Monster", "Yeti", "Ice Slime", "Frozen Fossil", "Ice Crab", "Snow Globe", "Holiday Gift", "Hot Chocolate", "Holiday Wreath", "Gingerbread Man", "Gingerbread House", "Snowman", "Santa Claus", "Frost Wreath", "Tropical Globe", "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Caramel Apple", "Werewolf", "Ghost", "Haunted Pumpkin", "Pumpkin Cookie", "Ghost Cookie", "Chick Chicken", "Chicken Chick", "Raccoon Bandit", "Owl Sheriff", "Vampire Frog", "Pumpkin King", "Anaconda Wizard", "Spooky Pumpkin", "Spooky Mummy", "Spooky Ghost", "Light Blue", "Black", "Red", "Purple", "Pink", "Orange", "Lime", "Green", "Teal", "Tan", "Maroon", "Gray", "Mint", "Salmon", "Burgandy", "Baby Blue", "Dust", "Brown", "Dull Blue", "Yellow", "Blue"];

                        class rs {
                            constructor(c, r, e) {
                                this.proxyUrl = "https://blooket.schoolcheats.net/api/proxy",
                                this.roomCode = c,
                                this.botName = r,
                                this.bsid = null,
                                this.bsidAllowed = !1,
                                this.gameData = null,
                                this.idToken = null,
                                this.shardUrl = null,
                                this.ws = null,
                                this.lagswitchInterval = null,
                                this.lagswitch = e
                            }
                            generateBotName() {
                                this.botName = this.botName + Math.floor(Math.random() * 2e3)
                            }
                            async generateBSID() {
                                try {
                                    const c = await fetch(this.proxyUrl + "/play.blooket.com/play", {
                                        method: "GET"
                                    });
                                    console.log(c.headers.get("Set-Cookie"));
                                    const r = c.headers.get("x-set-cookie").split(";").filter(e=>e.includes("bsid"))[0].split("bsid=")[1];
                                    return this.bsid = r,
                                    r
                                } catch {
                                    return null
                                }
                            }
                            async allowBSID() {
                                try {
                                    return fetch(this.proxyUrl + `/blooketfb/c/firebase/id?id=${this.roomCode}`, {
                                        method: "get",
                                        credentials: "include",
                                        headers: {
                                            "x-cookie": "bsid=" + this.bsid
                                        }
                                    }),
                                    this.bsidAllowed = !0,
                                    !0
                                } catch {
                                    return this.bsidAllowed = !1,
                                    !1
                                }
                            }
                            async joinGame() {
                                try {
                                    const r = await (await fetch(this.proxyUrl + "/blooketfb/c/firebase/join", {
                                        method: "PUT",
                                        headers: {
                                            "content-type": "application/json",
                                            "x-cookie": "bsid=" + this.bsid
                                        },
                                        body: JSON.stringify({
                                            id: this.roomCode,
                                            name: this.botName
                                        })
                                    })).json();
                                    return this.gameData = r,
                                    this.shardUrl = r.fbShardURL.replace("https://blooket-", "").replace(".firebaseio.com/", ""),
                                    r
                                } catch {
                                    return ""
                                }
                            }
                            async verifyToken() {
                                var c;
                                try {
                                    const e = await (await fetch(this.proxyUrl + "/identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU", {
                                        method: "POST",
                                        body: JSON.stringify({
                                            returnSecureToken: !0,
                                            token: (c = this.gameData) == null ? void 0 : c.fbToken
                                        })
                                    })).json();
                                    return this.idToken = e.idToken,
                                    e
                                } catch {
                                    return ""
                                }
                            }
                            async lookUpToken() {
                                try {
                                    return await fetch(this.proxyUrl + "/identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCA-cTOnX19f6LFnDVVsHXya3k6ByP_MnU", {
                                        method: "POST",
                                        body: JSON.stringify({
                                            idToken: this.idToken
                                        })
                                    }).then(async r=>({
                                        status: r.status,
                                        data: await r.json()
                                    }))
                                } catch {
                                    return ""
                                }
                            }
                            async wsConnection() {
                                const c = he[Math.floor(Math.random() * he.length)]
                                , r = this.shardUrl;
                                try {
                                    async function e() {
                                        return new Promise(async l=>{
                                            const k = new WebSocket(`wss://blooket-${r}.firebaseio.com/.ws?v=5&p=1:741533559105:web:b8cbb10e6123f2913519c0`);
                                            k.onopen = ()=>{
                                                l(k)
                                            }
                                            ,
                                            k.onmessage = _=>{
                                                const P = JSON.parse(_.data);
                                                _.data.includes("permission_denied") && k.close()
                                            }
                                        }
                                        )
                                    }
                                    e().then(async l=>{
                                        this.ws = l,
                                        l.send(JSON.stringify({
                                            t: "d",
                                            d: {
                                                r: 1,
                                                a: "s",
                                                b: {
                                                    c: {
                                                        "sdk.js.9-13-0": 1
                                                    }
                                                }
                                            }
                                        })),
                                        l.send(JSON.stringify({
                                            t: "d",
                                            d: {
                                                r: 2,
                                                a: "auth",
                                                b: {
                                                    cred: this.idToken
                                                }
                                            }
                                        })),
                                        l.send(JSON.stringify({
                                            t: "d",
                                            d: {
                                                r: 3,
                                                a: "q",
                                                b: {
                                                    p: `/${this.roomCode}`,
                                                    h: ""
                                                }
                                            }
                                        })),
                                        l.send(JSON.stringify({
                                            t: "d",
                                            d: {
                                                r: 4,
                                                a: "n",
                                                b: {
                                                    p: `/${this.roomCode}`
                                                }
                                            }
                                        })),
                                        l.send(JSON.stringify({
                                            t: "d",
                                            d: {
                                                r: 5,
                                                a: "p",
                                                b: {
                                                    p: `/${this.roomCode}/c/${this.botName}`,
                                                    d: {
                                                        b: c
                                                    }
                                                }
                                            }
                                        })),
                                        l.send(JSON.stringify({
                                            t: "d",
                                            d: {
                                                r: 6,
                                                a: "q",
                                                b: {
                                                    p: `/${this.roomCode}/c`,
                                                    h: ""
                                                }
                                            }
                                        })),
                                        l.send(JSON.stringify({
                                            t: "d",
                                            d: {
                                                r: 7,
                                                a: "q",
                                                b: {
                                                    p: `/${this.roomCode}/stg`,
                                                    h: ""
                                                }
                                            }
                                        })),
                                        l.send(JSON.stringify({
                                            t: "d",
                                            d: {
                                                r: 8,
                                                a: "p",
                                                b: {
                                                    p: `/${this.roomCode}/c/${this.botName}`,
                                                    d: {
                                                        b: c
                                                    }
                                                }
                                            }
                                        })),
                                        this.lagswitch == !0 && setInterval(()=>{
                                            l.send(JSON.stringify({
                                                t: "d",
                                                d: {
                                                    r: 10,
                                                    a: "p",
                                                    b: {
                                                        p: `/${this.roomCode}/c/${this.botName}/b`,
                                                        d: he[Math.floor(Math.random() * he.length)]
                                                    }
                                                }
                                            }))
                                        }
                                        , 50)
                                    }
                                    )
                                } catch {
                                    return !1
                                }
                            }
                            async sendBot() {
                                if (this.generateBotName(),
                                await this.generateBSID(),
                                !this.bsid)
                                    return console.log("Failed to fetch bsid");
                                if (await this.allowBSID(),
                                !this.bsidAllowed)
                                    return console.log("Failed to allow bsid");
                                const c = await this.joinGame();
                                if (!c)
                                    return console.log("Failed to fetch join game");
                                if (c.success == !1)
                                    return console.log("Failed to fetch join game: " + c.data.msg);
                                if (!c.fbShardURL)
                                    return console.log("Failed to fetch shard url");
                                if (!c.fbToken)
                                    return console.log("Failed to fetch fb token");
                                await this.verifyToken(),
                                await this.lookUpToken() && this.wsConnection()
                            }
                        }

                        let E = prompt("Lagswitch? (true/false)");

                        for (let i = 0; i < numberOfBots; i++)
                            new rs(gameId, nameOfbot, E).sendBot();
                        }
