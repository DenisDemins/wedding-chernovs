function startCountdown(targetDate) {
  const timerElement = document.getElementById("timer-text")

  const timerInterval = setInterval(() => {
    const now = new Date().getTime()
    const distance = targetDate - now

    if (distance < 0) {
      clearInterval(timerInterval)
      timerElement.innerHTML = "всё случилось 🎉"
      return
    }

    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44)) 
    const days = Math.floor(
      (distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24),
    )
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)

    let result = ""
    if (months > 0)
      result += `${months} мес. `
    if (days > 0)
      result += `${days} дн. `

    result += `${hours} ч. ${minutes} мин. ${seconds} сек.`

    timerElement.innerHTML = result
  }, 1000)
}

const eventDate = new Date(2026, 5, 20, 16, 0, 0).getTime()

startCountdown(eventDate)
