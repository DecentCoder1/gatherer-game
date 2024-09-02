// Resource variables
let wood = 0;
let stone = 0;
let iron = 0;
let gold = 0;
let gatheringRate = 1;
let gatheringUpgradeCost = 10;

// Skill variables
let woodSkillCost = 50;
let woodSkillBonus = 1;
let stoneSkillCost = 100;
let stoneSkillBonus = 1;
let ironSkillCost = 200;
let ironSkillBonus = 1;
let goldSkillCost = 500;
let goldSkillBonus = 1;

// Building variables
let woodFactoryCost = 1000;
let woodFactoryProduction = 5;
let stoneQuarryCost = 2000;
let stoneQuarryProduction = 5;
let ironMineCost = 5000;
let ironMineProduction = 2;
let goldMineCost = 10000;
let goldMineProduction = 1;

// Event variables
let events = [
    "A forest fire has increased wood gathering rate for 30 seconds!",
    "A rare gem discovery boosts iron gathering rate for 30 seconds!",
    "A gold rush event doubles gold gathering rate for 30 seconds!"
];
let eventDuration = 0;
let eventBonus = 1;

// Achievement variables
let milestoneReached = "None";

// Update the display of resources and rates
function updateDisplay() {
    document.getElementById('wood').innerText = Math.floor(wood);
    document.getElementById('stone').innerText = Math.floor(stone);
    document.getElementById('iron').innerText = Math.floor(iron);
    document.getElementById('gold').innerText = Math.floor(gold);
    document.getElementById('gatheringRate').innerText = Math.floor(gatheringRate);
    document.getElementById('gatheringUpgradeCost').innerText = Math.floor(gatheringUpgradeCost);
    
    document.getElementById('woodSkillCost').innerText = Math.floor(woodSkillCost);
    document.getElementById('woodSkillBonus').innerText = Math.floor(woodSkillBonus);
    
    document.getElementById('stoneSkillCost').innerText = Math.floor(stoneSkillCost);
    document.getElementById('stoneSkillBonus').innerText = Math.floor(stoneSkillBonus);
    
    document.getElementById('ironSkillCost').innerText = Math.floor(ironSkillCost);
    document.getElementById('ironSkillBonus').innerText = Math.floor(ironSkillBonus);
    
    document.getElementById('goldSkillCost').innerText = Math.floor(goldSkillCost);
    document.getElementById('goldSkillBonus').innerText = Math.floor(goldSkillBonus);
    
    document.getElementById('woodFactoryCost').innerText = Math.floor(woodFactoryCost);
    document.getElementById('woodFactoryProduction').innerText = Math.floor(woodFactoryProduction);
    
    document.getElementById('stoneQuarryCost').innerText = Math.floor(stoneQuarryCost);
    document.getElementById('stoneQuarryProduction').innerText = Math.floor(stoneQuarryProduction);
    
    document.getElementById('ironMineCost').innerText = Math.floor(ironMineCost);
    document.getElementById('ironMineProduction').innerText = Math.floor(ironMineProduction);
    
    document.getElementById('goldMineCost').innerText = Math.floor(goldMineCost);
    document.getElementById('goldMineProduction').innerText = Math.floor(goldMineProduction);
    
    document.getElementById('eventMessage').innerText = eventDuration > 0 ? `Event Active: ${events[eventBonus - 1]}` : "No events";
    
    document.getElementById('achievementMilestone').innerText = `Milestone Reached: ${milestoneReached}`;
}

// Gather resources over time
function gatherResources() {
    wood += gatheringRate * woodSkillBonus * eventBonus;
    stone += gatheringRate * stoneSkillBonus * eventBonus;
    iron += gatheringRate * ironSkillBonus * eventBonus;
    gold += gatheringRate * goldSkillBonus * eventBonus;
    updateDisplay();
}

// Upgrade gathering function
function upgradeGathering() {
    if (wood + stone + iron + gold >= gatheringUpgradeCost) {
        let totalResources = wood + stone + iron + gold;
        if (totalResources >= gatheringUpgradeCost) {
            totalResources -= gatheringUpgradeCost;
            gatheringRate += 1;
            gatheringUpgradeCost = Math.floor(gatheringUpgradeCost * 1.5); // Increase cost for the next upgrade
            wood = totalResources; // Update wood amount after spending
            updateDisplay();
            checkMilestones();
        }
    }
}

// Buy Wood Cutting Skill function
function buyWoodSkill() {
    if (wood >= woodSkillCost) {
        wood -= woodSkillCost;
        woodSkillBonus += 1;
        woodSkillCost = Math.floor(woodSkillCost * 1.5); // Increase cost for the next skill
        updateDisplay();
    }
}

// Buy Stone Mining Skill function
function buyStoneSkill() {
    if (stone >= stoneSkillCost) {
        stone -= stoneSkillCost;
        stoneSkillBonus += 1;
        stoneSkillCost = Math.floor(stoneSkillCost * 1.5); // Increase cost for the next skill
        updateDisplay();
    }
}

// Buy Iron Extraction Skill function
function buyIronSkill() {
    if (iron >= ironSkillCost) {
        iron -= ironSkillCost;
        ironSkillBonus += 1;
        ironSkillCost = Math.floor(ironSkillCost * 1.5); // Increase cost for the next skill
        updateDisplay();
    }
}

// Buy Gold Panning Skill function
function buyGoldSkill() {
    if (gold >= goldSkillCost) {
        gold -= goldSkillCost;
        goldSkillBonus += 1;
        goldSkillCost = Math.floor(goldSkillCost * 1.5); // Increase cost for the next skill
        updateDisplay();
    }
}

// Buy Wood Factory function
function buyWoodFactory() {
    if (wood >= woodFactoryCost) {
        wood -= woodFactoryCost;
        woodFactoryProduction += 5;
        woodFactoryCost = Math.floor(woodFactoryCost * 1.5); // Increase cost for the next building
        updateDisplay();
    }
}

// Buy Stone Quarry function
function buyStoneQuarry() {
    if (stone >= stoneQuarryCost) {
        stone -= stoneQuarryCost;
        stoneQuarryProduction += 5;
        stoneQuarryCost = Math.floor(stoneQuarryCost * 1.5); // Increase cost for the next building
        updateDisplay();
    }
}

// Buy Iron Mine function
function buyIronMine() {
    if (iron >= ironMineCost) {
        iron -= ironMineCost;
        ironMineProduction += 2;
        ironMineCost = Math.floor(ironMineCost * 1.5); // Increase cost for the next building
        updateDisplay();
    }
}

// Buy Gold Mine function
function buyGoldMine() {
    if (gold >= goldMineCost) {
        gold -= goldMineCost;
        goldMineProduction += 1;
        goldMineCost = Math.floor(goldMineCost * 1.5); // Increase cost for the next building
        updateDisplay();
    }
}

// Trigger random events
function triggerEvent() {
    if (Math.random() < 0.1) { // 10% chance of an event
        eventBonus = Math.floor(Math.random() * 3) + 1;
        eventDuration = 30; // Event lasts for 30 seconds
        updateDisplay();
    }
}

// Handle events
function handleEvents() {
    if (eventDuration > 0) {
        eventDuration -= 1;
        if (eventDuration <= 0) {
            eventBonus = 1;
        }
        updateDisplay();
    }
}

// Check milestones
function checkMilestones() {
    if (wood >= 1000 && stone >= 1000 && iron >= 500 && gold >= 100 && milestoneReached === "None") {
        milestoneReached = "Master Gatherer";
        updateDisplay();
    }
}

// Set up event listeners
document.getElementById('upgradeGathering').addEventListener('click', upgradeGathering);
document.getElementById('buyWoodSkill').addEventListener('click', buyWoodSkill);
document.getElementById('buyStoneSkill').addEventListener('click', buyStoneSkill);
document.getElementById('buyIronSkill').addEventListener('click', buyIronSkill);
document.getElementById('buyGoldSkill').addEventListener('click', buyGoldSkill);
document.getElementById('buyWoodFactory').addEventListener('click', buyWoodFactory);
document.getElementById('buyStoneQuarry').addEventListener('click', buyStoneQuarry);
document.getElementById('buyIronMine').addEventListener('click', buyIronMine);
document.getElementById('buyGoldMine').addEventListener('click', buyGoldMine);

// Set up the interval to gather resources every second
setInterval(() => {
    gatherResources();
    handleEvents();
    triggerEvent();
}, 1000);
