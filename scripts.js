let attempts = 0;

function goToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    if (pageId === 'gift') {
        startFallingLeaves();
    }
}

document.getElementById('intro').classList.add('active');

function checkAnswer() {
    const guessInput = document.getElementById('guess');
    const answer = guessInput.value.trim().toLowerCase();
    const message = document.getElementById('message');
    const proceedButton = document.getElementById('proceed');
    
    if (answer === '') {
        message.textContent = 'Per favore, scrivi una risposta.';
        return;
    }

    if (answer === 'amsterdam') {
        goToPage('gift');
    } else {
        attempts++;
        if (attempts < 3) {
            message.textContent = `Risposta sbagliata. Hai ${3 - attempts} tentativi rimanenti.`;
        } else {
            message.textContent = "Hai esaurito i tentativi. Clicca su 'Prosegui verso la sorpresa'.";
            proceedButton.disabled = false;
            document.querySelector('#interactive button[onclick="checkAnswer()"]').disabled = true;
        }
    }
}

function startFallingLeaves() {
    const leafContainer = document.getElementById('falling-leaves');
    const ballsContainer = document.getElementById('falling-balls');

    const leafCount = 15;

    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        const balls = document.createElement('div');
        leaf.classList.add('leaf');
        balls.classList.add('balls');
        leaf.textContent = '🍁';
        balls.textContent = '🎁';
        leaf.style.left = `${Math.random() * 100}%`;
        balls.style.left = `${Math.random() * 100}%`;
        leaf.style.animationDelay = `${Math.random() * 2}s`;
        balls.style.animationDelay = `${Math.random() * 2}s`;
        leafContainer.appendChild(leaf);
        ballsContainer.appendChild(balls);

    }
}
