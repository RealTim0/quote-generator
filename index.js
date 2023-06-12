let quoter = document.querySelector(".quote")
let person = document.querySelector(".person")
let btn = document.querySelector(".new-quote")

let quotes  = [
    {
        quote: '"Love yourself DUDE"',
        person:"Jesus Christ" 
    },
    {
        quote: '"Wake up and push yourself to achieve more."',
        person:"Three Men Army" 
    },
    {
        quote: '"Obey my commandments and keep the sabbath day holy !"',
        person:"God Almighty" 
    },
    {
        quote: '"Stand up such you never give up:)"',
        person:"Tatiana Manaois" 
    }
    {
        quote: '"Never give regret a chance:)"',
        person:"Timothy Mwangi" 
    }
]
 btn.addEventListener("click", function btnclick(){
    let i = Math.floor(Math.random() * quotes.length)
    quoter.innerText = quotes[i].quote
    person.innerText = quotes[i].person
})
