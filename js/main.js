/*anthony's js file*/

var inputPanel = document.querySelector("#inputPanel");
        var outputPanel = document.querySelector("#outputPanel");
        var warning = document.querySelector("#warning");

        var finished = document.querySelector("#finished");
        finished.style.cursor = "pointer";

        finished.addEventListener("click", writeStory, false);

        var startOver = document.querySelector("#startOver");
        startOver.addEventListener("click", resetPage, false);
        startOver.style.cursor = "pointer";


        document.querySelector("#personThing").focus();

        var personThing = document.querySelector("#personThing");
        var eventActivity = document.querySelector("#eventActivity");
        var placeBuilding = document.querySelector("#placeBuilding");
        var color = document.querySelector("#color");
        var vehicleAnimal = document.querySelector("#vehicleAnimal");
        var eatDrink = document.querySelector("#eatDrink");
        var foodBevItem = document.querySelector("#foodBevItem");
        var adjective = document.querySelector("#adjective");
        var vehicleAnimalTwo = document.querySelector("#vehicleAnimalTwo");
        var sound = document.querySelector("#sound");

        var theStory = document.querySelector("#theStory");

        window.addEventListener("keydown", keydownHandler, false);

        personThing.focus();

        //set the initial display of panels.
        inputPanel.className = "displayBlock";
        outputPanel.className = "displayNone";
        warning.className = "displayNone";

        function keydownHandler(event) {
            if (event.keyCode === 13) {
                console.log("Enter key pressed");
                writeStory();
            }        
        }

        function checkComplete() {
            //verify the user filled in the form
            //calling this function returns either boolean
            //if the validation is complete we get TRUE
            //otherwise it returns a FALSE value

            //alerts are the easy way
            if (personThing.value == ""){
            	alert("Person or Thing?");
            	return false;
            }else if (eventActivity.value == ""){
            	alert("Event or Activity?");
            	return false;
            }else if (placeBuilding.value == ""){
            	alert("Place or Building?");
            	return false;
            }else if (color.value == ""){
            	alert("Color?");
            	return false;
            }else if (vehicleAnimal.value == ""){
            	alert("Vehicle or Animal?");
            	return false;
            }else if (eatDrink.value == ""){
            	alert("Eat or Drink?");
            	return false;
            }else if (foodBevItem.value == ""){
            	alert("Food, Beverage or Small Item?");
            	return false;
            }else if (adjective.value == ""){
            	alert("Adjective?");
            	return false;
            }else if (vehicleAnimalTwo.value == ""){
            	alert("Vehicle or Animal?");
            	return false;
            }else if (sound.value == ""){
            	alert("Sound or Noise?");
            	return false;
            }else {
            	return true;
            }


            //we could just toggle the warning paragraph
            //or you could provide the details to the user
            //as to which inputs were missing

            // var warningText = "Please enter a: ";
            // var warningArray = [];
            // if (personThing.value == ""){
            //      warningArray.push("Person or Thing");
            // }
            // if (eventActivity.value == ""){
            //     warningArray.push("Public Event or Activity");
            // }
            // if (placeBuilding.value == ""){
            //     warningArray.push("Place or Building");
            // }
            // if (warningArray.length !== 0){
            //     //join prints out the array with the specified delimiter
            //     warningText += warningArray.join(", ");
            //     warning.innerHTML = warningText;
            //     return false;
            // }else {
            //     return true;
            // }

        }

        function writeStory() {
            //verify the form before writing the story
            if (checkComplete() == true){//remember checkComplete is the form validation
                //grab the input values to write the story
                //setting finishedStory to an empty string will guarantee
                //it shows up empty each time the user enters a story
                var finishedStory = "";
                finishedStory += "<p>This morning, I was woken by " + personThing.value + ", ";
                finishedStory += "and it's time to get ready for " + eventActivity.value +". ";
                finishedStory += "I leave the " + placeBuilding.value + " (where I sleep) in a matter of minutes. ";
                finishedStory += "I'm in a hurry and figure the fastest way to get there is by a " + color.value + "";
                finishedStory += " " + vehicleAnimal.value + ". ";
                finishedStory += "I don't want to miss breakfast and I'm starving, so I " + eatDrink.value + " ";
                finishedStory += "a " + foodBevItem.value + " on the way. </p>";
                finishedStory += "<p>Wow, that didn't take long at all to get here! ";
                finishedStory += "I'm so proud my " + adjective.value + " ";
                finishedStory += " " + vehicleAnimalTwo.value + " was reliable this morning. ";
                finishedStory += "I walked through the entrance, ";
                finishedStory += "only to hear a " + sound.value + ". ";
                finishedStory += "It's my alarm clock. Apparently, it was all just a dream. </p>";
                //do not add too many items in a single line or the code likes to break
                theStory.innerHTML = finishedStory;

                inputPanel.className = "displayNone";
                outputPanel.className = "displayBlock";
                warning.className = "displayNone";

            }else {
                console.log("the form was not complete");
                warning.className = "displayBlock";
            }


       }

        function resetPage() {
            //put stuff here to reset the page so the user can try again

            inputPanel.className = "displayBlock";
            outputPanel.className = "displayNone";
            warning.className = "displayNone";
            personThing.value = "";
            eventActivity.value = "";
            placeBuilding.value = "";
            color.value = "";
            vehicleAnimal.value = "";
            eatDrink.value = "";
            foodBevItem.value = "";
            adjective.value = "";
            vehicleAnimalTwo.value = "";
            sound.value = "";

            personThing.focus();


        }