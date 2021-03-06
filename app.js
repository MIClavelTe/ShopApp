var db = db.getSiblingDB('mongoTests');

db.dropDatabase();

var names = ['Jonathan', 'Andrew', 'Mathew', 'Sara', 'Elia', 'Anna']
var usersRaw = [];

for (var i = 0; i < names.length; i++) {
    var user = {
        name: names[i],
        email: names[i].toLowerCase() + '@gmail.com',
        signupDate: new Date()
    };
    usersRaw.push(user);
}

db.users.insert(usersRaw);
var authors = db.users.find().toArray();

var titles = ['School Supplies', 'House Decor', 'Clothing', 'Party Supplies'];
var description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
var thingsToBuy = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
\
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
\
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
\
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

var orderRaw = [];

for(var i = 0; i < titles.length; i++) {
    var order = {
        title: titles[i],
        description: description,
        order: thingsToBuy,
        author: authors[Math.floor(Math.random() * authors.length)].name
    }
    orderRaw.push(order);
}

db.orders.insert(orderRaw);