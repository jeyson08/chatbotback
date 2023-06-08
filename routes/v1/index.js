const express = require('express')
const router = express.Router()
const dialogController = require('../../controller/v1/index')

/**
 * @swagger
 * /api/v1/:
 *  get:
 *    description: Home route
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', dialogController.home)

/**
 * @swagger
 * /api/v1/test:
 *  get:
 *    description: Test route
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/test', dialogController.test)

/**
 * @swagger
 * /api/v1/dialog/questions:
 *  get:
 *    description: Use to request all questions
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/dialog/questions', dialogController.findAllQuestions)

/**
 * @swagger
 * /api/v1/dialog/questions:
 *  get:
 *    description: Use to request all answers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/dialog/answers', dialogController.findAllAnswers)

/**
 * @swagger
 * /api/v1/dialog/questions:
 *  get:
 *    description: Use to request all dialogs
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/alldialogs', dialogController.findAllDialogs)

/**
 * @swagger
 * /api/v1/createchat:
 *  post:
 *    description: Use to create a new chat
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/createchat', dialogController.CreateChat)

/**
 * @swagger
 * /api/v1/update/{id}:
 *  put:
 *    description: Use to update a chat by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of the chat
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.put('/update/:id', dialogController.update)

/**
 * @swagger
 * /api/v1/dialog/answer/{id}:
 *  get:
 *    description: Use to find dialog by id
 *    parameters:
 *      - name: id
 *        in: path
 *        description: ID of the dialog
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: Dialog not found
 */
router.get('/dialog/:id', dialogController.findById)

/**
 * @swagger
 * /api/v1/jeyson:
 *  get:
 *    description: Jeyson Boursault
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/jeyson', dialogController.jeyson)



// router.get('/chatbuild', (req,res) => {
//     res.json({message:"Création de chat"})
// })

/**
 * @swagger
 * /api/v1/delete/{id}:
 *  delete:
 *    description: Use to delete a chat by ID
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of the chat
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.delete('/delete/:id', dialogController.deletebyid)

module.exports = router