const fs = require("fs");

const converting = () => {
  const buffer = fs.readFileSync("./incomingApi.json", "utf8");
  const vr = JSON.parse(buffer);
  vr.forEach((element) => {
    const parent = element.Story.ParentType;
    const story = element.Story.Name;
    const storyDesc = element.Story.Description;
    const storyStatus = element.Story.Status;
    const project = element.Project.Name;
    const sender = element.Sender.FullName;

    if (parent === "Sprint") {
      const text1 = `Aplikasi: ${project} \nSprint: ${story}, Deskripsi:${storyDesc} \nStatus:${storyStatus}, di update oleh ${sender}`;
      const text2 = JSON.stringify({
        text: text1,
      });
      fs.writeFileSync("./formatedApi.json", text2);
      console.log("Proses Convert Selesai");
    } else {
      text1 = `Aplikasi: ${project} \nTask: ${story}, Deskripsi:${storyDesc} Status:${storyStatus} \ndi update oleh ${sender}`;
      text2 = JSON.stringify({
        text: text1,
      });
      fs.writeFileSync("./formatedApi.json", text2);
      done = "Proses Convert Selesai";
      console.log(done);
    }
  });
};

module.exports = { converting };
