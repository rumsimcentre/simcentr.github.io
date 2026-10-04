document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const homePage = document.getElementById("home-page");
  const coursePage = document.getElementById("course-page");
  const courseTitle = document.getElementById("course-title");
  const courseIcon = document.getElementById("course-icon");
  const courseTabs = document.getElementById("course-tabs");
  const courseContent = document.getElementById("course-content");
  const courseBackButton = document.getElementById("course-back-btn");

  const courseData = {
    slr: {
      title: "Сердечно-лёгочная реанимация",
      icon: "🚑",
      tabs: [
        {
          label: "1. Вступление",
          content: `
            <h2>Вступление</h2>
            <p><strong>Сердечно-лёгочная реанимация</strong> — это комплекс экстренных мер, направленных на восстановление дыхания и кровообращения.</p>
            <div class="warning"><strong>⚠️ Важно:</strong> СЛР выполняется только при угрозе жизни и в экстренной ситуации.</div>
            <h2>Когда нужна СЛР?</h2>
            <ul>
              <li>нет сознания;</li>
              <li>нет пульса на сонной артерии;</li>
              <li>нет дыхания или дыхание очень редкое;</li>
              <li>произошла остановка сердца после травмы, утопления или поражения током.</li>
            </ul>
          `
        },
        {
          label: "2. Методическое пособие",
          content: `
            <h2>Методическое пособие</h2>
            <p>Ниже представлены базовые действия при оказании первой помощи.</p>
            <div class="grid">
              <div class="mini-card">
                <h3>1. Проверка безопасности</h3>
                <p>Убедитесь, что вокруг безопасно и вы не подвергаете себя риску.</p>
              </div>
              <div class="mini-card">
                <h3>2. Вызов помощи</h3>
                <p>Немедленно вызывайте скорую и попросите принести дефибриллятор.</p>
              </div>
              <div class="mini-card">
                <h3>3. Проверка сознания</h3>
                <p>Потрясите человека за плечи и спросите: «Вы в порядке?»</p>
              </div>
              <div class="mini-card">
                <h3>4. Дыхание</h3>
                <p>Проверьте дыхание и при его отсутствии начинайте реанимацию.</p>
              </div>
            </div>
          `
        },
        {
          label: "3. Вкладка 3",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        },
        {
          label: "4. Вкладка 4",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        },
        {
          label: "5. Вкладка 5",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        }
      ]
    },
    emergency: {
      title: "Экстренная помощь",
      icon: "🩺",
      tabs: [
        {
          label: "1. Вступление",
          content: `
            <h2>Вступление</h2>
            <p>Экстренная помощь — это действия, которые помогают человеку в первые минуты после травмы или внезапного ухудшения состояния.</p>
            <div class="warning"><strong>⚠️ Важно:</strong> При угрозе жизни сначала вызывайте скорую помощь и действуйте по инструкции.</div>
            <h2>Основные правила</h2>
            <ul>
              <li>оцените обстановку и свою безопасность;</li>
              <li>проверьте сознание пострадавшего;</li>
              <li>вызовите помощь: 103 или 112;</li>
              <li>оказывайте первую помощь до прибытия медиков.</li>
            </ul>
          `
        },
        {
          label: "2. Методическое пособие",
          content: `
            <h2>Методическое пособие</h2>
            <p>При оказании экстренной помощи важно соблюдать простую последовательность действий.</p>
            <div class="grid">
              <div class="mini-card">
                <h3>1. Оценка ситуации</h3>
                <p>Проверьте, нет ли угрозы для вас и пострадавшего.</p>
              </div>
              <div class="mini-card">
                <h3>2. Проверка сознания</h3>
                <p>Попросите пострадавшего ответить и проверьте реакцию.</p>
              </div>
              <div class="mini-card">
                <h3>3. Вызов помощи</h3>
                <p>Немедленно звоните по номеру 103 или 112.</p>
              </div>
              <div class="mini-card">
                <h3>4. Первая помощь</h3>
                <p>Остановите кровотечение, поддержите дыхание и зафиксируйте травму.</p>
              </div>
            </div>
          `
        },
        {
          label: "3. Вкладка 3",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        },
        {
          label: "4. Вкладка 4",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        },
        {
          label: "5. Вкладка 5",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        }
      ]
    },
    injections: {
      title: "Внутривенные инъекции",
      icon: "💉",
      tabs: [
        {
          label: "1. Вступление",
          content: `
            <h2>Вступление</h2>
            <p>Внутривенные инъекции — это способ введения лекарственного препарата напрямую в вену, чтобы он начал действовать быстро.</p>
            <div class="warning"><strong>⚠️ Важно:</strong> Такие процедуры выполняются только обученным специалистом в безопасных условиях.</div>
            <h2>Когда применяют</h2>
            <ul>
              <li>при необходимости быстрого эффекта препарата;</li>
              <li>когда препарат нельзя принять через рот;</li>
              <li>для поддержания водно-электролитного баланса;</li>
              <li>в стационаре и амбулаторной практике.</li>
            </ul>
          `
        },
        {
          label: "2. Методическое пособие",
          content: `
            <h2>Методическое пособие</h2>
            <p>Основой техники является соблюдение стерильности и безопасный выбор места введения.</p>
            <div class="grid">
              <div class="mini-card">
                <h3>1. Подготовка</h3>
                <p>Проверяют лекарство, дозировку, срок годности и стерильность упаковки.</p>
              </div>
              <div class="mini-card">
                <h3>2. Обработка кожи</h3>
                <p>Кожу в месте пункции обрабатывают антисептиком.</p>
              </div>
              <div class="mini-card">
                <h3>3. Венепункция</h3>
                <p>Иглу вводят в вену под небольшим углом.</p>
              </div>
              <div class="mini-card">
                <h3>4. Контроль</h3>
                <p>Проверяют состояние пациента и отсутствие аллергической реакции.</p>
              </div>
            </div>
          `
        },
        {
          label: "3. Вкладка 3",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        },
        {
          label: "4. Вкладка 4",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        },
        {
          label: "5. Вкладка 5",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        }
      ]
    },
    obstetrics: {
      title: "Акушерство",
      icon: "🤰",
      tabs: [
        {
          label: "1. Вступление",
          content: `
            <h2>Вступление</h2>
            <p>Акушерство — это раздел медицины, посвящённый здоровью женщины в период беременности, родов и послеродового периода.</p>
            <div class="warning"><strong>⚠️ Важно:</strong> Диагностика и наблюдение при беременности должны проводиться квалифицированным специалистом.</div>
            <h2>Основные задачи</h2>
            <ul>
              <li>следить за состоянием матери и плода;</li>
              <li>выявлять осложнения на ранних этапах;</li>
              <li>оценивать готовность к родам;</li>
              <li>обеспечивать безопасное ведение родового процесса.</li>
            </ul>
          `
        },
        {
          label: "2. Методическое пособие",
          content: `
            <h2>Методическое пособие</h2>
            <p>Обучение акушерству включает базовые знания о физиологии беременности и правилах ведения родов.</p>
            <div class="grid">
              <div class="mini-card">
                <h3>1. Подготовка</h3>
                <p>Проводят сбор анамнеза, оценку жалоб и сроков беременности.</p>
              </div>
              <div class="mini-card">
                <h3>2. Осмотр</h3>
                <p>Оценивают общее состояние, давление и сердцебиение плода.</p>
              </div>
              <div class="mini-card">
                <h3>3. Профилактика</h3>
                <p>Контролируют питание, режим и регулярность обследований.</p>
              </div>
              <div class="mini-card">
                <h3>4. Наблюдение</h3>
                <p>Своевременно выявляют ухудшение состояния и осложнения.</p>
              </div>
            </div>
          `
        },
        {
          label: "3. Физиология беременности",
          content: `
            <h2>Физиология беременности</h2>
            <p>Во время беременности в организме женщины происходят значительные изменения.</p>
            <ul>
              <li>формируется плацента и растёт матка;</li>
              <li>увеличивается объём крови и меняется работа внутренних органов;</li>
              <li>ухудшается переносимость физических нагрузок.</li>
            </ul>
            <div class="warning"><strong>⚠️ Важно:</strong> При кровотечении, боли или головокружении необходимо срочно обратиться к врачу.</div>
          `
        },
        {
          label: "4. Роды и помощь",
          content: `
            <h2>Роды и помощь</h2>
            <p>Роды — это процесс, в котором важно контролировать состояние матери и плода.</p>
            <div class="grid">
              <div class="mini-card">
                <h3>1. Ведение родов</h3>
                <p>Контроль схваток, состояния матери и сердцебиения плода.</p>
              </div>
              <div class="mini-card">
                <h3>2. Профилактика осложнений</h3>
                <p>Выявление ранних признаков слабости родовой деятельности.</p>
              </div>
              <div class="mini-card">
                <h3>3. Безопасность</h3>
                <p>Соблюдение асептики и чёткая координация действий.</p>
              </div>
            </div>
          `
        },
        {
          label: "5. Послеродовой период",
          content: `
            <h2>Послеродовой период</h2>
            <p>После родов организм женщины восстанавливается, и важно обеспечить ей поддержку и наблюдение.</p>
            <ul>
              <li>контроль артериального давления и пульса;</li>
              <li>оценка состояния швов и выделений;</li>
              <li>поддержка восстановления и кормления.</li>
            </ul>
            <div class="warning"><strong>⚠️ Важно:</strong> При высокой температуре, сильном кровотечении или острой боли обратитесь к врачу.</div>
          `
        }
      ]
    },
    surgery: {
      title: "Хирургия",
      icon: "🔪",
      tabs: [
        {
          label: "1. Вкладка 1",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        },
        {
          label: "2. Вкладка 2",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        },
        {
          label: "3. Вкладка 3",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        },
        {
          label: "4. Вкладка 4",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        },
        {
          label: "5. Вкладка 5",
          content: `<div class="placeholder">Раздел находится в разработке.<br />Скоро здесь появится полезный контент.</div>`
        }
      ]
    }
  };

  function renderCourse(courseKey) {
    const course = courseData[courseKey];
    if (!course) return;

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
    if (!course) return;
    courseContent.innerHTML = course.tabs[index].content;
  }

  function showCourse(courseKey) {
    renderCourse(courseKey);
    homePage.classList.add("hidden");
    coursePage.classList.remove("hidden");
  }

  function showHome() {
    homePage.classList.remove("hidden");
    coursePage.classList.add("hidden");
  }

  document.querySelectorAll(".course-trigger").forEach((button) => {
    button.addEventListener("click", () => {
      showCourse(button.dataset.course);
    });
  });

  courseBackButton.addEventListener("click", showHome);
});
