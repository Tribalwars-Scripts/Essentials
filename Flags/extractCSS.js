const args = process.argv;
console.log(args);

const Uinput = args[2]

let results = {};
let styles = Uinput.split(";");

for (let style in styles) {
	let properties = styles[style].split(":");
	if (properties.length === 2) {
		results[properties[0].trim()] = properties[1].trim();
	}
}

console.log(results)
