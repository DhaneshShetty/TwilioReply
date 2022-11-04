var express = require('express');
const app = express();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const {database} = require('./config');
const { set,ref,push } = require('firebase/database');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/message',(req,res,next)=>{
    const twiml = new MessagingResponse();
    const {body} = req;
    console.log(req.body);
    const leadsRef = ref(database,'leads');
        const newLeadRef = push(leadsRef);
        set(newLeadRef,
            {
            number:body.From,
            name:body.ProfileName,
            message:body.Body
        });
    if(body.Body=="Book a demo session"){
        twiml.message('Thank you for booking a demo call! A member of our team will be in touch with you soon.');
        res.writeHead(200,{'Content-Type':'text/xml'});
        res.end(twiml.toString());
    }
    else{
        twiml.message('Thank you for contacting! We will be in touch with you soon.');
        res.writeHead(200,{'Content-Type':'text/xml'});
        res.end(twiml.toString());
    }
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});