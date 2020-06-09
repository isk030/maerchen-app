import mongoose from 'mongoose';


/**
 * Initial Schema for mongoose user model
 */
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {type: String,
            required: true,
            unique: true,
            match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    password: {type: String, required: true},
    favs: {type: mongoose.Schema.Types.ObjectId, ref: 'Tale'}
});


export default mongoose.model('User', userSchema)



