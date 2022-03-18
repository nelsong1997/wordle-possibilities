const fs = require('fs')

fs.readFile('./words.txt', (err, data) => {
    if (err) return
    let dataStr = data.toString()
    //https://www.textfixer.com/tutorials/javascript-line-breaks.php
    let jsonStr = '["' + dataStr.replace(/(\r\n|\n|\r)/gm,'","') + '"]'
    fs.writeFileSync('./words.json', jsonStr)
})