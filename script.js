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
      title: "СЛР",
      icon: "🚑",
      tabs: [
        {
          label: "1. Вступление",
          content: `
            <h2>Вступление</h2>
            <p><strong>СЛР</strong> — это <strong>сердечно-легочная реанимация</strong>. Это комплекс экстренных мероприятий, вы[...]
            <div class="warning"><strong>⚠️ Важно:</strong> СЛР выполняется только в экстренной ситуации и лучше всего под руков�[...]
            <h2>Когда нужна СЛР?</h2>
            <ul>
              <li>нет сознания;</li>
              <li>нет пульса на сонной артерии;</li>
              <li>не дышит или дышит очень редко и судорожно;</li>
              <li>произошла остановка сердца после травмы, утопления или поражения током.</li>
            </ul>
          `
        },
        {
          label: "2. Методическое пособие",
          content: `
            <h2>Методическое пособие</h2>
            <p>Ниже представлены базовые шаги оказания первой помощи при остановке сердца и дыхания.</p>
            <div class="grid">
              <div class="mini-card">
                <h3>1. Проверка безопасности</h3>
                <p>Убедитесь, что вокруг безопасно и вы не подвергаете себя риску.</p>
              </div>
              <div class="mini-card">
                <h3>2. Вызов помощи</h3>
                <p>Немедленно вызывайте скорую помощь и попросите кого-то принести дефибриллятор.</p>
              </div>
              <div class="mini-card">
                <h3>3. Проверка сознания</h3>
                <p>Потрясите человека за плечи и спросите: «Вы в порядке?»</p>
              </div>
              <div class="mini-card">
                <h3>4. Дыхание</h3>
                <p>Проверьте наличие дыхания в течение 10 секунд. Если его нет — начинайте реанимацию.</p>
              </div>
            </div>
          `
        },
        {
          label: "3. Вкладка 3",
          content: `<div class="placeholder">Здесь будет добавлен контент для третьей вкладки.<br />Пока это заглушка.</div>`
        },
        {
          label: "4. Вкладка 4",
          content: `<div class="placeholder">Здесь будет добавлен контент для четвёртой вкладки.<br />Пока это заглушка.</div>`
        },
        {
          label: "5. Вкладка 5",
          content: `<div class="placeholder">Здесь будет добавлен контент для пятой вкладки.<br />Пока это заглушка.</div>`
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
            <p>Экстренная помощь включает действия, которые необходимо выполнить в первые минуты после внезапно�[...]
            <div class="warning"><strong>⚠️ Важно:</strong> Если состояние угрожает жизни, сначала вызывайте скорую помощь и сох�[...]
            <h2>Основные правила</h2>
            <ul>
              <li>оценить обстановку и свою безопасность;</li>
              <li>проверить сознание пострадавшего;</li>
              <li>вызвать помощь: 103 или 112;</li>
              <li>оказать первую помощь до прибытия медиков.</li>
            </ul>
          `
        },
        {
          label: "2. Методическое пособие",
          content: `
            <h2>Методическое пособие</h2>
            <p>При оказании экстренной помощи важно соблюдать простую последовательность действий и не паникова[...]
            <div class="grid">
              <div class="mini-card">
                <h3>1. Оценка ситуации</h3>
                <p>Проверьте, нет ли угрозы для вас и пострадавшего: огонь, ток, обрушение, транспорт.</p>
              </div>
              <div class="mini-card">
                <h3>2. Проверка сознания</h3>
                <p>Попросите пострадавшего ответить, слегка потрясите его за плечи и оцените реакцию.</p>
              </div>
              <div class="mini-card">
                <h3>3. Вызов помощи</h3>
                <p>Немедленно звоните по номеру 103 или 112 и описывайте ситуацию максимально ясно.</p>
              </div>
              <div class="mini-card">
                <h3>4. Первая помощь</h3>
                <p>Действуйте по ситуации: остановка кровотечения, поддержка дыхания, фиксация травмы.</p>
              </div>
            </div>
          `
        },
        {
          label: "3. Вкладка 3",
          content: `<div class="placeholder">Здесь будет добавлен контент для третьей вкладки.<br />Пока это заглушка.</div>`
        },
        {
          label: "4. Вкладка 4",
          content: `<div class="placeholder">Здесь будет добавлен контент для четвёртой вкладки.<br />Пока это заглушка.</div>`
        },
        {
          label: "5. Вкладка 5",
          content: `<div class="placeholder">Здесь будет добавлен контент для пятой вкладки.<br />Пока это заглушка.</div>`
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
            <p>Внутривенные инъекции — это способ введения лекарственного препарата непосредственно в венозно�[...]
            <div class="warning"><strong>⚠️ Важно:</strong> Внутривенные инъекции выполняются только обученным персоналом в ус�[...]
            <h2>Когда применяют</h2>
            <ul>
              <li>при необходимости быстрого эффекта препарата;</li>
              <li>когда препарат не подходит для перорального приёма;</li>
              <li>для введения растворов и поддержания водно-электролитного баланса;</li>
              <li>в условиях стационара или амбулаторной медицинской помощи.</li>
            </ul>
          `
        },
        {
          label: "2. Методическое пособие",
          content: `
            <h2>Методическое пособие</h2>
            <p>Основой техники является соблюдение стерильности, точный выбор места венепункции и контроль за с�[...]
            <div class="grid">
              <div class="mini-card">
                <h3>1. Подготовка</h3>
                <p>Проверяют лекарство, дозировку, срок годности и состояние упаковки, а также готовят стерильный �[...]
              </div>
              <div class="mini-card">
                <h3>2. Обработка кожи</h3>
                <p>Кожу в месте пункции обрабатывают антисептиком и дают ей высохнуть.</p>
              </div>
              <div class="mini-card">
                <h3>3. Венепункция</h3>
                <p>Иглу вводят в вену под небольшим углом, ориентируясь на видимый или пальпируемый сосуд.</p>
              </div>
              <div class="mini-card">
                <h3>4. Контроль</h3>
                <p>После введения лекарства проверяют состояние пациента, отсутствие аллергической реакции и соб�[...]
              </div>
            </div>
          `
        },
        {
          label: "3. Вкладка 3",
          content: `<div class="placeholder">Здесь будет добавлен контент для третьей вкладки.<br />Пока это заглушка.</div>`
        },
        {
          label: "4. Вкладка 4",
          content: `<div class="placeholder">Здесь будет добавлен контент для четвёртой вкладки.<br />Пока это заглушка.</div>`
        },
        {
          label: "5. Вкладка 5",
          content: `<div class="placeholder">Здесь будет добавлен контент для пятой вкладки.<br />Пока это заглушка.</div>`
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
            <p>Акушерство — это раздел медицины, посвящённый здоровью женщины в период беременности, родов и пос[...]
            <div class="warning"><strong>⚠️ Важно:</strong> Диагностика и наблюдение при беременности должны проводиться квали�[...]
            <h2>Основные задачи</h2>
            <ul>
              <li>следить за состоянием матери и плода;</li>
              <li>выявлять возможные осложнения на ранних этапах;</li>
              <li>оценивать сроки беременности и готовность к родам;</li>
              <li>обеспечивать безопасное ведение родового процесса.</li>
            </ul>
          `
        },
        {
          label: "2. Методическое пособие",
          content: `
            <h2>Методическое пособие</h2>
            <p>Обучение акушерству включает базовые знания о физиологии беременности, оценке состояния матери и[...]
            <div class="grid">
              <div class="mini-card">
                <h3>1. Подготовка</h3>
                <p>Проводят сбор анамнеза, оценку жалоб, выяснение срока беременности и наличие факторов риска.</p>
              </div>
              <div class="mini-card">
                <h3>2. Осмотр</h3>
                <p>Оценка общего состояния, артериального давления, сердцебиения плода, выраженности симптомов.</p>
              </div>
              <div class="mini-card">
                <h3>3. Профилактика</h3>
                <p>Сохраняют режим труда и отдыха, контролируют питание, назначают плановые обследования.</p>
              </div>
              <div class="mini-card">
                <h3>4. Наблюдение</h3>
                <p>Своевременная оценка динамики состояния помогает предотвратить осложнения и вовремя принять м[...]
              </div>
            </div>
          `
        },
        {
          label: "3. Физиология беременности",
          content: `
            <h2>Физиология беременности</h2>
            <p>Во время беременности в организме женщины происходят значительные изменения: усиливается кровоо�[...]
            <ul>
              <li>на ранних сроках формируется плацента и выделительная система плода;</li>
              <li>к 2-3 триместру растёт матка и повышается объём циркулирующей крови;</li>
              <li>ухудшается переносимость физических нагрузок, поэтому важно соблюдать режим.</li>
            </ul>
            <div class="warning"><strong>⚠️ Важно:</strong> Любые признаки кровотечения, сильной боли, головокружения или сниже�[...]
          `
        },
        {
          label: "4. Роды и помощь",
          content: `
            <h2>Роды и помощь</h2>
            <p>Роды — физиологический процесс, в котором происходят регулярные сокращения матки, раскрытие шейк[...]
            <div class="grid">
              <div class="mini-card">
                <h3>1. Ведение родов</h3>
                <p>Контроль схваток, состояния матери, сердцебиения плода и динамики раскрытия шейки матки.</p>
              </div>
              <div class="mini-card">
                <h3>2. Профилактика осложнений</h3>
                <p>Своевременное выявление слабости родовой деятельности, кровотечения или гипоксии плода.</p>
              </div>
              <div class="mini-card">
                <h3>3. Безопасность</h3>
                <p>Соблюдение асептики, поддержание спокойной обстановки и чёткая координация действий команды.</p[...]
              </div>
            </div>
          `
        },
        {
          label: "5. Послеродовой период",
          content: `
            <h2>Послеродовой период</h2>
            <p>Послеродовый период — время после родов, когда организм женщины активно восстанавливается. Важно[...]
            <ul>
              <li>нормализация артериального давления и пульса;</li>
              <li>контроль послеоперационных и послеродовых осложнений;</li>
              <li>оценка состояния швов, выделений и общего самочувствия;</li>
              <li>поддержка матери в процессе восстановления и кормления.</li>
            </ul>
            <div class="warning"><strong>⚠️ Важно:</strong> При высокой температуре, сильном кровотечении, острой боли или слабо[...]
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
          content: `<div class="placeholder">Пусто</div>`
        },
        {
          label: "2. Вкладка 2",
          content: `<div class="placeholder">Пусто</div>`
        },
        {
          label: "3. Вкладка 3",
          content: `<div class="placeholder">Пусто</div>`
        },
        {
          label: "4. Вкладка 4",
          content: `<div class="placeholder">Пусто</div>`
        },
        {
          label: "5. Вкладка 5",
          content: `<div class="placeholder">Пусто</div>`
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
