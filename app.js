const yargs = require('yargs')


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







