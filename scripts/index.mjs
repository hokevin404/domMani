// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

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


// Part 2: Creating a Menu Bar
// Next, create a blank menu bar that we can use to later add some interactivity to the page:
//  ~ Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
//  ~ Set the height of the topMenuEl element to be 100%.
//  ~ Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
//  ~ Add a class of flex-around to topMenuEl.

let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');
//console.log(topMenuEl);


// Part 3: Adding Menu Buttons
//  ~ Iterate over the entire menuLinks array and for each "link" object:
//      ~ Create an <a> element.
//      ~ On the new element, add an href attribute with its value set to the href property of the "link" object.
//      ~ Set the new element's content to the value of the text property of the "link" object.
//      ~ Append the new element to the topMenuEl element.

for(let i = 0; i < menuLinks.length; i++)
{
  let anchor = document.createElement('a');
  anchor.href = Object.values(menuLinks[i])[1];
  anchor.innerText = Object.values(menuLinks[i])[0];
  topMenuEl.appendChild(anchor);
}
console.log(topMenuEl);