svg = d3.select("svg");
g = svg.append("g");
g.attr("transform", "translate(100,50)");

x = d3.scale.linear()
    .domain([1998, 2012])  // Fill in the domain values for the x axis
    .range([0, 800]);
y = d3.scale.linear()
    .domain([0, 54])  // Fill in the domain values for the y axis
    .range([400, 0]);

x_axis = d3.svg.axis().scale(x).orient("bottom").ticks(5).tickFormat(d3.format("d"));
y_axis = d3.svg.axis().scale(y).orient("left").ticks(4);

g.call(y_axis);

gx = g.append("g")
gx.call(x_axis);
gx.attr("transform", "translate(0,400)");

d3.csv("old_discoveries.csv", function(csv_data) {
  g.selectAll("circle")
    .data(csv_data)
    .enter().append("circle")
      .attr("cx", function(point) {return x(point.year)})
      .attr("cy", function(point) {return y(point.important_discoveries)})
      .attr("r", 5);



  // data.forEach(function() {
  //   g.append("circle")
  //     .attr("cx", x(point.year)) //year
  //     .attr("cy", y(point.important_discoveries)) //important_discoveries
  //     .attr("r", 5);
  });

// Okay, now all of your axes are set up.  Add code to draw points here.
