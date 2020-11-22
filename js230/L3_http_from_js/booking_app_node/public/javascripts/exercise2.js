function retrieveSchedules() {
  let request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:3000/api/schedules');
  request.responseType = 'json';
  request.timeout = 7000;

  request.addEventListener('load', event => {
    const schedules = Array.prototype.slice.call(request.response);
    const staff = [];
    const tally = [];

    if (schedules.length >= 1) {
      schedules.forEach(schedule => {
        let staffId = `staff ${schedule['staff_id']}`;

        if (staff.includes(staffId)) {
          tally[staff.indexOf(staffId)] += 1;
        } else {
          staff.push(staffId);
          tally.push(1);
        }
      });

      alert(tally.map((val, i) => `${staff[i]}: ${val}`).join("\n"));
    } else {
      alert("There are no schedules available at this time.");
    }
    
  });

  request.addEventListener('timeout', event => {
    alert('This request is taking more than usual. Try again later.');
  });

  request.addEventListener('loadend', event => {
    alert('This request is completed.');
  })

  request.send();
}
