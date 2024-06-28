import {Request, Response} from 'express'
import {BlogInputModel} from '../../../input-output-types/blogs-types'
import {db} from "../../../db/db";

export const putBlogController = (req: Request<{id: string}, any, BlogInputModel>, res: Response) => {
const blogId = req.params.id
    const blogs = db.blogs.find(blogs => blogs.id === blogId)

    if(!blogs) return res.status(404).send({error: 'blog not found'})

    blogs.name = req.body.name
    blogs.description = req.body.description
    blogs.websiteUrl = req.body.websiteUrl


    console.log(201)
    console.log(blogs)
    return res.sendStatus(204)

}
