//require('dotenv').config({path : './env'}) ; 
import dotenv from 'dotenv' ;
import mongoose from "mongoose";
import {DB_NAME} from './constants.js' ;
import express from 'express'
import connectDB from "./db/index.js";

dotenv.config({path :'./env'})


 connectDB().then(() => {
    app.listen(process.env.PORT || 8000  , () => {
        console.log(`Server is running on port ${process.env.PORT}`) ;
    })
 })
 .catch((err)=> {
    console.log('MongoDB connection failed !!! ' , err)  ; 
 })











/*
//1approch


const app = express() ; 


// iife used here 

;(async ()=> {
    try{
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) ; 
    app.on('error' , (error) => {
        console.log('ERRR' , error) ; 
        throw error ; 
    })

     app.listen(process.env.PORT , () => {
        console.log(`Server is running on port ${process.env.PORT}`) ;
     }) 
    }catch(err) {
        console.log(err);
        throw err ; 
    }
})() ; 

function connectDB() {
     
}
*/
