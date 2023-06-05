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

router.get('/dialog/answers', dialogController.findAllAnswers)

router.get('/alldialogs', dialogController.findAllDialogs)

router.post('/createchatdeux', dialogController.CreateChat)

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
router.get('/dialog/answer/:id', dialogController.findById)

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

/**
 * @swagger
 * /api/v1/post:
 *  post:
 *    description: post test
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/post', dialogController.post);


router.get('/chatbuild', (req,res) => {
    res.json({message:"Création de chat"})
})

module.exports = router