const express = require("express");
const app = express();
const Cognito = require('./cognito/index');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/',(req,res) => {
    res.send("hello world12345")
});

app.post('/signup', async function Signup(req,res) {
    const response = await Cognito.signUp(req.body.email,req.body.password);
    res.send(response);
})

app.post('/verify', async function Verify(req,res) {
    const response = await Cognito.verify(req.body.email,req.body.code);
    res.send(response);
})

app.post('/signin', async function SignIn(req,res) {
    const response = await Cognito.signIn(req.body.email,req.body.password);
    res.send(response);
})


app.listen(3000, console.log("server running at 3000"));
