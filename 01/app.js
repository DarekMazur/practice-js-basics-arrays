const users = [
	"Andy Koch",
	"Ralph Sporer",
	"Nancy Torphy",
	"Alfred Jakubowski",
	"Samuel Hessel",
	"Carlos Grady",
	"Erin Hane MD",
	"Andres Brakus",
	"Cathy Bogan",
	"Craig Ledner",
	"Mr. Becky Kris"
]

const indexesToDisplay = [0, 2, 4]

for (let i = 0; i < indexesToDisplay.length; i++) {
	console.log(`User #${i}: ${users[indexesToDisplay[i]]}`);
}

console.log(`Total users: ${users.length}`);