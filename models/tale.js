/**
 * Mongoose scheme for tales
 * @module Models/tale
 */
import mongoose from 'mongoose';

/**
 * Initial Schema for mongoose tale model
 */
const taleSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title:  {type: String,
		required: true,
		unique: true},

	author: {type: String,
		required: true},

	content:{type: String,
		required: true},

	url:    {type: String,
		required: true}
});

export default mongoose.model('Tales', taleSchema);