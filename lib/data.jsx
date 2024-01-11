import { connect } from "mongoose"
import { parse } from "next/dist/build/swc"
import { connectDB } from "./utils";
import {Post, User} from "./models"

export const getposts = async () => {
    try{
        connectDB()
        const posts = await Post.find();
        return posts
    } catch(err){
        console.log(err)
        throw new Error(err)
    }
}

export const getUser = async (id) => {
    try{
        connectDB()
        const user = await User.findById(id);
        return user
    } catch(err){
        console.log(err)
        throw new Error(err)
    }
}

export const getUsers = async () => {
    try{
        connectDB()
        const users = await User.find();
        return users
    } catch(err){
        console.log(err)
        throw new Error(err)
    }
}