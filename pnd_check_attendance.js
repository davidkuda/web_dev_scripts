///////
// 
// Insert the following block once per session
// 
// 

let names, attendees;

names = []

const is_present = (name) => {
	return document.body.innerHTML.includes(name)
};

const print_group_members = (group) => {
	for (member of group) {
		console.log(member)
	}
};

const check_attendance = () => {
	let presentees = [];
	let absentees = [];
	for (name of names) {
		if (is_present(name)) {
			presentees.push(name)
		} else {
			absentees.push(name)
		}
	};
	attendees = {
		presentees: presentees,
		absentees: absentees
	}

	return attendees
};

// 
// 
// Insert the following block every time you want to check presence:
// 
// 

attendees = check_attendance()

console.log('%c These People Are Present:', 'color: dodgerblue')
print_group_members(attendees.presentees)

console.log('%c These People Are Absent:', 'color: coral')
print_group_members(attendees.absentees)

// 
// 
///////