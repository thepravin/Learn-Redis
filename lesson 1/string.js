const client = require("./client");

async function init(){
    client.set("name","Pravin Nalawade");
    const result = await client.get("name");
    console.log("String -> ", result);
}

init();