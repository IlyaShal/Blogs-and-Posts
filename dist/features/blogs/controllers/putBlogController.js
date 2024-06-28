"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putBlogController = void 0;
const db_1 = require("../../../db/db");
const putBlogController = (req, res) => {
    const blogId = req.params.id;
    const blogs = db_1.db.blogs.find(blogs => blogs.id === blogId);
    if (!blogs)
        return res.status(404).send({ error: 'blog not found' });
    blogs.name = req.body.name;
    blogs.description = req.body.description;
    blogs.websiteUrl = req.body.websiteUrl;
    console.log(201);
    console.log(blogs);
    return res.sendStatus(204);
};
exports.putBlogController = putBlogController;
