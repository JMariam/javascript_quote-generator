//VARIABLES

let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let btn = document.querySelector('#new-quote');


const quotes = [	{
								quote:`"The best way to find yourself is to love yourself in the service of others."`,
								person:`Mahatma Ghandhi`
				}, {
								quote:`"If you want to live a happy live, tie it to goals not to people or things."`,
								person:`Albert Einstein`
				}, {
								quote:`"At its best, man is the noblest of all animals, separated from law anf justice and it's the worst."`,
								person:`Aristotle`
				}, {
								quote:`"Your time is limited,so don't waste it living someone else's live."`,
								person:`Steve Jobs`
				}, {
								quote:`"Tell me and I forget, Teach me and I remember, Involve me and I learn."`,
								person:`Benjamin Franklin`
				}, {
								quote:`"If you look at what you have in life, you'll always have more, If you look at what you don't have in life, you'll never have enough."`,
								person:`Oprah Winfrey`
				}, {
								quote:`"It does not matter how slowly you go as long as you do not stop."`,
								person:`Confuctus`
				}, {
								quote:`"Our lives begin to end the day we become silent about things that matter."`,
								person:`Martin Luther King. Jr`
				}, {
								quote:`"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
								person:`Dalai Lana`
				}, {
								quote:`"The journey of a thousand miles begins with one step."`,
								person:`Lai Tzu`
				},
];


btn.addEventListener('click', function(){
				
		let random =	Math.floor(Math.random() * quotes.length);
				
				quote.innerText = quotes[random].quote
				person.innerText = quotes[random].person
})
