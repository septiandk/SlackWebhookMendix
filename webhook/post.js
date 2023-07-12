const fs = require("fs");
const request = require("request");

const dataText = fs.readFileSync("./formatedApi.json", "utf8");
const https = require("https");

const sendMessage = () => {
  const options = {
    //give the slack url here, the webhook.site is just for testing
    hostname: "webhook.site",
    port: 443,
    //give the slack path here, the path below are belong to webhook.site and used for testing only
    path: "/1171479b-5762-4c83-aeb0-cd29727f99a7",
    //or you can just simplify it by writing this
    //url: 'https://hooks.slack.com/services/the path for json text',
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": dataText.length,
    },
  };
  const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);
    console.log("Pesan terkirim");
  });
  req.on("error", (error) => {
    console.error(error);
  });

  req.write(dataText);
  req.end();
};

module.exports = { sendMessage };


//here are another way to send the data to the url u want
// const dataJson = JSON.parse(dataText)
// // const options = {
// //   // url: 'https://hooks.slack.com/services/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',
// //   url : 'https://webhook.site/1171479b-5762-4c83-aeb0-cd29727f99a7',
// //   json: true,
// //   body: dataJson
// // };

// // const sendMessage = () => {

// //     request.post(options, (err, res) => {
// //       if (err) {
// //           return console.log(err);
// //       }
// //         console.log(`Status: ${res.statusCode}`);
// //         console.log('Pesan terkirim');
// //     });

// // }
