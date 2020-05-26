// We're putting together some information about our new company Space Design. Not all roles have been filled yet. But although we have a CEO and Scrum Master, displaying them shows undefined. Why is that?

// Roles (salary still to be determined)

var ceo = {
  tasks: ['company strategy', 'resource allocation', 'performance monitoring'],
  salary: 0,
};

var developer = {
  tasks: ['turn product vision into code'],
  salary: 0,
};

var scrumMaster = {
  tasks: ['organize scrum process', 'manage scrum teams'],
  salary: 0,
};

// Team -- we're hiring!

var team = {};

/*
Object property names are always strings.
To assign and access property values we can use either dot or bracket notation.
JS style guides usually recommend dot notation.
*/


team['ceo'] = 'Kim';
team['scrumMaster'] = 'Alice';
team['developer'] = undefined;


var company = {
  name: 'Space Design',
  team: team,
  projectedRevenue: 500000,
};

console.log('----{ ' + company.name + ' }----');
console.log('CEO: ' + company.team['ceo']);
console.log('Scrum master: ' + company.team['scrumMaster']);
console.log('Projected revenue: $' + company.projectedRevenue);

// ----{ Space Design }----
// CEO: undefined
// Scrum master: undefined
// Projected revenue: $500000