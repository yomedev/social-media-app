import ResponsiveContainer from "./ResponsiveContainer";
import SearchForm from "@/components/forms/SearchForm";
import Logo from "./Logo";
import Profile from "./Profile";
import { Grid, GridItem } from "../../components/grid";

export default function Header() {
  return (
    <header className="h-16 border-b">
      <ResponsiveContainer>
        <Grid gap={4} cols={4} align="center" className="h-full px-4">
          <GridItem colSpan={1}>
            <Logo />
          </GridItem>
          <GridItem colSpan={2}>
            <SearchForm />
          </GridItem>
          <GridItem colSpan={1} justifySelf="end">
            <Profile />
          </GridItem>
        </Grid>
      </ResponsiveContainer>
    </header>
  );
}
