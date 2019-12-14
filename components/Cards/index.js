// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



// sending the axios get request

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    console.log(response);
    // response.data.articles

}).catch((err) => {
    
});


// creating component for each article

const createComponent = function (article, i) {
    const Card = document.createElement('div'),
        Headline = document.createElement('div'),
        Author = document.createElement('div'),
        imageContainer = document.createElement('div'),
        Image = document.createElement('img'),
        AuthorsName = document.createElement('span');
    
    // setting up structure
    
    Card.appendChild(Headline);
    Card.appendChild(Author);
    Author.appendChild(imageContainer);
    imageContainer.appendChild(Image);
    Author.appendChild(AuthorsName);

    // Adding classes and attributes

    Card.classList.add('card');
    Headline.classList.add('headline');
    Author.classList.add('author');
    Image.src = artcle[i].authorPhoto;

    // creating content

    Headline.textContent = article[i].headline;
    AuthorsName.textContent = `By ${article[i].authorName}`;

    return Card;
}

let entry = document.querySelector('cards-container');