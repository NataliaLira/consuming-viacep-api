/* declarando variáveis */
let cep = document.getElementById("cep");
let verificaCep = document.getElementById("verificaCep");
let rua = document.getElementById("rua");
let bairro = document.getElementById("bairro");

/* configurando como a mensagem será recebida e interpretada */
// let config = { 
//     headers: {
//         "Content-Type": "application/json"
//     },
//     method: "GET"
// }

/* consumindo api com JS Vanilla */
// verificaCep.onclick = function (){
//     fetch('https://viacep.com.br/ws/'+cep.value+'/json/', config)
//     .then(function (response){
//         return response.json();
//     })
//     .then(function (endereco){
//         rua.value = endereco.logradouro;
//         bairro.value = endereco.bairro;
//     })
// }

/* resolvendo com JQuery */
$("#cep").focusout(
    function (){
        /* validação se campocep foi preenchido (verificando número de caracteres por meio do atributo .length) */
        if(this.value.length == 8){
            /*consumo de api - assincrona
            fazendo uso do elemento this (em JQuery precisamos usar $(this) e assim nos referimos ao elemento à quem recebeu o evento)*/
            $.ajax({
                url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/',
                type: 'get',
                dataType: 'json',
                success: function(response){
                // podemos usar console.log(response) para verificar se há resposta antes de atribuírmos valores aos elementoss
                $('#rua').val(response.logradouro) 
                $('#bairro').val(response.bairro)
                },
                error: function (erro){
                    console.log(erro)
                }
            })
        } else {
            /* zeramos os campos que bairro e rua (para garantir que a cada reenvio incorreto perdem informações anteriores) */
            rua.value = "";
            bairro.value = "";
            alert("Preencha o  campo CEP corretamente!")
        }
    }
)

