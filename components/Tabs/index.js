// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// sending axios request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response);
        response.data.topics.forEach(element => {
            
            entry.appendChild(componentCreator(element));
        })   

    })
    .catch(error => {
        console.log("Cannot find the data requested", error);
    });


    // creating component 
const componentCreator = function (arrItem) {
    let wrapper = document.createElement('div'),
       paragraph = document.createElement('div');
       
    wrapper.appendChild(paragraph);

    // adding a class to the tab
    wrapper.classList.add('tab');

    paragraph.textContent = arrItem;
    
    return wrapper;
}
    
const entry = document.querySelector('.topics');