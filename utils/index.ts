import { DateField } from "@prismicio/client";

const logKeyAndType = <T>(object: T): void => {
  for (let key in object) {
    console.log(`${key}: ${typeof object[key]}`);
  }
};

const isObject = (object: unknown): boolean => {
  return typeof object === 'object' && object !== null && !Array.isArray(object) && object !== undefined;
};

const formateDate = (date: string | number | Date): string => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const newDate = new Date(date);
  const month = months[newDate.getMonth()]
  const formatedDate = `${month} ${newDate.getDate()}, ${newDate.getFullYear()}`;
  console.log("formatedDate", formatedDate);
  return formatedDate;
}

export { logKeyAndType, isObject, formateDate };