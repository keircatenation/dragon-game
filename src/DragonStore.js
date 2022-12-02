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
      actions:[],
      challenge:1
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

    decrementEnemyHealth: (attack) => set( (state) => ( { enemy: { ...state.enemy, health: state.enemy.health - attack} } ) ),

    decrementPlayerHealth: (attack) => set( (state) => ( { player: { ...state.player, health: state.player.health - attack} } ) ),

    levelUp: () => set( (state) => ( { player: { ...state.player, strength: state.player.strength + 1, level: state.player.level + 1 } } ) ),

    setEnemy: ( newEnemy ) => set( (state) => ( {enemy: newEnemy} ) ),

    setWeapon: ( weapon ) => set( (state) => ( { player: { ...state.player, weapon: weapon } } ) )
  } ) )