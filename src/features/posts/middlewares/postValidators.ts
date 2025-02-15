import {body} from 'express-validator'
import {inputCheckErrorsMiddleware} from '../../../global-middlewares/inputCheckErrorsMiddleware'
import {blogsRepository} from '../../blogs/blogsRepository'
import {NextFunction, Request, Response} from 'express'
import {postsRepository} from '../postsRepository'
import {adminMiddleware} from '../../../global-middlewares/admin-middleware'
import {PostInputModel} from "../../../input-output-types/posts-types";
import {OutputErrorsType} from "../../../input-output-types/output-errors-type";

// title: string // max 30
// shortDescription: string // max 100
// content: string // max 1000
// blogId: string // valid

 export const titleValidator = body('title')
     .isString().withMessage('Title is not string')
     .trim().isLength({min: 1, max: 30}).withMessage('more than 30 or less than 1')
 export const shortDescriptionValidator =
      body('shortDescription')
     .isString().withMessage('Description is not string')
     .trim().isLength({min: 1, max: 100}).withMessage('more than 100 or less than 1')
export const contentValidator =
    body('content')
    .isString().withMessage('not string')
    .trim().isLength({min: 1, max: 1000}).withMessage('more then 1000 or 0')


export const blogIdValidator =
        body('blogId')
        .isString().withMessage('not string')
    .trim().custom(blogId => {
        const blog = blogsRepository.find(blogId)
        // console.log(blog)
        return !!blog
    }).withMessage('no blog')

export const findPostValidator = (req: Request<{id: string}>, res: Response, next: NextFunction) => {
    const post = postsRepository.find(req.params.id)
    if (!post) {

        res
            .status(404)
            .json({error:'post not found'})
        return
    }

    next()
}

// export const putValidator = async (video: Partial<PostInputModel>) => {
//         const errors: OutputErrorsType = {
//             errorsMessages: []
//         }
//         const
//
//
// }

export const putValidator = [
    adminMiddleware,
    titleValidator,
    shortDescriptionValidator,
    contentValidator,
    blogIdValidator,
    findPostValidator,
    inputCheckErrorsMiddleware


]
export const postValidators = [

    adminMiddleware,
     titleValidator,
     shortDescriptionValidator,
    contentValidator,
    blogIdValidator,
    inputCheckErrorsMiddleware,
]