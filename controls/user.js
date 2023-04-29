const bcrypt=require('bcrypt')
const User=require('../models/SignUp')
const Message = require('../models/Message')
const getUsers =async (req,res,next)=>{
    let users;
    try{
        users=await User.find();
    }
    catch(err){
        console.log(err)
    }
    if(!users){
        return res.status(404).json({message:"No user found"})
    }
    return res.status(200).json({ users});
}
const addUsers =async (req,res,next)=>{
    // const [firstname,lastname,email,number,password]=req.body;
const firstname = req.body.firstname;
const lastname = req.body.lastname;
const email = req.body.email;
const number = req.body.number;
const password = req.body.password;

    
    if (!firstname || !lastname || !email || !number || !password) {
        return res.status(400).json({ message: 'Please provide all user details' });
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
      }
      if (password.length < 8) {
        return res.status(400).json({ message: 'Password must be at least 8 characters long' });
      }
       // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create and save the user
  const user = new User({
    firstname,
    lastname,
    email,
    number,
    password: hashedPassword,
  });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Unable to add user' });
  }

  return res.status(201).json({ user });
  };

  const sendMessage=async(req,res)=>{
    const name=req.body.name;
    const email=req.body.email
    const message=req.body.message

    const messages= new Message({
      name,email,message,
    })
    try{
      await messages.save();
    }catch(err){
      console.log(err)
      return res.status(500).json({ message: 'Unable to add message' });
    }
    return res.status(201).json({ messages });
  }

  const Login=async(req,res,next)=>{
    const email=req.body.email
    const password=req.body.password
    // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }
  // Find the user by email
  let user;
  try {
    user = await User.findOne({ email });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Unable to log in' });
  }

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
   // Check if the password is correct
   const isPasswordCorrect = await bcrypt.compare(password, user.password);

   if (!isPasswordCorrect) {
     return res.status(401).json({ message: 'Invalid email or password' });
   }

   return res.status(202).json({message:"login successfully"})
  }
  
exports.getUsers=getUsers
exports.addUsers=addUsers
exports.Login=Login
exports.sendMessage=sendMessage