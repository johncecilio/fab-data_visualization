console.log("Hello world!");

const dateElement = document.getElementById('date');
console.log(dateElement);

let currentDate = new Date();
dateElement.innerHTML = currentDate;

let dateOptions = {year: "numeric", month: "long", day: "numeric"};
dateElement.innerHTML = currentDate.toLocaleDateString('en-US', dateOptions);


const url = "https://fakestoreapi.com/products";
const options = {}
/*const url = "https://twitter-trends5.p.rapidapi.com/twitter/request.php"
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': 'd4921beb9amsh547da79d8b1fdb4p1cd19fjsnf45fce634508',
		'X-RapidAPI-Host': 'twitter-trends5.p.rapidapi.com'
	},
	body: new URLSearchParams({woeid: '23424934'})
};*/

fetch(url, options)
.then(res => res.json())
.then(data => {
	console.log(data);

/*	let products = [
		{
			title: "lips Stick",
			price: 199.9,
			description: "rose red lipstick",
			category: "beauty product",
			image: null,
			rating: {
				rate: 5,
				count: 100
			}
		},
		{
			title: "lips Stick 2",
			price: 199.9,
			description: "lush pink lipstick",
			category: "beauty product",
			image: null,
			rating: {
				rate: 4,
				count: 100
			}
		}				
	];
	console.log(products);
	console.log(products[0].title);
	console.log(products[0].price);
	console.log(products[0].rating.rate);*/

	let titles = data.map(object => {
		//console.log(object);
		//console.log(object.title);
		return object.title;
	});
	console.log(titles);

	let ratings = data.map(object => {
		return object.rating.rate;
	});
	console.log(ratings);

	const myChart = document.getElementById("myChart");
	let barChart = new Chart(myChart, {
		type: 'bar',
		data:{
			labels: titles,
			datasets: [{
				label: 'Ratings of Tweets',
				data: ratings,
				borderWidth: 2,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
		    		'rgba(255, 159, 64, 0.2)',
		    		'rgba(255, 205, 86, 0.2)',
		    		'rgba(75, 192, 192, 0.2)',
		    		'rgba(54, 162, 235, 0.2)',
		    		'rgba(153, 102, 255, 0.2)',
		    		'rgba(201, 203, 207, 0.2)'
				],
				borderColor: [
					'rgb(255, 99, 132)',
		    		'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86)',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235)',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'
				],
				hoverBackgroundColor: [
					'rgb(255, 99, 132)',
		    		'rgb(255, 159, 64)',
		    		'rgb(255, 205, 86)',
		    		'rgb(75, 192, 192)',
		    		'rgb(54, 162, 235)',
		    		'rgb(153, 102, 255)',
		    		'rgb(201, 203, 207)'					
				]				
			}]
		},
		options: {
			indexAxis: 'y',
			scales: {
				y: {
					beginAtZero: true
				}
			}
		}
	});
})