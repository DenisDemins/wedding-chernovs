ymaps.ready(init)

function init() {
  var myMap = new ymaps.Map("map", {
    center: [47.204694, 39.765265],
    zoom: 12,
  })

  var myPlacemark = new ymaps.Placemark([47.204694, 39.765265])

  myMap.geoObjects.add(myPlacemark)

  var shield = document.getElementById("touch-shield")

  var isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0

  if (isTouch) {
    shield.style.display = "flex"

    myMap.behaviors.disable("drag")
    myMap.behaviors.enable("multiTouch")

    shield.addEventListener(
      "touchstart",
      function (e) {
        if (e.touches.length === 1) {
          shield.classList.add("warning")
        } else {
          shield.classList.remove("warning")
          shield.classList.add("pass-through")
        }
      },
      { passive: false },
    )

    shield.addEventListener("touchend", function () {
      shield.classList.remove("warning", "pass-through")
    })
  } else {
    shield.style.display = "none"
  }
}
