console.log("testing TOTK recipe server....")

// Your Dev Lead has heard good things about your JS fundamentals skills, so they are going to see what you know about functions. You're gonna be making a recipe interface for Legend of Zelda: Tears of the Kingdom, which may go out to be produced in the next installment to come... and we're gonna use functions do that work for us. 

//As you do the demo...
/*

Use variables to store different data types as much as possible to keep the codebase clean is the company policy.

Remember that function steps are to:
1. Define all variables that you need to first.
2. A reminder you remember from your last job was to use those "skeletons" from your previous manager. 
3. Use debugging to catch errors early, or if you are unsure/psuedocoding.
4. Call the function so it can do its job!

*/


//A Test Function

let countdown = 5; //assume a five second countdown

//Make a function that reduces that number to 0 and the log should be 0.

function changeToZero() { 
    countdown = Math.abs(countdown - 5);
    console.log(countdown);
}


//Don't forget to call the function. You may want to use a console.warn/error as much as needed for different test cases.
changeToZero();
//----------
//New Ticket: use a function declaration with an identifier called linkSounds and within the function body, print this "Testing audio...." (which should be stored in a separate variable). Then an audio clip will play from the Senior developer's code.

let string = "Testing audio....";

function linkSounds() {
    console.log(string);

    //Senior Dev code from documentation: https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
    let cookingHum1 = "./public/assets/PV603_00.wav"
    //let cookingHum2 = "./public/assets/PV603_08.wav"
    let beat1 = new Audio(cookingHum1);
    //let beat2 = new Audio(cookingHum2);
    //beat1.play();
    //beat2.play();
}

//call the function
linkSounds();
//----------------------------
//Alrighty, we've set up our playground to test some recipes from TOTK and compile the code to make sets of recipes run! We will take inputs as parameters, so bear that in mind. Use the return keyword wherever needed.

//Recipe Functions that have the same items 1-2 times
 //prompt the user for information...
 function simpleItems(params) {
    let ingredient1 = "meat" //item in strings from the prompt
    let ingredient2 = "meat"

    let compare = ingredient1 === ingredient2
    
    let skewer = `A simple, juicy ${compare} snack made by cooking chunks of ${compare} on a skewer`

    let basic = "You get two hearts"

    if (compare) {
        //console.warn(basic)
        //confirm(skewer)
    } else {
        console.error("Testing error...")
    }
}

simpleItems()

//New Ticket: refactor the above code so it is an arrow function as simpleItemsRefactored with a return value and 2 parameters. (Hint: the only things that should be inside of the function are the notification about how many hearts the recipe brings and the confirmation about the recipe that prints out)

let ingredient1 = "meat"; //item in strings from the prompt
let ingredient2 = "meat";
let compare = ingredient1 === ingredient2;
let basic = "You get two hearts";
let skewer = `A simple, juicy ${compare} snack made by cooking chunks of ${compare} on a skewer`;

const simpleItemsRefactored = (ingredient1, ingredient2) => {
    console.warn(basic)
    confirm(skewer)
};

simpleItemsRefactored();

//------------------------
//We also want to test the elixir making system for the game as well so we want to test monster parts too. 

//The Dev Lead says while this makeshift function works sometimes, they wonder if you can optimize this better. Split the function so it does one job at a time. A second function's name should be referenced as elixirExtension. 

//Here is the code for the original function:
/*

function elixirSystem() {
    let firefly = "Deep Firefly, ";
    let normalChu = "Regular ChuChu Jelly"
    let brightElixirRecipe = firefly.repeat(4) + "+ " + normalChu; //use the repeat method to expedite the adding process before the sole ingredient 

    let slippyFrog = "Slippery Frog, ";
    let boboklinHorn = "Boboklin Horn";
    let stickyElixirRecipe = slippyFrog.repeat(4) + "+ " + boboklinHorn;  //use the repeat method to expedite the adding process before the sole ingredient 

    //Recipe template
    let number224 = `${stickyElixirRecipe}: Grants a high-level slip resistance to keep you from slipping on wet surfaces. Its absorptive ingredients make it a must-have for sudden rainfalls.`;
    let number225 = `${brightElixirRecipe}: Grants a high-level glow effect, illuminating your immediate surroundings. This faint luminescence is a boon in dark places.`;

    //trigger a statement 
    if (brightElixirRecipe) {
        //console.log(number225)
    } else if (stickyElixirRecipe) {
        //console.log(number224)
    }
}

elixirSystem();

*/

//Answer:

function elixirSystem() {
    let firefly = "Deep Firefly, ";
    let normalChu = "Regular ChuChu Jelly"
    let brightElixirRecipe = firefly.repeat(4) + "+ " + normalChu; //use the repeat method to expedite the adding process before the sole ingredient 

    let number225 = `${brightElixirRecipe}: Grants a high-level glow effect, illuminating your immediate surroundings. This faint luminescence is a boon in dark places.`;

    //trigger a statement 
    if (brightElixirRecipe) {
        console.log(number225)
    } 
}

elixirSystem();


function elixirExtension() {
    let slippyFrog = "Slippery Frog, ";
    let boboklinHorn = "Boboklin Horn";
    let stickyElixirRecipe = slippyFrog.repeat(4) + "+ " + boboklinHorn;  //use the repeat method to expedite the adding process before the sole ingredient 

    //Recipe template
    let number224 = `${stickyElixirRecipe}: Grants a high-level slip resistance to keep you from slipping on wet surfaces. Its absorptive ingredients make it a must-have for sudden rainfalls.`;

    if (stickyElixirRecipe) {
        console.log(number224)
    }
}

elixirExtension();

//----------------------------
//BONUS

let intermediate = "You get eight hearts"
let adv = "You get ten hearts"
let expert = "You get eighteen hearts"

//Next, we want to make a function that takes in different sets of ingredients and match them to our company database entry. If there's a match, return the right number of hearts and the confirmation (as two parameters) that should say a message like: "Copious Seafood Skewers: It's just ${the-entry-to-compare} shoved onto a skewer, but it's still cosmically delicious". Use a function declaration. The recipe produces 10 hearts.

function complexItems(params) {
    let conch = "sneaky river snail";
    let blueCrab = "razorclaw crab";
    let redCrab = "ironshell crab";
    let silverCrab = "bright-eyed crab";
    let databaseEntry = conch + ", " + blueCrab + ", " + redCrab + ", " + silverCrab;
    console.warn(databaseEntry)

    //Senior Dev Note: make sure you compare the entries at this stage. How can we use string and/or debugging methods here to make this happen?
    let check = conch.concat(", ", blueCrab, ", ", redCrab, ", ", silverCrab)
    console.warn(check)

    //make sure to compile a message to print as the confirmation
    let message  = `Copious Seafood Skewers: It's just ${check} shoved onto a skewer, but it's still cosmically delicious`
    
    //console.log both parameters- the results you are looking for
    console.log(adv, message)
    //Add the return statement last 
    return adv, message
    

}

complexItems();


//New Ticket: refactor the above code so it can accept the variable parameters' string and still give us the same output

const complexItemsRefactored = (conch, blueCrab, redCrab, silverCrab) => {
    let databaseEntry = conch + ", " + blueCrab + ", " + redCrab + ", " + silverCrab;
    let message  = `Copious Seafood Skewers: It's just ${databaseEntry} shoved onto a skewer, but it's still cosmically delicious`
    return message
}

//insert the parameters to check
complexItemsRefactored("sneaky river snail", "razorclaw crab", "ironshell crab", "bright-eyed crab")

//print the result
console.log(complexItemsRefactored("sneaky river snail", "razorclaw crab", "ironshell crab", "bright-eyed crab"))



