const express= require("express");
const app = express();

// it is used for input validation 
const z = require("zod");

app.use(express.json());

app.get('/users', function(req, res) {
  res.json({ users: 'allUsers' });

  // Real code from my application below
  //  model.User.findAll().then (users => {
  //        res.status(200).json({ users });
  //     }).catch(error=>{
  //        console.log(error)
  //        req.status(500).send(error)
  //  })
});

app.get('/users/3', function(req, res) {
  res.json({ user: 'user3' });

  // Real code from my application below
  // const { id } = req.params;
  //    model.User.findOne({
  //        where: { id: Number(id) }
  //    }).then(user=>{
  //        res.status(200).json({ user });
  //    }).catch(error=>{
  //        console.log(error)
  //        req.status(500).send(error)
  //    })
});


// what about if i will give an input like a= [123]
//  b =1
// so for the input validation we can use something called zod over here

const sumInput = z.object({
    a: z.number(),
    b: z.number()
});

app.get("/sum",(req,res)=>{

    const parsedResponse= sumInput.safeParse(req.body);

    if(!parsedResponse.success){
        return res.status(411).json({
            message : "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        answer
    })
})

module.exports = app;