class CarbonEcoMarketApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.hideLoadingScreen();
        this.setupSmoothScroll();
    }

    setupEventListeners() {
        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');

        if (mobileMenuBtn && navMenu) {
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenuBtn.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Language switcher
        const languageBtn = document.getElementById('languageBtn');
        const languageDropdown = document.getElementById('languageDropdown');

        if (languageBtn) {
            languageBtn.addEventListener('click', () => {
                document.querySelector('.language-switcher').classList.toggle('active');
            });
        }

        // Scenario tabs
        document.querySelectorAll('.scenario-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });

        // ROI Calculator
        const investAmount = document.getElementById('investAmount');
        const investYears = document.getElementById('investYears');

        if (investAmount) {
            investAmount.addEventListener('input', this.updateROICalculator.bind(this));
        }
        if (investYears) {
            investYears.addEventListener('input', this.updateROICalculator.bind(this));
        }
    }

    updateROICalculator() {
        const amount = parseInt(document.getElementById('investAmount')?.value) || 1500000;
        const years = parseInt(document.getElementById('investYears')?.value) || 5;
        
        // Update displays
        const amountDisplay = document.getElementById('amountDisplay');
        const yearsDisplay = document.getElementById('yearsDisplay');

        if (amountDisplay) {
            amountDisplay.textContent = amount >= 1000000 ? 
                `$${(amount/1000000).toFixed(1)}M` : `$${(amount/1000).toFixed(0)}K`;
        }

        if (yearsDisplay) {
            yearsDisplay.textContent = `${years} years`;
        }

        // Simple ROI calculation
        const baseReturn = amount * 25; // 25x return
        const totalReturn = baseReturn * (years / 5);
        
        const totalReturnEl = document.getElementById('totalReturn');
        if (totalReturnEl) {
            totalReturnEl.textContent = `$${(totalReturn/1000000).toFixed(1)}M`;
        }
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 2000);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CarbonEcoMarketApp();
});
