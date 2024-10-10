const express = require('express');
const Datee=require('./middlewares/Datee')

const app = express();
const PORT = 3000;
app.use(Datee)

console.log(__dirname)

app.use(express.static(__dirname + '/public'))
//routes
app.get('/home',(req,res)=>{
    res.sendFile(`${__dirname}/public/home.html`)
})

app.get('/contact',(req,res)=>{

    res.sendFile(`${__dirname}/public/contact.html`)
}
)






// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
