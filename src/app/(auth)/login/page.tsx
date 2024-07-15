"use client";

import {
  Button,
  ButtonGroup,
  EyeIcon,
  EyeSlashIcon,
  FormItem,
  IconButton,
  Input,
  Spacing,
  Text,
  Title,
  Link,
} from "@/components";
import "./page.scss";
import { useState } from "react";

export default function Login() {
  const [isPassShow, setIsPassShow] = useState(false);

  return (
    <section className="login">
      <Title normalize Component="h1">
        Login
      </Title>
      <Spacing size={24} />
      {/* <Separator /> */}
      {/* <Spacing size={16} /> */}
      <form className="login__form" action="">
        <FormItem
          bottom="Please, enter email"
          required
          htmlFor="email"
          top="Email"
        >
          <Input id="email" placeholder="example@mail.com" />
        </FormItem>
        <Spacing />
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
        <Spacing size={16} />
        <ButtonGroup stretched align="between">
          <Button size="l">Login</Button>
          <Link href="forgot-password">Forgot password?</Link>
        </ButtonGroup>
      </form>
      <Spacing size={16} />
      <div>
        <Text Component="p" normalize inline>
          Don&apos;t have an account?
        </Text>{" "}
        <Link href="signup">Signup</Link>
      </div>git 
      <Spacing size={16} />
      {/* <Separator /> */}
    </section>
  );
}
