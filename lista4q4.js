// calcular o fatorial de um número

const fatorial = (n) => {
    if (n==0) return 1
    else return n*fatorial(n-1)
}

console.log(fatorial(10))


// q9,q11,q14,q15,q16