import mongoose from "mongoose";

const { Schema, Types, model } = mongoose;

const schema = new Schema({
    user: {
        type: Types.ObjectId,
        ref: 'users',
        required: true,
    },
    manga_id: {
        type: Types.ObjectId,
        ref: 'chapters',
        required: true,
    },
    like: {
        type: Boolean,
        default: false,
    },
});

const collection = 'reactions';
const Reactions = model(collection, schema);

export default Reactions;