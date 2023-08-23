const nesimo = (n) => {
   if (n==1)
   return 3 
   else return nesimo (n-1)*2
}

console.log(nesimo(3))