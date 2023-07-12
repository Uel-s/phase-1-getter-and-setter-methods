// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    this.radius = value / 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  set circumference(value) {
    this.radius = value / (2 * Math.PI);
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }
}

const circle = new Circle(5);

console.log(circle.radius);          
console.log(circle.diameter);        
console.log(circle.circumference);   
console.log(circle.area);            

// Set the diameter to 14
circle.diameter = 14;

console.log(circle.radius);          
console.log(circle.circumference);   
console.log(circle.area);            

// Set the area to 100
circle.area = 100;

console.log(circle.radius);          
console.log(circle.diameter);        
console.log(circle.circumference);   