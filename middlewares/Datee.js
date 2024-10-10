
const Datee=(req,res,next)=>{

    const date =new Date()
    const h=date.getHours()
    const d=date.getDay()

    if(!(d<4 && h>9  && h<17)){
        res.send('ACCES REFUSE')
    }
next()
}

module.exports=Datee