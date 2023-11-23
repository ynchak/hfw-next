const url = "https://gomer.rozetka.company/gomer/items/source/";
const attr = "?ItemSearch[id]=";
const maxGoods = 50;
const maxLines = 20;

const chunkGoods = (goods) => {
  const result = [];
  for (let i = 0; i < goods.length; i += maxGoods) {
    const chunk = goods.slice(i, i + maxGoods);
    result.push(chunk);
  }
  return result;
};
const createLink = (source, goodsId) => {
  const links = [];
  const goods = chunkGoods(goodsId);
  for (const good of goods) {
    const link = `${url}${source}${attr}${good.join(",")}`;
    links.push([link]);
  }
  return links;
};
const action = (data) => {
  const lines = data.split("\n");
  if (lines.length >= maxLines) {
    throw `Введено більше ${maxLines} джерел`;
  }
  const links = [];
  for (const line of lines) {
    if (line === "") continue;
    const [source, goodsId] = line.split("\t");
    links.push(...createLink(source, goodsId.split(", ")));
  }
  console.log(...links);
};
export default {
  buttonColor: "primary",
  buttonIcon: "open",
  buttonTitle: "Відкрити джерела з товарами",
  placeholder:
    "Встав з excel стовпчики з source і Id's товарів\nТакого виду: 31967\t366784065, 366784659, ... ",
  radioGroup: null,
  //{
  //   defaultValue: "500",
  //   values: [
  //     { type: "50", value: "50" },
  //     { type: "150", value: "150" },
  //     { type: "500", value: "500" },
  //   ],
  // },
  action,
};
