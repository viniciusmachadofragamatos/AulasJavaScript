/* Aula 2 -  4 Tipos de saida*/
document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>!";
alert(10+5)

/*Aula 7 - Operadores */
var idade, eleitor, resultado;
idade=65;
eleitor = (idade<=18) ? "não eleitor" : "eleitor";
resultado = (idade === 63 || idade === 70)/*&&(e portão and) 
||(ou portao or) !(portão not negar)*/
//resultado = (idade > 60 && idade < 70);
//alert("A resposta é:"+eleitor+"A idade dele é"+idade);
alert(resultado)

/* Aula 8 - Funçõs
*/
//função é executada quando algo o invoca/chama
function soma(valor1,valor2) {
    return valor1 + valor2;
};
document.getElementById("texto").innerHTML = soma(10,10);
function real_para_dolar(real,cotaçãoRPD){
    return real * cotaçãoRPD
};
function dolar_para_real(dolar,cotaçãoDPR){
    return dolar * cotaçãoDPR
};
function alertaHello (){
    alert("Ola Tudo bém?");
};
function Fahrenheit_Para_Celsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32)
};
function Fahrenheit_Para_Kelvin(valorFahrenheit){
    return (5/9) *(valorFahrenheit + 459.67)
};
function minha_Funçao () {
    var x = 2;//variavel local ou seja só funciona dentro do escopo
};
var x = Fahrenheit_Para_Celsius(77);
var y = Fahrenheit_Para_Kelvin(77); 
alert("A temperatura é de "+ x + "Graus Celsius");
alert("A temperatura é de:"+y+"Fahrenheit");
alert("A temperatura é de"+z+"Kelvin");
alert("De Real para Dolar é:"+real_para_dolar(10,0.18));
alert("De Dolar para Real é:"+dolar_para_real(1.8,5.57));
/* Aula 9 -Objetos
objetos são como se fossem uma variavel com
varias propriedades dentro dos objetos posso ter um metodo 
que seria uma função dentro de uma propried*/
const carrro = {
    marca: "ford",
    modelo: "ka", 
    ano: 2015, 
    placa: "ABC - 1234", 
    buzina: function () {alert("BIIIIIIIIIIIIIII")},
    completo: function () {
        return "A marca é "+this.marca+" e o modelo é :"+this.modelo;
    }
};
function alertaHello () {

 alert("Bom dia")
};
carrro.buzina ();
console.log(carrro.completo());


/*Aula 11 - Arrays 
 Arrays são uma lista de itens com controle por ordem de posicão 
dentro dele.
Ex: const lista = ["arroz","feijão","macarrão,"leite"] 
                     0        1          2        3

*/
const lista = ["primeiro","segundo","terceiro","quarto"];
console.log(lista[0])  
console.log(lista[3])
/*Simplifica e é bem melhor que isar assim os arrays:
var item1 = "primeiro";
var item2 = "segundo";
var item3 = "terceiro";
var item4 = "quarto"

arrays podem ter arrays dentro deles ou assim como tambem funções e etc...
e pode usar assim:
const lista = [
    "primeiro",
    "segundo",
    "terceiro",
    "quarto"
]; 
pode se adicionar elementos em uma lista com:
const lista = [];

podemos criar um array:

const lista = new Array ("primeiro","segundo","terceiro","quarta")
lista[0] = "adicionei"
lista[-1] = "adicionei o ultimo"

assim como trocar elementos:

const lista = ["primeiro","segundo","terceiro","quarto"];
lista[0] = "substituto do primeiro"
*/
var pessoa = ["Vinicius", "Machado", 16]//array
var pessoa1 = {nome:"Vinicius", sobrenome:"Machado",idade:16}//objeto
pessoa.nome;//chamando objeto
pessoa [0]//chamando um array
pessoa.length
alert(pessoa.length - 1);//comprimento do meu array
pessoa.push("Novo item");
alert(pessoa)

/*Aula14 - Switch
É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco
de verificação. Caso a condição não seja compatível não será executada e o valor padão
será acionado.
*/
function verificacor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();
    switch (cor) {
        case 'azul':
            document.body.style.backgroundColor = 'blue';
            break;
        case 'vermelho':
            document.body.style.backgroundColor = "red";
            break;
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
        default:
            document.getElementById("teste14").innerHTML = "Esta cor não esta disponivel"
            break}}
        
    //switch case compara com valor comparativo (===), ou seja tem que ser exatamente igaul, até tipo
function determinaVariavel(){    
    switch (x) {
        case 0:
            document.getElementById("teste14").innerHTML = "variavel 0"
            break;
        default:
            document.getElementById("teste14").innerHTML = "nao foi encotrado"
            break;
        }}
function diaDaSemana(){
    var dia = new Date().getDay();
    console.log(dia);
    switch(dia) {
        case 0:
            document.getElementById('teste14').innerHTML = "hoje é domingo"
            break;
        case 1:
            document.getElementById('teste14').innerHTML = "hoje é segunda"
            break;
        case 2:
            document.getElementById('teste14').innerHTML = "hoje é terça"
            break;
        case 3:
            document.getElementById('teste14').innerHTML = "hoje é quarta"
            break;
        case 4:
            document.getElementById('teste14').innerHTML = "hoje é quinta"
            break;
        case 5:
            document.getElementById('teste14').innerHTML = "hoje é sexta"
            break;
        case 6:
            document.getElementById('teste14').innerHTML = "hoje é sabado"
            break;
        default:
            document.getElementById('teste14').innerHTML = "Não sei que dia é hoje..."
    }
}
/* Aula15 - Laço de Repetição for
Laços oferecem um jeito facil e rapido de executar uma ação repetidas vezes
*/
//for(let i=0; i<11; i++) {
//    document.getElementById("teste15").innerHTML += i
//}
var ano = new Date().getFullYear();
//de baixo (1900) para cima (ano)
//for(let i = 1900; i<=ano; i++){
//   document.getElementById("ano").innerHTML += "<option value=' " +i+ " '>"+i+"</option>";

//de cima (ano) para baixo (1900)
//for(let i = ano; i >= 1900; i--){
//    document.getElementById("ano").innerHTML += "<option value=' " +i+ " '>"+i+"</option>";
//}
//const carros = ["Gol", "Fusca","Brasília","Del rey","Chevette"];
//var tamanho = carros.length
//for(let i = 0; i<tamanho;i++){
//    document.getElementById("teste15").innerHTML += "<br>"+ carros[i]
//}
/*Aula 16 - Eventos de tempo com JavaScript

Os eventos de tempo permitem a execução do código em intervalos de tempo especificados. esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são: 
setTimeout(function, milliseconds)
->Executa uma função, depois de esperar um numero especificado de milissegundos.

setInterval(function,milliseconds)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.

*/
function rodartempo(){
    tempo = document.getElementById('tempo').innerHTML = "Começou a rodar"
//ATIVA A FUNÇÃO APENAS 1 VEZ QUANDO DER O TEMPO NECESSÁRIO
    setTimeout(function() {
        document.getElementById('tempo').innerHTML = "Executou o setTimeout()"
        document.body.style.backgroundColor = 'yellow'
    }, 5000);
}

function parartempo() {
    clearTimeout(tempo);
    document.getElementById('tempo').innerHTML = "Parou a contagem!"
} 

function rodartempo2 () {
    tempo = setInterval(function (){
    var cronometro = document.getElementById("tempo").innerHTML;
    var soma = parseInt(cronometro) + 1;
    document.getElementById("tempo").innerHTML = soma
    }, 1000)
}

function parartempo2 (){
    clearInterval(tempo);

}
//cronometro regressivo
function pararcronometro1(){
  clearInterval(tempo);  
};
function cronometro1 () {
    tempo = setInterval(function () {
        var cronometroregressivo = document.getElementById("tempo").innerHTML;
        var soma1 = parseInt(cronometroregressivo) - 1;
        if(soma1 == 0) {
            pararcronometro1();
            document.getElementById("tempo").innerHTML = "Tempo Esgotado";
        }
        document.getElementById("tempo").innerHTML = soma1;
    },1000)
}
/* Aula 17 - Classes Em JavaScript 

Classes são como fabricas para criar objetos, ou seja funções especiais para criação de objetos
assim como uma fabrica precisa de maquinas para construir os objetos, as classes no JavaScript usam um metodo chamado constructor() para fabricar os objetos
*/

//fabrica de carro(objeto)
class Fabrica{
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina (){
        return this.modelo+"buzinou: Biiiiiiiiiiii";
    }
}

//fabrica isso:
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}

//é chamada assim:
const uno = new Fabrica("Fiat", "Uno", 2001)
const gol = new Fabrica("Volkswagen", "Gol", "2013")
console.log(gol)
console.log(gol.buzina())

//alterando:
gol.ano = 2014
console.log(gol);
//DECLARAÇÕES DE CLASSES SÃO NAO ISSADAS, OU SEJA PARA CONSTRUIR VOCE PRECISA TER A FABRICA,
//SEMPRE SER DECLARADAS ANTES DE SER CHAMADAS
//Aula 18 - Manipulação de datas

//Horario que esta agora dia da semana/ dia / mês / ano / horário 
let data = new Date()
console.log(data)

//pega o ano atual com 4 dígitos
let year = data.getFullYear();
console.log(year)

//pega o mês atual - de 0 a 11
let mes = data.getMonth();
const mesesDoAno = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
]
console.log(mesesDoAno[mes]);

//pegar dia do mês - 1 até 31
let diaMes = data.getDate();
console.log(diaMes);

//pegar o dia da semana - 0 a 6
let diaSemana = data.getDay();
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
console.log(diasDaSemana[diaSemana]);

//pegar a hora
let hora = data.getHours();
console.log(hora);

//pegar minutos - 0 até 59
let minutos = data.getMinutes();
console.log(minutos);

//pegar segundos- 0 até 59
let segundos = data.getSeconds();
console.log(segundos);

//pegar milisegundos - 0 até 999
let milisegundo = data.getMilliseconds();
console.log(milisegundo);

//Pegar a data no padrão brasileiro - DIA / MES / ANO
let dataBR = data.toLocaleString('pt-BR',{dateStyle:'short'});
console.log(dataBR)
//pode usar timeStyle para mostrar só a hora
//outra forma:
//PEGAR OS VALORES SEPARADOS
d = new Date
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();
function addZero(x) {return x<10 ? '0'+x : ''+x;}

let dataPadrãoBR = diaMes + "/" + addZero(mes) + "/" + ano;
console.log(dataPadrãoBR)
//porem o mes é de 0 a 11 e o dia nao aparece o 0 para numeros menores que 10

//COMPARAR DATAS - MAIOR OU MENOR. EX:VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2025, 9, 15);
if(hoje > vencimento){
    console.log("Sua conta está vencida!")
} else {
    console.log("Ainda não venceu, tudo certo!")
}

//DIFERENÇA ENTRE DUAS DATAS EM DIAS 
var dataInicial = new Date();
var dataFinal = new Date(2025, 11, 31)
var diferencaTime = dataFinal.getTime() - dataInicial.getTime()
var diferencadias = Math.ceil( diferencaTime / (24 * 60* 60 * 1000));
console.log(diferencadias+ "dias")

/*Aula 19 -JSON
JSON Means JavaScript Object Notation ==> notação de objeto JavaScript.
Explicando de um modo simples JSON é basicamente uma forma de converter um objeto em texto e o contrio também , um texto em um objeto.

Usado para transmitir dados entre sistemas de formas simples, já que o formato de texto é lido por      pratiamente toda linguagem de programação. 
Para trabalhar com JSON no JavaScript usamos dois métodos:

JSON.parse() -> Converte texto no padrão JSON em objetos
JSON.stringify() -> Converte objetos em texto padrão JSON
*/
const car = {
    marca:"Fiat",
    modelo : "Uno",
    ano : "2001",
    motor : ["1.0","1.4","1.6"]
}
document.getElementById('area').innerHTML = car;
//é exibido como [object Object], e isso se deve pois não se consegue ler um objeto de forma escrita, pois é abstrato, só a linguagem de programação consegue entender o conteudo propriedades, e etc, então precisamos transformar em um padrão de texto usando o metodo JSON.

//CONVERSÃO DE OBJETO.JSON ==> TEXTO.JSON
let texto = JSON.stringify(car);
document.getElementById('area').innerHTML = texto;
console.log(texto.modelo)

//nao vai pq nao é mais texto e sim objeto
//CONVERSÃO DE TEXTO.JSON ==> OBJETO.JSON

let obj = JSON.parse(texto)
console.log(obj.modelo)

//pegando um valor do objeto
console.log(obj.motor[2]);

//usando na pratica o JSON:
//site viacep usa textos.json para dados

function buscarCEP () {
    let Entrada = document.getElementById('RecebeDado').value;
    const ajax = new XMLHttpRequest();
    ajax.open('GET','https://viacep.com.br/ws/'+Entrada+'/json/')
    ajax.send();
    ajax.onload = function () {
    //document.getElementById('viaacep').innerHTML = this.responseText;
    //let obj = JSON.parse(this.responseText);
    //alert(obj.ddd)
    document.getElementById('paragrafo').innerHTML = this.responseText;
    //TRANSFORMEI O TEXTO EM OBJETO, E PEGUEI OS VALORES QUE EU QUERIA
    let obj = JSON.parse(this.responseText);
    let logradouro = obj.logradouro
    let cidade = obj.localidade
    let estado = obj.uf
    document.getElementById('paragrafo').innerHTML = " Logradouro :"+logradouro+" cidade :"+ cidade + " estado :"+estado
}}
