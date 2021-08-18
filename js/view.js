const viewDragons = {
    init: function(){
		this.nav = document.querySelector("nav");
		this.render();
        this.buttons = document.querySelectorAll("nav button")
	},
	addButton: function(elementObj){
		let button = document.createElement("button");
		
		button.style.backgroundColor = `${elementObj.colors[0]}`;
		button.style.border = `2px solid ${elementObj.colors[1]}`;
		button.style.color = `${elementObj.colors[1]}`
		button.innerText = `${elementObj.type}`;

        //element, maxHP, [three colors], attack, defense
		button.setAttribute("onclick", `controller.addDragon("${elementObj.type}", "${elementObj.colors[0]}", "${elementObj.colors[1]}", "${elementObj.colors[2]}", "${elementObj.attack}", "${elementObj.defense}")`);
		
		this.nav.append(button);
	},
    viewAddDragonType: function(){
        // add a type
        console.log("please let me add a dragon type!")
    },
    disableButtons: function(){
        for(let i = 0; i<this.buttons.length-1; i++){
            this.buttons[i].classList.add("disabled");
            this.buttons[i].removeAttribute("onclick");
        }
    },
	render: function(){
		this.nav.innerHTML = ""
		let navList = controller.getElements()
		navList.forEach(element => {
			this.addButton(element);
		})
		let addElementButton = document.createElement("button");
		addElementButton.innerText = "Add Dragon Type";
		addElementButton.setAttribute("onclick", "viewDragons.viewAddDragonType()");
		this.nav.append(addElementButton);
	},
}
const viewCompTeam = {
    init: function(){
        this.compCards = [document.querySelector("#computer-1"), document.querySelector("#computer-2"), document.querySelector("#computer-3"), document.querySelector("#computer-4")]
        //console.log(this.compCards)
        this.render()
    },
    render: function(){
        this.compCards.forEach(card => {
            card.innerHTML = `<h2>?</h2>
            <h3 class="hp">HP: ?</h3>
            <h3 class="attack">A: ?</h3>
            <h3 class="defense">D: ?</h3>
            ${controller.getIcon(`comp-${this.compCards.indexOf(card, 0)}`, "#ffffff", "#000000", "#717171")}`
        })
    }
}
const viewPlayerTeam = {
    init: function(){
        this.firstDragon = document.querySelector("#player-1")
        this.secondDragon = document.querySelector("#player-2")
        this.thirdDragon = document.querySelector("#player-3")
        this.fourthDragon = document.querySelector("#player-4")
        this.render();
    },
    addDragonToScreen: function(dragon, dragonSquare){
        dragonSquare.style.backgroundColor = `${dragon.colors[0]}`;
        dragonSquare.style.border = `2px solid ${dragon.colors[1]}`;
        dragonSquare.style.color = `${dragon.colors[1]}`
        dragonSquare.innerHTML = `<h2>${dragon.type}</h2>
            <h3 class="hp">HP: ${dragon.hp}</h3>
            <h3 class="attack">A: ${dragon.attack}</h3>
            <h3 class="defense">D: ${dragon.defense}</h3>
            ${controller.getIcon(dragon.id, dragon.colors[0], dragon.colors[1], dragon.colors[2])}`
    },
    render: function(){
        let team = controller.getPlayerDragons();
        if (team.length == 0){
            this.firstDragon.innerHTML = `<h1>1</h1>`;
            this.secondDragon.innerHTML = `<h1>2</h1>`;
            this.thirdDragon.innerHTML = `<h1>3</h1>`;
            this.fourthDragon.innerHTML = `<h1>4</h1>`;
        } else if (team.length == 4){
            viewDragons.disableButtons();
            readyFight.readyButton()
        }
        team.forEach(dragon => {
            let dragonSquare = document.querySelector(`#player-${dragon.id+1}`)
            this.addDragonToScreen(dragon, dragonSquare)
        })
    }
}

const readyFight = {
    readyButton: function(){
        //load the fight button onto the screen
        console.log("ready to fight!")
    }
}