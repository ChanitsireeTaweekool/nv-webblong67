let user =[
{
    "name" : "Chanitsiree",
    "lastname" : "Taweekool",
    "email" : "chanitsireet65@nu.ac.th",
    "from" : "Thailand"
},
{
    "name" : "Praeploy",
    "lastname" : "Phetpong",
    "email" : "praeployp65@nu.ac.th",
    "from" : "India"
}
]
let userA ={
    "name" : "Bunthita",
    "lastname" : "Krungtaho",
    "email" : "bunthitak65@nu.ac.th",
    "from" : "LA"
}

let userB ={
    "name" : "Thitima",
    "lastname" : "Mhukkhuntod",
    "email" : "Thitimam65@nu.ac.th",
    "from" : "Japan"
}

user.push(userA);
user.push(userB);

for (let i = 0; i < user.length; i++) {
    console.log('Name: ' + user[i].name + ' ' + user[i].lastname)
}
delete user.splice(0,2)

console.log('\n*** After Delete\n');

for (let i = 0; i < user.length; i++) {
    console.log('Name: ' + user[i].name + ' ' + user[i].lastname)
}