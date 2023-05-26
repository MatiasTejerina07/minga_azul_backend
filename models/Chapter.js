import { Schema, Types, model } from "mongoose";

let schema = new Schema({
    manga_id: {
        type: Types.ObjectId,
        ref: 'mangas',
        required: true,
    },
    title: { type: String, required: true },
    cover_photo: { type: String, required: true },
    pages: [{ type: String, required: true }],
    order: { type: Number, required: true },
    reactions: {
        likes: { type: Number, default: 0 },
        dislikes: { type: Number, default: 0 },
        hearts: { type: Number, default: 0 },
    },
}, {
    timestamps: true,
})
let collection = 'chapters'
let Chapter = model(collection, schema)
export default Chapter