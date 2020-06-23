/**
 * Tale controller for delivering all tales to client
 * @module API/Controller/tales
 **/

/* eslint-disable no-unused-vars */

import Tale from '../../models/tale';

const tales_get_all = (_req, res, _next) => {
	Tale.find()
		.select('title author _id url content')
		.exec()
		.then(docs => {
			res.status(200).json({
				count: docs.length,
				tales: docs.map(doc => {
					return {
						_id: doc._id,
						title: doc.title,
						author: doc.author,
						content: doc.content,
						url: doc.url
					};
				})
			});
		}).catch(err => {
			res.status(500).json({
				error: err
			});
		});
};

export default {tales_get_all};