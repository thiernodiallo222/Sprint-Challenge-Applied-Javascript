// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    //creating elements

    const Header = document.createElement('div'),
        Date = document.createElement('span'),
        LambdaTimes = document.createElement('h1'),
        Temperature = document.createElement('span');

        // adding contents

    Date.textContent = 'SMARCH 28, 2019';
    LambdaTimes.textContent = 'Lambda Times';
    Temperature.textContent = '98°';

    // Adding classes

    Header.classList.add('header');
    Date.classList.add('date');
    Temperature.classList.add('temp');

    // Setting up structures

    Header.appendChild(Date);
    Header.appendChild(LambdaTimes);
    Header.appendChild(Temperature);
    
    return Header;
}

// Adding it to the DOM

const HeaderContainer = document.querySelector('.header-container');
HeaderContainer.appendChild(Header());

