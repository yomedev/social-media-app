"use client";

import "./page.scss";
import {
  Button,
  EyeIcon,
  EyeSlashIcon,
  FormItem,
  IconButton,
  Input,
  Link,
  Progress,
  Spacing,
  Text,
  Title,
} from "@/components";
import { useState } from "react";

export default function Signup() {
  const [isPassShow, setIsPassShow] = useState(false);

  return (
    <section className="signup">
      <Title normalize Component="h1">
        Signup
      </Title>
      <Spacing size={24} />
      <form className="signup__form" action="">
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
        <Spacing size={16} />
        <Button size="l">Signup</Button>
      </form>
      <Spacing size={16} />
      <div>
        <Text Component="p" normalize inline>
          Already have an account?
        </Text>{" "}
        <Link href="login">Login</Link>
      </div>
      <Spacing size={16} />
    </section>
  );
}
