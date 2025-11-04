// Chart Initialization
let financialChart, revenueChart, fundsChart;

function updateCharts() {
    // Financial Projections Chart
    if (financialChart) financialChart.destroy();
    
    const ctx = document.getElementById('financialChart');
    if (!ctx) return;
    
    financialChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['2026', '2027', '2028', '2029', '2030', '2031', '2032'],
            datasets: [
                {
                    label: currentLang === 'tr' ? 'Muhafazakar' : 'Conservative',
                    data: [16, 27, 47, 95, 135, 300, 405],
                    borderColor: '#8B5CF6',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    tension: 0.4,
                    borderWidth: 3
                },
                {
                    label: currentLang === 'tr' ? 'Temel' : 'Base',
                    data: [20, 34, 68, 135, 203, 500, 675],
                    borderColor: '#0EA5E9',
                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                    tension: 0.4,
                    borderWidth: 3
                },
                {
                    label: currentLang === 'tr' ? 'İyimser' : 'Aggressive',
                    data: [24, 47, 108, 243, 405, 1000, 1350],
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    borderWidth: 3
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: currentLang === 'tr' ? 'Değerleme Projeksiyonları ($M)' : 'Valuation Projections ($M)',
                    font: { size: 16, weight: 'bold' }
                },
                legend: { 
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Değerleme ($M)'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            }
        }
    });

    // Revenue Chart
    if (revenueChart) revenueChart.destroy();
    
    const revenueCtx = document.getElementById('revenueChart');
    if (!revenueCtx) return;
    
    revenueChart = new Chart(revenueCtx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: currentLang === 'tr' ? 
                ['SaaS Abonelikleri', 'Platform Komisyonları', 'API & Entegrasyon', 'Doğrulama & Sertifikasyon', 'IoT & Teknoloji', 'Eğitim & Danışmanlık'] :
                ['SaaS Subscriptions', 'Platform Commissions', 'API & Integration', 'Verification & Certification', 'IoT & Technology', 'Education & Consulting'],
            datasets: [{
                data: [45, 10, 15, 15, 9, 7],
                backgroundColor: [
                    '#0F6B63', '#A6E22E', '#2980b9', '#f59e0b', '#10b981', '#8B5CF6'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            cutout: '50%',
            plugins: {
                title: {
                    display: true,
                    text: currentLang === 'tr' ? '2028 Gelir Dağılımı' : '2028 Revenue Breakdown',
                    font: { size: 16, weight: 'bold' }
                },
                legend: { 
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            }
        }
    });

    // Funds Chart
    if (fundsChart) fundsChart.destroy();
    
    const fundsCtx = document.getElementById('fundsChart');
    if (!fundsCtx) return;
    
    fundsChart = new Chart(fundsCtx.getContext('2d'), {
        type: 'pie',
        data: {
            labels: currentLang === 'tr' ? 
                ['Ürün & Teknoloji', 'Satış & Pazara Giriş', 'Operasyon', 'Yasal & Uyumluluk'] :
                ['Product & Technology', 'Sales & Market Entry', 'Operations', 'Legal & Compliance'],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: ['#0F6B63', '#A6E22E', '#2980b9', '#f59e0b'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: currentLang === 'tr' ? 'Seed Yatırımı Kullanımı' : 'Seed Investment Use of Funds',
                    font: { size: 16, weight: 'bold' }
                },
                legend: { 
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            }
        }
    });
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateCharts();
});

// Update charts on window resize for better responsiveness
window.addEventListener('resize', function() {
    updateCharts();
});
