// set up d3 and connect it to html
// d3.selectAll('p')
//     .style("color", 'red')

// const a = document.querySelector('.canva');

// const b = d3.select('.canva');
// console.log(a, b);


const canvas = d3.select('.canva');
/* Adding svg element using d3 */

const svg = canvas.append('svg')
            .attr('width', '500')
            .attr('height', '250');




// adding a circle
svg.append('circle').attr('cx', '100')
            .attr('cy','150')
            .attr('r', '40')
            .attr('fill', 'green');

// adding a rectangle
svg.append('rect')
        .attr('x', '150')
        .attr('y','150')
        .attr('width','100')
        .attr('height', '100')
        .attr('ry','5')
        .attr('rx', '5')
        .attr('fill', 'blue');            


// adding a line       
svg.append('line')
        .attr('x1', '500')
        .attr('x2','100')
        .attr('y1','200')
        .attr('y2', '100')
        .attr('stroke', 'grey');    
        
// adding text ie you must add x and y values 
svg.append('text')
        .text('Hello')
        .attr('text-anchor', 'start')
        .attr('x', '150')
        .attr('y', '30')
        .attr('fill', 'pink')
        .attr('stroke', 'brown')
        .attr('font-size', '30');

svg.append('text')
        .text('there ')
        .attr('text-anchor', 'middle')
        .attr('x', '150')
        .attr('y', '60')
        .attr('fill', 'pink')
        .attr('font-size', '30');

svg.append('text')
        .text('Justine')
        .attr('text-anchor', 'end')
        .attr('x', '150')
        .attr('y', '90')
        .attr('fill', 'pink')
        .attr('font-size', '30');

