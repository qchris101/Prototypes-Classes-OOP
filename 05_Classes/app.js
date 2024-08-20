// class Color {
// 	constructor(r, g, b, name) {
// 		this.r = r;
// 		this.g = g;
// 		this.b = b;
// 		this.name = name;
// 	}
// 	innerRGB() {
// 		const { r, g, b } = this;
// 		return `${r}, ${g}, ${b}`;
// 	}
// 	rgb() {
// 		return `rgb(${this.innerRGB()})`;
// 	}
// 	rgba(a = 1.0) {
// 		return `rgba(${this.innerRGB()}, ${a})`;
// 	}
// 	hex() {
// 		const { r, g, b } = this;
// 		return (
// 			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// 		);
// 	}
// }
// const red = new Color(255, 67, 89, 'tomato');
// const white = new Color(255, 255, 255, 'white');

class Color {
	// Constructor must have and runs immediately 
	constructor(r,g,b,name){
		this.r = r
		this.g = g
		this.b = b
		this.name = name
	}
	innerRGB(){
		const {r,g,b} = this
		return `${r},${g},${b}`
	}
	rgb(){
		return `rgb(${this.innerRGB()})`
	}	
	rgba(a=1){
		return `rgba(${this.innerRGB()},${a})`
	}	
	
	hex(){
		const {r,g,b} = this
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
	}
}

const color1 = new Color(255,67,89,"Tomato")


















// Testing logic & solo practice
class Car {
	constructor(model,year,color,miles){
		this.Model = model
		this.year = year
		this.color = color
		this.miles = miles
	}
	carOn(){
		return `Car has been turned on it has : ${this.miles} miles.`
	}
	carOff(){
		return `Car has been turned off.`
	}
}