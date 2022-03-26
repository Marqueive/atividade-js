//3.    Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.
var nome = prompt("diga seu nome");
var senha = prompt("diga sua senha");
while (nome == senha) {
  alert("naodeu");
  nome = prompt("diga seu nome");
  senha = prompt("diga sua senha");
}
