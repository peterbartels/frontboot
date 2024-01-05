"use client";

import { Link, Button, LinkProps, ButtonProps } from "react-aria-components";

import {
  useFocusWithin,
  AriaPopoverProps,
  usePopover,
  useOverlayTrigger,
} from "react-aria";
import { useOverlayTriggerState, OverlayTriggerState } from "react-stately";

import { flyOutMenu } from "@frontboot/styled-system/recipes";
import { useRef } from "react";

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
  children: React.ReactNode;
  title: string;
  isLink?: boolean;
};

type FlyOutMenuProps = {
  label: string;
  children: React.ReactNode;
};

interface PopoverProps
  extends Omit<AriaPopoverProps, "popoverRef">,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

function Popover({ children, state, offset = 8, ...props }: PopoverProps) {
  let popoverRef = useRef(null);
  let { popoverProps, arrowProps, placement } = usePopover(
    {
      ...props,
      offset,

      //needed so that there is not focus trap and all other elements get aria-hidden
      isNonModal: true,
      popoverRef,
    },
    state,
  );

  return (
    <div {...popoverProps} ref={popoverRef} className="popover">
      <svg
        {...arrowProps}
        className="arrow"
        data-placement={placement}
        viewBox="0 0 12 12"
        width={24}
        height={24}
      >
        <path d="M0 0 L6 6 L12 0" />
      </svg>
      {children}
    </div>
  );
}

export const FlyOutMenuItem = (item: FlyOutMenuItemProps) => {
  let state = useOverlayTriggerState({});

  let { focusWithinProps } = useFocusWithin({
    onFocusWithinChange: state.setOpen,
  });
  let ref = useRef(null);
  let { triggerProps } = useOverlayTrigger({ type: "menu" }, state, ref);

  //remove haspopup because a flyout menu has none if these items
  //https://github.com/w3c/wai-tutorials/issues/624
  triggerProps["aria-haspopup"] = undefined;
  // console.log(triggerProps,);
  const classes = flyOutMenu();

  return (
    <li {...focusWithinProps} ref={ref}>
      {/* <DialogTrigger> */}
      {item.isLink ? (
        <Link {...item} {...triggerProps}>
          {item.title}
        </Link>
      ) : (
        <Button {...item} {...triggerProps}>
          {item.title}
        </Button>
      )}
      {state.isOpen && (
        <Popover triggerRef={ref} state={state} placement="bottom left">
          <div className={classes.popover}>{item.children}</div>
        </Popover>
      )}
      {/* </DialogTrigger> */}
    </li>
  );
};

export const FlyOutMenu = (props: FlyOutMenuProps) => {
  const classes = flyOutMenu();
  return (
    <nav className={classes.root} aria-label={props.label}>
      <ul>{props.children}</ul>
    </nav>
  );
};
