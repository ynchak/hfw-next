import PropTypes from "prop-types";
import { Button, Card, CardBody, Textarea } from "@nextui-org/react";
import Option from "./Option";
import { useState } from "react";

const FormAction = ({
  action,
  buttonColor,
  buttonIcon,
  buttonTitle,
  placeholder,
  radioGroup,
}) => {
  const [countLines, setCountLines] = useState("");
  const [radioValue, setRadioValue] = useState(radioGroup?.defaultValue);
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const changeRadioValue = (e) => {
    setRadioValue(e.target.value);
  };
  const handleOnChangeTextrea = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setCountLines(action(data, radioValue));
    } catch (e) {
      setError(e);
    }
    setData("");
  };
  return (
    <Card className="mt-4">
      <CardBody>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Textarea
            maxRows={4}
            minRows={4}
            placeholder={placeholder}
            onChange={handleOnChangeTextrea}
            value={data}
          />
          <div className="flex justify-between mt-2">
            {radioGroup ? (
              <Option {...radioGroup} changeRadioValue={changeRadioValue} />
            ) : (
              <div>
                <p>{countLines} </p>
                <p className="text-orange-600">{error}</p>
              </div>
            )}
            <Button endContent={buttonIcon} color={buttonColor} type="submit">
              {buttonTitle}
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};
FormAction.propTypes = {
  action: PropTypes.func,
  buttonColor: PropTypes.string,
  buttonIcon: PropTypes.string,
  buttonTitle: PropTypes.string,
  placeholder: PropTypes.string,
  radioGroup: PropTypes.object,
};
export default FormAction;
