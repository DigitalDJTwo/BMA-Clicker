//version number
const version = 0.2;

//will reset the game when the version is changed if previous version is less than 1.0
if(localStorage.getItem('version') != version && localStorage.getItem('version') < 1){
  localStorage.clear();
  localStorage.setItem('version', version);
  location.reload();
}

//phase 0 variables
var phase = 0;
var signatures = 0;
//phase 1 variables
var dlpfCount = 0;
var dlpfCost = 20;
//phase 2 variables
var automatedChores = 0;
var automatedChoresCost = 500;
//phase 3 variables
var robotParts = 0;
//phase 4 variables
var robotFactories = 1;
var processingPower = 0;
var factoryCost = 100;
var factoryUpgradeCost = 500;
var factoryProduction = 1;
var mobileProcessors = 0;
var convertFactoryCost = 800;
//phase 5 variables
var constructionRobots = 1;
var worldControl = 0;
var combatRobots = 0;
const combatRobotCost = 100000;
var combatReplicationBool = 0;

//add commas to numbers
function intComma(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//checks for saved progress and loads it if it finds any
if(localStorage.getItem('phase') > 0){
  phase = localStorage.getItem('phase');
}
if(localStorage.getItem('signatures') > 0){
  signatures = localStorage.getItem('signatures');
}
if(localStorage.getItem('dlpfCount') > 0){
  dlpfCount = localStorage.getItem('dlpfCount');
}
if(localStorage.getItem('dlpfCost') > 20){
  dlpfCost = localStorage.getItem('dlpfCost');
}
if(localStorage.getItem('automatedChores') > 0){
  automatedChores = localStorage.getItem('automatedChores');
}
if(localStorage.getItem('automatedChoresCost') > 500){
  automatedChoresCost = localStorage.getItem('automatedChoresCost');
}
if(localStorage.getItem('robotParts') > 0){
  robotParts = localStorage.getItem('robotParts');
}
if(localStorage.getItem('robotFactories') > 1){
  robotFactories = localStorage.getItem('robotFactories');
}
if(localStorage.getItem('processingPower') > 0){
  processingPower = localStorage.getItem('processingPower');
}
if(localStorage.getItem('factoryCost') > 100){
  factoryCost = localStorage.getItem('factoryCost');
}
if(localStorage.getItem('factoryUpgradeCost') > 500){
  factoryUpgradeCost = localStorage.getItem('factoryUpgradeCost');
}
if(localStorage.getItem('factoryProduction') > 1){
  factoryProduction = localStorage.getItem('factoryProduction');
}
if(localStorage.getItem('mobileProcessors') > 0){
  mobileProcessors = localStorage.getItem('mobileProcessors');
}
if(localStorage.getItem('convertFactoryCost') > 500){
  convertFactoryCost = localStorage.getItem('convertFactoryCost');
}
if(localStorage.getItem('constructionRobots') > 1){
  constructionRobots = localStorage.getItem('constructionRobots');
}
if(localStorage.getItem('worldControl') > 0){
  worldControl = localStorage.getItem('worldControl');
}
if(localStorage.getItem('combatRobots') > 0){
  combatRobots = localStorage.getItem('combatRobots');
}
if(localStorage.getItem('combatReplicationBool') == 1){
  combatReplicationBool = 1;
}

//cheat section, make sure to comment out
function debugPhase(){
  localStorage.clear();
  phase = document.getElementById("debugPhaseTo").value;
  localStorage.setItem('phase', phase);
  localStorage.setItem('version', version);
  location.reload();
}

//this runs on load and updates the page to correctly reflect the phase loaded from storage
function phaseUpdater(){
  if(phase == 0){
    document.getElementById("phase0").style.display = "inline";
    document.getElementById("phase0Signatures").innerHTML = intComma(signatures);
  }
  if(phase == 1){
    document.getElementById("phase0").style.display = "none";
    document.getElementById("phase1").style.display = "inline";
    document.getElementById("phase1Signatures").innerHTML = intComma(signatures);
    document.getElementById("dlpfDisplay1").innerHTML = intComma(dlpfCount);
    document.getElementById("dlpfCost1").innerHTML = intComma(dlpfCost);
  }
  if(phase == 2){
    document.getElementById("phase0").style.display = "none";
    document.getElementById("phase2").style.display = "inline";
    document.getElementById("phase2Signatures").innerHTML = intComma(signatures);
    document.getElementById("dlpfDisplay2").innerHTML = intComma(dlpfCount);
    document.getElementById("dlpfCost2").innerHTML = intComma(dlpfCost);
    document.getElementById("automatedChoresDisplay").innerHTML = intComma(automatedChores);
    document.getElementById('automatedChoresCost').innerHTML = intComma(automatedChoresCost);
  }
  if(phase == 3){
    document.getElementById("phase0").style.display = "none";
    document.getElementById("phase3").style.display = "inline";
    document.getElementById("robotParts3").innerHTML = intComma(robotParts);
    clearInterval(dlpfInterval);
  }
  if(phase == 4){
    document.getElementById("phase0").style.display = "none";
    document.getElementById("phase4").style.display = "inline";
    document.getElementById("processingPower4").innerHTML = intComma(processingPower);
    document.getElementById("robotFactories4").innerHTML = intComma(robotFactories);
    document.getElementById("robotParts4").innerHTML = intComma(robotParts);
    document.getElementById("processingPower4").innerHTML = intComma(processingPower);
    document.getElementById("factoryCost4").innerHTML = intComma(factoryCost);
    document.getElementById("factoryUpgradeCost4").innerHTML = intComma(factoryUpgradeCost);
    document.getElementById("factoryProduction4").innerHTML = intComma(factoryProduction);
    document.getElementById("mobileProcessors4").innerHTML = intComma(mobileProcessors);
    document.getElementById("convertFactoryCost4").innerHTML = intComma(convertFactoryCost);
    clearInterval(dlpfInterval);
  }
  if(phase == 5){
    document.getElementById("phase0").style.display = "none";
    document.getElementById("phase5").style.display = "inline";
    document.getElementById("processingPower5").innerHTML = intComma(processingPower);
    document.getElementById("robotFactories5").innerHTML = intComma(robotFactories);
    document.getElementById("robotParts5").innerHTML = intComma(robotParts);
    document.getElementById("factoryUpgradeCost5").innerHTML = intComma(factoryUpgradeCost);
    document.getElementById("mobileProcessors5").innerHTML = intComma(mobileProcessors);
    document.getElementById("convertFactoryCost5").innerHTML = intComma(convertFactoryCost);
    document.getElementById("constructionRobots5").innerHTML = intComma(constructionRobots);
    document.getElementById("factoryProduction5").innerHTML = intComma(factoryProduction);
    document.getElementById("combatRobots5").innerHTML = intComma(combatRobots);
    document.getElementById("worldControl5").innerHTML = worldControl
    clearInterval(dlpfInterval);
    if(combatReplicationBool == 1){
      document.getElementById("factoryGoal5").style.display = "none";
      document.getElementById("processorGoal5").style.display = "none";
      document.getElementById("combatRobotGoal5").style.display = "none";
    }
    if(worldControl >= 100){
      document.getElementById("phase5").style.display = "none";
      document.getElementById("end").style.display = "inline";
      clearInterval(factoryInterval);
    }
  }
  checkPhase(); //checks to see if the phase up button should be displayed
  document.getElementById("version").innerHTML = version; //updates the version display
}

//phase up functions
function phaseUp(phaseFrom){
  if(phaseFrom == 0){
    document.getElementById("phase0").style.display = "none";
    document.getElementById("phase1").style.display = "inline";
    document.getElementById("phase1Signatures").innerHTML = intComma(signatures);
    document.getElementById("dlpfCost1").innerHTML = intComma(dlpfCost);
    phase = 1;
  }
  if(phaseFrom == 1){
    document.getElementById("phase1").style.display = "none";
    document.getElementById("phase2").style.display = "inline";
    document.getElementById("phase2Signatures").innerHTML = intComma(signatures);
    document.getElementById("dlpfCost2").innerHTML = intComma(dlpfCost);
    document.getElementById("dlpfDisplay2").innerHTML = intComma(dlpfCount);
    document.getElementById("automatedChoresDisplay").innerHTML = intComma(automatedChores);
    document.getElementById('automatedChoresCost').innerHTML = intComma(automatedChoresCost);
    phase = 2;
  }
  if(phaseFrom == 2){
    document.getElementById("phase2").style.display = "none";
    document.getElementById("phase3").style.display = "inline";
    document.getElementById("robotParts3").innerHTML = intComma(robotParts);
    clearInterval(dlpfInterval);
    phase = 3;
  }
  if(phaseFrom == 3){
    document.getElementById("phase3").style.display = "none";
    document.getElementById("phase4").style.display = "inline";
    document.getElementById("processingPower4").innerHTML = intComma(processingPower);
    document.getElementById("robotFactories4").innerHTML = intComma(robotFactories);
    document.getElementById("robotParts4").innerHTML = intComma(robotParts);
    document.getElementById("factoryCost4").innerHTML = intComma(factoryCost);
    document.getElementById("factoryUpgradeCost4").innerHTML = intComma(factoryUpgradeCost);
    document.getElementById("factoryProduction4").innerHTML = intComma(factoryProduction);
    document.getElementById("processingPower4").innerHTML = intComma(processingPower);
    document.getElementById("mobileProcessors4").innerHTML = intComma(mobileProcessors);
    document.getElementById("convertFactoryCost4").innerHTML = intComma(convertFactoryCost);
    document.getElementById("buildFirstRobot").style.display = "none";
    phase = 4;
  }
  if(phaseFrom == 4){
    document.getElementById("phase4").style.display = "none";
    document.getElementById("phase5").style.display = "inline";
    document.getElementById("processingPower5").innerHTML = intComma(processingPower);
    document.getElementById("robotFactories5").innerHTML = intComma(robotFactories);
    document.getElementById("robotParts5").innerHTML = intComma(robotParts);
    document.getElementById("factoryUpgradeCost5").innerHTML = intComma(factoryUpgradeCost);
    document.getElementById("mobileProcessors5").innerHTML = intComma(mobileProcessors);
    document.getElementById("convertFactoryCost5").innerHTML = intComma(convertFactoryCost);
    document.getElementById("constructionRobots5").innerHTML = intComma(constructionRobots);
    document.getElementById("factoryProduction5").innerHTML = intComma(factoryProduction);
    document.getElementById("combatRobots5").innerHTML = intComma(combatRobots);
    document.getElementById("worldControl5").innerHTML = worldControl
    document.getElementById("firstConstructionRobot").style.display = "none";
    phase = 5;
  }
  localStorage.setItem('phase', phase);
}

function phaseUpButton(){ //this probably isn't necessary
  phaseUp(phase);
  document.getElementById("phaseButton").style.display = "none";
  document.getElementById("buildFirstRobot").style.display = "none";
  document.getElementById("firstConstructionRobot").style.display = "none";
}

function checkPhase(){
  if(signatures >= 50 && phase == 0){
    document.getElementById('phaseButton').style.display = "inline";
  } else if(signatures >= 2500 && phase == 1){
    document.getElementById('phaseButton').style.display = "inline";
  } else if(signatures >= 100000 && phase == 2){
    document.getElementById('phaseButton').style.display = "inline";
  } else if(robotParts >= 50 && phase == 3){
    document.getElementById("buildFirstRobot").style.display = "inline";
  } else if(robotParts >= 20000 && mobileProcessors >= 20 && phase == 4){
    console.log('phasecheck');
    document.getElementById("firstConstructionRobot").style.display = "inline";
  } else {
    document.getElementById('phaseButton').style.display = 'none';
    document.getElementById("buildFirstRobot").style.display = "none";
    document.getElementById("firstConstructionRobot").style.display = "none";
  }
}

//Phase 0
function manualSignature(){
  signatures ++;
  localStorage.setItem('signatures', signatures);
  if(phase == 0){
    document.getElementById("phase0Signatures").innerHTML = intComma(signatures);
  } else if(phase == 1){
    document.getElementById("phase1Signatures").innerHTML = intComma(signatures);
  } else if(phase == 2){
    document.getElementById("phase2Signatures").innerHTML = intComma(signatures);
  }
  checkPhase();
}

//Phase 1
var dlpfInterval = setInterval(dlpfProcess, 1000);

function dlpfProcess(){
  signatures = (+signatures + +dlpfCount);
  dlpfCount = (+dlpfCount + +automatedChores);
  localStorage.setItem('dlpfCount', dlpfCount);
  localStorage.setItem('signatures', signatures);
  if(phase == 1){
    document.getElementById("phase1Signatures").innerHTML = intComma(signatures);
  } else if(phase == 2){
  document.getElementById("phase2Signatures").innerHTML = intComma(signatures);
  }
  document.getElementById("dlpfDisplay2").innerHTML = intComma(dlpfCount);
  checkPhase();
}


function getDLPF(){
  if(signatures >= dlpfCost){
    signatures -= dlpfCost;
    dlpfCost = Math.round((dlpfCost * 1.05));
    localStorage.setItem('dlpfCost', dlpfCost);
    dlpfCount ++;
    localStorage.setItem('dlpfCount', dlpfCount);
    if(phase == 1){
    document.getElementById("dlpfCost1").innerHTML = intComma(dlpfCost);
    document.getElementById("phase1Signatures").innerHTML = intComma(signatures);
    document.getElementById("dlpfDisplay1").innerHTML = intComma(dlpfCount);
    } else if(phase == 2){
    document.getElementById("dlpfCost2").innerHTML = intComma(dlpfCost);
    document.getElementById("phase2Signatures").innerHTML = intComma(signatures);
    document.getElementById("dlpfDisplay2").innerHTML = (dlpfCount);
    }
  }
  checkPhase();
}

//Phase 2
function automateChore(){
  if(signatures >= automatedChoresCost){
    signatures -= automatedChoresCost;
    automatedChoresCost = Math.round((automatedChoresCost * 1.1));
    localStorage.setItem('automatedChoresCost', automatedChoresCost);
    automatedChores ++;
    localStorage.setItem('automatedChores', automatedChores);
    document.getElementById("automatedChoresDisplay").innerHTML = intComma(automatedChores);
    document.getElementById('automatedChoresCost').innerHTML = intComma(automatedChoresCost);
    document.getElementById("phase2Signatures").innerHTML = intComma(signatures);
  }
  checkPhase();
}

//Phase 3
function manualRobotPart(){
  robotParts ++;
  localStorage.setItem('robotParts', robotParts)
  if(phase == 3){
    document.getElementById("robotParts3").innerHTML = intComma(robotParts);
  } else if(phase == 4){
    document.getElementById("robotParts4").innerHTML = intComma(robotParts);
  } else if(phase == 5){
    document.getElementById("robotParts5").innerHTML = intComma(robotParts);
  }
  checkPhase();
}

//Phase 4
function buildFactory(){
  if(robotParts >= factoryCost){
    robotParts = (robotParts - factoryCost);
    robotFactories ++;
    factoryCost = Math.round((factoryCost * 1.05))
    localStorage.setItem('factoryCost', factoryCost);
    localStorage.setItem('robotParts', robotParts);
    localStorage.setItem('robotFactories', robotFactories);
    document.getElementById("robotParts4").innerHTML = intComma(robotParts);
    document.getElementById("factoryCost4").innerHTML = intComma(factoryCost);
    document.getElementById("robotFactories4").innerHTML = intComma(robotFactories);
  }
}

function precision(x){
  return Number.parseFloat(x).toFixed(5);
}

var factoryInterval = setInterval(factoryProcess, 1000);

function factoryProcess(){
  if(phase > 3){
    robotParts = (+robotParts + +(robotFactories * factoryProduction));
    localStorage.setItem('robotParts', robotParts);
    processingPower = (+processingPower + +mobileProcessors);
    localStorage.setItem('processingPower', processingPower);
    if(phase == 4){
      document.getElementById("processingPower4").innerHTML = intComma(processingPower);
      document.getElementById("robotParts4").innerHTML = intComma(robotParts);
    }
    if(phase == 5){
      document.getElementById("processingPower5").innerHTML = intComma(processingPower);
      document.getElementById("robotParts5").innerHTML = intComma(robotParts);
    }
    checkPhase();
  }
  if(phase > 4){
    robotFactories = (+robotFactories + +constructionRobots);
    localStorage.setItem('robotFactories', robotFactories);
    document.getElementById("robotFactories5").innerHTML = intComma(robotFactories);
    worldControl = precision((+worldControl + +(combatRobots / 100000)));
    document.getElementById("worldControl5").innerHTML = worldControl
    localStorage.setItem('worldControl', worldControl);
    if(combatReplicationBool == 0 && combatRobots >= 1){
      if(robotFactories >= 10000 && mobileProcessors >= 100){
        document.getElementById("combatReplication").style.display = "inline";
      }
    } else if(combatReplicationBool == 1){
      if(combatRobots > 50){
        combatRobots = Math.round((combatRobots * 1.02))
      } else if(combatRobots <= 50){
        combatRobots = (+combatRobots + +1);
      }
      localStorage.setItem('combatRobots', combatRobots);
      document.getElementById("combatRobots5").innerHTML = intComma(combatRobots);
    }
    if(worldControl >= 100){
      document.getElementById("phase5").style.display = "none";
      document.getElementById("end").style.display = "inline";
      clearInterval(factoryInterval);
    }
  }
}

function upgradeFactories(){
  if(processingPower >= factoryUpgradeCost){
    processingPower = (processingPower - factoryUpgradeCost);
    factoryProduction = (+factoryProduction + +1);
    factoryUpgradeCost = Math.round((factoryUpgradeCost * 1.5));
    localStorage.setItem('processingPower', processingPower);
    localStorage.setItem('factoryProduction', factoryProduction);
    localStorage.setItem('factoryUpgradeCost', factoryUpgradeCost);
    if(phase == 4){
      document.getElementById("processingPower4").innerHTML = intComma(processingPower);
      document.getElementById("factoryUpgradeCost4").innerHTML = intComma(factoryUpgradeCost);
      document.getElementById("factoryProduction4").innerHTML = intComma(factoryProduction);
    }
    if(phase == 5){
     document.getElementById("processingPower5").innerHTML = intComma(processingPower);
      document.getElementById("factoryUpgradeCost5").innerHTML = intComma(factoryUpgradeCost);
      document.getElementById("factoryProduction5").innerHTML = intComma(factoryProduction);
    }
  }
}

function convertFactory(){
  if(robotFactories >= 1 && robotParts >= convertFactoryCost){
    robotParts = (robotParts - convertFactoryCost);
    convertFactoryCost = Math.round((convertFactoryCost * 1.03));
    robotFactories = (robotFactories - 1);
    mobileProcessors = (+mobileProcessors + +1);
    localStorage.setItem('robotFactories', robotFactories);
    localStorage.setItem('mobileProcessors', mobileProcessors);
    localStorage.setItem('robotParts', robotParts);
    localStorage.setItem('convertFactoryCost', convertFactoryCost);
    if(phase == 4){
      document.getElementById("robotFactories4").innerHTML = intComma(robotFactories);
      document.getElementById("mobileProcessors4").innerHTML = intComma(mobileProcessors);
      document.getElementById("robotParts4").innerHTML = intComma(robotParts);
      document.getElementById("convertFactoryCost4").innerHTML = intComma(convertFactoryCost);
    }
    if(phase == 5){
      document.getElementById("robotFactories5").innerHTML = intComma(robotFactories);
      document.getElementById("mobileProcessors5").innerHTML = intComma(mobileProcessors);
      document.getElementById("robotParts5").innerHTML = intComma(robotParts);
      document.getElementById("convertFactoryCost5").innerHTML = intComma(convertFactoryCost);
    }
  }
}

//Phase 5
function constructionRobot(){
  if(robotParts >= 20000 && mobileProcessors >= 10){
    constructionRobots ++;
    robotParts = (robotParts - 20000);
    mobileProcessors = (mobileProcessors - 10);
    localStorage.setItem('constructionRobots', constructionRobots);
    localStorage.setItem('robotParts', robotParts);
    localStorage.setItem('mobileProcessors', mobileProcessors);
    document.getElementById("mobileProcessors5").innerHTML = intComma(mobileProcessors);
    document.getElementById("robotParts5").innerHTML = intComma(robotParts);
    document.getElementById("constructionRobots5").innerHTML = intComma(constructionRobots);
  }
}

function combatRobot(){
  if(robotParts >= 50000){
    robotParts = (robotParts - 50000);
    combatRobots = (combatRobots + 1);
    document.getElementById("robotParts5").innerHTML = intComma(robotParts);
    document.getElementById("combatRobots5").innerHTML = intComma(combatRobots);
    localStorage.setItem('robotParts', robotParts);
    localStorage.setItem('combatRobots', combatRobots);
  }
}

function combatReplication(){
  if(robotFactories >= 10000 && mobileProcessors >= 100){
    robotFactories = (robotFactories - 10000);
    mobileProcessors = (mobileProcessors - 100);
    combatReplicationBool = 1;
    localStorage.setItem('robotParts', robotParts);
    localStorage.setItem('mobileProcessors', mobileProcessors);
    localStorage.setItem('combatReplicationBool', combatReplicationBool);
    document.getElementById("mobileProcessors5").innerHTML = intComma(mobileProcessors);
    document.getElementById("robotParts5").innerHTML = intComma(robotParts);
    document.getElementById("combatReplication").style.display = "none";
    document.getElementById("factoryGoal5").style.display = "none";
    document.getElementById("processorGoal5").style.display = "none";
    document.getElementById("combatRobotGoal5").style.display = "none";
  }
}

function reset(){
  localStorage.clear();
  localStorage.setItem('version', version);
  location.reload();
}