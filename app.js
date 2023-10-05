// const yargs = require('yargs')


// command = process.argv[2]

// if (command == "list") {
//     console.log("this is list")
// }

// yargs.command({
//     command: 'list',
//     describe: 'show list names',
//     builder: {
//         title: {
//             describe: "note"
//         }
//     },
//     handler: function (argv) {

//         console.log("amandeep " + " singh" + argv)
//     }
// })

// console.log(yargs.argv)

const fielsystem = require('fs')

mycommand = process.argv[2];


if (mycommand == "add") {
    fielsystem.writeFileSync("abc.txt", "folder added by user");
    console.log("file created successfully !! :-) ")
} else if (mycommand = "remove") {
    fielsystem.unlinkSync("abc.txt");
    console.log("file removed successfully !")
} else {
    console.log("please give valid command")
}





