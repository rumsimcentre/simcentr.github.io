document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const homePage = document.getElementById("home-page");
  const coursePage = document.getElementById("course-page");
  const accreditationPage = document.getElementById("accreditation-page");
  const courseTitle = document.getElementById("course-title");
  const courseIcon = document.getElementById("course-icon");
  const courseTabs = document.getElementById("course-tabs");
  const courseContent = document.getElementById("course-content");
  const courseBackButton = document.getElementById("course-back-btn");
  const accreditationBackButton = document.getElementById("accreditation-back-btn");
  const accreditationGrid = document.getElementById("accreditation-grid");
  const openAccreditationButton = document.getElementById("open-accreditation");

  const accreditationSkills = [
    {
      name: "Внутривенная инъекция",
      algorithm: `1. Подготовка: Проверьте назначение и совместимость препаратов. Согласуйте личность пациента. Объясните пациенту процедуру, получите согласие. Вымойте руки, наденьте перчатки. Подготовьте всё необходимое: антисептики, шприц, игла, вата, жгут, лейкопластырь и т.д.\n2. Проведение процедуры: Посадите или уложите пациента удобно, рука вытянута. Наложите жгут на плечо выше места инъекции на 10–15 см. Определите вену, обработайте кожу спиртовой салфеткой. Пальцами фиксируйте вену. Введите иглу скошенной стороной вверх под углом 30–45° к коже. После появления крови в шприце удалите жгут, убедитесь, что игла находится в вене. Медленно введите раствор. Проверьте, что раствор введён полностью.\n3. Завершение: Аккуратно извлеките иглу, прижмите место инъекции стерильной ватой. Задержите вату на месте укола 3–5 минут, при необходимости наложите лейкопластырь. Утилизируйте инструменты согласно санитарным требованиям. Снимите перчатки, вымойте руки. Зафиксируйте выполнение процедуры в медицинской документации.`,
      link: "https://fmza.ru/upload/medialibrary/df9/pasport_pa_vv_10.06_itog.pdf"
    },
    {
      name: "Базовая СЛР",
      algorithm: `1. Оценить безопасность для себя, окружающих и пострадавшего.\n2. Проверить наличие сознания у пострадавшего (динамический вербальный и тактильный контакт).\n3. Позвать на помощь.\n4. Проверить дыхание (не более 10 секунд): запрокиньте голову, приподнимите подбородок, обеспечив проходимость дыхательных путей. Оцените наличие движения грудной клетки и дыхания.\n5. При отсутствии дыхания: попросите вызвать скорую помощь (112/103). Начните СЛР: 30 компрессий грудной клетки — 2 вдоха (если обучены). При наличии барьера выполните искусственные вдохи. При невозможности/нежелании искусственной вентиляции — только компрессии.\n6. Компрессии грудной клетки: частота 100–120 в минуту, глубина 5–6 см. После каждого нажатия дайте грудной клетке полностью расправиться.\n7. Продолжайте СЛР до появления самостоятельного дыхания, приезда скорой, появления автоматического наружного дефибриллятора или истощения сил.`,
      link: "https://fmza.ru/upload/medialibrary/a73/pasport_bslr-podderzh.prokhodimosti-d.p._06.02.2023-_1_.pdf"
    },
    {
      name: "Экстренная медицинская помощь",
      algorithm: `1. Оценка ситуации и оказание первой помощи.\n2. Вызов специализированной помощи (при необходимости).\n3. Проведение комплекса неотложных мероприятий (СЛР, остановка кровотечения и др.).\n4. Мониторинг состояния пациента.\n5. Заполнение медицинской документации.\n\nАлгоритм включает: оценку ситуации (проверьте безопасность, наличие сознания, дыхания), вызов помощи (112/103), проведение первой помощи в зависимости от ситуации (остановка кровотечения, иммобилизация, СЛР при необходимости), мониторинг витальных показателей, оформление документации.`,
      link: "https://fmza.ru/upload/medialibrary/fe7/pasport_pa_psa_emp_30.03.26_red.pdf"
    },
    {
      name: "Диспансеризация",
      algorithm: `1. Брифинг — перед началом работы участнику предоставляют входные данные и условия задачи.\n2. Порядок и алгоритм выполнения диспансеризации:\n   - приветствие пациента, идентификация, сбор жалоб и анамнеза;\n   - оценка факторов риска, проведение осмотра, назначение и оценка необходимых диагностических обследований;\n   - формулировка заключения по результатам обследования;\n   - определение группы здоровья и формулировка рекомендаций;\n   - оформление медицинской документации.\n3. Оценочный лист (чек-лист) содержит критерии оценивания и обязательность последовательного выполнения всех этапов.`,
      link: "https://fmza.ru/upload/medialibrary/2fa/pasport_lechebnoe-delo_dispanserizatsiya_01.03.2020_pravki03.04.25.pdf"
    },
    {
      name: "Сбор жалоб и анамнеза",
      algorithm: `1. Приветствие и установление контакта с пациентом: представиться, уточнить ФИО, удостовериться в готовности пациента к беседе.\n2. Выяснение жалоб: открытые вопросы («Что вас беспокоит?», «Когда начались симптомы?»), уточнение основных и сопутствующих жалоб.\n3. Сбор анамнеза заболевания: когда и как началось заболевание; как протекало со времени возникновения; какие были предприняты меры; динамика симптомов.\n4. Сбор анамнеза жизни: перенесённые заболевания, операции, травмы; аллергический анамнез; наследственность; профессиональные вредности; вредные привычки.\n5. Уточнение дополнительной информации (по необходимости).\n6. Обобщение собранных данных: повторить пациенту информацию и получить подтверждение её точности.\n7. Завершение беседы: поблагодарить пациента и уточнить, есть ли у него вопросы.`,
      link: "https://fmza.ru/upload/medialibrary/b45/pasport_sbor-zhalob-i-anamneza_pa_lechebnoe-delo_-pediatriya_11.02.2023.pdf"
    },
    {
      name: "Физикальное обследование ССС",
      algorithm: `1. Общий осмотр пациента: оценка состояния и положения, цвет кожных покровов, наличие цианоза или отёков, дыхание и пульс.\n2. Пальпация: оценка верхушечного толчка, пальпация крупных сосудов, выявление патологических пульсаций и дрожания.\n3. Перкуссия: определение границ относительной и абсолютной сердечной тупости, анализ смещения границ сердца.\n4. Аускультация: прослушивание сердечных тонов и шумов на стандартных точках; оценка ритма, частоты и дополнительных звуков.\n5. Обследование сосудов: характеристика пульса, измерение артериального давления на обеих руках, оценка вен.`,
      link: "https://fmza.ru/upload/medialibrary/9cf/pasport_fiz.osmotr-patsienta-_sss_spetsialnosti_ld_vodolaznaya-meditsina_kardiologiya_ovp_sskh_terapiya_10.02.2023.pdf"
    },
    {
      name: "Физикальное обследование ДС",
      algorithm: `1. Опрос пациента (сбор жалоб).\n2. Внешний осмотр грудной клетки: форма, симметричность, дыхательные движения.\n3. Пальпация грудной клетки: оценка эластичности, болезненности и голосового дрожания.\n4. Перкуссия лёгких: сравнительная и топографическая.\n5. Аускультация лёгких: характер дыхательных шумов, хрипов, крепитации и др.\n6. Интерпретация данных и составление заключения.`,
      link: "https://fmza.ru/upload/medialibrary/223/pasport_pa_psa_fizikalnoe-obsledovanie-patsienta_ds_15.02.2023.pdf"
    },
    {
      name: "Физикальное обследование ЖКТ",
      algorithm: `1. Ознакомление с брифингом.\n2. Правильное представление пациента, получение согласия.\n3. Осмотр: положение, цвет кожных покровов, видимые изменения живота и др.\n4. Пальпация: поверхностная и глубокая, определение болезненных участков и размеров органов.\n5. Перкуссия: определение границ органов брюшной полости и выявление жидкости.\n6. Аускультация: прослушивание перистальтических шумов.\n7. Заключение — оформление результатов обследования и фиксация в медицинской документации.`,
      link: "https://fmza.ru/upload/medialibrary/e7f/pasport_gastroenterologiya_fizikalnoe-obsledovanie-patsienta-_zhkt_10.03.25.pdf"
    }
  ];

  const courseData = {
    slr: {
      title: "Сердечно-лёгочная реанимация",
      icon: "🚑",
      tabs: [
        {
          label: "1. Вступление",
          content: `
            <h2>Вступление</h2>
            <p><strong>Сердечно-лёгочная реанимация</strong> — это комплекс экстренных мер, направленных на восстановление.</p>
            <div class="warning"><strong>⚠️ Важно:</strong> СЛР выполняется только при угрозе жизни и в экстренной ситуации.</div>
            <h2>Когда нужна СЛР?</h2>
            <ul>
              <li>нет сознания;</li>
              <li>нет пульса на сонной артерии;</li>
              <li>нет дыхания или дыхание очень редкое;</li>
              <li>произошла остановка сердца после травмы, утопления или поражения током.</li>
            </ul>
          `
        }
      ]
    }
  };

  function renderAccreditationList() {
    if (!accreditationGrid) return;

    accreditationGrid.innerHTML = accreditationSkills
      .map(
        (skill, index) => `
          <button type="button" class="accreditation-skill-button" data-skill-index="${index}">
            ${skill.name}
          </button>
        `
      )
      .join("");

    document.querySelectorAll(".accreditation-skill-button").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.skillIndex);
        showAccreditationSkill(index);
      });
    });
  }

  function showAccreditationSkill(index) {
    const skill = accreditationSkills[index];
    if (!skill || !accreditationGrid) return;

    accreditationGrid.innerHTML = `
      <div class="accreditation-detail" style="grid-column: 1 / -1;">
        <div class="accreditation-detail-header">
          <h3>${skill.name}</h3>
        </div>

        <div class="accreditation-detail-body">
          <h4>Алгоритм выполнения навыка</h4>
          <p>${skill.algorithm.replace(/\n/g, "<br><br>")}</p>
        </div>

        <div class="accreditation-detail-actions">
          <a href="${skill.link}" target="_blank" rel="noopener noreferrer" class="pdf-link">Открыть PDF</a>
          <button type="button" class="back-to-list-btn" id="back-to-list-btn">← Назад к списку</button>
        </div>
      </div>
    `;

    const backButton = document.getElementById("back-to-list-btn");
    if (backButton) {
      backButton.addEventListener("click", renderAccreditationList);
    }
  }

  function showAccreditationPage() {
    renderAccreditationList();
    homePage.classList.add("hidden");
    coursePage.classList.add("hidden");
    accreditationPage.classList.remove("hidden");
  }

  function showHomePage() {
    homePage.classList.remove("hidden");
    coursePage.classList.add("hidden");
    accreditationPage.classList.add("hidden");
  }

  function renderCourse(courseKey) {
    const course = courseData[courseKey];
    if (!course || !courseTitle || !courseIcon || !courseTabs || !courseContent) return;

    courseTitle.textContent = course.title;
    courseIcon.textContent = course.icon;

    courseTabs.innerHTML = course.tabs
      .map(
        (tab, index) =>
          `<button type="button" class="course-tab ${index === 0 ? "active" : ""}" data-index="${index}">${tab.label}</button>`
      )
      .join("");

    const tabButtons = courseTabs.querySelectorAll(".course-tab");
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        tabButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
        renderTabContent(courseKey, index);
      });
    });

    renderTabContent(courseKey, 0);
  }

  function renderTabContent(courseKey, index) {
    const course = courseData[courseKey];
    if (!course || !courseContent) return;
    courseContent.innerHTML = course.tabs[index].content;
  }

  function showCourse(courseKey) {
    renderCourse(courseKey);
    homePage.classList.add("hidden");
    accreditationPage.classList.add("hidden");
    coursePage.classList.remove("hidden");
  }

  if (openAccreditationButton) {
    openAccreditationButton.addEventListener("click", showAccreditationPage);
  }

  if (accreditationBackButton) {
    accreditationBackButton.addEventListener("click", showHomePage);
  }

  if (courseBackButton) {
    courseBackButton.addEventListener("click", showHomePage);
  }

  document.querySelectorAll(".course-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      showCourse(button.dataset.course);
    });
  });
});
