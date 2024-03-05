/* Crie uma função recursiva que receba um número inteiro N e imprima todos os
números naturais de 0 até N em ordem crescente.
*/
const naturais = (n)=>  {
    if (n==0) return console.log(n);
    else {console.log (n(n-1))}
}
console.log(naturais(10))
/*const imprimirNaturais = (N, atual = 0) => {
    if (atual > N) return; // Condição de parada da recursão
    console.log(atual);    // Imprime o número atual
    imprimirNaturais(N, atual + 1); // Chama a função para o próximo número
};

// Exemplo de uso:
const N = 10;
imprimirNaturais(N); // Imprime os números de 0 a 5
*/