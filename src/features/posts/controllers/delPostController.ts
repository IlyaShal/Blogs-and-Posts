import {Request, Response} from 'express'
import {db} from "../../../db/db";


export const delPostController = (req: Request<{id: string}>, res: Response) => {
    const postId = req.params.id
    const postIndex = db.posts.findIndex(posts => posts.id.toString() === postId.toString())

    // if(!){
    //     return res.status(401).json({error: 'Unauthorized'})
    // }

    if (postIndex === -1) {
        return res.status(404).json({error: 'Post not found'})
    }else{
        db.posts.splice(postIndex, 1)
        return res
            .sendStatus(204)
    }

}