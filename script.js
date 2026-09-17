(() => {
  function getProgress(start, end) {
    const currentTime = new Date();
    return ((currentTime - start) / (end - start)) * 100;
  }

  function animateBar(barId, textId, percentage) {
    const bar = document.getElementById(barId);
    const text = document.getElementById(textId);

    if (!bar || !text) return;

    let current = 0;
    const target = Math.round(percentage);

    const animation = setInterval(() => {
      current++;

      bar.style.width = current + "%";
      text.textContent = current + "%";

      if (current >= target) {
        clearInterval(animation);
      }
    }, 20);
  }

  const currentDate = new Date();

  // WEEK — Monday to Sunday
  const day = currentDate.getDay();

  const weekStart = new Date(currentDate);
  weekStart.setDate(
    currentDate.getDate() - (day === 0 ? 6 : day - 1)
  );
  weekStart.setHours(0, 0, 0, 0);

  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 7);

  // MONTH
  const monthStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );

  const monthEnd = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    1
  );

  // YEAR
  const yearStart = new Date(
    currentDate.getFullYear(),
    0,
    1
  );

  const yearEnd = new Date(
    currentDate.getFullYear() + 1,
    0,
    1
  );

  // Calculate progress
  const weekProgress = getProgress(weekStart, weekEnd);
  const monthProgress = getProgress(monthStart, monthEnd);
  const yearProgress = getProgress(yearStart, yearEnd);

  // Animate bars
  setTimeout(() => {
    animateBar("week-bar", "week-percent", weekProgress);
    animateBar("month-bar", "month-percent", monthProgress);
    animateBar("year-bar", "year-percent", yearProgress);
  }, 300);
})();
