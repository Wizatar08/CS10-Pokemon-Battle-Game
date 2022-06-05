// This sets the Pokemon stats in an array. The hp is stored in slot 0, starting energy is stored in slot 1 and their weakness is stored in slot 2.
var pikachuStats = [60, 90, "magic", "Pikachu"];
var squirtleStats = [50, 115, "fire", "Squirtle"];
var mewtwoStats = [100, 40, "electricity", "Mewtwo"];
var alakazamStats = [70, 75, "kinetic", "Alakazam"];
var charmanderStats = [70, 80, "water", "Charmander"];
var greninjaStats = [125, 20, "electricity", "Greninja"];
var lucarioStats = [110, 50, "magic", "Lucario"];
var amoongussStats = [80, 70, "fire", "Amoonguss"];
var zoroarkStats = [90, 60, "life", "Zoroark"];
var starmieStats = [80, 80, "life", "Starmie"];
var wailordStats = [200, 240, "electricity", "Wailord"];
var diglettStats = [60, 140, "life", "Diglett"];
var burmyStats = [60, 100, "fire", "Burmy"];
var dittoStats = [50, 100, "kinetic", "Ditto"];

// This sets the picture file name that the Pokemon uses and if the image needs to be flipped (-1 if so or if facing left, 1 if not or facing right).
var pikachuVisual = ["pikachu", 1];
var squirtleVisual = ["squirtle", -1];
var mewtwoVisual = ["mewtwo", 1];
var alakazamVisual = ["alakazam", -1];
var charmanderVisual = ["charmander", 1];
var greninjaVisual = ["greninja", -1];
var lucarioVisual = ["lucario", 1];
var amoongussVisual = ["amoonguss", 1];
var zoroarkVisual = ["zoroark", 1];
var starmieVisual = ["starmie", 1];
var wailordVisual = ["wailord", 1];
var diglettVisual = ["diglett", 1];
var burmyVisual = ["burmy", -1];
var dittoVisual = ["ditto", -1];

// This sets all available moves/abilities the Pokemon can perform. They are all stored within a two-dimensional array. Everything within the main array is one ability. Inside that:
//    Slot 0: Name of ability     
//    Slot 1: Minimum amount of damage this ability deals
//    Slot 2: Maximum amount of damage this Pokemon deals
//    Slot 3: The energy cost this ability requires
//    Slot 4: The amount of health your Pokemon regenerates when performing this ability
//    Slot 5: The damage your next move gets multiplied by
//    Slot 6: The strength of this ability. If this matches the enemy Pokemon's weakness, the damage dealt is multiplied
var pikachuAbilityList = [["Punch", 10, 15, 25, 0, 1, "kinetic"],["Shock", 15, 25, 40, 0, 1, "electricity"],["Lightning Strike", 40, 60, 120, 0, 1.5, "electricity"],["Light Strike", 15, 25, 25, 2, 1, ""],["Heal", 0, 0, 0, 5, 1, ""]];
var squirtleAbilityList = [["Punch", 7, 10, 30, 2, 1, "kinetic"], ["Flood", 15, 25, 60, 0, 1, "water"],["Skull Bash", 20, 30, 30, 0, 1, "kinetic"], ["Hydro Pump", 50, 75, 45, 0, 0, "water"], ["Heal", 0, 0, 0, 6, 1, ""]];
var mewtwoAbilityList = [["Punch", 15, 20, 20, 0, 1, "kinetic"], ["Fistfight", 30, 40, 60, 0, 1, "kinetic"], ["Psydrive", 50, 75, 45, 0, 0, "magic"], ["Heal", 0, 0, 0, 3, 1, ""]];
var alakazamAbilityList = [["Punch", 2, 5, 15, 0, 1, "kinetic"], ["Spell", 15, 22, 30, 3, 1, "magic"], ["Fireball", 20, 30, 45, 0, 1, "fire"], ["Curse", 10, 25, 40, 2, 1, "magic"], ["Plan", 0, 0, 0, 0, 2, ""]];
var charmanderAbilityList = [["Punch", 8, 13, 20, 0, 1, "kinetic"], ["Ember", 4, 8, 8, 0, 1, "fire"], ["Flare", 5, 10, 20, 0, 2, "fire"], ["Reckless Charge", 20, 30, 55, 0, 1.5, "kinetic"], ["Heal", 0, 0, 0, 8, 1.5, ""]];
var greninjaAbilityList = [["Punch", 3, 5, 5, 0, 1, "kinetic"], ["Steam Slash", 12, 18, 22, 0, 1, "water"], ["Mist Slash", 40, 50, 30, 0, 1, "water"], ["Shadow Stitching", 30, 40, 20, 0, 1, ""], ["Shadow Bullet", 50, 60, 65, 0, 1, ""], ["Shadowy Hunter", 60, 80, 135, 50, 0, ""], ["Rest", 0, 0, 0, 0, 0, ""]];
var lucarioAbilityList = [["Punch", 15, 25, 20, 0, 1, "kinetic"], ["Vaccum Wave", 20, 40, 25, 0, 0.5, ""], ["Missle Jab", 40, 65, 40, 0, 0.5, "fire"], ["Magnum Kick", 45, 50, 100, 0, 1.5, "kinetic"], ["Mach Cross", 70, 110, 60, 0, 0, "kinetic"], ["Heal", 0, 0, 0, 5, 1, ""]];
var amoongussAbilityList = [["Punch", 10, 20, 10, 0, 1, "kinetic"], ["Miracle Powder", 15, 30, 20, 0, 1, "life"], ["Rising Lunge", 25, 40, 30, 0, 1, "kinetic"], ["Venoshock", 35, 50, 40, 0, 1, "life"], ["Energy Ball", 50, 70, 100, 0, 1, "electricity"], ["Heal", 0, 0, 0, 15, 1, ""], ["Build Strength", 1, 3, 0, 0, 3, ""]];
var zoroarkAbilityList = [["Punch", 5, 10, 10, 0, 1, "kinetic"], ["Corner", 15, 20, 15, 0, 1, ""], ["Dark Rush", 25, 35, 35, 0, 1.5, "magic"], ["Foul Play", 40, 55, 40, 0, 1, ""], ["Heal", 0, 0, 0, 8, 1, ""]];
var starmieAbilityList = [["Spin", 5, 10, 10, 0, 1, "kinetic"], ["Star Freeze", 10, 15, 13, 0, 1, "water"], ["Boomerang", 20, 30, 25, 0, 1, "kinetic"], ["Confuse", 10, 20, 30, 0, 2.5, "magic"], ["Energy Loop", 30, 45, 50, 3, 1, "electricity"], ["Plan", 0, 0, 0, 3, 2, ""]];
var wailordAbilityList = [["Hit", 10, 15, 25, 0, 1, "kinetic"], ["Heavy Impact", 25, 40, 60, 0, 0, "kinetic"], ["Surf", 30, 45, 70, 0, 0, "water"], ["Hydro Splash", 40, 55, 100, 0, 0, "water"], ["Giant Wave", 100, 140, 275, 0, 0, "water"], ["Dwindling Wave", 130, 180, 320, 0, 0, "water"], ["Nap", 0, 0, 0, 20, 0, ""]];
var diglettAbilityList = [["Punch", 2, 5, 5, 0, 1, "kinetic"], ["Scratch", 5, 10, 10, 0, 1, "kinetic"], ["Mud Slap", 10, 15, 12, 0, 1, "kinetic"], ["Iron Head", 20, 30, 20, 0, 1, "kinetic"], ["Dig", 0, 0, 0, 0, 1, ""]];
var burmyAbilityList = [["Punch", 1, 2, 0, 0, 1, "kinetic"], ["Hang Down", 5, 10, 4, 0, 1, "life"], ["Tackle", 5, 10, 5, 0, 1, "kinetic"], ["Solar Ray", 15, 25, 9, 0, 1, "fire"], ["Gust", 40, 55, 30, 0, 1, "life"], ["Planter Pain", 60, 70, 50, 0, 1, "life"], ["Leaf Cutter", 80, 110, 65, 0, 1, "life"], ["Heal", 0, 0, 0, 15, 0.5, ""]];

// Easter egg "Pokemon"
var vectorStats = [Number.MAX_VALUE, 0, "none"];
var vectorAbilityList = [["Direction", 0, 0, 0, 0, 1, "everything"], ["Magnitude", 20, 30, Number.MAX_VALUE, 0, Number.MAX_VALUE, "everything"], ["Oh Yeah", 1, 1, 0, 0, 1, "everything"]];

// Put all abilities in another array list, in the same order that the names of the Pokemon in the first array is
const abilities = [pikachuAbilityList, squirtleAbilityList, mewtwoAbilityList, alakazamAbilityList, charmanderAbilityList, greninjaAbilityList, lucarioAbilityList, amoongussAbilityList, zoroarkAbilityList, starmieAbilityList, wailordAbilityList, diglettAbilityList, burmyAbilityList, []];
// Put all stats in another array list, in the same order that the names of the Pokemon in the first array is
const stats = [pikachuStats, squirtleStats, mewtwoStats, alakazamStats, charmanderStats, greninjaStats, lucarioStats, amoongussStats, zoroarkStats, starmieStats, wailordStats, diglettStats, burmyStats, dittoStats];
// Put all visual settings in another array list, in the same order
const visuals = [pikachuVisual, squirtleVisual, mewtwoVisual, alakazamVisual, charmanderVisual, greninjaVisual, lucarioVisual, amoongussVisual, zoroarkVisual, starmieVisual, wailordVisual, diglettVisual, burmyVisual, dittoVisual];

// Create variables for holding PLAYER information
var currStats, currAbilities, currVisuals;
var pHp, pStartingHp, pEnergy, pWeakness, pDamageMultiplyer;

// Create variables for holding ENEMY information
var enemStats, enemAbilities, enemVisuals;
var eHp, eStartingHp, eEnergy, eWeakness, eDamageMultiplyer;

// Create variables to access all the HP and ENERGY elements
var pHpBar = document.getElementById("playerHpBar");
var pEnergyBar = document.getElementById("playerEnergyBar");
var eHpBar = document.getElementById("enemyHpBar");
var eEnergyBar = document.getElementById("enemyEnergyBar");
var pHpText = document.getElementById("playerHpText");
var pEnergyText = document.getElementById("playerEnergyText");
var eHpText = document.getElementById("enemyHpText");
var eEnergyText = document.getElementById("enemyEnergyText");

// Creates variables for the other HTML elements
var actionText = document.getElementById("bMenuHeadingText");
var damageText = document.getElementById("damageText");
var damageSubtext = document.getElementById("damageSubtext");
var actionList = document.getElementById("attackButtons");
var centerScreen = document.getElementById("centerMenu");

// Variables for the game as a whole
var turn, globalDamageMultiplyer;

function beginGame(index) {
  sessionStorage.setItem("index", index);
}

function setupGame() {
  let ind = parseInt(sessionStorage.getItem("index"));
  turn = 0;
  globalDamageMultiplyer = 1;

  // Copy all the correct information to variables
  currStats = [...stats][ind];
  currAbilities = [...abilities][ind];
  currVisuals = [...visuals][ind];

  document.getElementById("playerPokemon").innerHTML = '<div style="transform: scaleX(' + currVisuals[1] + ');"><img src="images/game/' + currVisuals[0] + '.png"></div>';

  // Create PLAYER statistics
  pHp = currStats[0];
  pEnergy = currStats[1];
  pWeakness = currStats[2];
  pStartingHp = pHp;
  pDamageMultiplyer = 1;

  // Create the ENEMY
  let rand = -1;
  while (rand == -1 || rand == ind) {
    rand = Math.floor(Math.random() * stats.length);
  }

  enemStats = [...stats][rand];
  enemAbilities = [...abilities][rand];
  enemVisuals = [...visuals][rand];

  document.getElementById("enemyPokemon").innerHTML = '<div style="transform: scaleX(' + (enemVisuals[1] * -1) + ');"><img src="images/game/' + enemVisuals[0] + '.png"></div>';

  eHp = enemStats[0];
  eEnergy = enemStats[1];
  eWeakness = enemStats[2];
  eStartingHp = eHp;
  eDamageMultiplyer = 1;

  if (currVisuals[0] == "ditto") {
    currAbilities = enemAbilities;
  }
  if (enemVisuals[0] = "ditto") {
    enemAbilities = currAbilities;
  }

  document.getElementById("playerPokemonName").innerHTML = currStats[3] + " - Weakness: " + currStats[2];
  document.getElementById("enemyPokemonName").innerHTML = enemStats[3] + " - Weakness: " + enemStats[2];

  updateBars();
  onPlayerTurn();
}

/**
 * This function is used to update all the HP and ENERGY bars
 */
function updateBars() {
  pHpBar.style.width = (500 * (pHp / 250)) + "px";
  eHpBar.style.width = (500 * (eHp / 250)) + "px";
  if (pHp <= 0) {
    pHpBar.style.width = "0px";
  }
  if (eHp <= 0) {
    eHpBar.style.width = "0px";
  }
  pEnergyBar.style.width = (500 * (pEnergy / 250)) + "px";
  eEnergyBar.style.width = (500 * (eEnergy / 250)) + "px";
  pHpText.innerHTML = pHp;
  pEnergyText.innerHTML = pEnergy;
  eHpText.innerHTML = eHp;
  eEnergyText.innerHTML = eEnergy;
}

/**
 * Set the ability list. Passes in an ARRAY
 */
function setActionList(abilitiesArray) {
  let string = "<ul>";
  for (let i = 0; i < abilitiesArray.length; i++) {
    string += "<li><a onclick='playAbility(" + i + ")'>" + abilitiesArray[i][0] + " | " + (abilitiesArray[i][1]* globalDamageMultiplyer) + "-" + (abilitiesArray[i][2] * globalDamageMultiplyer) + "D | " + abilitiesArray[i][3] + "E";
    if (abilitiesArray[i][4] != 0) {
      string += " | +" + abilitiesArray[i][4] + "HP";
    }
    if (abilitiesArray[i][5] != 1) {
      string += " | " + abilitiesArray[i][5] + "x D";
    }
    if (abilitiesArray[i][6] != "") {
      string += " | Strength: " + abilitiesArray[i][6];
    }
    string += " </a></li>"
  }
  string += "</ul>"
  actionList.innerHTML = string;
}

/**
 * Set the ability list that cannot be clicked on. Passes in an ARRAY
 */
function setUnclickableActionList(abilitiesArray) {
  let string = "<ul>";
  for (let i = 0; i < abilitiesArray.length; i++) {
    string += "<li><a onclick='playAbility(" + i + ")'>" + abilitiesArray[i][0] + " | " + (abilitiesArray[i][1] * globalDamageMultiplyer) + "-" + (abilitiesArray[i][2] * globalDamageMultiplyer) + "D | " + abilitiesArray[i][3] + "E";
    if (abilitiesArray[i][4] != 0) {
      string += " | +" + abilitiesArray[i][4] + "HP";
    }
    if (abilitiesArray[i][5] != 1) {
      string += " | " + abilitiesArray[i][5] + "x D";
    }
    if (abilitiesArray[i][6] != "") {
      string += " | Strength: " + abilitiesArray[i][6];
    }
    string += " </a></li>"
  }
  string += "</ul>"
  actionList.innerHTML = string;
}

/**
 * Clears the entire action list
 */
function clearActionList() {
  actionList.innerHTML = "";
  actionText.innerHTML = "";
}

/**
 * Run when it becomes the player's turn
 */
function onPlayerTurn() {
  turn++;
  globalDamageMultiplyer = Math.ceil(turn / 6);

  let htmlString = "<div id='visibleCenterScreen'><div class='centerScreenTitle'>Turn " + turn + "</div>";
  if (pDamageMultiplyer != 1) {
    htmlString += "<div class='csSubText'>You do " + pDamageMultiplyer + "x damage</div>";
  }
  if (globalDamageMultiplyer != 1) {
    htmlString += "<div class='csGlobalDamageText'>All base damage will be multiplyed by " + globalDamageMultiplyer + "x </div>";
  }
  htmlString += "<a onclick='startPlayerTurn()'>Start</a></div>";
  centerScreen.innerHTML = htmlString;
}

/**
 * When the player start's their turn, this function is run.
 */
function startPlayerTurn() {
  centerScreen.innerHTML = ""; // Clear center screen
  damageText.innerHTML = "";
  damageSubtext.innerHTML = "";

  actionText.innerHTML = "It is your turn. Play an ability."
  setActionList(currAbilities);
}

/**
 * When the enemy start's their turn, this function is run. This function is the setup for the enemy's turn, the process is run in playEnemyAbility().
 */
function startEnemyTurn() {
  centerScreen.innerHTML = ""; // Clear center screen
  damageText.innerHTML = "";
  damageSubtext.innerHTML = "";

  actionText.innerHTML = "It is the enemy's turn."
  setUnclickableActionList(enemAbilities);

  playEnemyAbility();
}

/**
 * Run when a player selects an ability
 */
async function playAbility(abilityIndex) {
  if (currAbilities[abilityIndex][3] <= pEnergy) {
    clearActionList();

    let weaknessDmgMult = 1;
    let playedAbility = currAbilities[abilityIndex];
    let baseDamage = (Math.round(Math.random() * (playedAbility[2] - playedAbility[1])) + playedAbility[1]) * globalDamageMultiplyer;
    let totalDamage = baseDamage;

    // Text for base damage
    damageText.innerHTML = "DAMAGE: " + baseDamage;
    damageSubtext.innerHTML = "Your base damage is " + baseDamage;

    // Modify damage if your ability strength = enemy weakness
    if (playedAbility[6] == eWeakness) {
      weaknessDmgMult = (Math.round(Math.random() * 5) + 15) / 10;
      totalDamage = Math.round(totalDamage * weaknessDmgMult);
      await sleep(1500);
      damageText.innerHTML = "DAMAGE: " + baseDamage + "x" + weaknessDmgMult + " ---> " + totalDamage;
      damageSubtext.innerHTML = "You hit a weak spot in the enemy. Your damage was multiplied by " + weaknessDmgMult;
    }

    // If your damage multiplyer is not 1, modify damage
    if (pDamageMultiplyer != 1) {
      await sleep(1500);
      damageText.innerHTML = "DAMAGE: " + totalDamage + "x" + pDamageMultiplyer + " ---> " + Math.round(totalDamage * pDamageMultiplyer);
      totalDamage = Math.round(totalDamage * pDamageMultiplyer);
      damageSubtext.innerHTML = "Your damage was multiplyed by " + pDamageMultiplyer;
    }
    
    // Subtract enemy HP
    eHp -= totalDamage;
    // Subtract your energy
    pEnergy -= currAbilities[abilityIndex][3];

    // Clear subtext
    damageSubtext.innerHTML = "";

    // Add health if needed
    if (playedAbility[4] != 0) {
      await sleep(1500);
      damageText.innerHTML += " | You get +" + playedAbility[4] + "HP";
      pHp += playedAbility[4];
    }
    // Add energy if needed
    if (totalDamage == 0) {
      pEnergy += 20;
      damageText.innerHTML += " | You get 20E";
    }

    damageSubtext.innerHTML = "";
    if (playedAbility[5] != 1) {
      await sleep(1500);
      damageSubtext.innerHTML = "You will do " + playedAbility[5] + "x damage next turn";
    }
    await sleep(1500);
    updateBars();
    pDamageMultiplyer = playedAbility[5];

    if (eHp <= 0) {
      endGame(true);
    } else {
      centerScreen.innerHTML = "<div id='visibleCenterScreen'><div class='centerScreenTitle'>Enemy's Turn</div><a onclick='startEnemyTurn()'>Ok</a></div>";
    }
  } else {
    actionText.innerHTML = "You do not have enough energy to play " + currAbilities[abilityIndex][0] + ". Play an ability."
  }
}

async function playEnemyAbility() {
  let randAbilityIndex;
  // currAbilities[abilityIndex][3] <= pEnergy
  let hasValidAbility = false;
  while (!hasValidAbility) {
    randAbilityIndex = Math.floor(Math.random() * enemAbilities.length);
    if (enemAbilities[randAbilityIndex][3] <= eEnergy) {
      hasValidAbility = true;
    }
  }
  let enemChosenAbility = enemAbilities[randAbilityIndex];

  let weaknessDmgMult = 1;
  let baseDamage = (Math.round(Math.random() * (enemChosenAbility[2] - enemChosenAbility[1])) + enemChosenAbility[1]) * globalDamageMultiplyer;
  let totalDamage = baseDamage;

  await sleep(1500);

  clearActionList();
  damageText.innerHTML = "DAMAGE: " + baseDamage;
  damageSubtext.innerHTML = "The enemy's base damage is " + baseDamage;

  if (enemChosenAbility[6] == pWeakness) {
    weaknessDmgMult = (Math.round(Math.random() * 5) + 15) / 10;
    totalDamage = Math.round(totalDamage * weaknessDmgMult);
    await sleep(1500);
    damageText.innerHTML = "DAMAGE: " + baseDamage + "x" + weaknessDmgMult + " ---> " + totalDamage;
    damageSubtext.innerHTML = "The enemy hit a weak spot in you. Their damage was multiplied by " + weaknessDmgMult;
  }

  if (eDamageMultiplyer != 1) {
      await sleep(1500);
      damageText.innerHTML = "DAMAGE: " + totalDamage + "x" + eDamageMultiplyer + " ---> " + Math.round(totalDamage * eDamageMultiplyer);
      totalDamage = Math.round(totalDamage * eDamageMultiplyer);
      damageSubtext.innerHTML = "Their damage was multiplyed by " + eDamageMultiplyer;
    }

  pHp -= totalDamage;
  eEnergy -= enemChosenAbility[3];

  if (enemChosenAbility[4] != 0) {
    await sleep(1500);
    damageText.innerHTML += " | The enemy got +" + enemChosenAbility[4] + "HP";
    eHp += enemChosenAbility[4];
  }
  if (totalDamage == 0) {
    eEnergy += 20;
    damageText.innerHTML += " | The enemy gets 20E";
  }

  damageSubtext.innerHTML = "";
  if (enemChosenAbility[5] != 1) {
    await sleep(1500);
    damageSubtext.innerHTML = "They will do " + enemChosenAbility[5] + "x damage next turn";
  }

  await sleep(1500);
  updateBars();
  eDamageMultiplyer = enemChosenAbility[5];
  
  if (pHp <= 0) {
    endGame(false);
  } else {
    onPlayerTurn();
  }
}

/**
 * Function ran when either the player or the enemy's HP reaches zero
 */
function endGame(playerWins) {
  let whoWon;
  if (playerWins) {
    whoWon = "You Win!";
  } else {
    whoWon = "You Lost!";
  }
  centerScreen.innerHTML = "<div id='visibleCenterScreen'><div class='centerScreenTitle'>" + whoWon + "</div><a href='selectpokemon.html'>Ok</a></div>";
}

/**
 * Function that causes delays
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}