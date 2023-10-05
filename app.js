const filesys = require('fs')

const book = {
    title: "ego is the enemy",
    author: "ryan Holiday"
}

mycommandv = process.argv[2];

if (mycommandv == "create") {
    const mybookJOSN = JSON.stringify(book)
    filesys.writeFileSync("1-Json.json", mybookJOSN)
    console.log("file created!")
} else if (mycommandv == "read") {
    const data = filesys.readFileSync('1-Json.json')
    console.log("data in file is", data.toString())
}
else if (mycommandv == "update") {
    const data = filesys.readFileSync('1-Json.json')
    const mydata = JSON.parse(data.toString())
    mydata.title = "Rich Dad Poor Dad";
    mydata.author = "Robert Kavasaki"
    filesys.writeFileSync("1-Json.json", JSON.stringify(mydata))
    console.log("file updated")
} else if (mycommandv == "delete") {
    filesys.unlinkSync("1-Json.json")
    console.log("file Deleted !")
} else {
    console.log("choose \n 1. create\n 2. update\n 3. read \n 4. delete\n");
}






