import {Request, Response} from 'express'
import {db} from "../../../db/db";

export const delBlogController = (req: Request<{id: string}>, res: Response) => {
const blogId = req.params.id
    const blogIndex = db.blogs.findIndex(blogs => blogs.id.toString() === blogId.toString())
    if (blogIndex === -1) {
        return res.status(404).json({error: 'Post not found'})
    }else{
        db.blogs.splice(blogIndex, 1)
        return res
            .sendStatus(204)
    }




}

