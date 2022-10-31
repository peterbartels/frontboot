import { GetStarted } from '@frontboot/application-ui';
import { RootTheme } from '@frontboot/shared-ui';

export default function Index() {
  return (
    <RootTheme>
      <GetStarted onSelectProject={() => null} />
    </RootTheme>
  );
}
