const form  = document.getElementById('form-plugin');
const nomeForm = document.getElementById('nome-completo');
let formEValido = false;

$(document).ready(function() {
    
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    function validaNome(nomeCompleto){
        const nomeComoArray = nomeCompleto.split(' ');
        return nomeComoArray.length >= 2;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const valorNome = document.getElementById('nome-completo');
        const valorEmail = document.getElementById('email');
        const valorTelefone = document.getElementById('telefone');
        const valorCpf = document.getElementById('cpf');
        const valorEndereco = document.getElementById('endereco');
        const valorCep = document.getElementById('cep');

    formEValido =validaNome(nomeForm.value);
    if (formEValido) {
        valorNome.value = '';
        valorEmail.value = '';
        valorTelefone.value = '';
        valorCpf.value = '';
        valorEndereco.value = '';
        valorCep.value = '';
        alert ('Formulário enviado');
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message-nome').style.display = "block";
        nomeEndereco.style.border = '1px solid red';
    }
    })

    nomeForm.addEventListener('keyup', function(e){
        console.log(e.target.value);
        formEValido =validaNome(e.target.value);
    
        if (!formEValido) {
            nomeForm.classList.add('error');
            document.querySelector('.error-message-nome').style.display = "block";
        } else {
            nomeForm.classList.remove('error');
            document.querySelector('.error-message-nome').style.display = "none";
        }
    })
})