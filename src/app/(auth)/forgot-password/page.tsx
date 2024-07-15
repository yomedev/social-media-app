import {
  Button,
  ButtonGroup,
  CircleIcon,
  FormItem,
  Input,
  Link,
  Spacing,
  Text,
  Title,
} from "@/components";
import "./page.scss";

export default function ForgotPassword() {
  return (
    <section className="forgot-password">
      <Title normalize Component="h1">
        Forgot your password?
      </Title>
      <Spacing size={24} />
      <form className="forgot-password__form" action="">
        <FormItem
          bottom="Please, enter email"
          required
          htmlFor="email"
          top="Email"
        >
          <Input id="email" placeholder="example@mail.com" />
        </FormItem>

        <Spacing size={16} />
        <ButtonGroup stretched mode="horizontal" align="between">
          <Button size="l">Send</Button>
          <Button mode="secondary" size="l">
            Cancel
          </Button>
        </ButtonGroup>
      </form>
      <Spacing size={16} />
      <div>
        <Text Component="p" normalize inline>
          Don&apos;t have an account?
        </Text>{" "}
        <Link href="signup">Signup</Link>
      </div>
      <Spacing size={32} />
      <div style={{display: "flex", gap: 4}}>
        {[...Array(3)].map((_, index) => (
          <CircleIcon width={8} height={8} key={index} fill="#d3d9de" />
        ))}
      </div>
    </section>
  );
}
