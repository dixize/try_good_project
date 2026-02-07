const slides = {
    robotics: {
        title: "01. Роботизация производства",
        pre: [
            "Тренд на импортозамещение и нацпроекты",
            "Субсидии на приобретение роботов (20%-50%)",
            "Дефицит кадров и оптимизация затрат",
            "Повышение производительности труда"
        ],
        effects: "Производительность: +30-40% <br> Затраты: -20-40% <br> Травматизм: -50%",
        partners: ["НПП Радиосвязь", "УВЗ", "ОмскТрансМаш", "УралТрубПром"],
        images: [
            {t: "Резка", desc: "Лазерная, плазменная", file: "r1.jpg"},
            {t: "Формовка", desc: "Гибка, штамповка", file: "r2.jpg"},
            {t: "Соединение", desc: "Сварка, склейка", file: "r3.jpg"},
            {t: "Обработка", desc: "Окраска, шлифовка", file: "r4.jpg"},
            {t: "Проверка", desc: "Контроль качества", file: "r5.jpg"},
            {t: "Склад", desc: "Паллетирование", file: "r6.jpg"}
        ]
    },
    quality: {
        title: "02. Контроль качества продукции",
        pre: [
            "Развитие алгоритмов ИИ",
            "Оцифровка процессов",
            "Повышение требований к качеству",
            "Конкуренция производителей"
        ],
        effects: "Брак: -20-35% <br> Скорость контроля: +50% <br> Издержки: -15%",
        partners: ["ГАЗ ГРУППА", "ШЕРЕМЕТЬЕВО", "УВЗ"],
        images: [
            {t: "Конвейер", desc: "Поиск дефектов", file: "q1.jpg"},
            {t: "Гранулометрия", desc: "Анализ фракций", file: "q2.jpg"},
            {t: "Транспорт", desc: "Диспетчеризация", file: "q3.jpg"},
            {t: "Логистика", desc: "Маркировка", file: "q4.jpg"},
            {t: "Пищепром", desc: "Контроль состава", file: "q5.jpg"},
            {t: "Весогабарит", desc: "Автоматизация постов", file: "q6.jpg"}
        ]
    },
    security: {
        title: "03. Средства охраны (ИТСО)",
        pre: [
            "Требования ФЗ и антитеррор",
            "Развитие ИТ-технологий безопасности",
            "Исключение человеческого фактора"
        ],
        effects: "Точность: 99.9% <br> Реакция: 2-3 сек <br> Ошибки: -40%",
        partners: ["РОСНЕФТЬ", "МВД РОССИИ", "ФорвардЭнерго"],
        images: [
            {t: "Периметр", desc: "Заграждения", file: "s1.jpg"},
            {t: "Досмотр", desc: "Интроскопы", file: "s2.jpg"},
            {t: "Сигнализация", desc: "Датчики движения", file: "s3.jpg"},
            {t: "Видео", desc: "Тепловизоры", file: "s4.jpg"},
            {t: "СКУД", desc: "Биометрия", file: "s5.jpg"},
            {t: "Спецсредства", desc: "Радары, сонары", file: "s6.jpg"}
        ]
    },
    eco: {
        title: "04. Экомониторинг и Промбезопасность",
        pre: [
            "Программа «Безопасный труд»",
            "Экологическая ответственность (ESG)",
            "Снижение аварийности"
        ],
        effects: "Аварийность: -50% <br> Выявление угроз: 1 мин <br> Штрафы: -100%",
        partners: ["НОРНИКЕЛЬ", "СУЭК", "ЕВРАЗ", "СЕЛИГДАР"],
        images: [
            {t: "Мониторинг", desc: "Датчики газов", file: "e1.jpg"},
            {t: "Наряды", desc: "Цифровой допуск", file: "e2.jpg"},
            {t: "Позиционирование", desc: "Трекинг персонала", file: "e3.jpg"},
            {t: "Транспорт", desc: "Антинаезд", file: "e4.jpg"},
            {t: "Экология", desc: "Выбросы в среду", file: "e5.jpg"},
            {t: "Сейсмика", desc: "Контроль недр", file: "e6.jpg"}
        ]
    },
    equipment: {
        title: "05. Технологическое оборудование",
        pre: [
            "Импортозамещение узлов и агрегатов",
            "Замена ушедших вендоров",
            "Локализация производства"
        ],
        effects: "Объемы: +20% <br> Брак: <1% <br> Ремонт: -30%",
        partners: ["ЯЗДА", "ЯМЗ", "ХИАГДА"],
        images: [
            {t: "Котлы", desc: "Теплообменники", file: "eq1.jpg"},
            {t: "Энергия", desc: "Генераторы", file: "eq2.jpg"},
            {t: "Давление", desc: "Компрессоры", file: "eq3.jpg"},
            {t: "Турбины", desc: "Паровые и газовые", file: "eq4.jpg"},
            {t: "Очистка", desc: "Вентиляция", file: "eq5.jpg"},
            {t: "Ректификация", desc: "Колонны", file: "eq6.jpg"}
        ]
    }
};

function openSlide(key) {
    const data = slides[key];
    const body = document.getElementById('modal-body');
    const overlay = document.getElementById('modal-overlay');

    // Формируем HTML внутри модального окна
    body.innerHTML = `
        <div class="slide-header">
            <h1>${data.title}</h1>
        </div>
        <div class="slide-body">
            <div class="text-col">
                <h3>Предпосылки развития:</h3>
                <ul>
                    ${data.pre.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <div class="effects-box">
                    <strong>Эффекты:</strong><br>
                    ${data.effects}
                </div>
                <div style="margin-top: 30px;">
                    <h3>Опыт внедрения:</h3>
                    <div class="partners-row">
                        ${data.partners.map(p => `<div class="partner-badge">${p}</div>`).join('')}
                    </div>
                </div>
            </div>
            
            <div class="visual-col">
                <h3>Области применения:</h3>
                <div class="grid-images">
                    ${data.images.map(img => `
                        <div class="img-card">
                            <div class="img-placeholder">
                                ${img.file ? `<img src="${img.file}" onerror="this.style.display='none'">` : ''}
                                <span style="${img.file ? 'position:absolute;z-index:-1' : ''}">ФОТО</span>
                            </div>
                            <h5>${img.t}</h5>
                            <span>${img.desc}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку основного сайта
}

function closeSlide() {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Возвращаем прокрутку
}
