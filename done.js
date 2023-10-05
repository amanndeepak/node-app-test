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







