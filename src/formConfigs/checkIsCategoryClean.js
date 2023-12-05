import useSaveFormStore from "../store";
import { openInNewTab } from "../utils";

const addres =
  "https://gomer.rozetka.company/gomer/smart-folders/next-page?searchParams[1][field]=sync_source_id&searchParams[1][condition]=%3D&searchParams[1][value]=";
const params =
  "&searchParams[2][field]=category&searchParams[2][condition]=%3D&searchParams[2][value]=";
const attr = "&pageCondition=all&page=0&pageSize=50&size=50";
const maxLines = 30;
const action = (column) => {
  const { variant, value } = useSaveFormStore.getState();
  if (variant !== "category" || !variant) {
    throw `❌ Форма вишче ☝️ не налаштована`;
  }
  const lines = column.split("\n");
  if (lines.length > maxLines + 1) {
    // last line is empty
    throw `Введено більше ${maxLines} джерел`;
  }
  const links = [];
  for (const line of lines) {
    if (!line) {
      continue;
    }

    links.push();
  }
  const link = `${addres}${lines.join(",")}${params}${value}${attr}`;
  // console.log(link);
  openInNewTab([link]);
};
export default {
  buttonColor: "primary",
  buttonIcon: "open",
  buttonTitle: "До конструктора умов",
  placeholder:
    "Перевірити чи залишились товари в категорії.\nВстав стовпчик з id джерелами",
  radioGroup: null,
  action,
};
