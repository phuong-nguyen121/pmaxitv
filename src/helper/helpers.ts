const camalize = (str: string) => {
  return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}
export const convertToCamel = (param: any) => {
  Object.keys(param).forEach(element => {
    const temp = param[`${element}`]
    delete param[`${element}`];
    param[`${camalize(element)}`] = temp;

  });
}
export const asyncFunction = async (value: number) => {
  await new Promise((resolve) => setTimeout(resolve, value));
  return value / 1000;
}

