const toText = (store) => {
  const text = [];
  const entries = store.entries();
  for (const [source, list] of entries) {
    text.push(`${source}\t${list.join(", ")}`);
  }
  return text.join("\n");
};

const action = (columns) => {
  const store = new Map();
  const lines = columns.split("\n");
  for (const line of lines) {
    if (line === "") continue;
    const [id, source] = line.split("\t");
    const list = store.get(source) ?? [];
    store.set(source, [...list, id]);
  }
  const text = toText(store);
  console.log(text);
};

export default {
  buttonColor: "secondary",
  buttonIcon: "transform",
  buttonTitle: "Трансформувати",
  placeholder:
    "Встав з excel стовпчики з Id товару і source\nТакого виду: 366784065\t31967\n... ",
  radioGroup: null,
  action,
};
