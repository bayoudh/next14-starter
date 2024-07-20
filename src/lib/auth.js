import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDb } from "./utils";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
const login = async (credentials)=>{
    try{
        connectToDb();
        const user= await User.findOne({username: credentials.username});
        if(!user){
            throw new Error("Wrong credentials!");
        }
        const ispasswordCorrect = await bcrypt.compare(credentials.password,user.password);
        if(!ispasswordCorrect){
            throw new Error("worng  credentials!");
        }
        return user;
    }catch(err){
        console.log(err);
        throw new Error("Failed to login!");
    }
}

export const { handlers:{ GET , POST},auth,signIn,signOut} = NextAuth({
    providers:[
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials){
                try{
                    const user = await login(credentials);
                    return user;
                }catch(err){
                    return null;
                }
            }
        })
    ],
    callbacks:{
        async signIn({User, account , profile}){
          // console.log(profile.avatar_url)
          
          if(account.provider === 'github'){
                connectToDb();
                try{
                    const user = await User.findOne({email: profile.email });
                    if(!user){
                        const newUser = new User({
                            username: profile.login,
                            email: profile.email,
                            img: profile.avatar_url,
                            
                        });
                        await newUser.save();
                    }
                }catch(err){
                    console.log(err);
                    return false;
                }
            }
            return true;
        }
    }
})