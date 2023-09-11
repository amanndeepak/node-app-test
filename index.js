const FileSystem = require('fs')

FileSystem.writeFileSync('mynotes.txt', 'welcome to the world of programming by aman !');
FileSystem.appendFileSync('mynotes.txt', '  Pro level Programmer - 12 sept 2023');