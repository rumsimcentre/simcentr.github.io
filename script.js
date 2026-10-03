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
            <p><strong>СЛР</strong> — это <strong>сердечно-легочная реанимация</strong>. Это комплекс экстренных мероприятий, выполняемых при остановке сердца и дыхания для поддержания кровообращения и доставки кислорода в головной мозг и жизненно важные органы.</p>
            <div class="warning"><strong>⚠️ Важно:</strong> СЛР выполняется только в экстренной ситуации и лучше всего под руководством обученного человека или по указаниям диспетчера скорой помощи.</div>
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
            <p>Экстренная помощь включает действия, которые необходимо выполнить в первые минуты после внезапного ухудшения состояния человека: травма, потеря сознания, острая боль, кровотечение, удушье или другая угрожающая жизни ситуация.</p>
            <div class="warning"><strong>⚠️ Важно:</strong> Если состояние угрожает жизни, сначала вызывайте скорую помощь и сохраняйте спокойствие.</div>
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
            <p>При оказании экстренной помощи важно соблюдать простую последовательность действий и не паниковать. Чем ��ыстрее и правильнее выполняются первые шаги, тем выше шанс сохранить жизнь.</p>
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
