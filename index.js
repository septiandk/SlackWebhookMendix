const express = require('express');
const app = express();
const fs = require('fs');

const {sendMessage} = require('./post');
const {converting} = require('./convert');

const proses1 = () =>{

    app.use(
      express.json({
        extended: true
      })
    )
    app.post('/webhook', async (req, response) => {
      const bufferJson = JSON.stringify(req.body) 
      const jsonData = `[${bufferJson}]`
      fs.writeFileSync('./incomingApi.json', jsonData)
      console.log('Get Json Body');
      console.log(req.body); //This prints the JSON document received 
      if (bufferJson === '{}') {
        //if the json data is empty then print the arg
        console.log('waiting for Json body');
      } 
      else{
        converting();
        await sendMessage()

      }
    })
    app.get('/webhook', (req,res) =>{
      const dataText = fs.readFileSync('./incomingApi.json','utf8')
      const dataJson = JSON.parse(dataText)
      res.send(dataJson)
    })

}
 //Start the server and make it listen for connections on port 3000
const port = 9000 
app.listen(port, async () =>
{
    console.log(`app is listening to port ${port}`);
    await proses1()

});

