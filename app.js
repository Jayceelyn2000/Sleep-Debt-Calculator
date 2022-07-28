const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 5;
      break;
    case "wednesday":
      return 7;
      break;
    case "thursday":
      return 12;
      break;
    case "friday":
      return 4;
      break;
    case "saturday":
      return 6;
      break;
    case "sunday":
      return 9;
      break;
  }
};
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 7.5;
  return idealHours * 7;
};

console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You have enough sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("Wake up!");
  } else {
    console.log("I'm still sleepy...");
  }
};
calculateSleepDebt();
