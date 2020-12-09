let names = [];

const is_present = (name) => {
	return document.body.parentElement.innerHTML.includes(name)
};

let presentees = [];
let absentees = [];

for (name of names) {
	if (is_present(name)) {
		presentees.push(name)
	} else {
		absentees.push(name)
	}
};

const print_group_members = (group) => {
	for (member of group) {
		console.log(member)
	}
};

console.log('%c These People Are Present:', 'color: dodgerblue')
print_group_members(presentees)

console.log('%c These People Are Absent:', 'color: coral')
print_group_members(absentees)
