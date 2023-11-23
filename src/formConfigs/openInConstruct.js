const addres = `https://gomer.rozetka.company/gomer/smart-folders/next-page?searchParams[0][field]=goods_id&searchParams[0][condition]=%3D&searchParams[0][value]=`;

const params = {
  all: "&pageCondition=all&page=0&pageSize=50&size=500",
  active: `&searchParams[1][field]=upload_status&searchParams[1][condition]=equal-value&searchParams[1][value]=2&pageCondition=all&page=0&pageSize=50&size=500`,
};
const spliceIntoChunks = (arr, chunkSize) => {
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
};

const action = (column, status) => {
  const lines = column.split("\n");
  const links = [];
  const chunks = spliceIntoChunks(lines, 500);
  for (const chunk of chunks) {
    if (chunk == "") continue;
    links.push(`${addres}${chunk.join("+")}${params[status]}`);
  }
  console.log(links);
};

export default {
  buttonColor: "primary",
  buttonIcon: "open",
  buttonTitle: "До конструктора умов",
  placeholder: "Встав з excel стовпчик з Id товарів ",
  radioGroup: {
    defaultValue: "all",
    values: [
      { type: "all", value: "Всі" },
      { type: "active", value: "Активні" },
    ],
  },
  action,
};
