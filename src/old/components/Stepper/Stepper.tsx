import { CircleIcon } from "../Icons";
import "./Stepper.scss";

type StepperProps = {
  steps: number;
  activeStep: number;
};

export default function Stepper({ steps, activeStep }: StepperProps) {
  return (
    <div className="stepper">
      {[...new Array(steps)].map((_, index) => (
        <>
          <div key={index} className="stepper__step">
            <CircleIcon
              fill={activeStep >= index + 1 ? "#447bba" : "#d3d9de"}
              width={24}
              height={24}
            />
          </div>

          {index + 1 !== steps && (
            <div key={index} className="stepper__step-connector">
              <div className="stepper__step-connector-in"></div>
            </div>
          )}
        </>
      ))}
    </div>
  );
}
