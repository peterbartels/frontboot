import { FlyOutMenu } from "@frontboot/ui/components/fly-out-menu";
import "@frontboot/styled-system/styles.css";

export default function Page(): JSX.Element {
  return (
    <div>
      <FlyOutMenu label="Main menu">Test</FlyOutMenu>
      <main>Main content</main>
    </div>
  );
}
