const express=require('express');
const router=express.Router();
const {getAllMessages,postMessage, deleteMessage}=require('../Controllers/messageController')

router.post('/',postMessage)
router.get('/',getAllMessages)
router.delete('/:id',deleteMessage)


 


module.exports =router