import Tale from '../../models/tale'
import mongoose from 'mongoose'

const tales_get_all = (req, res, next) => {
    Tale.find()
    .select('title author _id url')
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
                    }
                })
            });
        }).catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

export default {tales_get_all};