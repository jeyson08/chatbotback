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
    try {
      const id = req.params.id;
      const [ updated ] = await Chat.update(req.body, { where: { id: id }});
      if (updated) {
        const updatedChat = await Chat.findOne({ where: { id: id } });
        res.status(200).json(updatedChat);
      } else {
        res.status(404).send("Chat with the specified ID does not exists");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  jeyson: (req, res) => {
    res.send('Jeyson Boursault')
  }
}

module.exports = dialogController