const express = require('express')
const app = express();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const multer = require('multer');
const path = require('path')
const cors = require('cors')
const dotenv = require('dotenv')
const port = process.env.port || 4000;
dotenv.config()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

//mongoose connection
mongoose.connect(process.env.MONGODB);

app.get('/',(req,res)=>{
        res.status(200).send("your listening to "+port)
})

//setting image path
const storage = multer.diskStorage({
        destination:'./uploads/images',
        filename:(err,file,cb)=>{
                return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
        }
}) 

const upload = multer({storage:storage});

//middleware for image
app.use('/image',express.static('uploads/images'))

//end point for upload image
app.post('/upload',upload.single('products'),(req,res)=>{
        res.json({
                success:1,
                image_url:`http://localhost:${port}/image/${req.file.filename}`
        })
})

// schema for verifying datas
const Product = mongoose.model('products',{
        id:{
           type:Number,
           required:true
        },
        product_name:{
           type:String,
           required:true
        },
        category:{
          type:String,
          required:true
        },
        image_url:{
        type:String,
        required:true
        },
        old_price:{
         type:Number,
         required:true
        },
        new_price:{
        type:Number,
        required:true
        },
        available:{
        type:Boolean,
        default:true
        },
        date:{
         type:Date,
         default:Date.now()
        }
})

//end point for adding new products
app.post('/addproducts',async (req,res)=>{

        let product_id = await Product.find({})
        let id;
        if(product_id.length > 0){
        let product_last_array = product_id.slice(-1);
        let product_last = product_last_array[0].id;
        id = product_last+1
        }else{
                id = 1
        }
        

        const product = new Product({
                id:id,
                product_name:req.body.product_name,
                category:req.body.category,
                image_url:req.body.image_url,
                old_price:req.body.old_price,
                new_price:req.body.new_price
        })
        await product.save();
        res.json({
          success:true,
          name:req.body.name
          })
})

//end point for remove products
app.post('/removeproduct',async (req,res)=>{
        await Product.findOneAndDelete({id:req.body.id})
        res.json({
                success:true,
                name:req.body.name
        })
})

//end point for display all product
app.get('/allproducts',async (req,res)=>{
        const Product_datas = await Product.find({})
        res.send(Product_datas)
})

// schema for user login
const User = mongoose.model('user',{
        username:{
                type:String,
        },
        email:{
                type:String,
                unique:true
        },
        password:{
                type:String
        },
        cartData:{
                type:Object
        },
        date:{
                type:Date,
                default:Date.now()
        }
})

//end point user signin
app.post('/signin',async (req,res)=>{
        
        const cart = {};
        const existEmail =await User.findOne({email:req.body.email})
        if(existEmail){
                res.json({
                        success:false,
                        error:'Email address already exist'
                })
        }
                   for (let i = 0; i < 300; i++) {
                     cart[i] = 0;
                   }
                   const user = new User({
                     username: req.body.username,
                     email: req.body.email,
                     password: req.body.password,
                     cartData: cart,
                   });

                   await user.save()

                   const data = {
                        user:{
                         id:user.id
                        }
                   }

                   const Token = jwt.sign(data,'sec-ecom')
                    res.json({success:true,Token})
                }
)

//end point for login
app.post('/login',async(req,res)=>{
        const user = await User.findOne({email:req.body.email})
        if(user){
                const passwordCompare = req.body.password === user.password;
                if(passwordCompare){
                const data = {
                        user:{
                          id:user.id
                        }
                      }
                const token = jwt.sign(data,'sec-ecom')
                 res.json({success:true,token})
                }else{
                        res.json({
                                success:false,
                                error:"wrong password"
                        })
                }
        }
        else{
          res.json({
                success:false,
                error:"Email address is not exist"
          })
        }
})

//end point for display latest collection
app.get('/latestcollection',async (req,res)=>{
        const latestcollection =await Product.find({});
        const collection = latestcollection.slice(1).slice(-8);
        res.send(collection)
})

//end point for display popular women collection
app.get('/popularinwomen', async (req,res)=>{
        const womencollection = await Product.find({category:'women'})
        const collection = womencollection.slice(0,4);
        res.send(collection)
})

//end point for display related products
app.get('/relatedproducts',async (req,res)=>{
        const relatedproducts = await Product.find({});
        const collection = relatedproducts.slice(0,4);
        res.send(collection)
})

//middleware for get userid
const fetchUser = async (req,res,next)=>{
const token = req.header('auth-token');
 if(!token){
 res.send("please check Authentication token")
 }
 else{
 try{
 const data = jwt.verify(token,'sec-ecom');
 req.user = data.user 
 next()
 }catch(err){
 res.status(401).send('unable to find user id')
 }
        }
}

//end point for add products to cart
app.post('/addtocart',fetchUser ,async (req,res)=>{
        const userdata = await User.findOne({_id:req.user.id})
        userdata.cartData[req.body.itemId] += 1
        await User.findOneAndUpdate({_id:req.user.id},{cartData:userdata.cartData})
        res.send("added")
})

//end point for remove products from cart
app.post('/removefromcart',fetchUser,async (req,res)=>{
        const userdata =await User.findOne({_id:req.user.id})
        if(userdata.cartData[req.body.itemId]>0){
        userdata.cartData[req.body.itemId] -=1;
        await User.findOneAndUpdate({_id:req.user.id},{cartData:userdata.cartData})
        }
})

//end point for get cart products for user
app.post('/getcart',fetchUser,async(req,res)=>{
        const userdata = await User.findOne({_id:req.user.id})
        res.json(userdata.cartData)
})

app.listen(port,()=>{console.log("your listening to "+port)})