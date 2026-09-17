function progress(start, end) {
  return ((new Date() - start) / (end - start)) * 100;
}

function animate(barId, textId, value) {
  const bar = document.getElementById(barId);
  const text = document.getElementById(textId);
  const target = Math.round(value);
  let current = 0;

  const timer = setInterval(function() {
    current++;
    bar.style.width = current + "%";
    text.textContent = current + "%";

    if (current >= target) {
      clearInterval(timer);
    }
  }, 20);
}

const now = new Date();

const day = now.getDay();
const weekStart = new Date(now);
weekStart.setDate(now.getDate() - (day === 0 ? 6 : day - 1));
weekStart.setHours(0, 0, 0, 0);

const weekEnd = new Date(weekStart);
weekEnd.setDate(weekStart.getDate() + 7);

const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 1);

const yearStart = new Date(now.getFullYear(), 0, 1);
const yearEnd = new Date(now.getFullYear() + 1, 0, 1);

animate("week-bar", "week-percent", progress(weekStart, weekEnd));
animate("month-bar", "month-percent", progress(monthStart, monthEnd));
animate("year-bar", "year-percent", progress(yearStart, yearEnd));
