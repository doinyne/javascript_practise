/*
Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
*/

const registeredEarly = true;

const age = 18;

if ( registeredEarly && age > 18 ){
  raceNumber += 1000;
} 

if ( registeredEarly && age > 18 ) {
  console.log(`Runner race number: ${raceNumber}, your race will start at 9:30am.`);
} 
else if ( !registeredEarly && age > 18) {
  console.log(`Runner race number ${raceNumber}, your race will start at 11:00am.`);
}
else if ( age < 18 ) {
  console.log(`Runner race number ${raceNumber}, your race will start at 12:30am.`);
} 
else{
  console.log('Please visit registration desk, thank you.');
}