//teste git graph

// FUNÇÃO RECURSIVA
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));


// O INTERPPRETADOR DO JAVASCRIPT COLOCA AS FUNCOES EM PRIMEIRO E EM SEGUIDA AS VARIAVEIS DECLARADAS SOMENTE COM VAR

say_hello(); 

var say_hello = function(){
    console.log("Hello first")
}

say_hello();

function say_hello() {
    console.log("Hello Second") 
}

say_hello();






//===========================//
//          VARIAVEIS        //
//===========================//
var a = 1;
var a = 2; //var -  permite redeclarar uma variavel - perigoso 

let b = 1; //let -  NÃO permite redeclarar uma variavel - PODE REATRIBUIR VALOR 

const SERVIDOR = "amazon"; //const -  NÃO permite redeclarar uma variavel - NÃO PODE REATRIBUIR VALOR

//===========================//
//    INTERAGIR NO DOM HTML  //
//===========================//
document.getElementById("oi3").innerHTML = "GRAVAR TEXTO"; //grava com base na tag do getElementById
document.write("<br> usado mais pra debug"); //usado mais pra debug


//===========================//
//          SWITCH           //
//===========================//
let expressao;
switch (expressao){
    case a:
        // acao;
        break;
    case b:
        // acao;
        break;
    default:        
        // acao ;           
}

//===========================//
//          IF               //
//===========================//
let condition;
if (condition) {
    //ACAO
} else {
    //ACAO
}

if (condition) {
    //ACAO
} else if (condition) {
    //ACAO
} else{
    //ACAO
}

//===========================//
//          For              //
//===========================//
let array= [1,2,3,4];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

//===========================//
//          ARRAYS           //
//===========================//

//8 METODOS DO ARRAY ITERAR
// FOREACH - MAP - FILTER - REDUCE - SOME - EVERY - FIND

// FOREACH - passa em todos os itens pegando valor e chave 
let arraya1 = ["a","b","c"]
arraya1.forEach(function(item,index){
    console.log(index + ":" + item )
})
arraya1.forEach((item,index) => console.log(index + ":" + item)) 

//MAP - LE O CONTEUDO , FAZ ALGUMA COISA E ATUALIZA NO MESMO LOCAL
const arrayb1 = [1,2,3]
let soma1 =  arrayb1.map(function(item){
    if (item % 2 == 0){
        return item + 1
    }else{
        return item
    }
    
})
console.log(soma1)

//FILTER - SE ATENDER A CONDICAO(TRUE) MANTEM NO ARRAY SENAO RETIRA
const meusItens = [1,2,3,4,5,6]
const pares = meusItens.filter(function(item){
        return item % 2 == 0
})
console.log(pares)

//REDUCE  - primeiro argumento é o resultado do que é feito para cada iteração, esse resultado
//          é disponibilizado para próxima iteração
//          o valor colocado depois da função é o valor inicial do result, se não colocar nada
//          o result inicial fica sendo o primeiro valor do array
const arrayNum = [3,4,5]

const sum = arrayNum.reduce(function(result,item){
    return result + item    
},2)
console.log(sum)

const mult = arrayNum.reduce(function(result,item){
    return result * item    
})
console.log(mult)

const subtr  = arrayNum.reduce((result,item) => { return result - item },50)
console.log(subtr)

// SOME - valida e retorna true se encontra ao menos uma condição

 const hasNegativeNumbers = arrayNum.some(function(item){
     return item < 0
 })
console.log(hasNegativeNumbers)

const hasNegativeNumbers2 = [0,-11,2].some((item) =>  item < 0)
console.log(hasNegativeNumbers2)

// EVERY - valida e retorna true se encontra TODOS em uma condição
let arrayNum2 = [1,2,5,4]
const hasPositiveNumbers = arrayNum2.every(function(item){
    return item >= 0
})
console.log(hasPositiveNumbers)

// FIND  -  busca o item especifico com a condição, se encontrar retorna o conteudo do array
//          se não encontrar retorna undefined
const objeto1 = [{id:1, name: 'roberto'},{id:2, name: 'carol'},{id:3,name: 'gio'}]
// const busca = objeto1.find(function(item){
//     return item.name === 'roberto'
// })
const busca = objeto1.find((item) => item.name === 'roberto')
console.log(busca)


// FINDINDEX  -  busca o item especifico com a condição, se encontrar retorna o INDEX do array
//          se não encontrar retorna -1
const objeto2 = [{id:1, name: 'roberto'},{id:2, name: 'carol'},{id:3,name: 'gio'}]
const busca2 = objeto1.findIndex(function(item){
    return item.name === 'gio'
})
console.log(busca2)

////////////////////////////////////////////////
// FIM 8 METODOS DO ARRAY
////////////////////////////////////////////////

// DESAFIO COM FILTER E MAP
// FAZER UM ARRAY COM O QUADRADO DE NUMEROS SOMENTE INTEIROS POSITIVOS DE UM OUTRO ARRAY
const arrayDesafio = [2,4,4.5,-9,2,-1]
const desafio = arrayDesafio.filter(item => Number.isInteger(item) && item >0).map(item => item * item)
console.log(desafio)
// FIM DESAFIO COM FILTER E MAP


/////////////////////////////////////
/// REST OPERATOR ...  (rest é os ... usados no lugar do argumento)
/// SUBSTITUI OS ARGUMENTOS POR REST OPERATOR
function exec(a,b,c) {
    const argArray = [a,b,c]
    return argArray.reduce((result,item) => result + item)
}
console.log(exec(1,2,4));
/// 
function exec2(...argArray2) {    
    return argArray2.reduce((result,item) => result + item)
}
console.log(exec2(1,2,4));


const lista = [1,2,3,4]; //forma 1 de definir
const lista2 = ["AA","BB","CC","DD"]; //forma 1 de definir
const lista3 = new Array(1,2,3,4,5); //forma 2 de definir

//PEGA CONTEUDO POSICAO PELO INDICE
let xx = lista2[3]; 

//PEGA INDEX DA POSICAO PELO CONTEUDO - SE NAO ENCONTRAR RETORNA -1
console.log("INDEXOF: " + lista2.indexOf("CC"));  // 2
document.write("<br><BR>INDEXOF " + lista2.indexOf("CC")); //1 - 2 - 3 - 4

//SUBSTITUI SEPARADOR entre os itens do array
document.write("<br>JOIN " + lista.join(" - ")); //1 - 2 - 3 - 4

//RETIRA ULTIMO E PODE SER ATRIBUIDO A UMA VARIAVEL
document.write("<br><BR>POP " + lista.pop()); // 4
document.write("<br>" + lista); //1,2,3

//RETIRA PRIMEIRO E REDEFINE TODOS OS INDEXS
document.write("<br><BR>SHIFT " + lista.shift()); // 1
document.write("<br>" + lista); // 2,3

//INSERIR NO FINAL FORMA 1
document.write("<br><BR>PUSH " + lista.push("7")); // 2,3,7
document.write("<br>" + lista);

//INSERIR NO FINAL FORMA 2
let addFinal = lista[lista.length] = 8;
document.write("<br><BR>addFinal  " + addFinal ); //8
document.write("<br>" + lista); // 2,3,7,8

//INCLUI NO PRIMEIRO E REDEFINE TODOS OS INDEXS
document.write("<br><BR>UNSHIFT " + lista.unshift("9"));  // 5 - RETORNA O LENGTH DO ARRAY ATUALIZADO
document.write("<br>" + lista); // 9,2,3,7,8

//DELETA ITEM pelo index E DEIXA ESPAÇO COM UNDEFINED
document.write("<br><BR>DELETE " + delete lista[2]);  // 5 - RETORNA O LENGTH DO ARRAY ATUALIZADO
document.write("<br>" + lista); // 9,2,,7,8
document.write("<br>" + lista[2]); // undefined

//MANIPULAR ARRAY (DELETE E/OU INSERT)  
//PARAMETRO 1 - QUAL POSICAO DE ARRAY VAI INICIAR A AÇÃO (ZERO PRIMEIRO INDICE)
//PARAMETRO 2 - QUANTOS ITENS VAI APAGAR APARTIR DO PARAMETRO 1
//PARAMETRO 3 - ITENS QUE VAI INSERIR
document.write("<br><BR><B>LISTA INTEIRO</B> " + lista); // 9,2,,7,8
document.write("<br><BR>splice1 SOMENTE INSERINDO " + lista.splice(1,0,10));  // SOMENTE INSERINDO
document.write("<br>" + lista); // 9,10,2,,7,8
document.write("<br><BR>splice2 SOMENTE APAGANDO " + lista.splice(3,1)); // SOMENTE APAGANDO 1 ITEM
document.write("<br>" + lista); // 9,10,2,7,8 
document.write("<br><BR>splice3 APAGANDO E INSERINDO " + lista.splice(3,0,4,3)); // APAGANDO E INSERINDO(2 ITENS: 4 E 3)
document.write("<br>" + lista); // 9,10,2,4,3,7,8

document.write("<br><BR><B>LISTA STRING</B> " + lista2); // "AA","BB","CC","DD"
document.write("<br><BR>splice1 " + lista2.splice(2,0,"FF"));  // SOMENTE INSERINDO
document.write("<br>" + lista2); // AA,BB,FF,CC,DD
document.write("<br><BR>splice2 " + lista2.splice(2,2)); // SOMENTE APAGANDO
document.write("<br>" + lista2); // AA,BB,DD
document.write("<br><BR>splice3 " + lista2.splice(1,2,"XX","YY","ZZ")); //APAGANDO 2 E INSERINDO 3
document.write("<br>" + lista2); // AA,XX,YY,ZZ

//JUNTAR ARRAYS (concatenar)
document.write("<br><br><b>LISTA 1:</b> " + lista); //9,10,2,4,3,7,8
document.write("<br><b>LISTA 3:</b> " + lista3); //1,2,3,4,5
let listaJuncao = lista.concat(lista3);
document.write("<br><BR><b>lista Juncao: </b> " + listaJuncao); //9,10,2,4,3,7,8,1,2,3,4,5 
let listaJuncao2 = listaJuncao.concat(lista2);
document.write("<br><BR><b>lista Juncao: </b> " + listaJuncao2);  //9,10,2,4,3,7,8,1,2,3,4,5,AA,XX,YY,ZZ

// FATIAR ARRAY
// PEGA DO INDEX INFORMADO EM DIANTE
document.write("<br><BR><B>LISTA STRING</B> " + lista2); // "AA","BB","CC","DD"
document.write("<br><BR>SLICE - FATIAR: " + lista2.slice(2));  // YY,ZZ
document.write("<br>" + lista2); // AA,BB,FF,CC,DD

// FATIAR ARRAY
// PEGA INTERVALO 
// PARAM1 : ONDE INICIA (INDEX INICIA EM 0) / PARAM2: ONDE TERMINA(INDEX INICIA EM 1)
document.write("<br><BR><B>LISTA STRING APARTIR DE INDEX</B> " + lista); // 9,10,2,4,3,7,8
document.write("<br><BR>SLICE - FATIAR INTERVALO: " + lista.slice(2, 4));  // 2,4
document.write("<br>" + lista); // 9,10,2,4,3,7,8

// ORDENAR ARRAY (ALFABETICO, SE TIVER NUMERO O 10 POR EXEMPLO FICARIA A FRENTE DO 9, POIS O PRIMEIRO CARACTER 1)
document.write("<br><BR><B>LISTA DESORDENADA:</B> " + lista); // 9,10,2,4,3,7,8
document.write("<br><BR><B>LISTA ORDENADA:</B> " + lista.sort()); // 10,2,3,4,7,8,9

// ORDENAR ARRAY DESCENDENTE (obs vide alfabetico)
document.write("<br><BR><B>LISTA DESORDENADA:</B> " + lista); // 10,2,3,4,7,8,9
document.write("<br><BR><B>LISTA ORDENADA REVERSE:</B> " + lista.reverse()); // 9,8,7,4,3,2,10

 // HACK PARA ORDENAR ARRAY DE NUMEROS
 document.write("<br><BR><B>LISTA NUMERICA DESORDENADA:</B> " + lista); // 9,10,2,4,3,7,8
 document.write("<br><BR><B>LISTA NUMERICA ORDENADA HACK:</B> " + lista.sort(function(a, b){ return a - b })); // 

 // PEGAR MAIOR NUMERO EM ARRAY DE NUMEROS
 document.write("<br><BR><B>LISTA NUMERICA:</B> " + lista); // 9,10,2,4,3,7,8
 document.write("<br><BR><B>MAIOR NUMERO:</B> " + Math.max.apply(null,lista)); //menor numero usar o min  

 // FILTRAR - USA FUNCAO  EX. NUMEROS MAIORES QUE 5
 document.write("<br><BR><B>LISTA NUMERICA:</B> " + lista); // 9,10,2,4,3,7,8
 let maior20 = lista.filter(filtragem);
 document.write("<br><BR><B>FILTRAR NUMERO:</B> " + maior20 ); //menor numero usar o min  
 function filtragem(value,index,array){
    return value > 5;
 }


 // SPREAD OPERATOS (espalha array) COPIA O CONTEUDO DE UM ARRAY PARA OUTRO
 // SE FIZER SIMPLESMENTE UMA ATRIBUIÇÃO DE UM ARRAY = OUTRARRAY , ELE VIRA UM CLONE
 // OU SEJA SE UDAR O VALOR DO PRIMEIRO ARRAY O SEGUNDO TAMBEM É ALTERADO, NO CASO DO SPREAD
 // ISSO NAO ACONTECE POR SER UM ARRAY DIFERENTE


 //CLONANDO
const arra1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arra2;
arra2 = arra1;  
arra1[0]="TEST"
console.log(arra1);
console.log(arra2)
//FAZENDO UM COPIA INDEPENDENTE COM SPREAD OPERATOR
const arra3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arra4;
arra4 = [...arra3];  
arra3[0]="TEST"
console.log(arra3);
console.log(arra4);


//===========================//
//          OBJETOS          //
//===========================//

const CARRO = {   // normalmente CONST 
    marca: "ford", 
    modelo: "ka", 
    placa: "LMF-9089", 
    buzina: function () 
    {
      // alert("biiii" + " 0 " + this.modelo + " buzinou");
    }
}
console.log(CARRO.marca);
CARRO.buzina()

// DESCONSTRUINDO(DESTRUCTURING ASSIGNMENT) OBJETO colocando nome diferente na variavel
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  //const highToday = HIGH_TEMPERATURES.today;
  //const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
  const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;  

// DESCONSTRUINDO OBJETO(DESTRUCTURING ASSIGNMENT) com o mesmo nome de variavel
const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  //const highToday = HIGH_TEMPERATURES2.today;
  //const highTomorrow = HIGH_TEMPERATURES2.tomorrow; 
  const { today, tomorrow} = HIGH_TEMPERATURES2;  

// DESCONSTRUINDO OBJETO(DESTRUCTURING ASSIGNMENT) aninhado

  const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
    const {today: {low: lowToday2, high: highToday2} } = LOCAL_FORECAST;
  
  //const lowToday2 = LOCAL_FORECAST.today.low;
  //const highToday2 = LOCAL_FORECAST.today.high;
  console.log(lowToday2 + "-" + highToday2);

// DESCONSTRUINDO ARRAY
    let aa = 8, d = 6;
    // Only change code below this line
    console.log("a:" + aa + ' d: ' + d); //a:8 d: 6
    [aa,b] = [b,aa];
    console.log("aa:" + aa + ' d: ' + d); //a:6 d: 8

    const [arr1,arr2] = [1,2,3];
    console.log("arr1:" + arr1); //arr1:1
    console.log("arr2:" + arr2); //arr2:2

//===========================//
//     FUNCTIONS(FUNÇÃO)     //
//===========================//


function eventClick(){
    alert("clicou");
    document.body.style.background = "yellow";
    let h = document.getElementById("oi");
    h.append("clicou");
}

//=============================================//
//     operador condicional TERNARIO           //
//=============================================//


let idade, sexo, exercito;
idade = 17;
sexo = "M"

eleitor = (idade >= 18) ? (sexo !== "F" ? "SIM" : "NAO") : "NAO";
console.log(eleitor);

//=============================================//
//     Operador de =                           //
//=============================================//

// =  atribui valor

// == compara valor, mas não tipo

// === comprar valor e tipo


//===========================//
//     CHAMA FUNÇÃO PELO JS  //
//===========================//

let n,m;
n=3;
m=7;

document.getElementById("oi2").innerHTML = minhaFuncao(n,m)
// alert(a);

function minhaFuncao(a, b) {
    return a + b;
}


//==============================================//
//     EVENTOS TEMPO setTimeout - setInterval   //
//==============================================//
/* EVENTOS DE TEMPO COM JAVASCRIPT

Os eventos de tempo permitem a execução do código em intervalos de tempo
especificados .Esses intervalos de tempo são chamados de eventos de cronometragem.

Os dois métodos-chave para usar com JavaScript são:

setTimeout (function, tempo em milisegundos)
-> Executa uma função, depois de esperar um número especificado de milissegundos.

setInterval(function, milliseconds)
-> É o mesmo que setTimeout(), mas repete a execução da função continuamente.
*/

setTimeout(function(){    
    document.getElementById("oi4").innerHTML = "passou 3 segundos";
},3000);

document.getElementById("oi5").style.color = "blue";
let cor = document.getElementById("oi5").style.color;
setInterval(function(){
    if (document.getElementById("oi5").style.color == "blue"){
        document.getElementById("oi5").style.color = "red";      
    }else{       
        document.getElementById("oi5").style.color = "blue";           
    }        
},1000);


//==============================================//
//     CONVERSAO STRING TO INT                  //
//==============================================//
let variavelString = "1";
let  soma = 2 + parseInt(variavelString);
document.write("<br><br>soma:" + soma);


//==========================================================================================//
//     class   (classe precisa ser declarada antes de uma chamada de criação de objeto)     //
//==========================================================================================//

class Carro{
    constructor(valor1,valor2,valor3){
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){
        return this.modelo + " buzinou";
    }
}

const uno = new Carro("Fiat","Uno",2001);
console.log(uno);
console.log(uno.ano);
console.log(uno.buzina());



//==========================================================================================//
//     DATAS E HORAS                                                                        //
//==========================================================================================//
 //4:35:57 https://www.youtube.com/watch?v=McKNP3g6VBA

let data = new Date();
document.write("<br><br>Data: " + data);
document.write("<br><br>Ano: " + data.getFullYear());   //ano

let diaDaSemana = ["Domingo","Segunda-Feira","Terça-Freira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];
document.write("<br><br>Dia da Semana: " + diaDaSemana[data.getDay()]); // Dia da semana retorna numerico ([0]Domingo até [6]sabado)

let mes = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
document.write("<br><br>Dia da Semana: " + mes[data.getMonth()]); // Mês retorna numerico ([0]Janeiro até [11]Dezembro)

let diaMes = data.getDate(); // dia do mês (traz valor correto)
document.write("<br><br>Dia do mes: " + diaMes);

let horas = data.getHours(); 
let minutos = data.getMinutes(); 
let segundos = data.getSeconds();
let milliseconds = data.getMilliseconds();

//data padrao br
let dataBr = data.toLocaleString('pt-BR')
document.write("<br><br>dataBr: " + dataBr);
let timeBrCurta = data.toLocaleString('pt-BR', { timeStyle: 'short'})
document.write("<br><br>TimeBrCurta: " + timeBrCurta);
let dataBrCurta = data.toLocaleString('pt-BR', { dateStyle: 'short'})
document.write("<br><br>TimeBrCurta: " + dataBrCurta);

//comparar datas
let hoje = new Date();
let vencimento = new Date (2022,11,01); //  01/12/2022
if (hoje > vencimento){
    document.write("<br><br>COMPARA DATA: conta vencida");  
}else{
    document.write("<br><br>conta em dia");  
}

//diferença entre datas (transformar em millisegundos)
let dtInicial = new Date();
let dtFinal = new Date (2023,01,21); 

let dtDiferencaTempo = dtFinal.getTime() - dtInicial.getTime();
document.write("<br><br>dtDiferenca MILLI: " + dtDiferencaTempo);
let dtDiferenca = Math.ceil(dtDiferencaTempo / (24 *60 * 60* 1000));   //Math.cell so pra arredondar 
document.write("<br><br>dtDiferenca dias: " + dtDiferenca);


//=====================================//
//          OBJECT TO json             //
//=====================================//

const CARRO2 = {   // normalmente CONST 
    marca: "ford", 
    modelo: "ka", 
    placa: "LMF-9089", 
    buzina: function () 
    {
      // alert("biiii" + " 0 " + this.modelo + " buzinou");
    }
}
document.write("<br><br>OBJETO: " + CARRO2);
let texto = JSON.stringify(CARRO2);
document.write("<br><br>OBJETO CONVERTIDO JSON: " + texto);

//=====================================//
//          texto(json) TO OBJECT      //
//=====================================//

let obj = JSON.parse(texto);
document.write("<br><br>OBJETO CONVERTIDO de texto JSON: " + obj.placa);


//=====================================//
//          requisição ajax (api)      //
//=====================================//

// const ajax = new XMLHttpRequest();
// ajax.open('GET','https://viacep.com.br/ws/21321052/json/');
// ajax.send();

// let objApi;
// ajax.onload = function(){
//     document.getElementById("oi6").innerHTML =  this.responseText;
//     objApi = JSON.parse(this.responseText);    
//     document.getElementById("oi7").innerHTML =  "Logradouro: " + objApi.logradouro;
// }

//================================================================//
//          fazendo uma função chamada pelo onclick do botao      //
//================================================================//
//let f = callApiCep();
function callApiCep(cep){
    console.log("passou");
    //let cep = document.getElementById('cep').value;
    const chamadaAjax = new XMLHttpRequest();
    chamadaAjax.open('GET', 'https://viacep.com.br/ws/' + cep + '/json/');
    chamadaAjax.send();
    let retApi;
    chamadaAjax.onload = function(){
        retApi = JSON.parse(this.responseText);
        document.getElementById('bairro').innerHTML = retApi.bairro;   
    }
}


//================================================================//
//          REGEX                                                 //
//================================================================//

let word = "titanic"
let myRegexp = /t[a-z]*i/g 
let myresult = word.match(myRegexp)
console.log(myresult)

//VALIDA USUARIO
// 1- SE TIVER NUMEROS, SOMENTE PODE ESTAR NO FINAL
// 2- LETRAS PODEM ESTAR EM MAIUSCULO E MINUSCULO
// 3- TER AO MENOS 2 CARACTERES, SE FOREM 2 NÃO PODE TER NUMEROS
let username = 'RobertoBurgos'
//let username = 'RobertoBurgos23'
//let username = 'Ro'
//let username = 'R1'
//let usercheck = /^[A-Za-z]{2,}\d*$/
let usercheck = /^[A-Za-z]{2,}\d*$/ig
console.log(usercheck.test(username))
console.log(username.match(usercheck))

//range {} .
let ohhStr = "Ohh no"
let ohCheck = /Oh{1,} no/gi 
console.log(ohCheck.test(ohhStr))
console.log(ohhStr.match(ohCheck))

//erro de digitacao
let escrita = "Problemas"
let escritaCheck = /Problema?s/g
console.log(escritaCheck.test(escrita));
console.log(escrita.match(escritaCheck));





//metodo test
let test1Str = "freeCodeCamp";
let test1Regex = /Code/;
test1Regex.test(test1Str);  // retorna true ou false

//busca literal
let test2Str = "Hello, my name is Kevin.";
let test2Regex = /Kevin/;
test2Regex.test(test2Str); //true

//busca literal com ou "|"
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result3 = petRegex.test(petString); // true  

//busca ignorando o CaseSensitive flag i 
let test4Str = "Hello, my name is KEVIN.";
let test4Regex = /kevin/;
test4Regex.test(test4Str); //false
let test5Regex = /kevin/i;
test5Regex.test(test4Str); //true

//EXTRAIR BUSCA
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
let ret6 = ourStr.match(ourRegex); // ["expressions"]

//EXTRAIR mais do que o primeiro flag g
let test7Str = "Repeat, Repeat, Repeat";
let ourRegex7 = /Repeat/g;
test7Str.match(ourRegex7);  //["Repeat", "Repeat", "Repeat"]

//CARACTER CORING "." RETORNA QQ COISA (CADA PONTO SIGNIFICA UM CARACTER)
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);  //TRUE
huRegex.test(hugStr);  //TRUE

//INTERVALOS DE CARACTERES especificados 
let bagStr = "bag";
let bigStr = "big";
let bogStr = "bog";
let bugStr = "bug";

let bgRegex = /b[aiu]g/g;
console.log(bagStr.match(bgRegex)); //["big"]
console.log(bigStr.match(bgRegex)); //["bag"]
console.log(bogStr.match(bgRegex)); // null
console.log(bugStr.match(bgRegex)); //["bug"]

//INTERVALOS DE CARACTERES com intervalo entre caracateres
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex2 = /[a-e]at/;
catStr.match(bgRegex2); //["cat"]
batStr.match(bgRegex2); // ["bat"]
matStr.match(bgRegex2); // null

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex); // ["Jenny8675309"]

//regex "diferente" negativa  ^ dentro do colchete funciona como negativa
let quoteSample = "3 blind mice.";
let myRegex2 = /[^0-9aeiou]/gi;  
let result = quoteSample.match(myRegex2); // corresponda a todos os caracteres que não sejam um número ou uma vogal. 

//PEGA O MESMO CARACTER MAS SO EM SEQUENCIA , TEM Q COLOCAR A FLAG g PARA TRAZER TODOS
let difficultSpelling = "Mississippi";
let myRegex3 = /s+/g; // Change this line
let result4 = difficultSpelling.match(myRegex3);
console.log(result4)

//PEGA ATE ONDE ENCONTRAR *
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // ["goooooooo"]
gPhrase.match(goRegex); //["g"]
oPhrase.match(goRegex); //null

// LAZY MATCHING (PEGA A STRING QUE ENCONTRAR PRIMEIRO e para por ai "?" antes do "*" )  
let text7 = "<h1>Winter is coming</h1>";
let myRegex7 = /<.*?>/; 
let result7 = text7.match(myRegex7);
console.log(result7)  // [ '<h1>',  index: 0,  input: '<h1>Winter is coming</h1>',  groups: undefined ]

//regex pesquisa se string ta no inicio  ^ fora de colchete dentro somente das  / / 
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result8 = calRegex.test(rickyAndCal);
console.log(result8)  //true

//regex pesquisa se string ta no final  $ fora de colchete dentro somente das  / / 
let rickyAndCal9 = "Cal and Ricky both like racing.";
let calRegex9 = /racing$/; // Change this line
let result9 = calRegex.test(rickyAndCal9);
console.log(result9)  //true

//PEGAR TODAS AS LETRAS E NUMEROS E O UNDERSCORE COM A CLASS \w
//Obs \w pega [A-Za-z0-9_] e o \W pega ao contrario
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); //true
shortHand.test(numbers); //true
longHand.test(varNames); //true
shortHand.test(varNames); //true

//PEGAR TODOS NUMEROS COM A CLASS \d
//Obs \d pega [0-9] e o \D pega ao contrario
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // 
let result11 = movieName.match(numRegex).length;

//PEGAR TODOS espacos em branco
let movieName2 = "2001: A Space Odyssey";
let numRegex2 = /\s/g; 
let result1122 = movieName2.match(numRegex2).length;
console.log(result1122);

//PEGAR TODOS DIFERENTE DE espacos em branco
let movieName21 = "2001: A Space Odyssey";
let numRegex21 = /\S/g; 
let result11221 = movieName21.match(numRegex21).length;
console.log(result11221);

//PEGAR intervalo de repeticoes de um caracter ou numero
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6} no/gi; // Change this line
let result111 = ohRegex.test(ohStr);

//pode ter um naõ o caracater
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let resulta = favRegex.test(favWord);
console.log(resulta)


//AIND ESTA COM ERRO
//desafio achar qual caracter se repete mais levando em consideração Maiuscula e minuscula
let textx = "aasadasdbaabdbbBooob11111Bppasdj";
let maiorOcorrencia = 0;
let letraMaiorOcorrencia;
for(let indexx=0;indexx < textx.length; indexx++){    
    let arrRegexx = new RegExp(textx[indexx],'ig');
    
    let repetiçõesLetra = textx.match(arrRegexx).length;            
    //console.log(repetiçõesLetra)
    if (repetiçõesLetra > maiorOcorrencia) {

        letraMaiorOcorrencia = textx[indexx];
        maiorOcorrencia = repetiçõesLetra;
        console.log("repetiçõesLetra:" + repetiçõesLetra);
        console.log("maiorOcorrencia:" + maiorOcorrencia);
        console.log("letraMaiorOcorrencia:" + letraMaiorOcorrencia)
    }    
}
console.log("letraMaiorOcorrencia: " + letraMaiorOcorrencia);


/////////// DEBUG

///VER TIPO DE VARIAVEL
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
console.log(typeof(seven));
console.log(typeof(three));


// ARRAY INDEXOF
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');  
fruits.indexOf('oranges');
fruits.indexOf('pears');
//indexOf('dates')retorna -1, indexOf('oranges')retorna 2e indexOf('pears')retorna 1(o primeiro índice no qual cada elemento existe).



//// rocket seat

//////////////////////////////
// Nullish Coalescing Opeator

//exemplo sem Nullish Coalescing Opeator para tratar conteudo
// mas se colocar 0 ele tb não considera valido
// [],0,null, undefined,''  são considerados falsy
const idade1 = null;
console.log("Sua idade é:" + (idade1 || "conteudo nao aceito"));

//se precisar usar o 0 da pra usar o Nullish Coalescing Opeator
// null e undefined são falsy
const idade2 = 0;
console.log("Sua idade é:" + (idade2 ?? "conteudo nao aceito"));

//////////////////////////////
// Objetos

const user = {
    nome: "Roberto",
    idade: 41,
    nickname: "Juca",
    endereco: {
        rua: "Floripa",
        numero: 71
    }
}

//verificar se existe uma informacao no objeto IN
let existeInfo = ('nome' in user);
console.log(existeInfo);

//retornar chaves do objeto
let chaves = Object.keys(user);
console.log(chaves);

//retornar conteudo objeto
let valores = Object.values(user);
console.log(valores);
document.getElementById("appl").innerHTML = JSON.stringify(valores); 

//retornar conteudo objeto
let objetoToArray = Object.entries(user);
console.log(objetoToArray);


//////////////////////////////
// Destruturação

// sem Destruturação
//const endereco = user.endereco;
//console.log(endereco);

// com Destruturação 1 campo
//const {endereco} = user
//console.log(endereco);

// com Destruturação + de 1 campo
//const {endereco, idade} = user
//console.log({endereco, idade});

// com Destruturação + de 1 campo renomeando campo
//const {endereco, idade: age} = user
//console.log({endereco, age});

// com Destruturação + de 1 campo e trazer possiveis campos inexistentes e trazendo um valor default se nao existir no objetc
//const {endereco, idade: age, nickname = "Burgos"} = user
//console.log({endereco, age, nickname});

// com Destruturação na função
    // sem desDestruturação
    // function idade(usuario) {
    //     return usuario.idade;
    // }
    // console.log(idade(user));

    // com desDestruturação
    function idades({idade}) {
        return idade;
    }
    console.log(idades(user));


//////////////////////////////
// rest operator em objetos - para pegar o restante do que foi destruturado

const {endereco,nickname, ...rest} = user
console.log(rest);

//////////////////////////////
// rest operator em arrays - para pegar o restante do que foi destruturado

const array1 = [1,2,3,4,5,6,7,8,9];
//const first = array1[0]
const [first,second, ...restante] = array1
console.log(first + "-" + second + "-" + restante);
const [firstx,, ...restantex] = array1
console.log(firstx + "-" + restantex);



//////////////////////////////
// Short Sintax - para nome de variave do ojeto igua a variavel do valor

const name3 = "Roberto";
const idade3 = 41;

//long sintax
// const obj3 = {
//     nome3: nome3,
//     idada3: idade3,
// }

//short sintax
const obj3 = {
    name3,
    idade3,
}


//////////////////////////////
// Optional Chaining para tratar se nao achar campo no json

const user2 = {
    nome: "Roberto",
    idade: 41,
    nickname: "Juca",
    endereco: {
        rua: "Floripa",
        numero: 71,
        // cep: {
        //     code: 21321054,
        //     city: "RJ",
        // }
    }
}

console.log(user2.endereco?.cep?.code ?? 'Não encontrado')

//////////////////////////////
// Metodos de array

const array4 = [1,2,3,4,5]

//forma 1
for (const i of array4){
    console.log(i);
}

//forma 2  - nao ébom para retornar valor
array4.forEach(item => {
    console.log(item);
})

//forma 3 com o map consegue fazer um retorno , mas tem q manter a mesma qtd de itens
const novoArray = array4.map(item1 => {
 return item1 * 2
})
console.log(novoArray);


//https://www.youtube.com/watch?v=37SwqREHRGI&t=3756s  48 min


