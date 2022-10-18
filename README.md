# Workday Scheduler

## Description

This Workday Scheduler web application utilizes Bootstrap to help with styling, jQuery to help with DOM traversal and manipulation, and the browser's local storage for saving input. The user's input is captured in the `<textarea>` of each time block and saved to local storage when the user clicks the **SAVE** button. There is an on-click event listener on this button. 
<br>
Different stlying is applied to each block of time depending on the current time. This is accomplished by tracking the curernt time (represented by an integer from 0-24 and generated using `moment.js`) and comparing that value with the `id` of each time block, which is a number ranging from 9 to 18 (representing the 9AM through 6PM time blocks). The `.past`, `.presesnt`, or `.future` stlying defined in `./assets/css/stlye.css` is then applied to each time block based on what the current time is. Therefore the `.past` class is applied to time blocks with lower `id` numbers than the current time, etc.

## Usage

[You can launch the application from here.]()
<br>

To use this web app you can input a task into the text area of each time block and hit the **SAVE** button to save your input to your browser's local storage.
