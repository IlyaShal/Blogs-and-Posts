import {Request, Response} from 'express'
import {BlogViewModel} from '../../../input-output-types/blogs-types'
import {db} from "../../../db/db";

export const findBlogController = (req: Request<{id: string}>, res: Response<BlogViewModel | {}>) => {
const blogId = req.params.id
    const blogs = db.blogs.find(blogs => blogs.id.toString() === blogId)
    if (!blogs){
        return res
            .status(404)
            .json({error: 'blogId not found'})
    }
    else {
        return res
            .status(200)
            .send(blogs)
    }
}