import {Router} from 'express'
import {createPostController} from './controllers/createPostController'
import {getPostsController} from './controllers/getPostsController'
import {findPostController} from './controllers/findPostController'
import {delPostController} from './controllers/delPostController'
import {putPostController} from './controllers/putPostController'
import {findPostValidator, postValidators, putValidator} from './middlewares/postValidators'
import {adminMiddleware} from '../../global-middlewares/admin-middleware'
import {findBlogValidator} from "../blogs/middlewares/blogValidators";

export const postsRouter = Router()

postsRouter.post('/', ...postValidators, createPostController)
postsRouter.get('/', getPostsController)
postsRouter.get('/:id',findPostValidator, findPostController)
postsRouter.delete('/:id',adminMiddleware, delPostController)
postsRouter.put('/:id', ...putValidator, putPostController)

// не забудьте добавить роут в апп