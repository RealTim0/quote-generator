let quoter = document.querySelector(".quote")
let person = document.querySelector(".person")
let btn = document.querySelector(".new-quote")

let quotes  = [
    {
        quote: 'love yourself',
        person:"Jesus Christ" 
    },
    {
        quote: 'wake up and push yourself to achieve more',
        person:"Three men army" 
    },
    {
        quote: 'obey my commandments and keep the sabbath day holy ',
        person:"God Almighty" 
    },
    {
        quote: 'stand up such you never give up',
        person:"tatiana manaois" 
    }
]
 btn.addEventListener("click", function btnclick(){
    let i = Math.floor(Math.random() * quotes.length)
    quoter.innerText = quotes[i].quote
    person.innerText = quotes[i].person
})
