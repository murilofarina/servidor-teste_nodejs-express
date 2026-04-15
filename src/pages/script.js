const form = document.getElementById('contactForm');
const feedbackMessage = document.getElementById('feedbackMessage');

const setFeedback = (message, type) => {
    feedbackMessage.textContent = message;
    feedbackMessage.className = 'feedback';
    if (type === 'success') {
        feedbackMessage.classList.add('feedback--success');
    } else if (type === 'error') {
        feedbackMessage.classList.add('feedback--error');
    }
};

const clearFeedback = () => {
    feedbackMessage.textContent = '';
    feedbackMessage.className = 'feedback';
};

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearFeedback();

    const name = form.name.value.trim();
    const message = form.message.value.trim();

    if (!name || !message) {
        setFeedback('Preencha todos os campos', 'error');
        return;
    }

    try {
        const response = await fetch('/enviar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, message })
        });

        if (!response.ok) {
            throw new Error('Falha na requisição');
        }

        const data = await response.json();

        if (data.sucesso) {
            setFeedback('Mensagem enviada com sucesso!', 'success');
            form.reset();
        } else {
            setFeedback('Erro ao enviar mensagem. Tente novamente', 'error');
        }
    } catch (error) {
        setFeedback('Erro ao enviar mensagem. Tente novamente', 'error');
        console.error('Erro no envio:', error);
    }
});
