import axios from 'axios';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://isk030:iskender123@cluster0-xfnrc.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected");
});

