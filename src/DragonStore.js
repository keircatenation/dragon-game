import create from 'zustand';

export const useDragonStore = create( (set) => ( {
    armory: {
      armor: [],
      weapons: [],
      shields:[]
    },
    enemy: {
      name: "",
      armor:10,
      health:10,
      maxhp:10,
      action:{},
      challenge:1
    },
    fightingState:{
      player: {
        attack:0,
        hit: false,
        message:'',
        damage:0
      },
      enemy: {
        attack:0,
        hit: false,
        message:'',
        damage:0
      }
    },
    journal : [],
    player : {
      level:1,
      exp: 0,
      weapon:{},
      equipped: [],
      health:15,
      maxhp:15,
      ac:10,
      strength:2,
      proficiencies:["Simple Weapons", "Light Armor", "Shields"]
    },
    addArmor: (armor) => set( (state) => ( { armory: {...state.armory, armor: [...state.armory.armor, armor]} } ) ),

    addShield: (shield) => set( (state) => ( { armory: {...state.armory, shields: [...state.armory.shields, shield]} } ) ),

    addToJournal: ( enemy ) => set( (state) => ( { journal: [...state.journal, enemy] } ) ),

    addWeapon: (weapon) => set( (state) => ( { armory: {...state.armory, weapons: [...state.armory.weapons, weapon]} } ) ),

    clearFightingState: () => set( (state) => ( { fightingState: { player: {
      attack:0,
      hit: false,
      message:'',
      damage:0
    },
    enemy: {
      attack:0,
      hit: false,
      message:'',
      damage:0
    } } } ) ),

    decrementEnemyHealth: (attack) => set( (state) => ( { enemy: { ...state.enemy, health: state.enemy.health - attack} } ) ),

    decrementPlayerHealth: (attack) => set( (state) => ( { player: { ...state.player, health: state.player.health - attack} } ) ),

    levelUp: () => set( (state) => ( { player: { ...state.player, strength: state.player.strength + 1, level: state.player.level + 1 } } ) ),

    rollAttack: ( bonus ) => {
      let d20 = Math.floor(Math.random()*20)+1;
      if (d20 == 20){
          return [d20+bonus, "crit"]
      } else {
          return [d20+bonus, ""]
      }
    },

    rollDamage: ( numDice, numSides, crit ) => {
      let damage = numDice * Math.floor(Math.random()*numSides)+1;
      switch(crit){
        case "crit":
            return damage*2;
        default:
            return damage;
      }
    },

    setEnemy: ( newEnemy ) => set( (state) => ( {enemy: newEnemy} ) ),
    
    setEquippedWeapon: ( weapon ) => set( (state) => ( { player: { ...state.player, weapon: weapon } } ) ),

    setFightingState: ( newState ) => set( (state) => ( { fightingState: newState } ) )
  } ) )