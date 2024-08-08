// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
var currentUser = ["ali", "madad", "arif", "fayaz", "akber", "umar", "yasir", "hanif"];
var newUser = ["akber", "hadi", "obaid", "ali", "hamza", "umar", "Hanif"];
newUser.forEach(function (newUser) {
    var new_usersLower = newUser.toLowerCase();
    var userNameTaken = currentUser.some(function (currentUser) { return currentUser.
        toLowerCase() === new_usersLower; });
    if (userNameTaken) {
        console.log("".concat(newUser, " need to choose a new userName because it's already taken"));
    }
    else {
        console.log("".concat(newUser, " is the new member added"));
        currentUser.push(newUser);
    }
});
console.log(currentUser);
