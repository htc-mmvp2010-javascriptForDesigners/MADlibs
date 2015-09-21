        var inputPanel = document.querySelector("#inputPanel");
        var outputPanel = document.querySelector("#outputPanel");
        var warning = document.querySelector("#warning");

        var submit = document.querySelector("#submit");
        submit.addEventListener("click", writeStory, false);

        var again = document.querySelector("#again");
        again.addEventListener("click", resetPage, false);

        document.querySelector('#gender').focus();

        var gender = document.querySelector('#gender');
        var firstName = document.querySelector('#firstName');
        var schoolObject1 = document.querySelector('#schoolObject1');
        var schoolObject2 = document.querySelector('#schoolObject2');
        var color = document.querySelector('#color');
        var animal1 = document.querySelector('#animal1');
        var petName = document.querySelector('#petName');
        var animal2 = document.querySelector('#animal2');
        var flavor1 = document.querySelector('#flavor1');
        var flavor2 = document.querySelector('#flavor2');
        var house = document.querySelector('#house');
        var animal3 = document.querySelector('#animal3');
        var object = document.querySelector('#object');
        var classSubject = document.querySelector('#classSubject');

        var storyState = "start";

        var theStory = document.querySelector("#theStory");

        window.addEventListener("keydown", keydownHandler, false);

        //set the initial display of panels.
        inputPanel.className = "displayBlock";
        outputPanel.className = "displayNone";
        warning.className = "displayNone";

        function keydownHandler(event) {
            if (event.keyCode === 13) {
                console.log("Enter key pressed");
                if (storyState == "start") {
                    writeStory();
                } else if (storyState == "finished") {
                    resetPage();
                }
            }
        }

        function checkComplete() {
            //verify the user filled in the form
            if (gender.value == "") {
                return false;
            } else if (firstName.value == "") {
                return false;
            } else if (schoolObject1.value == "") {
                return false;
            } else if (schoolObject2.value == "") {
                return false;
            } else if (color.value == "") {
                return false;
            } else if (animal1.value == "") {
                return false;
            } else if (petName.value == "") {
                return false;
            } else if (animal2.value == "") {
                return false;
            } else if (flavor1.value == "") {
                return false;
            } else if (flavor2.value == "") {
                return false;
            } else if (house.value == "") {
                return false;
            } else if (animal3.value == "") {
                return false;
            } else if (object.value == "") {
                return false;
            } else if (classSubject.value == "") {
                return false;
            } else {
                return true;
            }
        }

        function writeStory() {
            //grab the input values to write the story
            // var output = document.querySelector("#output");
            // output.innerHTML = "Hello World!";
            if (checkComplete() == true) {

                var finishedStory = "";
                finishedStory += "<p>Once there was a young " + gender.value;
                finishedStory += " named " + firstName.value + ". ";
                finishedStory += firstName.value + " was a wizard! One day, an owl came with a letter for ";
                finishedStory += firstName.value + ". It said, ‘Please come to Hogwarts and learn magic. You will need ";
                finishedStory += schoolObject1.value + " and ";
                finishedStory += schoolObject2.value + ", and you may bring one pet. Your ticket for the Hogwarts Express is enclosed.'</p>";
                finishedStory += "<p>" + firstName.value + " went to Diagon Alley and brought a ";
                finishedStory += color.value;
                finishedStory += " " + animal1.value;
                finishedStory += " and named it " + petName.value + ". Then it was time to go to Hogwarts. On the Howarts Express, ";
                finishedStory += firstName.value + " got some wizard candy. There were chocolate ";
                finishedStory += animal2.value + "s" + " and ";
                finishedStory += flavor1.value + " pastries, and even Bertie Bott’s every flavor beans! The flavor ";
                finishedStory += firstName.value + " got was ";
                finishedStory += flavor2.value + ". Yum!</p> <p>At Hogwarts, the Sorting Hat put ";
                finishedStory += firstName.value + " in ";
                finishedStory += house.value + ". Then it was time to learn some magic! The teachers taught everyone how to turn ";
                finishedStory += animal3.value + "s into ";
                finishedStory += object.value + "s, make things float in the air, and take care of magical animals. ";
                finishedStory += firstName.value + "’s favorite class was ";
                finishedStory += classSubject.value + ". ";
                finishedStory += firstName.value + " and ";
                finishedStory += petName.value + " love being at Hogwarts!</p>";

                theStory.innerHTML = finishedStory;

                inputPanel.className = "displayNone";
                outputPanel.className = "displayBlock";

                storyState = "finished";

            } else {
                //warning.className = "displayBlock";
                alert("Answer all the questions or you're off to the forbidden forest!");

            }

        }

        function resetPage() {
            //put stuff here to reset the page so the user can try again

            inputPanel.className = "displayBlock";
            outputPanel.className = "displayNone";

            document.querySelector('#gender').focus();

            storyState = "start";

            gender.value = "";
            firstName.value = "";
            schoolObject1.value = "";
            schoolObject2.value = "";
            color.value = "";
            animal1.value = "";
            petName.value = "";
            animal2.value = "";
            flavor1.value = "";
            flavor2.value = "";
            house.value = "";
            animal3.value = "";
            object.value = "";
            classSubject.value = "";
        }
