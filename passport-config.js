const localStrategy= require("passport-local").Strategy
const bcrypt=require("bcrypt")

function initialize(passport){
    const authenticateUsers= async(email, password, done)=>{
        const user=getUserByEmail(email)
        if(user==null){
            return(null, false,{message :"No user found with that email"})
        }
        try{
            if(await bcrypt.compare(password, user.password)){
                return done(null, user)
            }
        }
        catch(e){
            console.log(e);
            return done(e)
        }
    }
    passport.use(new localStrategy({usernameField: "email"}))
    passport.serializeUser((user, done)=>{})
    passport.deserializeUser((user, done)=>{})
}
module.exports=initialize