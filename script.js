const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote');

async function fetchQuote() {
    quoteText.textContent = 'Загрузка...';
    quoteAuthor.textContent = '';

    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) throw new Error('Ошибка при получении цитаты');
        const data = await response.json();

        quoteText.textContent = data.content;
        quoteAuthor.textContent = data.author;

    } catch (err) {
        quoteText.textContent = 'Не удалось загрузить цитату.';
        quoteAuthor.textContent = '';
        console.error(err);
    }
}

newQuoteBtn.addEventListener('click', fetchQuote);

fetchQuote();