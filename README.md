Google Calendar Event Duplicator
This project is a Google Apps Script that allows you to duplicate events from one date to another in your Google Calendar. It also preserves event colors during the duplication process.

Features:
Duplicates events from a source date to a target date.
Copies the event details like title, description, location, start time, and end time.
Duplicates event color (using the colorId property).
Handles event duplication in batches to avoid hitting Google Calendar's rate limits.
Requirements:
Google Account: You need a Google account to access Google Calendar and Apps Script.
Google Calendar: The script will interact with your Google Calendar to fetch and create events.
Google Apps Script: This script uses Google Apps Script to automate the duplication process.
Steps to Set Up:
1. Create a New Google Apps Script Project
Go to Google Apps Script.
Click New Project.
Give your project a name (e.g., "Google Calendar Event Duplicator").
2. Add the Script Code
Replace the default code in the Code.gs file with the script provided.
Modify the calendarId variable with your Google Calendar ID (e.g., "md.maruf99707@gmail.com").
If you want to change the source and target dates, update the sourceDate and targetDate variables in the script.
3. Enable Google Calendar API (Optional but recommended)
If you're using advanced features from the Google Calendar API (like fetching event details), you need to enable the Calendar API.

Go to Resources > Advanced Google Services.
Turn on Google Calendar API.
4. Add Permissions
The script will need permission to access your Google Calendar. Upon first run, it will prompt you for authorization:

Click Review Permissions.
Select your Google account.
Grant permission to the script to access and modify your Google Calendar.
5. Run the Script
Click the Run button (▶️) in the Google Apps Script editor.
Wait for the process to complete.
6. Check Your Google Calendar
Go to your Google Calendar and verify if the events from the source date are duplicated to the target date with the correct details and colors.
Script Details:
Source Date: The date from which events will be copied.
Target Date: The date where the events will be duplicated.
Event Color: The event's color is preserved using colorId.
Rate Limiting: A 1-second delay between event duplications is included to avoid hitting Google Calendar's rate limits.
Troubleshooting:
Rate Limiting Error: If you see an error about creating too many events, try waiting a few minutes before running the script again.
Invalid Color Error: Ensure that the event color is a valid colorId. If the event doesn't have a color, it will not be copied.
License:
This project is licensed under the MIT License - see the LICENSE file for details.
