// Configurar la codificacion de caracteres de la entrada estandar
process.stdin.setEncoding('utf8');

// Escuchamos la entrada de datos : data

process.stdin.on('data', (input)=>{
    // Quitamos el espaciado cuando accionamos el enter

    input = input.trim();
    console.log(`El dato de entra es ${input}`);
    // process.exit() termina el proceso
    process.exit()
})




