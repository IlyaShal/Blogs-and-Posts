"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPostController = void 0;
const db_1 = require("../../../db/db");
const findPostController = (req, res) => {
    const postId = req.params.id;
    const posts = db_1.db.posts.find(posts => posts.id.toString() === postId);
    if (!posts) {
        return res
            .status(404)
            .json({ error: 'Post not found' });
    }
    else {
        return res.status(200).send(posts);
    }
};
exports.findPostController = findPostController;
