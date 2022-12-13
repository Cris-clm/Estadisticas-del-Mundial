
/*------------Ingreso de datos para acceder al programa--------------*/
let usuario = "clm@gmail.com"
let password = "clm1234"

let usuarioIngreso = ""
let passwordIngreso = ""
let intentos = 3

// /*------------Se corrobora los datos y se cuenta la cantidad de intentos de ingreso --------------*/
 do {
    usuarioIngreso = prompt("Ingrese Su Usuario")
    passwordIngreso = prompt("ingrese Su clave")
    intentos--

} while (usuarioIngreso != usuario && passwordIngreso != password && intentos > 0)

 if (usuario === usuarioIngreso && password === passwordIngreso) {

    let numberEntrada = Number(prompt("Coloqua un numero para ver las estadística de cada \n grupo del Mundial en la primera Fase \n Estadística De Grupo A #1 \n Estadística De Grupo B #2 \n Estadística De Grupo C #3 \n Estadística De Grupo D #4 \n Estadística De Grupo E #5 \n Estadística De Grupo F #6"))

    //-------------------------------------Array de objetos grupos del Mundial ----------------------------
    //-----------------------------------------Datos de la Primera Fase------------------------------------

    const arrayGrupoA = [
        { nombre: "Paises bajos", Pos: 1, Ganados: 2, empatado: 1, perdidos: 0, puntos: 7 },
        { nombre: "senegal", Pos: 2, Ganados: 2, empatado: 0, perdidos: 1, puntos: 6 },
        { nombre: "Ecuador", Pos: 3, Ganados: 1, empatado: 1, perdidos: 1, puntos: 4 },
        { nombre: "Catar", Pos: 4, Ganados: 0, empatado: 0, perdidos: 3, puntos: 0 }
    ]

    const arrayGrupoB = [
        { nombre: "Inglaterra", Pos: 1, Ganados: 2, empatado: 1, perdidos: 0, puntos: 7 },
        { nombre: "Estados Unidos", Pos: 2, Ganados: 1, empatado: 2, perdidos: 0, puntos: 5 },
        { nombre: "Irán", Pos: 3, Ganados: 1, empatado: 0, perdidos: 2, puntos: 3 },
        { nombre: "Gales", Pos: 4, Ganados: 0, empatado: 1, perdidos: 2, puntos: 1 }
    ]

    const arrayGrupoC = [
        { nombre: "Argentina", Pos: 1, Ganados: 2, empatado: 1, perdidos: 0, puntos: 6 },
        { nombre: "Polonia", Pos: 2, Ganados: 1, empatado: 1, perdidos: 1, puntos: 4 },
        { nombre: "Mexico", Pos: 3, Ganados: 1, empatado: 1, perdidos: 1, puntos: 4 },
        { nombre: "Arabia Saudita", Pos: 4, Ganados: 1, empatado: 0, perdidos: 2, puntos: 3 }
    ]

    const arrayGrupoD = [
        { nombre: "Francia", Pos: 1, Ganados: 2, empatado: 0, perdidos: 1, puntos: 6 },
        { nombre: "Australia", Pos: 2, Ganados: 2, empatado: 0, perdidos: 1, puntos: 6 },
        { nombre: "Túnez", Pos: 3, Ganados: 1, empatado: 1, perdidos: 1, puntos: 4 },
        { nombre: "Dinamarca", Pos: 4, Ganados: 0, empatado: 1, perdidos: 2, puntos: 1 }
    ]

    const arrayGrupoE = [
        { nombre: "Japón", Pos: 1, Ganados: 2, empatado: 0, perdidos: 1, puntos: 6 },
        { nombre: "España", Pos: 2, Ganados: 1, empatado: 1, perdidos: 1, puntos: 4 },
        { nombre: "Alemania", Pos: 3, Ganados: 1, empatado: 1, perdidos: 1, puntos: 4 },
        { nombre: "Costa Rica", Pos: 4, Ganados: 1, empatado: 0, perdidos: 2, puntos: 3 }
    ]


    const arrayGrupoF = [
        { nombre: "Marruecos", Pos: 1, Ganados: 2, empatado: 1, perdidos: 0, puntos: 7 },
        { nombre: "Croacia", Pos: 2, Ganados: 1, empatado: 2, perdidos: 0, puntos: 5 },
        { nombre: "Bélgica", Pos: 3, Ganados: 1, empatado: 1, perdidos: 1, puntos: 4 },
        { nombre: "Canadá", Pos: 4, Ganados: 0, empatado: 0, perdidos: 2, puntos: 0 }
    ]

    //*********************************************************************************************
    //*********************************************************************************************




    /*------------ Se produce la elección de un numero para elegir el Array y el grupo del Mundial----------------------*/

    switch (numberEntrada) {

        case 1:

            //estadisticas de grupo A
            if (numberEntrada === 1) {
                alert("bienvenido al Grupo A \n Los Equipos de este Grupo son \n Paises bajos \n senegal \n Ecuador\n Catar");
               
                // funciona refleja los puntos de algun equipos que elige
               
                let nombreEquipo = prompt("Ingrese equipo que desea saber los Puntos\n recuerde que los equipos de este grupos son \n Inglaterra \n Estados Unidos \n Ecuador \n Catar").toLowerCase();
                let equipoBuscado = arrayGrupoA.find(equipo => equipo.nombre.toLowerCase() === nombreEquipo)
                alert(nombreEquipo + " tiene  " + equipoBuscado.puntos + " puntos")
                
                // Eligiendo el número indicado se podra acceder a la posibilidad de  ver los puntos totales del Grupo
                
                let numberPuntosTotal = Number(prompt("Si eliges el # 1 podremos ver el total de Puntos del Grupo A \n "))
                if (numberPuntosTotal === 1) {
                    let totalGrupoA = 0;
                    for (let i = 0; i < arrayGrupoA.length; i++) {
                        console.table(arrayGrupoA[i].puntos)
                        totalGrupoA = totalGrupoA + arrayGrupoA[i].puntos
                    }
                    alert("El total de Puntos del gurpo A es " + totalGrupoA);
                }
                
                // Se accede aver el mayor puntaje otenido por un equipo 

                let mayorPuntaje = Number(prompt("si deseas conocer el Equipo con mayor puntaje \n solo introduce el #1 \n O presiona Cualquier tecla para salir \n  y recargar el programa  "));
                if (mayorPuntaje === 1) {
                    function max(arrayGrupoA) {
                        const mayor = arrayGrupoA.reduce((objetoInicial, objetoActual) => (objetoInicial.puntos > objetoActual.puntos) ? objetoInicial : objetoActual).puntos;
                        return mayor
                    }
                    let resultado = max(arrayGrupoA)
                    alert("El mayor puntaje en la Primera fase es " + resultado)
                    let nombreBuscado = arrayGrupoA.find(arrayGrupoA => arrayGrupoA.puntos === resultado)
                    alert(" Y este pais es " + nombreBuscado.nombre)
                }
            }
            break;
        //*********************************************************************************************
        //*********************************************************************************************
        case 2:
            //estadisticas de grupo B
            if (numberEntrada === 2) {
                alert("bienvenido al Grupo B \n Los Equipos de este Grupo son \n Inglaterra \n Estados Unidos \n Irán\n Gales");
                // funciona refleja los puntos de algun equipos que elige
                let nombreEquipo = prompt("Ingrese equipo que desea saber los Puntos\n recuerde que los equipos de este grupos son \n Inglaterra\n Estados Unidos \n Irán \n Gales").toLowerCase();
                let equipoBuscado = arrayGrupoB.find(equipo => equipo.nombre.toLowerCase() === nombreEquipo)
                alert(nombreEquipo + " tiene  " + equipoBuscado.puntos + " puntos")
               
                  // Eligiendo el número indicado se podra acceder a la posibilidad de  ver los puntos totales del Grupo

                let numberPuntosTotal = Number(prompt("Si eliges el # 1 podremos ver el total de Puntos del Grupo B \n "))
                if (numberPuntosTotal === 1) {
                    let totalGrupoB = 0;
                    for (let i = 0; i < arrayGrupoB.length; i++) {
                        console.table(arrayGrupoB[i].puntos)
                        totalGrupoB = totalGrupoB + arrayGrupoB[i].puntos
                    }
                    alert("El total de Puntos del gurpo B es " + totalGrupoB);
                }

                 // Se accede aver el mayor puntaje otenido por un equipo 

                let mayorPuntaje = Number(prompt("si deseas conocer el Equipo con mayor puntaje \n solo introduce el #1 \n O presiona Cualquier tecla para salir \n  y recargar el programa  "));
                if (mayorPuntaje === 1) {
                    function max(arrayGrupoB) {
                        const mayor = arrayGrupoB.reduce((objetoInicial, objetoActual) => (objetoInicial.puntos > objetoActual.puntos) ? objetoInicial : objetoActual).puntos;
                        return mayor
                    }
                    let resultado = max(arrayGrupoB)
                    alert("El mayor puntaje en la Primera fase es " + resultado)
                    let nombreBuscado = arrayGrupoB.find(arrayGrupoB => arrayGrupoB.puntos === resultado)
                    alert(" Y este pais es " + nombreBuscado.nombre)
                }
            }

            break;
        //*********************************************************************************************
        //*********************************************************************************************

        case 3:
            //estadisticas de grupo C
            if (numberEntrada === 3) {
                alert("bienvenido al Grupo C \n Los Equipos de este Grupo son \n Argentina  \n Polonia \n Mexico\n Arabia Saudita");
                // funciona refleja los puntos de algun equipos que elige
                let nombreEquipo = prompt("Ingrese equipo que desea saber los Puntos\n recuerde que los equipos de este grupos son \n Argentina \n Polonia \n Mexico\n Arabia Saudita").toLowerCase();
                let equipoBuscado = arrayGrupoC.find(equipo => equipo.nombre.toLowerCase() === nombreEquipo)
                alert(nombreEquipo + " tiene  " + equipoBuscado.puntos + " puntos")

            // Eligiendo el número indicado se podra acceder a la posibilidad de  ver los puntos totales del Grupo

                let numberPuntosTotal = Number(prompt("Si eliges el # 1 podremos ver el total de Puntos del Grupo C \n "))
                if (numberPuntosTotal === 1) {
                    let totalGrupoC = 0;
                    for (let i = 0; i < arrayGrupoC.length; i++) {
                        console.table(arrayGrupoC[i].puntos)
                        totalGrupoC = totalGrupoC + arrayGrupoC[i].puntos
                    }
                    alert("El total de Puntos del gurpo C es " + totalGrupoC);
                }

                 // Se accede aver el mayor puntaje otenido por un equipo 

                let mayorPuntaje = Number(prompt("si deseas conocer el Equipo con mayor puntaje \n solo introduce el #1 \n O presiona Cualquier tecla para salir \n  y recargar el programa  "));
                if (mayorPuntaje === 1) {
                    function max(arrayGrupoC) {
                        const mayor = arrayGrupoC.reduce((objetoInicial, objetoActual) => (objetoInicial.puntos > objetoActual.puntos) ? objetoInicial : objetoActual).puntos;
                        return mayor
                    }
                    let resultado = max(arrayGrupoC)
                    alert("El mayor puntaje en la Primera fase es " + resultado)
                    let nombreBuscado = arrayGrupoC.find(arrayGrupoC => arrayGrupoC.puntos === resultado)
                    alert(" Y este pais es " + nombreBuscado.nombre)
                }
            }
            break;
        //*********************************************************************************************
        //*********************************************************************************************

        case 4:
            //estadisticas de grupo D
            if (numberEntrada === 4) {
                alert("bienvenido al Grupo D \n Los Equipos de este Grupo son \n Francia \n Australia \n Túnez\n Dinamarca");
                // funciona refleja los puntos de algun equipos que elige
                let nombreEquipo = prompt("Ingrese equipo que desea saber los Puntos\n recuerde que los equipos de este grupos son \n Francia\n Australia\n Túnez\n Dinamarca").toLowerCase();
                let equipoBuscado = arrayGrupoD.find(equipo => equipo.nombre.toLowerCase() === nombreEquipo)
                alert(nombreEquipo + " tiene  " + equipoBuscado.puntos + " puntos")

                // Eligiendo el número indicado se podra acceder a la posibilidad de  ver los puntos totales del Grupo

                let numberPuntosTotal = Number(prompt("Si eliges el # 1 podremos ver el total de Puntos del Grupo D \n "))
                if (numberPuntosTotal === 1) {
                    let totalGrupoD = 0;
                    for (let i = 0; i < arrayGrupoD.length; i++) {
                        console.table(arrayGrupoD[i].puntos)
                        totalGrupoD = totalGrupoD + arrayGrupoD[i].puntos
                    }
                    alert("El total de Puntos del gurpo D es " + totalGrupoD);
                }

                // Se accede aver el mayor puntaje otenido por un equipo 

                let mayorPuntaje = Number(prompt("si deseas conocer el Equipo con mayor puntaje \n solo introduce el #1 \n O presiona Cualquier tecla para salir \n  y recargar el programa  "));
                if (mayorPuntaje === 1) {
                    function max(arrayGrupoD) {
                        const mayor = arrayGrupoD.reduce((objetoInicial, objetoActual) => (objetoInicial.puntos > objetoActual.puntos) ? objetoInicial : objetoActual).puntos;
                        return mayor
                    }
                    let resultado = max(arrayGrupoD)
                    alert("El mayor puntaje en la Primera fase es " + resultado)
                    let nombreBuscado = arrayGrupoD.find(arrayGrupoD => arrayGrupoD.puntos === resultado)
                    alert(" Y este pais es " + nombreBuscado.nombre)
                }
            }

            break;
        //*********************************************************************************************
        //*********************************************************************************************

        case 5:
            //estadisticas de grupo E
            if (numberEntrada === 5) {
                alert("bienvenido al Grupo E \n Los Equipos de este Grupo son \n Japón \n España \n Alemania\n Costa Rica");
                // funciona refleja los puntos de algun equipos que elige
                let nombreEquipo = prompt("Ingrese equipo que desea saber los Puntos\n recuerde que los equipos de este grupos son \n Japón\n España\n Alemania\n Costa Rica").toLowerCase();
                let equipoBuscado = arrayGrupoE.find(equipo => equipo.nombre.toLowerCase() === nombreEquipo)
                alert(nombreEquipo + " tiene  " + equipoBuscado.puntos + " puntos")

                // Eligiendo el número indicado se podra acceder a la posibilidad de  ver los puntos totales del Grupo

                let numberPuntosTotal = Number(prompt("Si eliges el # 1 podremos ver el total de Puntos del Grupo E \n "))
                if (numberPuntosTotal === 1) {
                    let totalGrupoE = 0;
                    for (let i = 0; i < arrayGrupoE.length; i++) {
                        console.table(arrayGrupoE[i].puntos)
                        totalGrupoE = totalGrupoE + arrayGrupoE[i].puntos
                    }
                    alert("El total de Puntos del gurpo E es " + totalGrupoE);
                }

                // Se accede aver el mayor puntaje otenido por un equipo 

                let mayorPuntaje = Number(prompt("si deseas conocer el Equipo con mayor puntaje \n solo introduce el #1 \n O presiona Cualquier tecla para salir \n  y recargar el programa  "));
                if (mayorPuntaje === 1) {
                    function max(arrayGrupoE) {
                        const mayor = arrayGrupoE.reduce((objetoInicial, objetoActual) => (objetoInicial.puntos > objetoActual.puntos) ? objetoInicial : objetoActual).puntos;
                        return mayor
                    }
                    let resultado = max(arrayGrupoE)
                    alert("El mayor puntaje en la Primera fase es " + resultado)
                    let nombreBuscado = arrayGrupoE.find(arrayGrupoE => arrayGrupoE.puntos === resultado)
                    alert(" Y este pais es " + nombreBuscado.nombre)
                }
            }

            break;
        //*********************************************************************************************
        //*********************************************************************************************

        case 6:
            //estadisticas de grupo f
            if (numberEntrada === 6) {
                alert("bienvenido al Grupo F \n Los Equipos de este Grupo son \n Marruecos \n Croacia \n Bélgica\n Canadá ");
                // funciona refleja los puntos de algun equipos que elige
                let nombreEquipo = prompt("Ingrese equipo que desea saber los Puntos\n recuerde que los equipos de este grupos son \n Marruecos \n Croacia\n Bélgica\n Canadá").toLowerCase();
                let equipoBuscado = arrayGrupoF.find(equipo => equipo.nombre.toLowerCase() === nombreEquipo)
                alert(nombreEquipo + " tiene  " + equipoBuscado.puntos + " puntos")
                
                // Eligiendo el número indicado se podra acceder a la posibilidad de  ver los puntos totales del Grupo

                let numberPuntosTotal = Number(prompt("Si eliges el # 1 podremos ver el total de Puntos del Grupo F \n "))
                if (numberPuntosTotal === 1) {
                    let totalGrupoF = 0;
                    for (let i = 0; i < arrayGrupoF.length; i++) {
                        console.table(arrayGrupoF[i].puntos)
                        totalGrupoF = totalGrupoF + arrayGrupoF[i].puntos
                    }
                    alert("El total de Puntos del gurpo F es " + totalGrupoF);
                }

                // Se accede aver el mayor puntaje otenido por un equipo 

                let mayorPuntaje = Number(prompt("si deseas conocer el Equipo con mayor puntaje \n solo introduce el #1 \n O presiona Cualquier tecla para salir \n  y recargar el programa  "));
                if (mayorPuntaje === 1) {
                    function max(arrayGrupoF) {
                        const mayor = arrayGrupoF.reduce((objetoInicial, objetoActual) => (objetoInicial.puntos > objetoActual.puntos) ? objetoInicial : objetoActual).puntos;
                        return mayor
                    }
                    let resultado = max(arrayGrupoF)
                    alert("El mayor puntaje en la Primera fase es " + resultado)
                    let nombreBuscado = arrayGrupoF.find(arrayGrupoF => arrayGrupoF.puntos === resultado)
                    alert(" Y este pais es " + nombreBuscado.nombre)
                }
            }

            break;
        //*********************************************************************************************
        //*********************************************************************************************

        default:
            alert("Esos numeros no estan contemplados")
    }
} else {
    alert("Ya probaste 3 veces, intentá más tarde")
}
    //******************************************************************************************
    //******************************************************************************************

