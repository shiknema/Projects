const express = require ('express')
const app = express();
const PORT = 5555;

const USERS =[
{
    id : 1,
    firstName : "Arnav",
    lastName : "Gupta"
},
{
    id : 2,
    firstName : "Ananya",
    lastName : "Gupta"
}
];

app.listen(PORT, () =>{
    console.log(`Server running on port  ${PORT}`);
});

app.get('/', (req , res) =>{
    res.json(USERS);
});

app.get('/:userId', (req , res) =>{
    res.json(USERS.find(user =>user.id === parseInt(req.params.userId)));
});

module.exports = {
    app  //start point for deployment
};


