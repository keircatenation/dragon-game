const viewDragons = {
    init: function(){
		this.nav = document.querySelector("nav");
		this.render();
	},
	addButton: function(elementObj){
		let button = document.createElement("button");
		
		button.style.backgroundColor = `${elementObj.colors[0]}`;
		button.style.border = `2px solid ${elementObj.colors[1]}`;
		button.style.color = `${elementObj.colors[1]}`
		button.innerText = `${elementObj.type}`;

        //element, maxHP, [three colors], attack, defense
		button.setAttribute("onclick", `controller.addDragon("${elementObj.type}", "${controller.getRandomNumber(20)}", "${elementObj.colors[0]}", "${elementObj.colors[1]}", "${elementObj.colors[2]}", "${elementObj.attack}", "${elementObj.defense}")`);
		
		this.nav.append(button);
	},
    disableButtons: function(){
        //disable the buttons once team is 4 dragons
        console.log("disable buttons please")
    },
	render: function(){
		this.nav.innerHTML = ""
		let navList = controller.getElements()
		navList.forEach(element => {
			this.addButton(element);
		})
		let addElementButton = document.createElement("button");
		addElementButton.innerText = "Add Dragon Type!";
		//addElementButton.setAttribute("onclick", "viewAdmin.viewAddDragonType()");
		//addElementButton.setAttribute("class", "white")
		this.nav.append(addElementButton);
	},
}
const viewCompTeam = {
    init: function(){
        this.compCards = [document.querySelector("#computer-1"), document.querySelector("#computer-2"), document.querySelector("#computer-3"), document.querySelector("#computer-4")]
        console.log(this.compCards)
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
    addDragonToScreen: function(dragon){
        //add
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
        }
        team.forEach(dragon => {
            let dragonSquare = document.querySelector(`#player-${dragon.id+1}`)
            // console.log(dragon)
            dragonSquare.style.backgroundColor = `${dragon.colors[0]}`;
            dragonSquare.style.border = `2px solid ${dragon.colors[1]}`;
            dragonSquare.style.color = `${dragon.colors[1]}`
            dragonSquare.innerHTML = `<h2>${dragon.type}</h2>
                <h3 class="hp">HP: ${dragon.hp}</h3>
                <h3 class="attack">A: ${dragon.attack}</h3>
                <h3 class="defense">D: ${dragon.defense}</h3>
                ${controller.getIcon(dragon.id, dragon.colors[0], dragon.colors[1], dragon.colors[2])}`
        })
    }
}