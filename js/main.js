$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, preencha seu nome.',
            email: 'Por favor, preencha seu e-mail.',
            mensagem: 'Por favor, informe sua mensagem.'
        }
    })
});