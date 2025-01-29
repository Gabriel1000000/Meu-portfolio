let formulario = document.getElementById('contatoForm')
let msmSucesso = document.getElementById('mensagemSucesso')
let msmErro = document.getElementById('mensagemErro')

formulario.addEventListener('submit', enviaGmail)

async function enviaGmail(e){

    e.preventDefault(); // Impede o redirecionamento padrão do formulário

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch('https://formsubmit.co/ajax/604f6157f50dda459c4ba18f94ebd926 ', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            msmSucesso.style.display = 'block';
            msmErro.style.display = 'none';
            form.reset(); // Limpa o formulário após o envio
            // Esconde a mensagem de sucesso após 5 segundos
            setTimeout(() => {
                mensagemSucesso.style.display = 'none';
            }, 3000);
        } else {
            throw new Error('Erro ao enviar formulário.');
        }
    } catch (error) {
        msmSucesso.style.display = 'none';
        msmErro.style.display = 'block';
        // Esconde a mensagem de erro após 5 segundos
        setTimeout(() => {
            mensagemErro.style.display = 'none';
        }, 3000);
    }

}