import {Request, Response} from 'express'
import {PostInputModel} from '../../../input-output-types/posts-types'
import {db} from "../../../db/db";
import {blogsRepository} from "../../blogs/blogsRepository";
import {OutputErrorsType} from "../../../input-output-types/output-errors-type";

export const putPostController =   (req: Request<{id: string}, any, PostInputModel>, res: Response<any, OutputErrorsType>) => {

    const postsId = req.params.id
    const posts = db.posts.find(posts => posts.id === postsId)


    if(!posts ){
        return res.sendStatus(404)
    }

    posts.content = req.body.content
    posts.title = req.body.title
    posts.shortDescription = req.body.shortDescription
    posts.blogId = req.body.blogId
    posts.blogName = blogsRepository.find(posts.blogId)!.name




    console.log(201)
    console.log(posts)

    return res
        .sendStatus(204)


}
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



