<p align="center">
  <a href="" rel="noopener">
 <img width=400px height=205px src="./LogoDark.svg" alt="Project logo"></a>
</p>

<h3 align="center">QG Frontend Typescript Technical Assessment</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

</div>

---

<p align="center"> A short assessment on web fundamentals built in Typescript, HTML and CSS3
    <br> 
</p>

## 📝 Table of Contents

-   [📝 Table of Contents](#-table-of-contents)
-   [🏁 Getting Started <a name = "getting_started"></a>](#-getting-started-)
-   [Setup Instructions](#setup-instructions)
-   [🎈 The Task at Hand <a name="task"></a>](#-the-task-at-hand-)
-   [🧐 Questions <a name = "questions"></a>](#-questions-)

## 🏁 Getting Started <a name = "getting_started"></a>

The idea of this exercise is to give you a 'real world' scenario, mimicking one of our proprietary medical assessment forms and a pre-built component (not one of ours). The aim is to complete the assessment to the best of your ability within 45-50 minutes, leaving us 10-15 minutes to talk through your result, your approach, what you might have done differently given more time, and what you would change for next time. Time starts at the top of the hour, so please fork and clone the repository ahead of time, get the repo set up but don't jump the gun on the task ;)

## Setup Instructions

-   Fork and clone the repository
-   Open in your IDE of choice
-   Run `npm install`
-   Run `npm run watch` in the root directory
-   Open `index.html` in your browser
-   Edit either the `index.html` and `main.ts` files, hit save, and refresh the page in your browser to view changes. No hot reloading here folks! We're kickin it old school.

## 🎈 The Task at Hand <a name="task"></a>

> ## What's provided:
>
> You have in front of you:
>
> -   A set-up repository ready for development
> -   A prebuilt card component inside of the `index.html` file
> -   A `fetch` for 2 identically structured pieces of data within a response body of a Contentful API response (we don't use contentful for our production APIs, this is for testing purposes only.)
> -   A 'DOM is ready' function invokation
> -   A simple function to show/hide the card content
> -   A lightweight CSS framework called Bulma (which you don't need to know - installed only as a resource for you and for project setup) documentation here: https://bulma.io/

> ## What you can pull in:
>
> Anything you like! Feel free to grab any templating engines you're familiar with, like handlebars.js, moustache.js etc.
> Even feel free to rebuild the whole thing in your framework of choice from scratch!
>
> **Just remember you've only got 45 minutes, and we've provided you lots to go on to develop in 'Vanilla' Typescript here, so budget your time accordingly**

> ## What we'd like you to accomplish
>
> 1. Please create an `interface` for the incoming data, and type it accordingly.
> 2. Follow the pattern of the pre-built card component, but insert the corresponding data with display text that makes sense
>     > e.g. The text 'Is the patient in withdrawal?' question would correspond with the boolean field `inWithdrawal` which is showing 'No' which would correspond with a `false` boolean
> 3. Where there is a 'pair' of data points, conditionally display the corresponding '...context...' field if the field is true, otherwise hide the context component.
>     > e.g. The text 'Does the patient have any suicidal or homocidal thoughts?' has a corresponding boolean `suicidalOrHomicidalThoughts` which is true, so we display 'Yes'. Therefore we would display the corresponding `suicidalOrHomicidalThoughtsContext` field below it as exemplified in the existing card component.
> 4. Replace the hard-coded values with those returned from the API
> 5. Do this for one piece of 'content' returned by the API
>
> ## Stretch Goal
>
> Iteratively display multiple card components by looping through the array of data, having the show/hide function for all components

## 🧐 Questions <a name = "questions"></a>

The proctor's camera will be off during the time you spend coding, but they will be available for any questions you might have during the assessment. Anything related to the logistics or expectations of the task can be answered, but we can't offer any technical guidance

# Good luck! ✨
