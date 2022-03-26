// 4.Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
// 1.	A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// 2.	A mensagem "Reprovado", se a média for menor do que sete;
// 3.	A mensagem "Aprovado com Distinção", se a média for igual a dez.

let nota1 = prompt("nota1");
let nota2 = prompt("nota2");
nota1 = parseInt(nota1); // transforma string em inteiro (numero)
nota2 = parseInt(nota2); // transforma string em inteiro (numero)
let media = (nota1 + nota2) / 2;
let mensagem = "nada";

if (media == 10) {
  mensagem = "Aprovado com Distinção";
} else {
  if (media >= 7) {
    mensagem = "Aprovado";
  } else {
    mensagem = "Reprovado";
  }
}

alert(mensagem);
