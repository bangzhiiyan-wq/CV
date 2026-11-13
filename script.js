const hobiButtons = document.querySelectorAll('.resume-hobbies button');

hobiButtons.forEach(button => {
    button.addEventListener('click', function() {
        const namaHobi = this.querySelector('p').innerText;
        console.log(`Pengguna tertarik dengan hobi: ${namaHobi}`);

        // Efek visual sederhana saat diklik
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});
const themeToggleBtn = document.getElementById('theme-toggle');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        // Toggle kelas atau ubah properti dokumen secara dinamis
        document.body.classList.toggle('light-mode');

        if (document.body.classList.contains('light-mode')) {
            themeToggleBtn.innerText = '☀️ Mode Gelap';
            // Kamu bisa menambahkan styling khusus untuk mode terang di CSS jika mau
        } else {
            themeToggleBtn.innerText = '🌙 Ganti Tema';
        }
    });
}
