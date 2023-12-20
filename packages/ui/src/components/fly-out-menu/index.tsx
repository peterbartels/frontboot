"use client";

import { Link, Button, LinkProps, ButtonProps } from "react-aria-components";
import { flyOutMenu } from "@frontboot/styled-system/recipes";

import { createStyleContext } from "@frontboot/ui/utils/create-style-context";
import { styled } from "@frontboot/styled-system/jsx";
import { css } from "@frontboot/styled-system/css";

const { withProvider, withContext } = createStyleContext(flyOutMenu);

export type FlyOutMenuItemPropsLinkProps = LinkProps & {
  isLink: true;
  href: string;
};

export type FlyOutMenuItemPropsButtonProps = ButtonProps & {
  isLink?: false;
};

export type FlyOutMenuItemProps = (
  | FlyOutMenuItemPropsLinkProps
  | FlyOutMenuItemPropsButtonProps
) & {
  flyout: React.ReactNode;
  isLink?: boolean;
};

type FlyOutMenuProps = {
  label: string;
  children: React.ReactNode;
};

// const FlyOutMenuRoot = withProvider(styled("nav"), "root");

const FlyOutMenuItem = (item: FlyOutMenuItemProps) => (
  <li>
    {item.isLink ? (
      <Link {...item}>{item.flyout}</Link>
    ) : (
      <Button {...item}>{item.flyout}</Button>
    )}
  </li>
);

const style = css({
  border: "[2px solid red]",
});

export const FlyOutMenuButton = withContext(styled(FlyOutMenuItem), "item");

export const FlyOutMenu = (props: FlyOutMenuProps) => {
  const classes = flyOutMenu();
  return (
    <nav className={classes.root + " " + style} aria-label={props.label}>
      <ul>{props.children}qwerty</ul>
    </nav>
  );
};
