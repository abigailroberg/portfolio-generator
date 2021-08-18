const fs = require('fs')
const { resolve } = require('path')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if error, reject the Promise
            if (err) {
                reject(err)
                return
            }

            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    }) 
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./dist/index.html', err => {
            if(err) {
                reject(err)
                return
            }

            resolve({
                ok: true,
                message: 'File copied!'
            })
        })
    })
}

module.exports = { writeFile, copyFile }