const express=require("express");//importing express module
const bodyParser=require("body-parser");//importing body-parser
const md5 = require('md5');
var jsdom = require("jsdom");




const mailer=require("nodemailer");


const app=express();
const port=800;//initializing port
const MongoClient=require("mongodb").MongoClient
const url="mongodb://localhost:27017";
const client=new MongoClient(url);//creating an object for the class which allow connection to the mongodb
app.use(express.static(__dirname + '/public'))
async function Collection(){
    await client.connect();//connect to the mongodb using url
   const db= client.db("Food_Delivery");//creating an object of a database
   const collection=db.collection("Registration")//creating an object of collection to access document
   const collection1=db.collection("Help")
   const collection2=db.collection("New Orders")

   
  


app.use(bodyParser.urlencoded({  
      //body-parser is used to post the body of html code
    extended:false
}))

app.use(bodyParser.json())

app.get("/",(req,res)=>{
  res.sendFile(__dirname + '/public/home.html')
})

app.get("/register",(req,res)=>                       //read from the url and than give response to the url
{
   // res.send("Get request to the homepage")
   res.sendFile(__dirname + '/public/register.html')
});

let form_data;
app.post("/register",(req,res)=>
{


   form_data=req.body;
   form_data.Password=md5(req.body.Password)
let t=true;
   collection.findOne({Email:req.body.Email},(err,user_found)=>{
    if(err){
        console.log(err);
    }

    else{
    if(user_found){
        res.sendFile(__dirname + '/public/register.html');
        
    }
   else{
    console.log(form_data);
    
    let a= collection.insertOne((form_data));//adding data to the database
    res.redirect("/login");
    
        const transporter=mailer.createTransport({
            host:"smtp.gmail.com",
            auth:{
              user:"shubhmish223@gmail.com",
              pass:"qbkdngsbsfetnyzx",
            }
          })
          
          var content={
            from:"shubhmish223@gmail.com",
            to:form_data.Email,//fetching email from the form
            subject:"greeting message",
            text:"Hey, welcome to our website Your Form is successfully submitted",
          
           
          }
          
          transporter.sendMail(content,(err)=>{
            if(err) console.log(err)
          
            else{
              console.log("Message sent!!");
            }
          })
        


        }
    }
});
   


});


var otp_sent//It is used to store the generated password
var forgot_email//whose password is to be reset


app.get("/Forgot",(req,res)=>                       //read from the url and than give response to the url
{
   // res.send("Get request to the homepage")
   res.sendFile(__dirname + '/public/Forgot.html')
});

app.post("/Forgot",(req,res)=>                       //read from the url and than give response to the url
{
   // res.send("Get request to the homepage")
   let otp = Math.floor((Math.random()*10000) + 1)*10;
   otp_sent=otp;
   //sending otp
   console.log(req.body.email);
   forgot_email= req.body.email
   const transporter=mailer.createTransport({
    host:"smtp.gmail.com",
  
    auth:{
      user:"shubhmish223@gmail.com",
      pass:"qbkdngsbsfetnyzx",
    }
  })
  
  var content={
    from:"shubhmish223@gmail.com",
    to:req.body.email,//fetching email from the form
    subject:"greeting message",
    text:"Your OTP is "+otp,
  
   
  }
  
  transporter.sendMail(content,(err)=>{
    if(err) console.log(err)
  
    else{
      console.log("Message sent!!");
    }
  })
  res.redirect("/otp_verify")

});





//OTP VERIFY
app.get("/otp_verify",(req,res)=>
{
  res.sendFile(__dirname + '/public/otp_verify.html');
});
app.post("/otp_verify",(req,res)=>
{
  const otp=req.body.otp_verify
  console.log(otp)
  console.log(otp_sent)
  if(otp==otp_sent)
  {
    console.log("Password Varified")
    res.redirect("/Reset_password")
  }
})


//Reset Password
app.get("/Reset_password",(req,res)=>                       //read from the url and than give response to the url
{
   // res.send("Get request to the homepage")
   res.sendFile(__dirname + '/public/Reset_password.html')
});
app.post("/Reset_password",(req,res)=>{
const psswd1=req.body.psswd1;
const psswd2=req.body.psswd2;
if(psswd1==psswd2)
{
  collection.findOne({Email:forgot_email},(err,data)=>
  {
    console.log(data)
    
    collection.updateOne(
      {"Email" : data.Email},
      {$set: { "Password" :md5(psswd1) }});
    console.log("Password Changed")
    res.redirect("/login")
  })
}
else{
  console.log("Not Matched")
}
})

app.get("/Food",(req,res)=>                       //read from the url and than give response to the url
{
   // res.send("Get request to the homepage")
   res.sendFile(__dirname + '/public/Food.html')
});
app.get("/About",(req,res)=>                       //read from the url and than give response to the url
{
   // res.send("Get request to the homepage")
   res.sendFile(__dirname + '/public/About.html')
});


app.get("/login",(req,res)=>                       //read from the url and than give response to the url
{
   // res.send("Get request to the homepage")
   res.sendFile(__dirname + '/public/login.html')
});

app.get("/SignOut",(req,res)=>{
  res.sendFile(__dirname + '/public/home.html')
})

    app.post("/login",(req,res)=>{
        const username=req.body.username;
        const password=md5(req.body.password);

        collection.findOne({Email:username},(err,user_found)=>{
            if(err){
                console.log(err);
            }
            else{
                if(user_found){
                    if(user_found.Password===password){
                        res.sendFile(__dirname + '/public/Food.html')
                    }
                    else{
                        console.log("Wrong Password")

                      
                        res.sendFile(__dirname+"/public/login.html")
                    }
                }
                else{
                    console.log("No record found of such email")
                    res.sendFile(__dirname+"/public/login.html")
                }
              
            }
        })

    })

app.get("/help",(req,res)=>{
  res.sendFile(__dirname+"/public/Help.html")

})
app.post("/help",(req,res)=>{
  var help=req.body;
 
  let a= collection1.insertOne((help));
  console.log(help);
})

//Order generated
app.post("/order",(req,res)=>{
  var order=req.body;
  res.sendFile(__dirname+"/public/Food.html")
  
let b=collection2.insertOne(order);
console.log(order);

//order sent as mail
const transporter=mailer.createTransport({
  host:"smtp.gmail.com",

  auth:{
    user:"shubhmish223@gmail.com",
    pass:"qbkdngsbsfetnyzx",
  }
})

var content={
  from:"shubhmish223@gmail.com",
  to:req.body.emailID,//fetching email from the form
  subject:"Order Summary",
  text:"Hey,Thankyou for choosing our service.Your order of Rs."+order["Total Price"] + " will be delivered in next half an hours.",

 
}

transporter.sendMail(content,(err)=>{
  if(err) console.log(err)

  else{
    console.log("Message sent!!");
  }
})
})




app.listen(port,()=>{                                                 //tell the server to listen to the specified port number
    console.log(`Example app listening on port ${port} !`)
})


}
Collection();//calling of Collection function






















