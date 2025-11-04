class ChartManager {
    constructor() {
        this.init();
    }

    init() {
        this.createFinancialChart();
    }

    createFinancialChart() {
        const ctx = document.getElementById('financialChart');
        if (!ctx) return;

        const data = {
            labels: ['2026', '2027', '2028', '2029', '2030', '2031', '2032'],
            datasets: [
                {
                    label: 'Base Scenario',
                    data: [20, 34, 68, 135, 203, 500, 675],
                    borderColor: '#0EA5E9',
                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: 'Aggressive Scenario',
                    data: [24, 47, 108, 243, 405, 1000, 1350],
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                }
            ]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Valuation Projections ($M)',
                        font: { size: 16, weight: 'bold' }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Valuation ($M)'
                        }
                    }
                }
            }
        };

        new Chart(ctx, config);
    }
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ChartManager();
});
