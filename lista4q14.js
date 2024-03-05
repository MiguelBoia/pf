const repita = (txt,n) => (n==0) ? "  " : txt + repita(txt, n-1)

console.log(repita(" Te amo ",1000) )