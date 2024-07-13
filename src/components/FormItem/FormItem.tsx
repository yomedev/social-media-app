import { AllHTMLAttributes } from "react";
import "./FormItem.scss";
import classNames from "classnames";

type FormItemProps = AllHTMLAttributes<HTMLElement> & {
  top?: React.ReactNode | undefined;
  bottom?: React.ReactNode | undefined;
  children: React.ReactNode;
  required?: boolean;
  status?: "error" | "valid" | "default" | undefined;
};

export default function FormItem({
  htmlFor,
  top,
  bottom,
  children,
  required,
  status,
  ...restProps
}: FormItemProps) {
  return (
    <div className="form-item">
      <div className="form-item__top">
        <label className="form-item-top__label" htmlFor={htmlFor}>
          {top}
        </label>
        {required && <span className="form-item-top__label--required">*</span>}
      </div>
      {children}
      {status === "error" && (
        <div
          className={classNames(
            "form-item__bottom",
            status && `form-item__bottom--status-${status}`
          )}
        >
          <span>{bottom}</span>
        </div>
      )}
    </div>
  );
}
