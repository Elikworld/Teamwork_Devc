import express from 'express';

const router = express.Router();

router
.route('/')
.get((req, res) => 
res.send({
    message: 'Welcome to using teamwork by Elikworld'
}));

export default router;