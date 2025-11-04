// Chart.js Configuration and Management
class ChartManager {
    constructor() {
        this.charts = new Map();
        this.init();
    }

    init() {
        this.setupChartDefaults();
        this.createCharts();
    }

    setupChartDefaults() {
        // Global Chart.js configuration
        Chart.defaults.font.family = "'Inter', sans-serif";
        Chart.defaults.color = '#4a5568';
        Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(15, 107, 99, 0.9)';
        Chart.defaults.plugins.legend.labels.usePointStyle = true;
    }

    createCharts() {
        this.createFinancialChart();
        this.createRevenueChart();
        this.createFundsChart();
        this.createROIChart();
    }

    // Financial Projections Chart
    createFinancialChart() {
        const ctx = document.getElementById('financialChart');
        if (!ctx) return;

        const data = {
            labels: ['2026', '2027', '2028', '2029', '2030', '2031', '2032'],
            datasets: [
                {
                    label: translationManager.translate('financials.conservative'),
                    data: [16, 27, 47, 95, 135, 300, 405],
                    borderColor: '#8B5CF6',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: translationManager.translate('financials.base'),
                    data: [20, 34, 68, 135, 203, 500, 675],
                    borderColor: '#0EA5E9',
                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: translationManager.translate('financials.aggressive'),
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
                        text: translationManager.getCurrentLanguage() === 'tr' ? 
                            'Değerleme Projeksiyonları ($M)' : 'Valuation Projections ($M)',
                        font: { size: 16, weight: 'bold' }
                    },
                    legend: {
                        position: 'top',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: $${context.raw}M`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: translationManager.getCurrentLanguage() === 'tr' ? 'Değerleme ($M)' : 'Valuation ($M)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'nearest'
                }
            }
        };

        this.charts.set('financial', new Chart(ctx, config));
    }

    // Revenue Streams Chart
    createRevenueChart() {
        const ctx = document.getElementById('revenueChart');
        if (!ctx) return;

        const revenueData = {
            labels: translationManager.getCurrentLanguage() === 'tr' ? 
                [
                    'SaaS Abonelikleri',
                    'Platform Komisyonları',
                    'API & Entegrasyon',
                    'Doğrulama & Sertifikasyon',
                    'IoT & Teknoloji',
                    'Eğitim & Danışmanlık'
                ] : [
                    'SaaS Subscriptions',
                    'Platform Commissions',
                    'API & Integration',
                    'Verification & Certification',
                    'IoT & Technology',
                    'Education & Consulting'
                ],
            datasets: [{
                data: [45, 10, 15, 15, 9, 7],
                backgroundColor: [
                    '#0F6B63', '#A6E22E', '#2980b9', '#f59e0b', '#10b981', '#8B5CF6'
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        };

        const config = {
            type: 'doughnut',
            data: revenueData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%',
                plugins: {
                    title: {
                        display: true,
                        text: translationManager.getCurrentLanguage() === 'tr' ? 
                            '2028 Gelir Dağılımı' : '2028 Revenue Breakdown',
                        font: { size: 16, weight: 'bold' }
                    },
                    legend: {
                        display: false
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
        };

        this.charts.set('revenue', new Chart(ctx, config));
        this.createRevenueLegend();
    }

    createRevenueLegend() {
        const legendContainer = document.getElementById('revenueLegend');
        if (!legendContainer) return;

        const items = translationManager.getCurrentLanguage() === 'tr' ? 
            [
                { label: 'SaaS Abonelikleri', value: '$62M', percentage: '45%', color: '#0F6B63' },
                { label: 'Platform Komisyonları', value: '$14M', percentage: '10%', color: '#A6E22E' },
                { label: 'API & Entegrasyon', value: '$20M', percentage: '15%', color: '#2980b9' },
                { label: 'Doğrulama & Sertifikasyon', value: '$20M', percentage: '15%', color: '#f59e0b' },
                { label: 'IoT & Teknoloji', value: '$12M', percentage: '9%', color: '#10b981' },
                { label: 'Eğitim & Danışmanlık', value: '$9.5M', percentage: '7%', color: '#8B5CF6' }
            ] : [
                { label: 'SaaS Subscriptions', value: '$62M', percentage: '45%', color: '#0F6B63' },
                { label: 'Platform Commissions', value: '$14M', percentage: '10%', color: '#A6E22E' },
                { label: 'API & Integration', value: '$20M', percentage: '15%', color: '#2980b9' },
                { label: 'Verification & Certification', value: '$20M', percentage: '15%', color: '#f59e0b' },
                { label: 'IoT & Technology', value: '$12M', percentage: '9%', color: '#10b981' },
                { label: 'Education & Consulting', value: '$9.5M', percentage: '7%', color: '#8B5CF6' }
            ];

        legendContainer.innerHTML = items.map(item => `
            <div class="revenue-legend-item">
                <div class="revenue-legend-color" style="background-color: ${item.color}"></div>
                <div class="revenue-legend-content">
                    <div class="revenue-legend-title">${item.label}</div>
                    <div class="revenue-legend-value">${item.value}</div>
                </div>
                <div class="revenue-legend-percentage">${item.percentage}</div>
            </div>
        `).join('');
    }

    // Use of Funds Chart
    createFundsChart() {
        const ctx = document.getElementById('fundsChart');
        if (!ctx) return;

        const fundsData = {
            labels: translationManager.getCurrentLanguage() === 'tr' ? 
                [
                    'Ürün & Teknoloji',
                    'Satış & Pazara Giriş',
                    'Operasyon',
                    'Yasal & Uyumluluk'
                ] : [
                    'Product & Technology',
                    'Sales & Market Entry',
                    'Operations',
                    'Legal & Compliance'
                ],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: ['#0F6B63', '#A6E22E', '#2980b9', '#f59e0b'],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        };

        const config = {
            type: 'pie',
            data: fundsData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: translationManager.getCurrentLanguage() === 'tr' ? 
                            'Seed Yatırımı Kullanımı' : 'Seed Investment Use of Funds',
                        font: { size: 16, weight: 'bold' }
                    },
                    legend: {
                        display: false
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
        };

        this.charts.set('funds', new Chart(ctx, config));
        this.createFundsBreakdown();
    }

    createFundsBreakdown() {
        const breakdownContainer = document.getElementById('fundsBreakdown');
        if (!breakdownContainer) return;

        const items = translationManager.getCurrentLanguage() === 'tr' ? 
            [
                { 
                    name: 'Ürün & Teknoloji', 
                    amount: '$700K', 
                    percentage: '40%',
                    color: '#0F6B63',
                    details: [
                        'Blockchain geliştirme: $200K',
                        'Platform core: $250K',
                        'IoT entegrasyonu: $100K',
                        'Cloud altyapı: $50K',
                        'Güvenlik & test: $100K'
                    ]
                },
                { 
                    name: 'Satış & Pazara Giriş', 
                    amount: '$438K', 
                    percentage: '25%',
                    color: '#A6E22E',
                    details: [
                        'Pilot müşteri kazanım: $200K',
                        'Marketing & büyüme: $175K',
                        'Partner programları: $63K'
                    ]
                },
                { 
                    name: 'Operasyon', 
                    amount: '$350K', 
                    percentage: '20%',
                    color: '#2980b9',
                    details: [
                        'Ekip maaşları: $200K',
                        'Ofis & donanım: $75K',
                        'Yönetim giderleri: $75K'
                    ]
                },
                { 
                    name: 'Yasal & Uyumluluk', 
                    amount: '$263K', 
                    percentage: '15%',
                    color: '#f59e0b',
                    details: [
                        'Regülasyon uyum: $100K',
                        'Patent & IP: $75K',
                        'Denetim & sertifikasyon: $88K'
                    ]
                }
            ] : [
                { 
                    name: 'Product & Technology', 
                    amount: '$700K', 
                    percentage: '40%',
                    color: '#0F6B63',
                    details: [
                        'Blockchain development: $200K',
                        'Platform core: $250K',
                        'IoT integration: $100K',
                        'Cloud infrastructure: $50K',
                        'Security & testing: $100K'
                    ]
                },
                { 
                    name: 'Sales & Market Entry', 
                    amount: '$438K', 
                    percentage: '25%',
                    color: '#A6E22E',
                    details: [
                        'Pilot customer acquisition: $200K',
                        'Marketing & growth: $175K',
                        'Partner programs: $63K'
                    ]
                },
                { 
                    name: 'Operations', 
                    amount: '$350K', 
                    percentage: '20%',
                    color: '#2980b9',
                    details: [
                        'Team salaries: $200K',
                        'Office & equipment: $75K',
                        'Management expenses: $75K'
                    ]
                },
                { 
                    name: 'Legal & Compliance', 
                    amount: '$263K', 
                    percentage: '15%',
                    color: '#f59e0b',
                    details: [
                        'Regulation compliance: $100K',
                        'Patent & IP: $75K',
                        'Audit & certification: $88K'
                    ]
                }
            ];

        breakdownContainer.innerHTML = items.map(item => `
            <div class="breakdown-item">
                <div class="breakdown-info">
                    <div class="breakdown-color" style="background-color: ${item.color}"></div>
                    <div class="breakdown-name">${item.name}</div>
                </div>
                <div class="breakdown-values">
                    <div class="breakdown-amount">${item.amount}</div>
                    <div class="breakdown-percentage">${item.percentage}</div>
                </div>
            </div>
        `).join('');
    }

    // ROI Calculator Chart
    createROIChart() {
        const ctx = document.getElementById('roiChart');
        if (!ctx) return;

        // Initial empty chart
        const config = {
            type: 'line',
            data: {
                labels: ['2025'],
                datasets: [{
                    label: translationManager.getCurrentLanguage() === 'tr' ? 
                        'Yatırım Değeri ($M)' : 'Investment Value ($M)',
                    data: [0],
                    borderColor: '#A6E22E',
                    backgroundColor: 'rgba(166, 226, 46, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: translationManager.getCurrentLanguage() === 'tr' ? 
                            'Yatırım Değerleme Zaman Çizelgesi' : 'Investment Valuation Timeline',
                        font: { size: 16, weight: 'bold' }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: $${context.raw.toFixed(1)}M`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: translationManager.getCurrentLanguage() === 'tr' ? 'Değer ($M)' : 'Value ($M)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: translationManager.getCurrentLanguage() === 'tr' ? 'Yıl' : 'Year'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    }
                }
            }
        };

        this.charts.set('roi', new Chart(ctx, config));
    }

    updateROIChart(investmentAmount, years, scenario, ownershipPercentage) {
        const roiChart = this.charts.get('roi');
        if (!roiChart) return;

        const valuationData = {
            conservative: [16, 27, 47, 95, 135, 300, 405],
            base: [20, 34, 68, 135, 203, 500, 675],
            aggressive: [24, 47, 108, 243, 405, 1000, 1350]
        };

        const yearsData = ['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'];
        const selectedYearsData = yearsData.slice(0, years + 1);
        
        // Calculate investment value for each year
        const investmentValues = [investmentAmount]; // Start with initial investment
        
        for (let i = 0; i < years; i++) {
            const yearValuation = valuationData[scenario][i];
            const investmentValue = (ownershipPercentage / 100) * yearValuation;
            investmentValues.push(investmentValue);
        }

        roiChart.data.labels = selectedYearsData;
        roiChart.data.datasets[0].data = investmentValues;
        roiChart.update();
    }

    // Update all charts when language changes
    updateCharts() {
        this.charts.forEach((chart, key) => {
            if (key === 'financial') {
                chart.options.plugins.title.text = translationManager.getCurrentLanguage() === 'tr' ? 
                    'Değerleme Projeksiyonları ($M)' : 'Valuation Projections ($M)';
                chart.options.scales.y.title.text = translationManager.getCurrentLanguage() === 'tr' ? 
                    'Değerleme ($M)' : 'Valuation ($M)';
            } else if (key === 'revenue') {
                chart.options.plugins.title.text = translationManager.getCurrentLanguage() === 'tr' ? 
                    '2028 Gelir Dağılımı' : '2028 Revenue Breakdown';
                this.createRevenueLegend();
            } else if (key === 'funds') {
                chart.options.plugins.title.text = translationManager.getCurrentLanguage() === 'tr' ? 
                    'Seed Yatırımı Kullanımı' : 'Seed Investment Use of Funds';
                this.createFundsBreakdown();
            } else if (key === 'roi') {
                chart.options.plugins.title.text = translationManager.getCurrentLanguage() === 'tr' ? 
                    'Yatırım Değerleme Zaman Çizelgesi' : 'Investment Valuation Timeline';
                chart.data.datasets[0].label = translationManager.getCurrentLanguage() === 'tr' ? 
                    'Yatırım Değeri ($M)' : 'Investment Value ($M)';
                chart.options.scales.y.title.text = translationManager.getCurrentLanguage() === 'tr' ? 
                    'Değer ($M)' : 'Value ($M)';
                chart.options.scales.x.title.text = translationManager.getCurrentLanguage() === 'tr' ? 
                    'Yıl' : 'Year';
            }
            chart.update();
        });
    }

    // Destroy all charts
    destroyCharts() {
        this.charts.forEach(chart => {
            chart.destroy();
        });
        this.charts.clear();
    }
}

// Initialize chart manager
const chartManager = new ChartManager();

// Make chart manager globally available for language updates
window.updateCharts = () => chartManager.updateCharts();
window.updateROIChart = (amount, years, scenario, ownership) => 
    chartManager.updateROIChart(amount, years, scenario, ownership);
