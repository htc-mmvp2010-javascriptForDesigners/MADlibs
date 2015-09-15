
        var inputPanel = document.querySelector("#inputPanel");
        var outputPanel = document.querySelector("#outputPanel");
        var warning = document.querySelector("#warning");

        var submit = document.querySelector("#submit");
        submit.addEventListener("click", writeStory, false);

        var again = document.querySelector("#again");
        again.addEventListener("click", resetPage, false);

        var someonesName = document.querySelector("#someonesName");
        var yourName = document.querySelector('#yourName');
        var bodyPart = document.querySelector("#bodyPart");
        var adjectiveOne = document.querySelector('#adjectiveOne');
        var reasonableHour = document.querySelector ('#reasonableHour');
        var verb = document.querySelector('#verb');
        var noun = document.querySelector('#noun');
        var place = document.querySelector('#place');
        var adjectiveTwo = document.querySelector('#adjectiveTwo');
        var weekDay = document.querySelector('#weekDay');

        window.addEventListener("keydown", keydownHandler, false);

        function keydownHandler(event) {
                console.log("Enter key pressed");

        }


       function checkComplete() {
            //verify the user filled in the form
            //calling this function returns either boolean
            //if the validation is complete we get TRUE
            //otherwise it returns a FALSE value
            
            //alerts are the easy way
           
        }

        function writeStory() {
            //grab the input values to write the story
            console.log("submit button works");
            theStory.innerHTML="Hello, " + someonesName.value + " this is " + yourName.value + " I think I have a touch of that " + bodyPart.value + " bug that's been going around and I'm " + adjectiveOne.value + ". I won't be able to come in. I'll try to make it in by " + reasonableHour.value + ", but if not, I'll " + verb.value + " and get " + noun.value + " done at " + place.value + ". " + " Here's hoping I'll be " + adjectiveTwo.value + " enough to come in " + weekDay.value + ".";

        inputPanel.className = "displayNone";
        outputPanel.className = "displayBlock";

        }else {
                //warning.className = "displayBlock";
                alert("Answer all the questions or you're off to the forbidden forest!");

            }
       }


        function resetPage() {
            //put stuff here to reset the page so the user can try again
              
            inputPanel.className = "displayBlock";
            outputPanel.className = "displayNone";
            firstName.value = "";
            favColor.value = "";
            place.value = ""; 
        }
