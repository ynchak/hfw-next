const action = (data, radio) => {
  console.log("works.", data, radio);
};
export default {
  buttonColor: "primary",
  buttonIcon: "open",
  buttonTitle: "Відкрити джерела з товарами",
  placeholder:
    "Встав з excel стовпчики з source і Id's товарів\nТакого виду: 31967\t366784065, 366784659, ... ",
  radioGroup: {
    defaultValue: "500",
    values: [
      { type: "50", value: "50" },
      { type: "150", value: "150" },
      { type: "500", value: "500" },
    ],
  },
  action,
};
