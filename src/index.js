import express from 'express'
import nodemailer from 'nodemailer'

const app = express()

const transport = nodemailer.createTransport({
    service: 'hotmail',
    port: 587,
    auth: {
        user: "jcpa0204@outlook.com",
        pass: "pereda2905"
    },
    tls: {
        secureProtocol: "TLSv1_method"
    }
})

const options = {
    from : "Pereda Arellano", 
    to: "jcpa0204@outlook.com", 
    subject: "Reset password", 
    text: "Here is a reset token."
}


app.get("/sendemail", async () => 
{
    const resultado = await transport.sendMail(options, (error, info) =>{
        if(error) console.log(error)
        else console.log(info)
    })
})

app.listen(8080, () => 
{
    console.log("Server iniciado por acá")
})

