const controller = {
    init: function(){
        // model.init();
        viewDragons.init();
        viewPlayerTeam.init();
        viewCompTeam.init()
        // viewAdmin.init();
    },
    addDragon: function(elem, fill, fillDark, fillSat, attack, defense){
        let id = model.playerTeam.length;
        model.addDragonToTeam(elem, this.getRandomNumber(10,20),id,fill, fillDark, fillSat, attack, defense)
        viewPlayerTeam.render();
    },
    dispatch:function(event,id){
		// all the dragon clicks and stuff
	},
    getPlayerDragons: function(){
        return model.playerTeam;
    },
    getElements: function(){
        return model.elements;
    },
    getIcon: function(id, fill, fillDark, fillSat){
		return model.dragonSVG(id, fill, fillDark, fillSat);
	},
    getRandomNumber: function(min,max){
        return model.makeRandomNumber(min,max);
    },
    submitDragonType: function(name, color){
		model.newElement(name, color)
	},
}

controller.init();