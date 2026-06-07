export const dateFormat = {
    year: "numeric",
    month: "long",
    day: "numeric"
}

export const dayFormat = {
    weekday: "long"
}

export const dateChange = (dateInput) => {
    const newDate = new Date(dateInput);
    const date = newDate.toLocaleDateString("en-UK", dateFormat);
    const day = newDate.toLocaleDateString("en-UK", dayFormat);
    return `${day} | ${date}`;
}