import {Request, Response} from 'express'
import {PostViewModel} from '../../../input-output-types/posts-types'
import {db} from "../../../db/db";

export const getPostsController = (req: Request, res: Response<PostViewModel[]>) => {
const posts = db.posts
    res
        .status(200)
        .send(posts)

}