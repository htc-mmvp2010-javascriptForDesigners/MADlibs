
        var inputPanel = document.querySelector("#inputPanel");
        var outputPanel = document.querySelector("#outputPanel");
        var warning = document.querySelector("#warning");
   inputPanel.className = "displayBlock";
        outputPanel.className = "displayNone";

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
            var msg = "Hello, " + someonesName.value;
            msg += " this is " + yourName.value;
            msg += " I think I have a touch of that " + bodyPart.value;
            msg += " bug that's been going around and I'm " + adjectiveOne.value;
            msg += ". I won't be able to come in. I'll try to make it in by " + reasonableHour.value;
            msg += ", but if not, I'll " + verb.value;
            msg += " and get " + noun.value;
            msg += " done at " + place.value + ". ";
            msg += " Here's hoping I'll be " + adjectiveTwo.value;
            msg += " enough to come in " + weekDay.value + ".";

theStory.innerHTML=msg;

           inputPanel.className = "displayNone";
        outputPanel.className = "displayBlock";

        }
       


        function resetPage() {
            //put stuff here to reset the page so the user can try again
              
            inputPanel.className = "displayBlock";
            outputPanel.className = "displayNone";
            someonesName.value = "";
         yourName.value = "";
         bodyPart.value = ""; 
            adjectiveOne.value = ""; 
            reasonableHour.value = ""; 
            verb.value = ""; 
            noun.value = ""; 
            place.value = ""; 
            adjectiveTwo.value = ""; 
            weekDay.value = ""; 
        }
