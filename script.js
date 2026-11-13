const hobiButtons = document.querySelectorAll('.resume-hobbies button');

hobiButtons.forEach(button => {
    button.addEventListener('click', function() {
        const namaHobi = this.querySelector('p').innerText;
        console.log(`Pengguna tertarik dengan hobi: ${namaHobi}`);
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            themeToggleBtn.innerText = '☀️ Mode Gelap';
        } else {
            themeToggleBtn.innerText = '🌙 Ganti Tema';
        }
    });
}
