// Solicitar a nota do aluno

let nota = parseFloat(prompt("Insira sua Nota"));

// Verificar se foi aprovado, reprovado ou recuperação

if (nota >=7) {
    alert("aprovado");
} else if(nota>= 5) {
    alert ("Recuperação");
} else {
    alert("Reprovado");
}