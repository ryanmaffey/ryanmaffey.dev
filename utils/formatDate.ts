import { toOrdinalNumber } from "./toOrdinalNumber";

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const formatDate = (date: Date) => {
    return `${toOrdinalNumber(date.getDate())} ${
        MONTHS[date.getMonth()]
    } ${date.getFullYear()}`;
};
