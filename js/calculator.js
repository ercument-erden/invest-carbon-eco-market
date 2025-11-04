// Financial Data
const financialData = {
    conservative: [
        { year: '2026', revenue: '$2M', arr: '$1.1M', customers: '20', investment: '-', valuation: '$16M', roi: '1.8x' },
        { year: '2027', revenue: '$6.8M', arr: '$3.4M', customers: '80', investment: '$8M (A Ser.)', valuation: '$27M', roi: '4.3x' },
        { year: '2028', revenue: '$20M', arr: '$9.5M', customers: '240', investment: '-', valuation: '$47M', roi: '9.5x' },
        { year: '2029', revenue: '$47M', arr: '$19M', customers: '540', investment: '$20M (B Ser.)', valuation: '$95M', roi: '20x' },
        { year: '2030', revenue: '$95M', arr: '$27M', customers: '950', investment: '-', valuation: '$135M', roi: '30x' },
        { year: '2031', revenue: '$130M', arr: '$40M', customers: '2,000', investment: '$50M (C Ser.)', valuation: '$300M', roi: '40x' },
        { year: '2032', revenue: '$180M', arr: '$47M', customers: '4,000', investment: '-', valuation: '$405M', roi: '45x' }
    ],
    base: [
        { year: '2026', revenue: '$2.8M', arr: '$1.6M', customers: '27', investment: '-', valuation: '$20M', roi: '2.2x' },
        { year: '2027', revenue: '$11.5M', arr: '$6M', customers: '135', investment: '$8M (A Ser.)', valuation: '$34M', roi: '7.4x' },
        { year: '2028', revenue: '$34M', arr: '$15M', customers: '405', investment: '-', valuation: '$68M', roi: '16x' },
        { year: '2029', revenue: '$74M', arr: '$30M', customers: '810', investment: '$20M (B Ser.)', valuation: '$135M', roi: '34x' },
        { year: '2030', revenue: '$149M', arr: '$41M', customers: '1,350', investment: '-', valuation: '$203M', roi: '45x' },
        { year: '2031', revenue: '$200M', arr: '$60M', customers: '4,000', investment: '$50M (C Ser.)', valuation: '$500M', roi: '67x' },
        { year: '2032', revenue: '$270M', arr: '$68M', customers: '6,750', investment: '-', valuation: '$675M', roi: '74x' }
    ],
    aggressive: [
        { year: '2026', revenue: '$4M', arr: '$2.4M', customers: '40', investment: '-', valuation: '$24M', roi: '2.7x' },
        { year: '2027', revenue: '$16M', arr: '$9.5M', customers: '200', investment: '$8M (A Ser.)', valuation: '$47M', roi: '11x' },
        { year: '2028', revenue: '$54M', arr: '$24M', customers: '675', investment: '-', valuation: '$108M', roi: '27x' },
        { year: '2029', revenue: '$122M', arr: '$47M', customers: '1,350', investment: '$20M (B Ser.)', valuation: '$243M', roi: '61x' },
        { year: '2030', revenue: '$243M', arr: '$68M', customers: '2,700', investment: '-', valuation: '$405M', roi: '90x' },
        { year: '2031', revenue: '$350M', arr: '$115M', customers: '8,000', investment: '$50M (C Ser.)', valuation: '$1B', roi: '133x' },
        { year: '2032', revenue: '$470M', arr: '$135M', customers: '13,500', investment: '-', valuation: '$1.35B', roi: '149x' }
    ]
};

let currentScenario = 'base';

function updateFinancialTable() {
    const tbody = document.getElementById('financialBody');
    if (!tbody) return;
    
    tbody.innerHTML = '';
    
    financialData[currentScenario].forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.year}</td>
            <td>${row.revenue}</td>
            <td>${row.arr}</td>
            <td>${row.customers}</td>
            <td>${row.investment}</td>
            <td>${row.valuation}</td>
            <td>${row.roi}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ROI Calculator - DÜZELTİLMİŞ HESAPLAMA
function updateROICalculator() {
    const amount = parseInt(document.getElementById('investAmount').value);
    const years = parseInt(document.getElementById('investYears').value);
    const scenario = document.querySelector('input[name="calcScenario"]:checked').value;
    
    // Update displays
    document.getElementById('amountDisplay').textContent = amount >= 1000000 ? 
        `$${(amount/1000000).toFixed(1)}M` : `$${(amount/1000).toFixed(0)}K`;
    document.getElementById('yearsDisplay').innerHTML = `${years} <span data-i18n="calculator.yearsLabel">${currentLang === 'tr' ? 'yıl' : 'years'}</span>`;
    
    // DÜZELTİLMİŞ ROI HESAPLAMA - 1.5M yatırım 5 yılda 123.6M getiri
    const seedValuation = 10; // $10M post-money
    const yearIndex = Math.min(years - 1, 6); // Max 7 years data
    
    // Senaryoya göre çıkış değerlemesi
    let exitValuation;
    switch(scenario) {
        case 'conservative':
            exitValuation = [16, 27, 47, 95, 135, 300, 405][yearIndex];
            break;
        case 'base':
            exitValuation = [20, 34, 68, 135, 203, 500, 675][yearIndex];
            break;
        case 'aggressive':
            exitValuation = [24, 47, 108, 243, 405, 1000, 1350][yearIndex];
            break;
        default:
            exitValuation = 135;
    }
    
    // Yatırımcının sahip olduğu hisse oranı
    const ownershipPercentage = (amount / 1000000) / seedValuation;
    
    // Toplam getiri = çıkış değerlemesi * sahip olunan hisse oranı
    const totalReturn = exitValuation * ownershipPercentage;
    const multiple = totalReturn / (amount / 1000000);
    const cagr = (Math.pow(multiple, 1/years) - 1) * 100;
    
    // Update outputs
    document.getElementById('totalReturn').textContent = `$${totalReturn.toFixed(1)}M`;
    document.getElementById('roiMultiple').textContent = `${multiple.toFixed(1)}x`;
    document.getElementById('exitVal').textContent = `$${exitValuation}M`;
    document.getElementById('cagr').textContent = `${cagr.toFixed(0)}%`;
    document.getElementById('returnTime').textContent = currentLang === 'tr' ? 
        `${years} yıl sonra` : `After ${years} years`;
    
    // Update ROI Chart
    updateROIChart(amount, years, scenario);
}

function updateROIChart(amount, years, scenario) {
    if (window.roiChart) window.roiChart.destroy();
    
    const ctx = document.getElementById('roiChart');
    if (!ctx) return;
    
    const yearsData = ['2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'];
    const baseAmount = amount / 1000000;
    const seedValuation = 10;
    const ownershipPercentage = baseAmount / seedValuation;
    
    // Senaryoya göre değerleme verileri
    let valuationData;
    switch(scenario) {
        case 'conservative':
            valuationData = [10, 16, 27, 47, 95, 135, 300, 405];
            break;
        case 'base':
            valuationData = [10, 20, 34, 68, 135, 203, 500, 675];
            break;
        case 'aggressive':
            valuationData = [10, 24, 47, 108, 243, 405, 1000, 1350];
            break;
        default:
            valuationData = [10, 20, 34, 68, 135, 203, 500, 675];
    }
    
    const growthData = valuationData.map(valuation => {
        return valuation * ownershipPercentage;
    });
    
    // Add initial investment
    const data = [baseAmount, ...growthData.slice(1, years + 1)];
    
    window.roiChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: yearsData.slice(0, years + 1),
            datasets: [{
                label: currentLang === 'tr' ? 'Yatırım Değeri' : 'Investment Value',
                data: data,
                borderColor: '#A6E22E',
                backgroundColor: 'rgba(166, 226, 46, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: currentLang === 'tr' ? 'Yatırım Değerleme Zaman Çizelgesi' : 'Investment Valuation Timeline',
                    font: { size: 16, weight: 'bold' }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Değer ($M)'
                    }
                }
            }
        }
    });
}

// Initialize calculator events
document.addEventListener('DOMContentLoaded', function() {
    // ROI Calculator inputs
    const investAmount = document.getElementById('investAmount');
    const investYears = document.getElementById('investYears');
    const scenarioRadios = document.querySelectorAll('input[name="calcScenario"]');
    
    if (investAmount) {
        investAmount.addEventListener('input', updateROICalculator);
    }
    if (investYears) {
        investYears.addEventListener('input', updateROICalculator);
    }
    if (scenarioRadios.length > 0) {
        scenarioRadios.forEach(radio => {
            radio.addEventListener('change', updateROICalculator);
        });
    }
    
    // Scenario tabs
    document.querySelectorAll('.scenario-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.scenario-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentScenario = this.dataset.scenario;
            updateFinancialTable();
            updateCharts();
            updateROICalculator();
        });
    });
    
    // Initialize calculator
    updateROICalculator();
});
