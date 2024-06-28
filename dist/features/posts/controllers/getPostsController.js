"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsController = void 0;
const db_1 = require("../../../db/db");
const getPostsController = (req, res) => {
    const posts = db_1.db.posts;
    res
        .status(200)
        .send(posts);
};
exports.getPostsController = getPostsController;
