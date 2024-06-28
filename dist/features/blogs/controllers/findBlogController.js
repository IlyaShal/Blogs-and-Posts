"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findBlogController = void 0;
const db_1 = require("../../../db/db");
const findBlogController = (req, res) => {
    const blogId = req.params.id;
    const blogs = db_1.db.blogs.find(blogs => blogs.id.toString() === blogId);
    if (!blogs) {
        return res
            .status(404)
            .json({ error: 'blogId not found' });
    }
    else {
        return res
            .status(200)
            .send(blogs);
    }
};
exports.findBlogController = findBlogController;
