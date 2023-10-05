const { isUtf8 } = require('buffer');
const filesys = require('fs');

filesys.writeFileSync("abc.txt", "hello my name is amandeep");

const dataRead = filesys.readFileSync("abc.txt")
console.log(typeof (dataRead))
console.log(dataRead.toString());

command = process.argv[2]
console.log(command)

if (command == "add") {
    console.log("adding notes!")
} else if (command == "remove") {
    console.log("removing notes!")
}


command = process.argv[2]

if (command == "list") {
    console.log("this is list")
}

yargs.command({
    command: 'list',
    describe: 'show list names',
    handler: function () {

        console.log("amandeep " + " singh" + this.yargs)
    }
})

console.log(yargs.argv)


// CRUD operation for file generation using File 
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



// error handline 

const filesys = require('fs')

const book = {
    title: "ego is the enemy",
    author: "ryan Holiday"
}

mycommandv = process.argv[2];

if (mycommandv == "create") {
    const mybookJOSN = JSON.stringify(book)
    filesys.writeFileSync("1-Json.json", mybookJOSN)
    console.log("file created !")
} else if (mycommandv == "read") {
    const data = filesys.readFileSync('1-Json.json')
    console.log("data in file is ", data.toString())
}
else if (mycommandv == "update") {
    const data = filesys.readFileSync('1-Json.json')
    const mydata = JSON.parse(data.toString())
    mydata.title = "Rich Dad Poor Dad";
    mydata.author = "Robert Kavasaki"
    filesys.writeFileSync("1-Json.json", JSON.stringify(mydata))
    console.log("file updated !")
} else if (mycommandv == "delete") {
    try {
        filesys.unlinkSync("1-Json.json")
        console.log("file Deleted !")
    } catch (e) {
        console.log("you are trying to delete file which is not created ! Ha Ha Ha ");
    }
} else {
    console.log("choose \n 1. create\n 2. update\n 3. read \n 4. delete\n");
}

//add notes from another file 

const notes = require('./notes.js')


console.log(notes.getNotes())
console.log(notes.addNotes("rich dad poor dad", " by robert kavasaki"))






