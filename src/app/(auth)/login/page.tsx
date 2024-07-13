"use client";

import {
  EyeIcon,
  EyeSlashIcon,
  FormItem,
  IconButton,
  Input,
} from "@/components";
import "./page.scss";
import { useState } from "react";

export default function Login() {
  const [isPassShow, setIsPassShow] = useState(false);

  return (
    <>
      <h1>Login</h1>
      <form action="">
        <FormItem
          bottom="Please, enter email"
          required
          htmlFor="email"
          top="Email"
        >
          <Input id="email" placeholder="example@mail.com" />
        </FormItem>
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
      </form>
    </>
  );
}
