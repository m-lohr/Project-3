# Project-3

## Requirements

For Project 3, you will work with your group to tell a story using data visualizations. Here are the specific requirements:

1. Your visualization must include a Python Flask-powered API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.).

2. Your project should fall into one of the following three tracks:

    - A combination of web scraping and Leaflet or Plotly

    - A dashboard page with multiple charts that update from the same data

    - A server that performs multiple manipulations on data in a database prior to visualization (must be approved)

3. Your project should include at least one JS library that we did not cover.

4. Your project must be powered by a dataset with at least 100 records.

5. Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes).

6. Your final visualization should ideally include at least three views.

## File Structure

The main branch of the GitHub repository contains three HTML files that perform the following functions:

1. indexKen.html accesses the CSS and JavaScript files inside of the staticKen folder. The logic.js file inside of the js folder contains JavaScript code that displays a map containing color-coded pin markers that provide more information upon being clicked.

2. indexMichael.html accesses the CSS and JavaScript files inside of the staticMichael folder. The bubbles.js file inside of the js folder contains JavaScript code that displays a map containing circle markers whose colors and sizes are based on land area and population data, respectively.

3. index2.html accesses the CSS and JavaScript files inside of the static folder. The logic2.js file inside of the js folder contains JavaScript code that displays two pie charts illustraitng population data based on world regions and subregions.

### Code Source/Process Notes

- All chart data/info was scraped from https://restcountries.com/v3.1/all
- The JavaScript library Simple-Statistics was used to obtain information important to the formatting of charts (https://github.com/simple-statistics/simple-statistics)
- Help with chart data access and formatting was provided by Bootcamp Tutors