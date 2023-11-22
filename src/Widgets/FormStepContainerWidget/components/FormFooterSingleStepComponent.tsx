import * as React from "react";
import * as Scrivito from "scrivito";

type FormFooterSingleStepProps = {
  widget: Scrivito.Widget;
  onSubmit: React.MouseEventHandler;
};

export const FormFooterSingleStep = Scrivito.connect(
  ({ widget, onSubmit }: FormFooterSingleStepProps) => {
    return (
      <div
        className={`${
          widget.get("singleSubmitButtonAlignment") === "block"
            ? ""
            : widget.get("singleSubmitButtonAlignment")
        }`}
      >
        <button
          className={`btn btn-primary${
            widget.get("singleSubmitButtonAlignment") === "block"
              ? " btn-block"
              : ""
          }`}
          onClick={onSubmit}
        >
          {widget.get("submitButtonText") as string}
        </button>
      </div>
    );
  }
);
