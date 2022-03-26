// 3.Crie um script que leia duas notas do usuário e calcule a média do aluno.
let nota1 = prompt("diga nota 1");
let nota2 = prompt("diga nota 2");
nota1 = parseInt(nota1); // transforma string em inteiro (numero)
nota2 = parseInt(nota2); // transforma string em inteiro (numero)
let media = (nota1 + nota2) / 2;
alert("sua media foi: " + media);
