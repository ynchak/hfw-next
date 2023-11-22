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
  const [radioValue, setRadioValue] = useState();
  const changeRadioValue = (e) => {
    setRadioValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    action("", radioValue);
  };
  return (
    <Card>
      <CardBody>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Textarea maxRows={4} minRows={4} placeholder={placeholder} />
          <div className="flex justify-between mt-2">
            {radioGroup ? (
              <Option {...radioGroup} changeRadioValue={changeRadioValue} />
            ) : (
              <div></div>
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
