const classificarTriangulo = (lado1,lado2,lado3) => {
    if (lado1== lado2 && lado2== lado3) { 
        return "EQUILATERO"
        
    }
    if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) { 
        return "ESCALENO"
        
    } 
    else {
        return "ISOCELES"}

    }
    