const filesys = require('fs')

const book = {
    title: "ego is the enemy",
    author: "ryan Holiday"
}
const mybookJOSN = JSON.stringify(book)
filesys.writeFileSync("1-Json.json", mybookJOSN)
const data = filesys.readFileSync('1-Json.json')
console.log("data is " + (JSON.parse(data.toString())).title)

