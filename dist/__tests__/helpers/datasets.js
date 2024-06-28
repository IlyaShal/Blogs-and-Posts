"use strict";
// готовые данные для переиспользования в тестах
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataset2 = exports.dataset1 = exports.post1 = exports.blog7 = exports.blog1 = exports.createString = exports.codedAuth = void 0;
const admin_middleware_1 = require("../../global-middlewares/admin-middleware");
const settings_1 = require("../../settings");
exports.codedAuth = (0, admin_middleware_1.fromUTF8ToBase64)(settings_1.SETTINGS.ADMIN);
const createString = (length) => {
    let s = '';
    for (let x = 1; x <= length; x++) {
        s += x % 10;
    }
    return s;
};
exports.createString = createString;
exports.blog1 /*: BlogDbType*/ = {
    id: new Date().toISOString() + Math.random(),
    name: 'n1',
    description: 'd1',
    websiteUrl: 'http://some.com',
}; // dataset нельзя изменять
// blog1.name = 'n2' // error!!!
exports.blog7 /*: BlogDbType*/ = {
    id: new Date().toISOString() + Math.random(),
    name: 'n7',
    description: 'd7',
    websiteUrl: 'http://some7.com',
}; // dataset нельзя изменять
exports.post1 /*: PostDbType*/ = {
    id: new Date().toISOString() + Math.random(),
    title: 't1',
    content: 'c1',
    shortDescription: 's1',
    blogId: exports.blog1.id,
    blogName: 'n1'
}; // dataset нельзя изменять
// ...
exports.dataset1 /*: DBType*/ = {
    blogs: [exports.blog1],
    posts: [],
}; // dataset нельзя изменять
exports.dataset2 /*: DBType*/ = {
    blogs: [exports.blog1, exports.blog7],
    posts: [exports.post1],
}; // dataset нельзя изменять
// dataset2.blogs = [] // error!!!
// dataset2.blogs.push(blog1) // runtime error!!!
// dataset2.blogs[0].name = 'n3' // error!!!
// ...
