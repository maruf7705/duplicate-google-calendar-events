function duplicateEvents() {
  var calendarId = "your_calendar_id"; // Your calendar ID
  var calendar = CalendarApp.getCalendarById(calendarId);
  var sourceDate = new Date(2025, 2, 10); // March 10, 2025
  var targetDate = new Date(2025, 2, 11); // March 11, 2025

  var events = calendar.getEventsForDay(sourceDate);

  events.forEach(event => {
    var startTime = event.getStartTime();
    var endTime = event.getEndTime();

    // Adjust new event times to match the target date
    var newStartTime = new Date(targetDate);
    newStartTime.setHours(startTime.getHours(), startTime.getMinutes());

    var newEndTime = new Date(targetDate);
    newEndTime.setHours(endTime.getHours(), endTime.getMinutes());

    // Ensure start time is before end time
    if (newStartTime < newEndTime) {
      var newEvent = calendar.createEvent(
        event.getTitle(),
        newStartTime,
        newEndTime,
        {location: event.getLocation(), description: event.getDescription()}
      );

      // Get the event color using setColor (uses numeric color IDs)
      try {
        var colorId = event.getColor(); // Gets the colorId
        if (colorId) {
          newEvent.setColor(colorId); // Set the color of the new event
        }
      } catch (error) {
        Logger.log("Error getting color: " + error.message);
      }

    } else {
      Logger.log("Skipped event due to invalid timing: " + event.getTitle());
    }
  });

  Logger.log("Events duplicated successfully with colors!");
}
