function formatEvent(event) {
  return `${event.name} | ${event.date} | ${event.location}`;
}

if (require.main === module) {
  const orientationEvent = {
    name: "Orientation Day",
    date: "18 Sep 2026",
    location: "Auditorium",
  };

  console.log(welcomeMessage());
  console.log(formatEvent(orientationEvent));
}

module.exports = { formatEvent, welcomeMessage };
