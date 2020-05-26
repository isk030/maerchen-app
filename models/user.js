import mongoose from 'mongoose';


/**
 * Initial Schema for mongoose user model
 */
const userSchema = mongoose.Schema({
    email: {type: String,
            required: true,
            unique: true,
            match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    password: {type: String, required: true}
});

class User{
    constructor(email, password) {
        this.email;
        this.password;
    }
}

export default mongoose.model('User', userSchema)



