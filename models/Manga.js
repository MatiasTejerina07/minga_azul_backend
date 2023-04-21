import mongoose from "mongoose";

let schema = new mongoose.Schema({
  author_id: {
    type: mongoose.Types.ObjectId,
    ref: "authors",
    requiered: true,
  },
  company_id: { type: mongoose.Types.ObjectId, ref: "companies" },
  title: { type: String, requiered: true },
  cover_photo: { type: String, requiered: true },
  description: { type: String, requiered: true },
  category_id: { type: mongoose.Types.ObjectId, ref: "categories" }},
  {timestamp: true}
  
);

let collection = "mangas";

let Manga = mongoose.model(collection,schema);
export default Manga;