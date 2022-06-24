const fs = require('fs')
const colors = require('colors')



/* -----------------con return newPromise

const crearArchivoTabla = (numero) => {

    return new Promise( (resolve, reject) => {
        console.log('==========================')
        console.log(`tabla del ${numero}`)
        console.log('==========================')

        let salida = ''
        for (let index = 1; index <= 10; index++) {
            salida += `${numero} x ${index} = ${numero * index} \n`
        }
        console.log(`${salida}`)


        fs.writeFileSync(`tabla-${numero}.txt`, salida,)

        resolve(`tabla-${numero}.txt`)
    })


} */


// Con async , se agrega try catch para manejar el error que pueda salir
/* const crearArchivoTabla = async (numero) => {
    try {
        console.log('==========================')
    console.log(`tabla del ${numero}`)
    console.log('==========================')

    let salida = ''
    for (let index = 1; index <= 10; index++) {
        salida += `${numero} x ${index} = ${numero * index} \n`
    }
    console.log(`${salida}`)


    fs.writeFileSync(`tabla-${numero}.txt`, salida,)

    return (`tabla-${numero}.txt`)
    } catch (error) {
        throw error
    }

} */



const crearArchivoTabla = async (numero, listar = false, hasta = 10 ) => {
    try {
        
    let salida = ''
    let consola = ''

        for (let index = 1; index <= hasta; index++) {
            salida += `${numero} x ${index} = ${numero * index} \n`
            consola += `${colors.cyan(numero)} ${'x'.green} ${colors.red(index)} ${'='.green} ${numero * index} \n`
        } 
    
    /* for (let index = 1; index <= 10; index++) {
        salida += `${colors.cyan(numero)} ${'x'.green} ${colors.red(index)} ${'='.green} ${numero * index} \n`
    } */

    if (listar === true) {
            
        console.log('=========================='.green)
        console.log(`tabla del:  `.green, colors.cyan(numero))
        console.log('=========================='.green)
        console.log(`${consola}`)
    }


    fs.writeFileSync(`./salida/tabla-${numero}.txt`, salida,)

    return (`tabla-${numero}.txt`)
    } catch (error) {
        throw error
    }


}

module.exports = {
    crearArchivoTabla
}


