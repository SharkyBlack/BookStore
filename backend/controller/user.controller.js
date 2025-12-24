import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password,10)
    const createdUser = new User({
      fullname,
      email,
      password: hashPassword,
    });
    createdUser.save();
    res.status(201).json({ message: "User created successfully",user:{
        fullname: createdUser.fullname, email: createdUser.email, _id: createdUser._id
    } });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcrypt.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid Credentials"})
        }
        res.status(200).json({message:"Login Successful",user:{fullname:user.fullname,email:user.email,_id:user._id}});
    }catch(err){
        console.log("error", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
