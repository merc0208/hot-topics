// GET THE REFERENCES
    const container = document.getElementById('dynamic-content');
    const links = document.querySelectorAll('.main-nav');
    let url = './partials/articles.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL

//    /*
//    IMPORTANT NOTES:
//    loadContent RUNS EVERY TIME A LINK IS CLICKED.
//    loadContent REQUIRES THE INPUT. THIS INPUT IS
//    THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
//    EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
//    THE UPDATED PATH TO THE REQUESTED CONTENT.
//    */

    function loadContent (requiredPage) {
        // RUN THE fetch(urlFeed).then().then().catch()
        fetch(requiredPage).then((response) => {
            return response.text();
        }).then((data) => {
            container.innerHTML = data;
        })
        .catch((err) => {
            console.log("Error, could not load content");
        });
        // CLOSE YOUR FUNCTION loadContent HERE
    }

// CALL loadContent WITH THE CURRENT VALUE OF url 
    loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
    function selectContent(partial) {
    // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
            partial.preventDefault();
    // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
            let currentPageURL = partial.target.href;
    // CALL THE FUNCTION loadContent PROVIDING THE href
    // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
    // OF loadContent FUNCTION.
            loadContent(currentPageURL);
        //CLOSE YOUR FUNCTION selectContent HERE
    }

// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
    for (i = 0; i < links.length; i++) {
        links[i].addEventListener('click', selectContent);
    }
