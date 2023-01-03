import { getRandomNumber } from "@/helpers/getRandomNumber";

export default (array: Array<any>) => array[getRandomNumber(array.length - 1)];
