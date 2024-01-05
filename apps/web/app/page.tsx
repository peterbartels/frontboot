import {
  FlyOutMenu,
  FlyOutMenuItem,
} from "@frontboot/ui/components/fly-out-menu";
import "@frontboot/styled-system/styles.css";

export default function Page(): JSX.Element {
  return (
    <div>
      <FlyOutMenu label="Main menu">
        <FlyOutMenuItem title="test1">
          <a href="#">Item 1</a>
          <a href="#">Item 2</a>
          <a href="#">Item 3</a>
        </FlyOutMenuItem>
      </FlyOutMenu>
      <main>Main content</main>
    </div>
  );
}
