"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogsController = void 0;
const db_1 = require("../../../db/db");
const getBlogsController = (req, res) => {
    console.log('Get blogs controller');
    const blogs = db_1.db.blogs;
    res
        .status(200)
        .send(blogs);
};
exports.getBlogsController = getBlogsController;
