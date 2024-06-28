"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delPostController = void 0;
const db_1 = require("../../../db/db");
const delPostController = (req, res) => {
    const postId = req.params.id;
    const postIndex = db_1.db.posts.findIndex(posts => posts.id.toString() === postId.toString());
    // if(!){
    //     return res.status(401).json({error: 'Unauthorized'})
    // }
    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    else {
        db_1.db.posts.splice(postIndex, 1);
        return res
            .sendStatus(204);
    }
};
exports.delPostController = delPostController;
