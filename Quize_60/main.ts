// Question 60: 
// Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.


// This profile sets itself up and can share info about the user
let userProfile = (function() {
    // The user's details are kept inside
    let name = "Muneeba";
    let number = +387897;

    // This part shares the user's details
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, number: ${number}`);
        }
    };
})();

 
userProfile.displayInfo(); // It says the user's name and number
 
