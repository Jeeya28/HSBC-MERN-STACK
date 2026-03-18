<h1 align='center'>React JS </h1>

## What is React JS?

React JS is a **JavaScript library** used to build **fast and
interactive user interfaces (UI)**.

------------------------------------------------------------------------

##  Key Features of React

-   Component-Based Architecture
-   Used to build **Single Page Applications (SPA)**
-   High performance using **Virtual DOM**
-   Uses **Diffing Algorithm**
-   Declarative programming approach
-   Reusable components

------------------------------------------------------------------------

##  Real DOM vs Virtual DOM

### Real DOM

-   Represents actual HTML structure
-   Slow updates
-   Entire DOM re-rendered on every change

### Virtual DOM

-   Lightweight copy of Real DOM
-   React updates only changed parts
-   Faster rendering

------------------------------------------------------------------------

##  Diffing Algorithm

-   Compares:
    -   Previous Virtual DOM
    -   Updated Virtual DOM
-   Identifies differences
-   Updates only required elements

------------------------------------------------------------------------

##  Reconciliation

Process of updating UI efficiently: 
1. Create new Virtual DOM 
2. Compare with old Virtual DOM 
3. Update only changed elements in Real DOM

------------------------------------------------------------------------

##  React App Setup (Vite)

### Tools Used

-   `npx` → Node Package Executor
-   `npm` → Node Package Manager

### Create React App using Vite

``` bash

START
  │
  ▼
Open Terminal / Command Prompt
  │
  ▼
Run Command:
npm create vite@latest
  │
  ▼
Enter Project Name
(e.g., my-react-app)
  │
  ▼
Select Framework
→ React
  │
  ▼
Select Variant
→ JavaScript / TypeScript
  │
  ▼
Select y 
  │
  ▼
Project Created Successfully
  │
  ▼
Open Browser
(http://localhost:5173)
  │
  ▼
React App Running 
  │
  ▼
END
```

------------------------------------------------------------------------

##  React + Vite Folder Structure

    project-name/
    │
    ├── node_modules/        # Installed dependencies
    ├── public/              # Static assets (images, icons)
    │   └── vite.svg
    │
    ├── src/                 # Main source code
    │   ├── assets/          # Images, styles, etc.
    │   ├── components/      # Reusable components (create manually)
    │   ├── App.jsx          # Root component
    │   ├── App.css          # Styling for App
    │   ├── main.jsx         # Entry point (ReactDOM rendering)
    │   └── index.css        # Global styles
    │
    ├── .gitignore           # Files to ignore in Git
    ├── index.html           # Main HTML file
    ├── package.json         # Project metadata & dependencies
    ├── package-lock.json    # Dependency lock file
    ├── vite.config.js       # Vite configuration
    └── README.md            # Project documentation

------------------------------------------------------------------------

##  AJAX

Used for API calls: - fetch() - axios

------------------------------------------------------------------------

##  JSX

-   HTML-like syntax inside JavaScript
-   Must return single parent element

------------------------------------------------------------------------

##  Components

### Class Components

-   Stateful
-   Uses class

### Functional Components

-   Modern approach
-   Uses Hooks

------------------------------------------------------------------------

##  Summary

-   React = UI Library
-   Virtual DOM improves performance
-   Components are reusable
