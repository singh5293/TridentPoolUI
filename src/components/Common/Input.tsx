import React, { FunctionComponent } from "react";

interface Iprops {
  key: any;
  elementType: any;
  elementConfig: any;
  value: any;
  invalid: any;
  shouldValidate: any;
  touched: any;
  changed: any;
}

export const InputElement: FunctionComponent<Iprops> = (props: any) => {
  let inputElement = null;
  //   const inputClasses = ["form-control"]; //[classes.InputElement];

  //   if (props.invalid && props.shouldValidate && props.touched) {
  //     // inputClasses.push(classes.Invalid);
  //   }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className="form-control"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className="form-control"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className="form-control"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return <>{inputElement}</>;
};
export { InputElement as default };
