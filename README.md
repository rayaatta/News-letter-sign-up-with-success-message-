# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
### What I learned

Honestly this time, i learnt a lot from this challenge especially in javascript regarding for,m validation.
At first my code worked but everything would reset itself to theoriginal so i learnt about preventDefault which prevents the page from reloading after form submition.

```js
form.addEventListener("submit", (event) => {
    if (!email.validity.valid) {
        showError();
    }  else if (email.value === ""){
        showError();
    } else {
        signUp.style.display = "none";
        successMessage.style.display = "flex";
        address.innerText = `${email.value}`;
        

    }
    /* stopping page reload after submitting form*/
    event.preventDefault();

});
```



### Continued development

Right now i am still learning javascriptand i still hope to improve
### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.

## Author

- name - Raya'atta
- Frontend Mentor - [@rayaatta](https://www.frontendmentor.io/profile/rayaatta)