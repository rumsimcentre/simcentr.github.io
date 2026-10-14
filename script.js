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
      algorithm: `1. Подготовка: Проверьте назначение и совместимость препаратов. Согласуйте личность пациента. Об�[...]`,
      link: "https://fmza.ru/upload/medialibrary/df9/pasport_pa_vv_10.06_itog.pdf"
    },
    {
      name: "Базовая СЛР",
      algorithm: `1. Оценить безопасность для себя, окружающих и пострадавшего.\n2. Проверить наличие сознания у пост[...]`,
      link: "https://fmza.ru/upload/medialibrary/a73/pasport_bslr-podderzh.prokhodimosti-d.p._06.02.2023-_1_.pdf"
    },
    {
      name: "Экстренная медицинская помощь",
      algorithm: `1. Оценка ситуации и оказание первой помощи.\n2. Вызов специализированной помощи (при необходимост�[...]`,
      link: "https://fmza.ru/upload/medialibrary/fe7/pasport_pa_psa_emp_30.03.26_red.pdf"
    },
    {
      name: "Диспансеризация",
      algorithm: `1. Брифинг — перед началом работы участнику предоставляют входные данные и условия задачи.\n2. Пор�[...]`,
      link: "https://fmza.ru/upload/medialibrary/2fa/pasport_lechebnoe-delo_dispanserizatsiya_01.03.2020_pravki03.04.25.pdf"
    },
    {
      name: "Сбор жалоб и анамнеза",
      algorithm: `1. Приветствие и установление контакта с пациентом: представиться, уточнить ФИО, удостовериться в[...]`,
      link: "https://fmza.ru/upload/medialibrary/b45/pasport_sbor-zhalob-i-anamneza_pa_lechebnoe-delo_-pediatriya_11.02.2023.pdf"
    },
    {
      name: "Физикальное обследование ССС",
      algorithm: `1. Общий осмотр пациента: оценка состояния и положения, цвет кожных покровов, наличие цианоза или �[...]`,
      link: "https://fmza.ru/upload/medialibrary/9cf/pasport_fiz.osmotr-patsienta-_sss_spetsialnosti_ld_vodolaznaya-meditsina_kardiologiya_ovp_sskh_terapiya_10.02.2023.pdf"
    },
    {
      name: "Физикальное обследование ДС",
      algorithm: `1. Опрос пациента (сбор жалоб).\n2. Внешний осмотр грудной клетки: форма, симметричность, дыхательны�[...]`,
      link: "https://fmza.ru/upload/medialibrary/223/pasport_pa_psa_fizikalnoe-obsledovanie-patsienta_ds_15.02.2023.pdf"
    },
    {
      name: "Физикальное обследование ЖКТ",
      algorithm: `1. Ознакомление с брифингом.\n2. Правильное представление пациента, получение согласия.\n3. Осмотр: п[...]`,
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
            <p><strong>Сердечно-лёгочная реанимация</strong> — это комплекс экстренных мер, направленных на восстановле[...]</p>
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

  // --- Add ripple/interaction handler (idempotent) ---
  if (!window.__accreditationRippleInstalled) {
    window.__accreditationRippleInstalled = true;

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest(
        ".accreditation-main-button, .accreditation-skill-button, .pdf-link, .back-to-list-btn, .course-back, .card-cube, .course-tab"
      );

      if (!trigger) return;

      // Respect keyboard/enter activation: if event is KeyboardEvent or clientX/Y are 0, skip ripple
      if (event instanceof MouseEvent === false && (event.clientX === 0 && event.clientY === 0)) return;

      const rect = trigger.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (event.clientX - rect.left - size / 2) + "px";
      ripple.style.top = (event.clientY - rect.top - size / 2) + "px";
      trigger.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    }, { passive: true });
  }
});
