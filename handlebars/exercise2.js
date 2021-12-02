let quoteMarkup = '';
let content = document.getElementById('quotes');

const quotes = [   
    {
        name: "Frank Lloyd Wright", 
        quote: "You can use an eraser on the drafting table or a sledge hammer on the construction site."
    },  
    {
        name: "Douglas Adams", 
        quote: "The major difference between a thing that might go wrong and a thing that cannot possibly go wrong is that when a thing that cannot possibly go wrong goes wrong it usually turns out to be impossible to get at or repair."
    },   
    {
        name: "Ettore Sottsass", 
        quote: "I try and be as stupid as possible regarding my profession, which means I try to look at as few design magazines as possible."
    },   
    {
        name: "Shaun White", 
        quote: "I’m a big fan of doing what you are really bad at. A lot."
    } 
];


for (let i = 0; i < quotes.length; i++) { 
    let name = quotes[i].name, quote = quotes[i].quote;

    quoteMarkup += `<div class="col-12 col-sm-6"> 
                        <h5> ${name} </h5>  
                        <p> ${quote} </p> 
                    </div>`;
};

let template = Handlebars.compile(quoteMarkup);

let data = template(quotes);

content.innerHTML = data;

