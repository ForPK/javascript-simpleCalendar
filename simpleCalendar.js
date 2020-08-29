"use strict";

function init() {
  const select = document.getElementById("choice-month");
  const titMonth = document.getElementById("month");
  const dayWrap = document.getElementById("day-wrap");
  let day = 0;
  function createDay(selectvalue) {
    if (selectvalue === "February") {
      day = 28;
    } else if (
      selectvalue === "April" ||
      selectvalue === "June" ||
      selectvalue === "September" ||
      selectvalue === "November"
    ) {
      day = 30;
    } else if (selectvalue === select.options[0].value) {
      day = 0;
      titMonth.textContent = "";
    } else {
      day = 31;
    }

    function days() {
      dayWrap.textContent = "";
      for (let i = 1; i <= day; i++) {
        const createLi = document.createElement("li");
        dayWrap.appendChild(createLi);
        createLi.textContent = i;
      }
    }

    days();
  }

  function onchangeEvent() {
    titMonth.textContent = select.value;
    createDay(select.value);
    // console.log("if day", day);
  }

  select.addEventListener("change", onchangeEvent);
}

init();
