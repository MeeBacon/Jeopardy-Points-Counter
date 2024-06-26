//initializes playerCount and the list of players
var playerCount = 0;
var players = [];

function createPlayer() {

    //gets the name of the player
    var name = document.getElementById("nameInput").value;

    //if there is no player name then it defaults to "Player number"
    if(name == "") {
        name = "Player " + (playerCount + 1);
    }

    //adds the player to the list
    players.push({playerName: name, points: 0,});

    //creates the h3 and p tags
    var heading = createNewElement("h3", "playerName");
    heading.innerHTML = name;
    var pointsHTML = createNewElement("p", "points", ("points" + playerCount));
    pointsHTML.innerHTML = 0;

    //creates the label and number input
    var numberInputLabel = createNewElement("label", "", "", "", ("pointValue" + playerCount));
    numberInputLabel.innerHTML = "Point Value:";
    var numberInput = createNewElement("input", "pointValue", ("pointValue" + playerCount), "text");

    //creates the form and adds the label and number input
    var numberInputForm = document.createElement("form");
    numberInputForm.append(numberInputLabel, numberInput);

    //creates the add and subtract buttons
    var addButton = document.createElement("button");
    addButton.setAttribute("onclick", "changePoints(" + playerCount + ", 1)");
    addButton.innerHTML = "Add Points";
    var subtractButton = document.createElement("button");
    subtractButton.setAttribute("onclick", "changePoints(" + playerCount + ", -1)");
    subtractButton.innerHTML = "Subtract Points";

    var addSubtract = createNewElement("div", "addRemovePoints");
    addSubtract.append(subtractButton, addButton);
    
    //creates the player div and adds the heading, points, number input, and the add and subtract buttons
    var playerDiv = createNewElement("div", "player");
    playerDiv.append(heading, pointsHTML, numberInputForm, addSubtract);

    document.getElementById("playerList").append(playerDiv);

    document.getElementById("nameInput").value = "";

    playerCount += 1;

}

function createNewElement(element, elementClass="", elementID="", elementType="", elementFor="") {

    var newElement = document.createElement(element);

    //sets different attributes of the element based on the input
    newElement.setAttribute("class", elementClass);
    newElement.setAttribute("id", elementID);
    newElement.setAttribute("type", elementType);
    newElement.setAttribute("for", elementFor);

    return newElement;

}

function changePoints(player, multiplier) {

    //gets the point value of player
    var points = document.getElementById("pointValue" + player).value;

    //gets the player's point count from the list "players"
    var pointCounter = players[player].points;

    //
    players[player].points = parseInt(pointCounter) + (parseInt(points) * multiplier);
    document.getElementById("points" + player).innerHTML = players[player].points;

    document.getElementById("pointValue" + player).value = "";

}
