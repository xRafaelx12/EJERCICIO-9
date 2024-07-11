  export default class INUMERO{
    leerNumero1()
    {
        return prompt ("INGRESE EL NUMERO 1 ");
    }
    leerNumero2(){
        return prompt ("INGRESE LA NUMERO 2 ");
    }
     leerNumero3(){
        return prompt ("INGRESE EL NUMERO 3 ");
    }
    leerNumero4(){
        return prompt ("INGRESE EL NUMERO 4 ");
    }

    datosDelNumero(n1,n2,n3,n4,cn,sn)
    { return `
        <br> numero1: ${n1}
        <br> Numero2: ${n2}
        <br> Nota2: ${n3}
        <br> Nota3 : ${n4}
        <br> Suma de numero: ${cn}
        <br> Concatenacion: ${sn}
         `;
    }
}