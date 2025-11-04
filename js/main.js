// TRANSLATIONS
const translations = {
    tr: {
        // Navigation
        "nav.problem": "Problem",
        "nav.solution": "Çözüm",
        "nav.market": "Pazar",
        "nav.traction": "Çekiş",
        "nav.financials": "Finansal",
        "nav.team": "Ekip",
        "nav.calculator": "Hesaplayıcı",
        "nav.dataroom": "Data Room Erişim",
        
        // Hero Section
        "hero.badge": "Dünyanın İlk Hibrit Karbon Borsası",
        "hero.title": "Karbon Ekonomisinin Geleceği",
        "hero.subtitle": "CBAM 2026 uyumu, blockchain doğrulama, çok taraflı pazar ile $70B+ küresel pazarda liderlik",
        "hero.dataroom": "Data Room'a Erişim",
        "hero.seed": "Seed Round",
        
        // Unicorn Section
        "unicorn.badge": "Unicorn Potansiyeli",
        "unicorn.title": "$1B+ Değerleme Yolu",
        "unicorn.subtitle": "Küresel karbon piyasasında benzersiz pozisyon ve büyüme potansiyeli",
        "unicorn.card1.title": "$70B+ Küresel Pazar",
        "unicorn.card1.desc": "2030'da $300B+ büyüme projeksiyonu",
        "unicorn.card2.title": "15,000+ Şirket",
        "unicorn.card2.desc": "CBAM zorunluluğu ile acil çözüm ihtiyacı",
        "unicorn.card3.title": "Teknoloji Liderliği",
        "unicorn.card3.desc": "Blockchain + IoT + AI kombinasyonu",
        "unicorn.card4.title": "4 Segment Pazar",
        "unicorn.card4.desc": "Bireysel + Çiftçi + Kurumsal + Trader",
        "unicorn.decacorn": "📈 $10B+ Decacorn Yol Haritası",
        "unicorn.timeline1.title": "Seed Aşaması",
        "unicorn.timeline1.desc": "MVP geliştirme ve pilot müşteriler",
        "unicorn.timeline2.title": "Series A & Büyüme",
        "unicorn.timeline2.desc": "Pazar liderliği ve bölgesel genişleme",
        "unicorn.timeline3.title": "Unicorn Aşaması",
        "unicorn.timeline3.desc": "$1B+ değerleme ve küresel operasyonlar",
        "unicorn.timeline4.title": "Decacorn Potansiyeli",
        "unicorn.timeline4.desc": "$10B+ değerleme ve endüstri liderliği",
        
        // Problem Section
        "problem.badge": "Acil Çözüm Gerekiyor",
        "problem.title": "CBAM 2026 Krizi",
        "problem.subtitle": "Türk ihracatçılar için €50-100/ton karbon cezası riski",
        "problem.card1.title": "15,000+ Türk İhracatçı",
        "problem.card1.desc": "AB'ye ihracat yapan tüm firmalar risk altında",
        "problem.card2.title": "$40B İhracat Riski",
        "problem.card2.desc": "Türkiye'nin yıllık AB ihracatı tehlikede",
        "problem.card3.title": "€50-100/ton Cezalar",
        "problem.card3.desc": "Uyumsuzluk başına ağır mali yaptırımlar",
        "problem.card4.title": "Manuel Çözüm İmkansız",
        "problem.card4.desc": "Binlerce tedarikçi, karmaşık karbon hesaplama",
        "problem.quote.text": "\"Üyelerimiz panikleme yaşıyor. CBAM hesaplama için acil çözüm lazım.\"",
        "problem.quote.author": "- Türkiye İhracatçılar Meclisi (TİM)",
        
        // Solution Section
        "solution.badge": "Teknoloji Çözümü",
        "solution.title": "6 Temel Teknoloji Modülü",
        "solution.subtitle": "Kapsamlı karbon yönetimi için entegre platform",
        "solution.card1.title": "CBAM Uyum Motoru",
        "solution.card1.item1": "AI destekli karbon hesaplama",
        "solution.card1.item2": "ERP entegrasyonu",
        "solution.card1.item3": "Otomatik raporlama",
        "solution.card1.item4": "Tedarikçi yönetimi",
        "solution.card2.title": "Blockchain Registry",
        "solution.card2.item1": "Polygon network (ERC-1155)",
        "solution.card2.item2": "Değiştirilemez karbon kredileri",
        "solution.card2.item3": "Şeffaf takip",
        "solution.card2.item4": "Akıllı kontratlar",
        "solution.card3.title": "IoT MRV Sistemi",
        "solution.card3.item1": "Gerçek zamanlı ölçüm",
        "solution.card3.item2": "Sensör entegrasyonu",
        "solution.card3.item3": "Otomatik doğrulama",
        "solution.card3.item4": "Veri güvenliği",
        "solution.card4.title": "Çok Taraflı Pazar",
        "solution.card4.item1": "Bireysel kullanıcılar",
        "solution.card4.item2": "Çiftçiler",
        "solution.card4.item3": "Kurumsal müşteriler",
        "solution.card4.item4": "Profesyonel traderlar",
        "solution.card5.title": "API & Entegrasyon",
        "solution.card5.item1": "RESTful API",
        "solution.card5.item2": "Webhooks",
        "solution.card5.item3": "SDK (Python, Node.js, Java)",
        "solution.card5.item4": "White-label çözüm",
        "solution.card6.title": "Enterprise Security",
        "solution.card6.item1": "SOC2 Type II",
        "solution.card6.item2": "ISO 27001",
        "solution.card6.item3": "GDPR uyumlu",
        "solution.card6.item4": "Penetrasyon testi",
        
        // Competitive Section
        "competitive.badge": "Rekabet Avantajı",
        "competitive.title": "Piyasa Liderliği",
        "competitive.subtitle": "Dünyada tek: 4 kullanıcı segmentini birleştiren platform",
        "competitive.table.header1": "Özellik",
        "competitive.table.header2": "CarbonEcoMarket",
        "competitive.table.row1.feature": "CBAM 2026 Uyumu",
        "competitive.table.row2.feature": "Blockchain Doğrulama",
        "competitive.table.row3.feature": "IoT MRV Sistemi",
        "competitive.table.row4.feature": "Çok Taraflı Pazar",
        "competitive.table.row5.feature": "Bireysel Kullanıcılar",
        "competitive.table.row6.feature": "Çiftçi Karbon Satışı",
        "competitive.table.row7.feature": "Trader Platformu",
        "competitive.research.title": "Pazar Araştırması Sonuçları",
        "competitive.research.item1": "Dünyada Tek: Bireysel karbon hesaplama + sıfırlama",
        "competitive.research.item2": "Dünyada Tek: Çiftçiler için karbon satış platformu",
        "competitive.research.item3": "Dünyada Tek: Trader + Bireysel + Kurumsal tek platform",
        
        // Market Section
        "market.badge": "Pazar Fırsatı",
        "market.title": "$70B Global Karbon Pazarı",
        "market.subtitle": "2030'da $300B+ büyüme projeksiyonu ile hızla büyüyen pazar",
        "market.tam.title": "$70B+",
        "market.tam.subtitle": "Global Karbon Piyasası (2025)",
        "market.sam.title": "$5B",
        "market.sam.subtitle": "MENA + Türkiye Bölgesi",
        "market.som.title": "$500M",
        "market.som.subtitle": "3. Yıl Hedef",
        "market.value.title": "Benzersiz Değer Önerisi",
        "market.value.text": "Hiçbir platform bireysel kullanıcı + çiftçi + kurumsal + trader'ı tek çatı altında birleştirmiyor. Biz bunu yapan ilk ve tek platformuz!",
        
        // Traction Section
        "traction.badge": "Çekiş & Doğrulama",
        "traction.title": "İlerleme & Başarılar",
        "traction.subtitle": "Pazar validasyonu ve stratejik ilerleme",
        "traction.card1.title": "12 LOI İmzalandı",
        "traction.card1.item1": "50K ton/yıl pipeline",
        "traction.card1.item2": "$10M+ potansiyel ARR",
        "traction.card1.item3": "Pilot müşteriler hazır",
        "traction.card2.title": "3 C-Level Danışman",
        "traction.card2.item1": "Selim Güven - ACWA Power",
        "traction.card2.item2": "Hüseyin Yeğin - Borusan EnBW",
        "traction.card2.item3": "Ilgın Sözen - ÇEKÜL Vakfı",
        "traction.card3.title": "MVP Q1 2026",
        "traction.card3.item1": "Blockchain testnet aktif",
        "traction.card3.item2": "CBAM modülü test aşamasında",
        "traction.card3.item3": "25+ firma pilot pipeline",
        "traction.card4.title": "Stratejik Ortaklıklar",
        "traction.card4.item1": "TİM (Türkiye İhracatçılar Meclisi)",
        "traction.card4.item2": "İGEME (İhracatı Geliştirme Merkezi)",
        "traction.card4.item3": "Teknoloji partnerleri: Polygon, AWS",
        
        // Financials Section
        "financials.badge": "Finansal Projeksiyonlar",
        "financials.title": "3 Senaryo ile Büyüme Yol Haritası",
        "financials.subtitle": "2026-2035 gelir ve değerleme tahminleri",
        "financials.conservative": "Muhafazakar",
        "financials.base": "Temel",
        "financials.aggressive": "İyimser",
        "financials.year": "Yıl",
        "financials.revenue": "Ciro",
        "financials.arr": "ARR",
        "financials.customers": "Müşteri",
        "financials.investment": "Yatırım",
        "financials.valuation": "Değerleme",
        "financials.rounds": "💵 Yatırım Turları",
        
        // Revenue & Funds
        "revenue.badge": "Gelir Modelleri",
        "revenue.title": "6 Gelir Modeli - 2028 Dağılımı",
        "revenue.subtitle": "Çok katmanlı gelir modeli ile finansal sürdürülebilirlik",
        "funds.badge": "Yatırım Kullanımı",
        "funds.title": "Seed Yatırımı Kullanım Planı ($1.5-2M)",
        "funds.subtitle": "Stratejik kaynak dağılımı ile maksimum büyüme",
        
        // Team Section
        "team.badge": "Ekibimiz",
        "team.title": "Deneyimli Liderlik Ekibi",
        "team.subtitle": "Karbon piyasasını şekillendiren uzman ekip",
        "team.role1": "Kurucu & CEO",
        "team.bio1": "Lionexia kurucusu, 15+ yıl fintech deneyimi",
        "team.role2": "CTO & Kurucu Ortak",
        "team.bio2": "18+ yıl yazılım ve blockchain deneyimi",
        "team.role3": "Danışman",
        "team.bio3": "ACWA Power - Enerji sektörü uzmanı",
        "team.role4": "Danışman",
        "team.bio4": "Borusan EnBW - Yenilenebilir enerji",
        "team.role5": "Danışman",
        "team.bio5": "ÇEKÜL Vakfı - STK ve sürdürülebilirlik",
        
        // Calculator Section
        "calculator.badge": "Yatırım Hesaplayıcı",
        "calculator.title": "Yatırım Getiri Hesaplayıcı",
        "calculator.subtitle": "Potansiyel getirinizi gerçek zamanlı hesaplayın",
        "calculator.amount": "Yatırım Miktarı",
        "calculator.years": "Yatırım Süresi",
        "calculator.yearsLabel": "yıl",
        "calculator.scenario": "Senaryo",
        "calculator.total": "Toplam Getiri",
        "calculator.exit": "Çıkış Değerlemesi",
        
        // Footer
        "footer.contact": "İletişim",
        "footer.location": "İstanbul + Londra",
        "footer.legal": "Yasal",
        "footer.privacy": "Gizlilik Politikası",
        "footer.terms": "Kullanım Şartları",
        "footer.dataroom": "Data Room",
        "footer.social": "Sosyal Medya",
        "footer.copy": "© 2025 CarbonEcoMarket. Gizli ve özel doküman. Tüm hakları saklıdır."
    },
    en: {
        // Navigation
        "nav.problem": "Problem",
        "nav.solution": "Solution",
        "nav.market": "Market",
        "nav.traction": "Traction",
        "nav.financials": "Financials",
        "nav.team": "Team",
        "nav.calculator": "Calculator",
        "nav.dataroom": "Data Room Access",
        
        // Hero Section
        "hero.badge": "World's First Hybrid Carbon Exchange",
        "hero.title": "Future of Carbon Economy",
        "hero.subtitle": "CBAM 2026 compliance, blockchain verification, multi-sided marketplace leadership in $70B+ global market",
        "hero.dataroom": "Access Data Room",
        "hero.seed": "Seed Round",
        
        // Unicorn Section
        "unicorn.badge": "Unicorn Potential",
        "unicorn.title": "Path to $1B+ Valuation",
        "unicorn.subtitle": "Unique position and growth potential in global carbon market",
        "unicorn.card1.title": "$70B+ Global Market",
        "unicorn.card1.desc": "$300B+ growth projection by 2030",
        "unicorn.card2.title": "15,000+ Companies",
        "unicorn.card2.desc": "Urgent solution needed for CBAM mandate",
        "unicorn.card3.title": "Technology Leadership",
        "unicorn.card3.desc": "Blockchain + IoT + AI combination",
        "unicorn.card4.title": "4 Segment Market",
        "unicorn.card4.desc": "Individual + Farmer + Corporate + Trader",
        "unicorn.decacorn": "📈 $10B+ Decacorn Roadmap",
        "unicorn.timeline1.title": "Seed Stage",
        "unicorn.timeline1.desc": "MVP development and pilot customers",
        "unicorn.timeline2.title": "Series A & Growth",
        "unicorn.timeline2.desc": "Market leadership and regional expansion",
        "unicorn.timeline3.title": "Unicorn Stage",
        "unicorn.timeline3.desc": "$1B+ valuation and global operations",
        "unicorn.timeline4.title": "Decacorn Potential",
        "unicorn.timeline4.desc": "$10B+ valuation and industry leadership",
        
        // Problem Section
        "problem.badge": "Urgent Solution Needed",
        "problem.title": "CBAM 2026 Crisis",
        "problem.subtitle": "€50-100/ton carbon penalty risk for Turkish exporters",
        "problem.card1.title": "15,000+ Turkish Exporters",
        "problem.card1.desc": "All companies exporting to EU at risk",
        "problem.card2.title": "$40B Export at Stake",
        "problem.card2.desc": "Turkey's annual EU exports in danger",
        "problem.card3.title": "€50-100/ton Penalties",
        "problem.card3.desc": "Heavy financial sanctions per non-compliance",
        "problem.card4.title": "Manual Solution Impossible",
        "problem.card4.desc": "Thousands of suppliers, complex carbon calculation",
        "problem.quote.text": "\"Our members are panicking. We need urgent solution for CBAM calculation.\"",
        "problem.quote.author": "- Turkish Exporters Assembly (TİM)",
        
        // Solution Section
        "solution.badge": "Technology Solution",
        "solution.title": "6 Core Technology Modules",
        "solution.subtitle": "Integrated platform for comprehensive carbon management",
        "solution.card1.title": "CBAM Compliance Engine",
        "solution.card1.item1": "AI-powered carbon calculation",
        "solution.card1.item2": "ERP integration",
        "solution.card1.item3": "Automated reporting",
        "solution.card1.item4": "Supplier management",
        "solution.card2.title": "Blockchain Registry",
        "solution.card2.item1": "Polygon network (ERC-1155)",
        "solution.card2.item2": "Immutable carbon credits",
        "solution.card2.item3": "Transparent tracking",
        "solution.card2.item4": "Smart contracts",
        "solution.card3.title": "IoT MRV System",
        "solution.card3.item1": "Real-time measurement",
        "solution.card3.item2": "Sensor integration",
        "solution.card3.item3": "Automatic verification",
        "solution.card3.item4": "Data security",
        "solution.card4.title": "Multi-Sided Marketplace",
        "solution.card4.item1": "Individual users",
        "solution.card4.item2": "Farmers",
        "solution.card4.item3": "Corporate customers",
        "solution.card4.item4": "Professional traders",
        "solution.card5.title": "API & Integration",
        "solution.card5.item1": "RESTful API",
        "solution.card5.item2": "Webhooks",
        "solution.card5.item3": "SDK (Python, Node.js, Java)",
        "solution.card5.item4": "White-label solution",
        "solution.card6.title": "Enterprise Security",
        "solution.card6.item1": "SOC2 Type II",
        "solution.card6.item2": "ISO 27001",
        "solution.card6.item3": "GDPR compliant",
        "solution.card6.item4": "Penetration testing",
        
        // Competitive Section
        "competitive.badge": "Competitive Advantage",
        "competitive.title": "Market Leadership",
        "competitive.subtitle": "World's only: Platform combining 4 user segments",
        "competitive.table.header1": "Feature",
        "competitive.table.header2": "CarbonEcoMarket",
        "competitive.table.row1.feature": "CBAM 2026 Compliance",
        "competitive.table.row2.feature": "Blockchain Verification",
        "competitive.table.row3.feature": "IoT MRV System",
        "competitive.table.row4.feature": "Multi-Sided Market",
        "competitive.table.row5.feature": "Individual Users",
        "competitive.table.row6.feature": "Farmer Carbon Sales",
        "competitive.table.row7.feature": "Trader Platform",
        "competitive.research.title": "Market Research Results",
        "competitive.research.item1": "World's Only: Individual carbon calculation + offsetting",
        "competitive.research.item2": "World's Only: Farmer carbon credit marketplace",
        "competitive.research.item3": "World's Only: Trader + Individual + Corporate on one platform",
        
        // Market Section
        "market.badge": "Market Opportunity",
        "market.title": "$70B Global Carbon Market",
        "market.subtitle": "Rapidly growing market with $300B+ projection by 2030",
        "market.tam.title": "$70B+",
        "market.tam.subtitle": "Global Carbon Market (2025)",
        "market.sam.title": "$5B",
        "market.sam.subtitle": "MENA + Turkey Region",
        "market.som.title": "$500M",
        "market.som.subtitle": "3-Year Target",
        "market.value.title": "Unique Value Proposition",
        "market.value.text": "No other platform combines individual users + farmers + corporates + traders under one roof. We are the first and only platform doing this!",
        
        // Traction Section
        "traction.badge": "Traction & Validation",
        "traction.title": "Progress & Achievements",
        "traction.subtitle": "Market validation and strategic progress",
        "traction.card1.title": "12 LOI Signed",
        "traction.card1.item1": "50K ton/year pipeline",
        "traction.card1.item2": "$10M+ potential ARR",
        "traction.card1.item3": "Pilot customers ready",
        "traction.card2.title": "3 C-Level Advisors",
        "traction.card2.item1": "Selim Güven - ACWA Power",
        "traction.card2.item2": "Hüseyin Yeğin - Borusan EnBW",
        "traction.card2.item3": "Ilgın Sözen - ÇEKÜL Foundation",
        "traction.card3.title": "MVP Q1 2026",
        "traction.card3.item1": "Blockchain testnet active",
        "traction.card3.item2": "CBAM module in testing phase",
        "traction.card3.item3": "25+ company pilot pipeline",
        "traction.card4.title": "Strategic Partnerships",
        "traction.card4.item1": "TİM (Turkish Exporters Assembly)",
        "traction.card4.item2": "İGEME (Export Development Center)",
        "traction.card4.item3": "Technology partners: Polygon, AWS",
        
        // Financials Section
        "financials.badge": "Financial Projections",
        "financials.title": "Growth Roadmap with 3 Scenarios",
        "financials.subtitle": "2026-2035 revenue and valuation estimates",
        "financials.conservative": "Conservative",
        "financials.base": "Base",
        "financials.aggressive": "Aggressive",
        "financials.year": "Year",
        "financials.revenue": "Revenue",
        "financials.arr": "ARR",
        "financials.customers": "Customers",
        "financials.investment": "Investment",
        "financials.valuation": "Valuation",
        "financials.rounds": "💵 Investment Rounds",
        
        // Revenue & Funds
        "revenue.badge": "Revenue Models",
        "revenue.title": "6 Revenue Models - 2028 Breakdown",
        "revenue.subtitle": "Multi-layered revenue model for financial sustainability",
        "funds.badge": "Use of Funds",
        "funds.title": "Seed Investment Use of Funds ($1.5-2M)",
        "funds.subtitle": "Maximum growth with strategic resource allocation",
        
        // Team Section
        "team.badge": "Our Team",
        "team.title": "Experienced Leadership Team",
        "team.subtitle": "Expert team shaping the carbon market",
        "team.role1": "Founder & CEO",
        "team.bio1": "Lionexia founder, 15+ years fintech experience",
        "team.role2": "CTO & Co-Founder",
        "team.bio2": "18+ years software and blockchain experience",
        "team.role3": "Advisor",
        "team.bio3": "ACWA Power - Energy sector expert",
        "team.role4": "Advisor",
        "team.bio4": "Borusan EnBW - Renewable energy",
        "team.role5": "Advisor",
        "team.bio5": "ÇEKÜL Foundation - NGO and sustainability",
        
        // Calculator Section
        "calculator.badge": "Investment Calculator",
        "calculator.title": "Investment Return Calculator",
        "calculator.subtitle": "Calculate your potential returns in real-time",
        "calculator.amount": "Investment Amount",
        "calculator.years": "Investment Duration",
        "calculator.yearsLabel": "years",
        "calculator.scenario": "Scenario",
        "calculator.total": "Total Return",
        "calculator.exit": "Exit Valuation",
        
        // Footer
        "footer.contact": "Contact",
        "footer.location": "Istanbul + London",
        "footer.legal": "Legal",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Use",
        "footer.dataroom": "Data Room",
        "footer.social": "Social Media",
        "footer.copy": "© 2025 CarbonEcoMarket. Confidential and proprietary document. All rights reserved."
    }
};

// Language Management
let currentLang = 'tr';

function setLanguage(lang) {
    currentLang = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update charts and financial data
    updateFinancialTable();
    updateCharts();
    updateROICalculator();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Language toggle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
    
    // Smooth scroll for navigation
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
    
    // Sticky header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Initialize everything
    setLanguage('tr');
    
    // Add loading animation
    document.body.classList.add('loaded');
});

// Performance optimization
window.addEventListener('load', function() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});
