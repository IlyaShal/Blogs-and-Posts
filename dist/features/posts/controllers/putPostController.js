"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putPostController = void 0;
const db_1 = require("../../../db/db");
const blogsRepository_1 = require("../../blogs/blogsRepository");
const putPostController = (req, res) => {
    const postsId = req.params.id;
    const posts = db_1.db.posts.find(posts => posts.id === postsId);
    if (!posts) {
        return res.sendStatus(404);
    }
    posts.content = req.body.content;
    posts.title = req.body.title;
    posts.shortDescription = req.body.shortDescription;
    posts.blogId = req.body.blogId;
    posts.blogName = blogsRepository_1.blogsRepository.find(posts.blogId).name;
    console.log(201);
    console.log(posts);
    return res
        .sendStatus(204);
};
exports.putPostController = putPostController;
// const putValidation =   (posts: Partial<PostViewModel>) => {
//     const errors: OutputErrorsType = {
//         errorsMessages: []
//     }                                   // Тут нужно придумать как всунуть валидацию чтобы она проходила!
//     contentValidator(errors,  posts.content, error => {})
//     blogIdValidator(errors,  posts.blogId, error => {})
//     shortDescriptionValidator(errors,  posts.shortDescription, error => {})
//     titleValidator(errors,  posts.title, error => {})
//     return errors
// }
