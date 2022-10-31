"use state";

import { GetStarted } from '@frontboot/application-ui';
import { RootTheme } from '@frontboot/shared-ui';

const Test = () => {
    return (
      <RootTheme>
        <GetStarted onSelectProject={() => null} />
      </RootTheme>
    )
}

export default Test;