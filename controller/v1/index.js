const dialogs = [
    {
        question : "salut",
        answer : "coucou"
    },
    {
        question : "ça va",
        answer : "oui"
    },
    {
        question : "quel age as tu",
        answer : "20 ans"
    }
]
const Chat = require("../../models/chat")

const dialogController = {
  home: (req, res) => {
    res.send('Hello World!')
  },
  test: (req, res) => {
    res.send('Hello Test!')
  },
  findAllQuestions: async (req, res) => {
    const questions = await Chat.findAll({attributes : ['question']})
    res.json(questions)
  },
  findAllAnswers: async (req, res) => {
    const answers = await Chat.findAll({attributes : ['answer']})
    res.json(answers)
  },
  findAllDialogs: async (req, res) => {
    const dialogs = await Chat.findAll()
    res.json(dialogs)
  },
  CreateChat: async (req, res) => {
    const createchat = Chat.build({ question: req.body.question, answer: req.body.answer });
    async function save() {
        await createchat.save();
        console.log(createchat)
        console.log('this chat was saved to the database!');
    }
    save()
    res.status(200).json({
        message : "created"
    })
  },
  findById: (req, res) => {
    const dialog = dialogs.find(dialog => dialog.id === parseInt(req.params.id))
    if (!dialog) return res.status(404).send('Dialog not found')
    res.json(dialog)
  },
  jeyson: (req, res) => {
    res.send('Jeyson Boursault')
  },
  post: (req, res) => {
    res.json('post')
  }
}

module.exports = dialogController