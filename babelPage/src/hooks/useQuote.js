import React, { useState } from "react";

export default function useQuote() {

    const [idiomaOrigen, setIdiomaOrigen] = useState();
    const [idiomaDestino, setIdiomaDestino] = useState();
    const [cantidadPalabras, setCantidadPalabras] = useState(50);
    const [documentoEditable, setDocumentoEditable] = useState();

    const seleccionIdiomaOrigen = (idioma) => {
        setIdiomaOrigen(idioma)
    }
    const seleccionIdiomaDestino = (idioma) => {
        setIdiomaDestino(idioma)
    }

    const asignacionCantidadPalabras = (event) => {
        setCantidadPalabras(parseInt(event.target.value, 10))
    }

    const seleccionDocumentoEditable = (editable) => {
        setDocumentoEditable(editable)
    }


    function Calcular() {

        const idioma_origen = idiomaOrigen;
        const idioma_destino = idiomaDestino;
        const palabras = cantidadPalabras;
        const editable = documentoEditable;

        if (!idiomaOrigen || !idiomaDestino || !editable) {
            console.log('Ingrese una combinación de idiomas valida o seleccione si es editable')
            return
        }

        if (editable === 'Si') {
            switch (idioma_origen + '-' + idioma_destino) {
                case 'Español-Inglés':
                    console.log(palabras * 0.7)
                    console.log(palabras * 0.8)
                    console.log(palabras * 0.9)
                    break;
            }
        } else if (editable === 'No') {
            console.log('No jala si jala')
        }

    }

    return {
        idiomaOrigen,
        idiomaDestino,
        seleccionIdiomaOrigen,
        seleccionIdiomaDestino,
        cantidadPalabras,
        setCantidadPalabras,
        asignacionCantidadPalabras,
        documentoEditable,
        setDocumentoEditable,
        seleccionDocumentoEditable,
        Calcular
    }

}
