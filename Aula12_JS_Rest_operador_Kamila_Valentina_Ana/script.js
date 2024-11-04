//function listaAlunos(aluno1, aluno2,aluno3,aluno4){
//  console.log("Sejam bem vindo todos os alunos!");
//   console.log(aluno1);
//  console.log(aluno2);
// console.log(aluno3);
// console.log(aluno4);
// }

//na função não temos como saber de antemão quantos parâmetros serão passado
//aí entra em ação o Rest Operator que irá transformador os parâmetros em um array 

//vamos reescrever a função utilizando  Rest Operator
function listaAlunos(...alunos) {
    console.log("Sejam bem vindo todos os alunos!");
    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[3]);
}
listaAlunos("Kamila", "Valentina", "Maria", "João");

//outro exemplo: sorteador de múmeros primos menores do que 20

function sorteadorPrimo(...numeros) {
    console.log(numeros);
    //const numeroSorteado = Math.random()*numeros.length;

    const numeroSorteado = Math.floor(Math.random()*numeros.length)
    console.log('Posição $numeroSorteado');
    console.log(`Número primo: ${numeros[numeroSorteado]}`);
}
// só tem dois divisores, 2 e por ele mesmo
sorteadorPrimo(2, 3, 5, 7, 11, 13, 17,19)




//atividade


function listaAlunos(...alunos) {
    console.log(alunos);
 
}
listaAlunos("Kamila", "Valentina", "Maria", "João");

function sorteadorAlunos(...listaAlunos){
const alunoSorteado = Math.floor(Math.random()*aluno.length)
    console.log('Posição $alunoSorteado');
    console.log(`aluno primo: ${aluno[alunoSorteado]}`);
}

console.log(alunoSortear);
console.log(kamilla);
console.log9()