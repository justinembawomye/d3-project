// set up d3 and connect it to html
// d3.selectAll('p')
//     .style("color", 'red')

// const a = document.querySelector('.canva');

// const b = d3.select('.canva');
// console.log(a, b);


const canvas = d3.select('.canva');
/* Adding svg element using d3 */

// let dataArray = [4, 15, 33, 123, 13, 1];

let dataArray = [
    {width:25, height:10, fill:"red"},
    {width:25, height:14, fill:"green"},
    {width:25, height:144, fill:"orange"},
    {width:25, height:124, fill:"purple"},
    {width:25, height:30, fill:"brown"}
]
 
const svg = canvas.append('svg')
    .attr('width','600' )
    .attr('height', '600');


const rect = svg.selectAll('rect');
rect.data(dataArray)
    .enter().append('rect')
    .attr('width', '25')
    .attr('height', function(d) {
    return d.height *2; 
})
// .attr('width', (d) => {
// return 200- d * 3;
// })

.attr('y', function(d){
    return 100 - (d.height*2);
})
// .attr('fill', 'orange')

.attr('fill', (d) =>{
    return d.fill;
})

.attr('x', function(d, i){
    console.log(d);
    // console.log(i);
return i*30;
}) 

/* Fetching json data from an api */
d3.json('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => {
        console.log(data.title);
    });


/* Fetching data from a file */    
d3.json('text.json')
.then(data => {
    console.log(data[1].email);
});    


/* IATI data needs you to specify headers ie 'application/json'*/
  
d3.json("https://www.oipa.nl/api/activities/", {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
    })
    .then(data =>{
        console.log(data);
    })

    
    /*  organisations involved*/
    d3.json('https://www.oipa.nl/api/organisations/', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
    })
    .then(organistionData =>{
        console.log(organistionData);
    })

 
