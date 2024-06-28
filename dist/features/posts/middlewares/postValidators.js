"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postValidators = exports.putValidator = exports.findPostValidator = exports.blogIdValidator = exports.contentValidator = exports.shortDescriptionValidator = exports.titleValidator = void 0;
const express_validator_1 = require("express-validator");
const inputCheckErrorsMiddleware_1 = require("../../../global-middlewares/inputCheckErrorsMiddleware");
const blogsRepository_1 = require("../../blogs/blogsRepository");
const postsRepository_1 = require("../postsRepository");
const admin_middleware_1 = require("../../../global-middlewares/admin-middleware");
// title: string // max 30
// shortDescription: string // max 100
// content: string // max 1000
// blogId: string // valid
exports.titleValidator = (0, express_validator_1.body)('title')
    .isString().withMessage('Title is not string')
    .trim().isLength({ min: 1, max: 30 }).withMessage('more than 30 or less than 1');
exports.shortDescriptionValidator = (0, express_validator_1.body)('shortDescription')
    .isString().withMessage('Description is not string')
    .trim().isLength({ min: 1, max: 100 }).withMessage('more than 100 or less than 1');
exports.contentValidator = (0, express_validator_1.body)('content')
    .isString().withMessage('not string')
    .trim().isLength({ min: 1, max: 1000 }).withMessage('more then 1000 or 0');
exports.blogIdValidator = (0, express_validator_1.body)('blogId')
    .isString().withMessage('not string')
    .trim().custom(blogId => {
    const blog = blogsRepository_1.blogsRepository.find(blogId);
    // console.log(blog)
    return !!blog;
}).withMessage('no blog');
const findPostValidator = (req, res, next) => {
    const post = postsRepository_1.postsRepository.find(req.params.id);
    if (!post) {
        res
            .status(404)
            .json({ error: 'post not found' });
        return;
    }
    next();
};
exports.findPostValidator = findPostValidator;
// export const putValidator = async (video: Partial<PostInputModel>) => {
//         const errors: OutputErrorsType = {
//             errorsMessages: []
//         }
//         const
//
//
// }
exports.putValidator = [
    admin_middleware_1.adminMiddleware,
    exports.titleValidator,
    exports.shortDescriptionValidator,
    exports.contentValidator,
    exports.blogIdValidator,
    exports.findPostValidator,
    inputCheckErrorsMiddleware_1.inputCheckErrorsMiddleware
];
exports.postValidators = [
    admin_middleware_1.adminMiddleware,
    exports.titleValidator,
    exports.shortDescriptionValidator,
    exports.contentValidator,
    exports.blogIdValidator,
    inputCheckErrorsMiddleware_1.inputCheckErrorsMiddleware,
];
