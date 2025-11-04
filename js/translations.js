// Simple translation system
class TranslationManager {
    constructor() {
        this.currentLang = 'en';
        this.setupEventListeners();
    }

    setupEventListeners() {
        const languageOptions = document.querySelectorAll('.language-option');
        
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        
        // Update language switcher display
        const languageBtn = document.getElementById('languageBtn');
        const flag = languageBtn.querySelector('.language-flag');
        const text = languageBtn.querySelector('.language-text');

        if (lang === 'tr') {
            flag.textContent = '🇹🇷';
            text.textContent = 'TR';
        } else {
            flag.textContent = '🇬🇧';
            text.textContent = 'EN';
        }

        // Close dropdown
        document.querySelector('.language-switcher').classList.remove('active');
    }
}

// Initialize translation manager
document.addEventListener('DOMContentLoaded', () => {
    new TranslationManager();
});
