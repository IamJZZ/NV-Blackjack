const fs = require('fs');

/* Creates a new profile and saves the name and password of the user. */
function createP(name,password){
    if (!fs.existsSync('./profiles')){
        fs.mkdirSync('./profiles');
    }
    if (fs.existsSync('./profiles/' + name + '.json')){
        createBal(name);
        return 1; //Profile already exists
    }
    const newProfile = {
        "password": password**
    };
    const jsonString = JSON.stringify(newProfile);

    fs.writeFile('./profiles/' + name + '.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        }
    });
    createBal(name);
    return 0; //Success
}

/* Creates a new balance for user name. */
function createBal(name){
    if (!fs.existsSync('./balances')){
        fs.mkdirSync('./balances');
    }
    if (fs.existsSync('./balances/' + name + '.json')){
        return 1; //Profile already exists
    }
    const newBalance = {
        "balance": 50
    };
    const jsonString = JSON.stringify(newBalance);

    fs.writeFile('./balances/' + name + '.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        }
    });
    return 0; //Success
}

//Creates a new file for follow data for the user
function createFollow(name){
    if (!fs.existsSync('./followData')){
        fs.mkdirSync('./followData');
    }
    if (fs.existsSync('./followData/' + name + '.json')){
        return 1; //Profile already exists
    }
    const newFollow = {
        "following": [],
        "followers": []
    };
    const jsonString = JSON.stringify(newFollow);

    fs.writeFile('./followData/' + name + '.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err);
        }
    });
    return 0; //Success
}

module.exports = {createP, createBal, createFollow}
