import Reactions from "../../models/Reaction.js";
import Chapter from "../../models/Chapter.js";

const reaction = async (req, res, next) => {
    const { _id, title } = req.body;
    const userId = req.user._id;

    try {
        const existingReaction = await Reactions.findOne({ user: userId, manga_id: _id });
        if (existingReaction) {
            existingReaction.title = title;
            await existingReaction.save();
        } else {
            const newReaction = new Reactions({ user: userId, manga_id: _id, title });
            await newReaction.save();
        }

        const chapter = await Chapter.findById(_id);
        if (chapter) {
            if (title === 'like') {
                chapter.reactions.likes += 1;
            } else if (title === 'dislike') {
                chapter.reactions.dislikes += 1;
            }
            await chapter.save();
        }
        res.status(201).json({
            message: 'ok'
        });
    } catch (error) {
        res.status(500).json({
            error: 'error'
        });
    }
};

export default reaction;
