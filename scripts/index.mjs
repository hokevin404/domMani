// Part 1: Getting Started
// Explore the existing structure of the provided CodeSandbox to familiarize yourself with important aspects such as current DOM structure, element IDs, and available CSS classes.
// Start the project by building a main content element using the following steps:
//  ~ Select and cache the <main> element in a variable named mainEl.
//  ~ Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
//      ~ Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
//  ~ Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
//  ~ Add a class of flex-ctr to mainEl.
//      ~ Hint: Use the Element.classList API.

let mainEl = document.getElementsByTagName('main');
mainEl[0].style.backgroundColor = 'var(--main-bg)';
mainEl[0].innerHTML = '<h1>DOM Manipulation</h1>';
mainEl[0].classList.add('flex-ctr');
