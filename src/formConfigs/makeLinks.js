const url = "https://rozetka.com.ua/ua/";
const action = (column) => {
  const lines = column.split("\n");
  const links = [];
  for (const line of lines) {
    if (line === "") continue;
    links.push(`${url}${line}/p${line}/`);
  }
  console.log(links.join("\n"));
  return links.length;
};

export default {
  buttonColor: "secondary",
  buttonIcon: "link",
  buttonTitle: "Зробити посилання",
  placeholder: "Встав з excel стовпчик з Id товарів",
  radioGroup: null,
  action,
};
