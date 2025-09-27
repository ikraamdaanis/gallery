"use client";

import { X } from "lucide-react";
import type { ComponentProps, HTMLAttributes } from "react";
import type {
  DialogProps as AriaDialogProps,
  HeadingProps as AriaHeadingProps,
  ModalOverlayProps as AriaModalOverlayProps
} from "react-aria-components";
import {
  Button as AriaButton,
  Dialog as AriaDialog,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  composeRenderProps
} from "react-aria-components";
import { cn } from "utils/cn";

export const Dialog = AriaDialog;

export const DialogTrigger = AriaDialogTrigger;

export function DialogOverlay({
  className,
  isDismissable = true,
  ...props
}: AriaModalOverlayProps) {
  return (
    <AriaModalOverlay
      isDismissable={isDismissable}
      className={composeRenderProps(className, className =>
        cn(
          "fixed inset-0 z-50 bg-black/80",
          /* Exiting */
          "data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:duration-300",
          /* Entering */
          "data-[entering]:animate-in data-[entering]:fade-in-0",
          className
        )
      )}
      {...props}
    />
  );
}

export interface DialogContentProps
  extends Omit<ComponentProps<typeof AriaModal>, "children"> {
  children?: AriaDialogProps["children"];
  role?: AriaDialogProps["role"];
  closeButton?: boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
}

export function DialogContent({
  className,
  children,
  role,
  closeButton = true,
  ariaLabel,
  ariaLabelledby,
  ...props
}: DialogContentProps) {
  return (
    <AriaModal
      className={composeRenderProps(className, className =>
        cn(
          "bg-background data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 fixed top-1/2 left-1/2 z-50 h-full w-full origin-center -translate-x-1/2 -translate-y-1/2 shadow-lg data-[entering]:duration-200 data-[exiting]:duration-300",
          className
        )
      )}
      {...props}
    >
      <AriaDialog
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        role={role}
        className={cn("grid h-full gap-4", "h-full outline-none")}
      >
        {composeRenderProps(children, (children, renderProps) => (
          <>
            {children}
            {closeButton && (
              <AriaButton
                onPress={renderProps.close}
                className="ring-offset-background data-[entering]:bg-accent data-[entering]:text-muted-foreground data-[focused]:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity data-[disabled]:pointer-events-none data-[focused]:ring-2 data-[focused]:ring-offset-2 data-[focused]:outline-none data-[hovered]:opacity-100"
              >
                <X className="size-4" />
                <span className="sr-only">Close</span>
              </AriaButton>
            )}
          </>
        ))}
      </AriaDialog>
    </AriaModal>
  );
}

export function DialogHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1.5 text-center sm:text-left",
        className
      )}
      {...props}
    />
  );
}

export function DialogFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2",
        className
      )}
      {...props}
    />
  );
}

export function DialogTitle({ className, ...props }: AriaHeadingProps) {
  return (
    <AriaHeading
      slot="title"
      className={cn(
        "text-lg leading-none font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "flex flex-col gap-1.5 text-center sm:text-left",
        className
      )}
      {...props}
    />
  );
}
