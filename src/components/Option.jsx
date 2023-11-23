import PropTypes from "prop-types";
import { RadioGroup, Radio } from "@nextui-org/react";

const Option = ({ defaultValue, values, changeRadioValue }) => {
  return (
    <RadioGroup
      defaultValue={defaultValue}
      orientation="horizontal"
      onChange={changeRadioValue}
    >
      {values.map(({ type, value }) => (
        <Radio key={type} value={type}>
          {value}
        </Radio>
      ))}
    </RadioGroup>
  );
};
Option.propTypes = {
  defaultValue: PropTypes.string,
  values: PropTypes.array,
  changeRadioValue: PropTypes.func,
};
export default Option;
