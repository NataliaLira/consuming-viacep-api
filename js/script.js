/* consuming api |consumo da api */
$("#cep").focusout(
    function (){
        /* checking if cep input has the normal brazilian zi-code length | validação se campo cep foi preenchido (verificando número de caracteres por meio do atributo .length) */
        if(this.value.length == 8){
            /* using this | fazendo uso do elemento this (em JQuery precisamos usar $(this) e assim nos referimos ao elemento à quem recebeu o evento)*/
            $.ajax({
                url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/',
                type: 'get',
                dataType: 'json',
                success: function(response){
                //dica: podemos usar console.log(response) para verificar se há resposta e como está a resposta da api antes de atribuírmos valores aos elementos
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

