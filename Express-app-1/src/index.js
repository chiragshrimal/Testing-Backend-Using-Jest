const express= require("express");
const app = express();

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


app.get("/sum",(req,res)=>{
    const {a,b}= req.body;
    const answer= a+b;
    res.json({
        answer
    })
})

module.exports = app;