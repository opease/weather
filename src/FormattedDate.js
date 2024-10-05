export default function FormattedDate(props) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let date = new Date(props.date * 1000);

  let day = days[date.getDay() - 1];
  let hour = date.getHours();
  let minutes = date.getMinutes();

  if (hour < 10) {
    hour = "0" + `${hour}`;
  }

  if (minutes < 10) {
    minutes = "0" + `${minutes}`;
  }

  return `${day} ${hour}:${minutes} `;
}
