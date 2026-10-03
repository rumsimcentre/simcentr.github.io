document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const modal = document.getElementById("course-modal");
  const modalContent = document.getElementById("modal-content");
  const modalTitle = document.getElementById("modal-title");
  const modalIcon = document.getElementById("modal-icon");
  const openButtons = document.querySelectorAll(".open-modal");

  const courseData = {
    slr: {
      title: "СЛР",
      icon: "🚑",
      tag: "Сердечно-легочная реанимация",
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
      tag: "Первые действия при кризисе",
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
            <p>При оказании экстренной помощи важно соблюдать простую последовательность действий и не паниковать. Чем быстрее и правильнее выполняются первые шаги, тем выше шанс сохранить жизнь.</p>
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

  const renderModal = (courseKey) => {
    const course = courseData[courseKey];
    if (!course) return;

    modalTitle.textContent = course.title;
    modalIcon.textContent = course.icon;
    modalContent.innerHTML = `
      <p class="modal-tagline">${course.tag}</p>
      <div class="modal-tabs">
        ${course.tabs
          .map(
            (tab, index) =>
              `<button type="button" class="modal-tab ${index === 0 ? "active" : ""}" data-tab-index="${index}">${tab.label}</button>`
          )
          .join("")}
      </div>
      <div class="modal-panel active">${course.tabs[0].content}</div>
      ${course.tabs
        .map(
          (tab, index) =>
            `<div class="modal-panel" data-panel-index="${index}">${tab.content}</div>`
        )
        .join("")}
    `;

    modalContent.querySelectorAll(".modal-tab").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.tabIndex);
        modalContent.querySelectorAll(".modal-tab").forEach((btn) => btn.classList.toggle("active", btn === button));
        modalContent.querySelectorAll(".modal-panel").forEach((panel, panelIndex) => {
          panel.classList.toggle("active", panelIndex === index + 1);
        });
      });
    });
  };

  const openModal = (courseKey) => {
    renderModal(courseKey);
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  };

  openButtons.forEach((button) => {
    button.addEventListener("click", () => openModal(button.dataset.course));
  });

  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});
