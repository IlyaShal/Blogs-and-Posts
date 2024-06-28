"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delBlogController = void 0;
const db_1 = require("../../../db/db");
const delBlogController = (req, res) => {
    const blogId = req.params.id;
    const blogIndex = db_1.db.blogs.findIndex(blogs => blogs.id.toString() === blogId.toString());
    if (blogIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }
    else {
        db_1.db.blogs.splice(blogIndex, 1);
        return res
            .sendStatus(204);
    }
};
exports.delBlogController = delBlogController;
