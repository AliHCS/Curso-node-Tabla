const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')



console.clear()



/* console.log(process.argv) */
/* console.log(argv) */
/* console.log('Numero de yargs', argv.numero) */
/* console.log(process.argv)
 */
/* const [,, arg3 = 5 ] = process.argv
const [, numero = 5 ] = arg3.split('=') */
/* console.log(numero) */
/* const numero = 5 */

crearArchivoTabla( argv.b, argv.l,argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log(err))


