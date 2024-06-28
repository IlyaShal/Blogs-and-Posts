import {Request, Response} from 'express'
import {BlogViewModel} from '../../../input-output-types/blogs-types'
import {db} from "../../../db/db";

export const getBlogsController = (req: Request, res: Response<BlogViewModel[]>) => {
console.log('Get blogs controller')
    const blogs = db.blogs
    res
        .status(200)
        .send(blogs)
}