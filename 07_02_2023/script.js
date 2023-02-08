/*  var diasTotais = 108;
var frequenciAluno = prompt('Informe a quantidade de dias frequentados ao curso: ');
var frequenciaPorcentagem = (frequenciAluno * 100) / diasTotais;

if (frequenciaPorcentagem >= 70) {
    document.write('Aprovado!');
} else if(frequenciaPorcentagem < 70) {
    document.write('Reprovado!');
} else {
    document.write('Informe uma quantidade válida.')
} */


var nota = parseInt(prompt('Informe a nota do estudante.'));
if(nota >= 0 && nota < 4) {
    document.write('Reprovado!');
} else if(nota >= 4 && nota < 7)
    document.write('Recuperação.'); 
else if(nota >= 7 && nota <= 10) {
    document.write('Aprovado.');
} 
 else {
    document.write('Informe uma nota válida.')
}


/* var corFav = prompt('Digite sua cor favorita: ');

switch(corFav) {
    case 'amarelo':
        document.write('Você gosta de sol.');
        break;
    case 'azul':
        document.write('Você gosta do mar.');
        break;
    case 'verde':
        document.write('Você gosta da floresta.');
        break;
    default:
        document.write('Você não gosta de nada.');
}; */



/* var numero = prompt('Digite um numero');

switch(numero) {
    case '01':
        document.write('JANEIRO');
        break;
    case '02':
    document.write('FEVEREIRO');
    break;
    case '03':
        document.write('MARÇO');
        break;
    case '04':
        document.write('ABRIL');
        break;
    case '05':
        document.write('MAIO');
        break;
    case '06':
        document.write('JUNHO');
        break;
    case '07':
        document.write('JULHO');
        break;
    case '08':
        document.write('AGOSTO');
        break;
    case '09':
        document.write('SETEMBRO');
        break;
    case '10':
        document.write('OUTUBRO');
        break;
    case '11':
        document.write('NOVEMBRO');
        break;
    case '12':
        document.write('DEZEMBRO');
        break;

    default:
        document.write('Não há mês com este formato.')
} */




/* var conceito = prompt('Informe o conceito: ');

switch (conceito) {
    case 'A':
        document.write('Atendido.');
        break;
    case 'PA':
        document.write('Parcialmente Atendido.');
        break;
    case 'NA':
        document.write('Não Atendido.');
        break;

    default:
        document.write('Não há conceito para o formato especificado.')
} */