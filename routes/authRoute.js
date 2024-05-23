import express from 'express';
import {loginController, registerController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router=express.Router();

//register-- post method
router.post('/register',registerController);

//login
router.post('/login',loginController);

//protected user pages
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
});

//protected admin pages
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
});

export default router;