"use client";

import {
  Button,
  ButtonGroup,
  FormItem,
  Input,
  Link,
  Spacing,
  Text,
  Title,
  Stepper,
  IconButton,
  EyeIcon,
  EyeSlashIcon,
  Progress,
} from "@/components";
import "./page.scss";
import { useState } from "react";

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [isPassShow, setIsPassShow] = useState(false);

  const handleNextStep = () => setStep((prev) => prev + 1);

  const handleBackStep = () => setStep((prev) => prev - 1);

  return (
    <section className="forgot-password">
      <Title normalize Component="h1">
        Forgot your password?
      </Title>
      <Spacing size={24} />
      <Stepper steps={3} activeStep={step} />
      <Spacing size={24} />
      <form className="forgot-password__form" action="">
        {step === 1 && (
          <FormItem
            bottom="Please, enter email"
            htmlFor="email"
            top="Enter your account email"
          >
            <Input id="email" placeholder="example@mail.com" />
          </FormItem>
        )}
        {step === 2 && (
          <FormItem
            bottom="Please, enter code"
            htmlFor="code"
            top="Enter code from email"
          >
            <Input id="code" />
          </FormItem>
        )}
        {step === 3 && (
          <>
            <FormItem
              bottom="Please, enter password"
              required
              htmlFor="pass"
              top="Password"
            >
              <Input
                id="pass"
                type={!isPassShow ? "password" : "text"}
                after={
                  <IconButton onClick={() => setIsPassShow((prev) => !prev)}>
                    {!isPassShow ? (
                      <EyeIcon width={16} height={16} fill="#99A2AD" />
                    ) : (
                      <EyeSlashIcon width={16} height={16} fill="#99A2AD" />
                    )}
                  </IconButton>
                }
              />
            </FormItem>
            <Spacing size={2} />
            <Progress value={100} height={4} />
            <Spacing />
            <FormItem
              bottom="Please, confirm password"
              required
              htmlFor="confirmPass"
              top="Confirm password"
            >
              <Input
                id="confirmPass"
                type={!isPassShow ? "password" : "text"}
                after={
                  <IconButton onClick={() => setIsPassShow((prev) => !prev)}>
                    {!isPassShow ? (
                      <EyeIcon width={16} height={16} fill="#99A2AD" />
                    ) : (
                      <EyeSlashIcon width={16} height={16} fill="#99A2AD" />
                    )}
                  </IconButton>
                }
              />
            </FormItem>
          </>
        )}
        <Spacing size={16} />
        <ButtonGroup stretched mode="horizontal" align="between">
          {step === 1 && (
            <>
              <Button mode="secondary" size="l">
                Cancel
              </Button>
              <Button size="l" onClick={handleNextStep}>
                Send
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <Button mode="secondary" size="l" onClick={handleBackStep}>
                Back
              </Button>
              <Button size="l" onClick={handleNextStep}>
                Next
              </Button>
            </>
          )}

          {step === 3 && (
            <>
              <Button mode="secondary" size="l">
                Cancel
              </Button>
              <Button size="l">Confirm</Button>
            </>
          )}
        </ButtonGroup>
      </form>
      <Spacing size={24} />
      <div>
        <Text Component="p" normalize inline>
          Don&apos;t have an account?
        </Text>{" "}
        <Link href="signup">Signup</Link>
      </div>
    </section>
  );
}
