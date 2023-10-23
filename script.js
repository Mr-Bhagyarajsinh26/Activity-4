const DetailsArray = [

    {
        Image: `"/img/blog/cbl-1.png" `,
        header:'Ethreum Summit Governance Plan',
        details: 'Words combined with a handful of model to generate which looks reasonable',
        date: 'jan 1, 2023',
    },

    {
        Image:`"/img/blog/cbl-2.png" `,
        header:'Ethreum Summit Governance Plan',
        details: 'Words combined with a handful of model to generate which looks reasonable',
        date: 'jan 2, 2023',
    },

    {
        Image:`"/img/blog/cbl-3.png" `,
        header:'Ethreum Summit Governance Plan',
        details: 'Words combined with a handful of model to generate which looks reasonable',
        date: 'jan 3, 2023',
    },

    {
        Image:`"/img/blog/cbl-1.png" `,
        header:'Ethreum Summit Governance Plan',
        details: 'Words combined with a handful of model to generate which looks reasonable',
        date: 'jan 4, 2023',
    }
]

let blog = document.getElementById('blog_post');

DetailsArray.forEach((result) => {


const card = document.createElement('div');
const content = `
<div class = "cards_blog bg-dark m-2 w-25 rounded">

<div class = "card-body text-center p-2"> 
    <img src=${result.Image} alt="">
    <h4 class = "py-2"> ${result.header} </h4>
    <p> ${result.details}</p>
    <p> ${result.date}</p>
</div>

</div>
`;

blog.innerHTML += content;
})


 

const page2link = document.getElementById('page2-link');
const contentContainer = document.getElementById('content');

page2link.addEventListener('click', function(event){
    event.preventDefault();

    // contentContainer.innerHTML = 'Loading....';

    history.pushState({page:'page2'}, 'Page 2', 'index2.html')

    fetch('index2.html')
        .then(response => response.text()) // geting text from index2 
        .then(data => {
            contentContainer.innerHTML = data; // replacing data from other html pages .
        })
})

