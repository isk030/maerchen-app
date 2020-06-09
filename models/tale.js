import mongoose from 'mongoose';


/**
 * Initial Schema for mongoose user model
 */
const taleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:  {type: String,
            required: true,
            unique: true},

    author: {type: String,
            required: true},

    content:    {type: String,
                required: true},

    url:    {type: String,
            required: true}
});

// class Tale{
//     constructor(title, author, content, url) {
//         this.title;
//         this.author;
//         this.content;
//         this.url;
//     }
// }

export default mongoose.model('Tales', taleSchema)