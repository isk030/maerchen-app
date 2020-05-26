import axios from 'axios';
import mongoose from 'mongoose';
import User from './models/user';
import Tale from './models/tale';

mongoose.connect('mongodb+srv://isk030:' + process.env.MONGO_ATLAS_PW + '@cluster0-xfnrc.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });



var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Database connected");
});

const user = new User({
    _id: new mongoose.Types.ObjectId(),
    email: "europa@gmail.com",
    password: "Hash"
});

const tale = new Tale({
    _id: new mongoose.Types.ObjectId(),
    title: "Schneewittchen",
    author: "Grimm Brüder",
    content: "Es war einmal irgendwas...",
    url: "www.geil.de"
});

console.log(JSON.stringify(user));
console.log(JSON.stringify(tale));

