export default defineCommand(({ name, template, schema }) => {
	name('warp')
	schema({
		description: "Teleports the player to the chosen destination",
		arguments: [
			{ type: "selector" },
			{ type: "text" }
		]
	})

	template((args) => {
		var selector = args[0].toString();
		args.splice(0, 1);
		var destination = args.join(" ");
		var output = "teleport " + selector + " ";
		if (destination == "Broden")
			output += "0 100 0";
		return output;
	})
})

var destinations = {
	"Abingus Induldigum": { x: 521, y: 90, z: 532, xRot: 90, yRot: 0, zRot: 0 },
	"Anneville": { x: -903, y: 69, z: 216, xRot: 90, yRot: 0, zRot: 0 },
	"Broden": { x: -1998, y: 64, z: 318, xRot: 90, yRot: 0, zRot: 0 },
	"Branchville": { x: 700, y: 66, z: 243, xRot: 0, yRot: 0, zRot: 0 },
	"Creeperbahn": { x: 542, y: 67, z: 262, xRot: 0, yRot: 0, zRot: 0 },
	"Ellieburg": { x: -25, y: 69, z: 35, xRot: 180, yRot: 0, zRot: 0 },
	"East Corea": { x: 0, y: 0, z: 0, xRot: 0, yRot: 0, zRot: 0 },
	"Fastriksburg": { x: 1007, y: 85, z: 73.5, xRot: 180, yRot: 0, zRot: 0 },
	"Godisramat": { x: -25, y: 66, z: 402, xRot: 0, yRot: 0, zRot: 0 },
	"Hub Station": { x: 649, y: 64, z: 140, xRot: 180, yRot: 0, zRot: 0 },
	"Ice Islands": { x: 0, y: 0, z: 0, xRot: 0, yRot: 0, zRot: 0 },
	"Jebville": { x: 0, y: 0, z: 0, xRot: 0, yRot: 0, zRot: 0 },
	"Katastan": { x: 2275, y: 81, z: 364, xRot: 0, yRot: 0, zRot: 0 },
	"Mapleville": { x: 881, y: 68, z: 660, xRot: 0, yRot: 0, zRot: 0 },
	"Nij Venets": { x: 0, y: 0, z: 0, xRot: 0, yRot: 0, zRot: 0 },
	"Nij Viesplets": { x: 1206, y: 63, z: 227, xRot: -90, yRot: 0, zRot: 0 },
	"Nor Nokheym": { x: 0, y: 0, z: 0, xRot: 0, yRot: 0, zRot: 0 },
	"Okheym": { x: 388, y: 64, z: 256, xRot: 245, yRot: -30, zRot: 0 },
	"Vacation Lac": { x: 692, y: 66, z: 376.5, xRot: -90, yRot: 0, zRot: 0 },
	"Waltz 1": { x: 0, y: 0, z: 0, xRot: 0, yRot: 0, zRot: 0 },
	"Waltz 2": { x: 0, y: 0, z: 0, xRot: 0, yRot: 0, zRot: 0 },
	"Waltz 3": { x: 378, y: 70, z: 588, xRot: 0, yRot: 0, zRot: 0 },
	"Waltz 4": { x: 442, y: 70, z: 710, xRot: 90, yRot: 0, zRot: 0 },
	"Waltz 5": { x: 335, y: 70, z: 734, xRot: 0, yRot: 0, zRot: 0 },
	"Waltz 6": { x: 0, y: 0, z: 0, xRot: 0, yRot: 0, zRot: 0 },
	"Waltz 7": { x: 289, y: 70, z: 648, xRot: 180, yRot: 0, zRot: 0 },
	"West Corea": { x: 0, y: 0, z: 0, xRot: 0, yRot: 0, zRot: 0 },
	"Willville": { x: 175, y: 64, z: 109, xRot: 90, yRot: 0, zRot: 0 },
	"Xanadu": { x: 0, y: 0, z: 0, xRot: 0, yRot: 0, zRot: 0 }
}