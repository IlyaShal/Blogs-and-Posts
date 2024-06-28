import {Request, Response} from 'express'
import {PostViewModel} from '../../../input-output-types/posts-types'
import {db} from "../../../db/db";

export const findPostController = (req: Request<{id: string}>, res: Response<PostViewModel | {}>) => {
const postId = req.params.id
    const posts = db.posts.find(posts => posts.id.toString() === postId)
    if(!posts){ return res
                            .status(404)
                            .json({error: 'Post not found'})
    }
    else{
        return res.status(200).send(posts)

    }
}