//DOM Manipulation (Part ONE)---------------------------------------------------------------------------------------------------------------------

// Menu data structure (Part ONE)
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
// ];

// Menu data Structure (Part TWO)
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
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
console.log();

// DOM Manipulation (Part Two)------------------------------------------------------------------------------------------------------------------

// Part 1: Getting Started
// ~~ Progress Check ~~

//----------------------------------------------------------------------------------------------------------------------------------------------
// Part 2: Adding Additional HTML and CSS
// One of the most important features of an interactive user interface is feedback. The user needs to know that their actions are accomplishing something, even if it is something as simple as a button shifting color slightly or changing the cursor style when hovered, indicating that it is clickable.
// ~~ Add HTML lines ~~
//  <header>
//	  <nav id="top-menu"></nav>
//	  <!-- Add the <nav> element below -->
//	  <nav id="sub-menu"></nav>
//  </header>
// ~~ Add CSS lines ~~
// header, #top-menu {
// 	position: relative;
// }
// #top-menu {
// 	z-index: 20;
// }
// #sub-menu {
// 	width: 100%;
// 	z-index: 10;
// 	transition: top 0.5s ease-out;
// }
// #sub-menu a:hover {
// 	background-color: var(--top-menu-bg);
// }
// nav a.active {
// 	background-color: var(--sub-menu-bg);
// 	color: var(--main-bg);
// }
//----------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------
// Part 3: Creating the Submenu
// A submenu serves as an additional menu for users to select from, and offers more specific context to the top-level menu's options. We will start by using some DOM manipulation techniques to format the submenu before adding interaction to each menu component.
// All future steps should be completed within the index.js file.
//  ~ Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
//  ~ Set the height subMenuEl element to be "100%".
//  ~ Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
//  ~ Add the class of flex-around to the subMenuEl element.

let subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');

// Now, change the position of the submenu to temporarily hide it. Later, we will make the submenu appear dynamically based on user interaction:
//  ~ Set the CSS position property of subMenuEl to the value of absolute.
//  ~ Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';
//----------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------
// Part 4: Adding Menu Interaction
// In order to add submenu links, we will need to restructure the menuLinks array within index.js. Update the menuLinks array to the following:
// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '#', subLinks: [
//     {text: 'all', href: '/catalog/all'},
//     {text: 'top selling', href: '/catalog/top'},
//     {text: 'search', href: '/catalog/search'},
//   ]},
//   {text: 'orders', href: '#' , subLinks: [
//     {text: 'new', href: '/orders/new'},
//     {text: 'pending', href: '/orders/pending'},
//     {text: 'history', href: '/orders/history'},
//   ]},
//   {text: 'account', href: '#', subLinks: [
//     {text: 'profile', href: '/account/profile'},
//     {text: 'sign out', href: '/account/signout'},
//   ]},
// ];
//
// In order to add interaction:
//  ~ Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
//  ~ Attach a delegated 'click' event listener to topMenuEl.
//    ~ The first line of code of the event listener function should call the event object's preventDefault() method.
//    ~ The second line of code of the function should immediately return if the element clicked was not an <a> element.
//    ~ Log the content of the <a> to verify the handler is working.

// let topMenuLinks = topMenuEl.getElementsByTagName('a');
// console.log(topMenuLinks);
// for(let x = 0; x < topMenuLinks.length; x++)
//   topMenuLinks[x].addEventListener("click",  function(evt) 
// {
//   evt.preventDefault();
//   // console.log(evt.target.tagName)
//   if(evt.target.tagName !== 'A')
//     return

//   console.log(evt.target);
// });
//----------------------------------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------------------------------
// Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
//  ~ The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
//  ~ The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
//    ~ Hint: Removing a non-existent class from an element does not cause an error!

// let topMenuLinks = topMenuEl.getElementsByTagName('a');
// console.log(topMenuLinks);
// for(let x = 0; x < topMenuLinks.length; x++)
//   topMenuLinks[x].addEventListener("click",  function(evt) 
// {
//   evt.preventDefault();
//   // console.log(evt.target.tagName)
//   if(evt.target.tagName !== 'A')
//     return

//   let hasActive = evt.target.classList.contains('active');
//   // console.log(hasActive);
  
//   if(!hasActive)
//   {
//     evt.target.classList.add('active');
//     subMenuEl.style.top = '100%';
//   }
//   else
//   {
//     evt.target.classList.remove('active');
//     subMenuEl.style.top = '0';
//   }

//   console.log(evt.target);
// });
//----------------------------------------------------------------------------------------------------------------------------------------------

// Part 5: Adding Submenu Interaction
// Within the same event listener, we want to toggle the submenu between active and non-active states. First, we will set the submenu to show or hide itself depending on the menu state:
//  ~ Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
//    ~ If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
//    ~ Otherwise, set the CSS top property of subMenuEl to 0.
//      ~ Hint: Caching the "link" object will come in handy for passing its subLinks array later.

let topMenuLinks = topMenuEl.getElementsByTagName('a');
console.log(topMenuLinks);
for(let x = 0; x < topMenuLinks.length; x++)
  topMenuLinks[x].addEventListener("click",  function(evt) 
{
  evt.preventDefault();
  // console.log(evt.target.tagName)
  if(evt.target.tagName !== 'A')
    return

  let hasActive = evt.target.classList.contains('active');
  // console.log(hasActive);
  
  // console.log(menuLinks[1].subLinks);
  // console.log(!evt.target.href);
  if(!hasActive)
  {
    if(evt.target.subLinks)
    {
      evt.target.classList.add('active');
      subMenuEl.style.top = '100%';
    }
  }
  else
  {
    evt.target.classList.remove('active');
    subMenuEl.style.top = '0';
  }

  console.log(evt.target);
});

//----------------------------------------------------------------------------------------------------------------------------------------------
// The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
//  ~ Clear the current contents of subMenuEl.
//  ~ Iterate over the subLinks array, passed as an argument, and for each "link" object:
//    ~ Create an <a> element.
//    ~ Add an href attribute to the <a>, with the value set by the href property of the "link" object.
//    ~ Set the element's content to the value of the text property of the "link" object.
//    ~ Append the new element to the subMenuEl.
// Once you have created your helper function, include it in the event listener within the same logic that shows the submenu, remembering to pass the array of sub-links as an argument.
