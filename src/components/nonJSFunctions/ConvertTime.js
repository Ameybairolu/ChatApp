// THe below JS function obtains the time format based on when the text was sent


const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const ConvertTime = (time) => {
    let properDate = new Date(time);
    let now = new Date(Date.now());
    let hours = `${properDate.getHours()}`;
    let minutes = `${properDate.getMinutes()}`;
    let date = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
    if (properDate.getDate() !== now.getDate() || properDate.getMonth() !== now.getMonth() || properDate.getFullYear() !== now.getFullYear()) {
        date = date + `, ${properDate.getDate()} ${monthNames[properDate.getMonth()]}, ${properDate.getFullYear()}`
    }
    return date;
}

export default ConvertTime;