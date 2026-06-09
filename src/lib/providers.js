export const dateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric"
}

export const dayFormat = {
    weekday: "long"
}

const timeFormat = {
    hours: "numeric",
    minutes: "2-digit",
    seconds: "2-digit",
    hour12: true
};


export const dateChange = (dateInput) => {
    const newDate = new Date(dateInput);
    const date = newDate.toLocaleDateString("en-UK", dateFormat);
    const day = newDate.toLocaleDateString("en-UK", dayFormat);
    return `${day} | ${date}`;
}

export const eliteDateFormat = (dateInput) => {
    const newDate = dateInput ? new Date(dateInput) : new Date();
    const date = newDate?.toLocaleDateString("en-UK", dateFormat);
    const day = newDate?.toLocaleDateString("en-UK", dayFormat);
    const time = newDate?.toLocaleTimeString("en-UK", timeFormat).toLocaleLowerCase()?.replace(" ", "");
    return `${time} | ${day} | ${date}`;
}