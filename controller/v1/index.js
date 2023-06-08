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
  findById: async (req, res) => {
    const id = req.params.id
    const dialog = await Chat.findByPk(id);
    res.json(dialog)
  },
  deletebyid: async (req, res) => {
    const id = req.params.id
    async function remove() {
      await Chat.destroy({ where: {id: id}})
      console.log('this chat was removed from the database!');
    }
    await remove()    
    res.send('deleted')
  },
  update: async (req, res) => {
    const chattoupdtate = await Chat.findByPk(id)
    const updatechat = chattoupdtate.update({ question: req.body.question, answer: req.body.answer });
    async function updatesave() {
        await updatechat.updatesave();
        console.log(updatechat)
        console.log('modification réussie !');
    }
    updatesave()
    res.status(200).json({
        message : "updated"
    })
  },
  jeyson: (req, res) => {
    res.send('Jeyson Boursault')
  }
}

module.exports = dialogController