"use client";
import React, { FC } from "react";
import clsx from "clsx";
import RemixIcon from "./molecules/RemixIcon";
import { ButtonProps } from "stark-types";

const Button: FC<ButtonProps> = ({
  label,
  id,
  leadingIcon,
  trailingIcon,
  variant = "solid",
  color = "default",
  size = "default",
  disabled = false,
  isLoading = false,
  fullWidth = false,
  submit = false,
  attached = false,
  onClick,
  className,
}) => {
  const buttonVariant =
    variant === "outline" || variant === "text" ? variant : "solid";
  const validColors = [
    "default",
    "primary",
    "secondary",
    "info",
    "success",
    "danger",
    "warning",
    "dark",
    "white",
  ];
  const buttonColor = validColors.includes(color) ? color : "default";
  const buttonSize = size === "small" || size === "large" ? size : "default";
  const state = disabled ? "disabled" : isLoading ? "loading" : "default";

  const sizeClasses = {
    small: "text-caption px-8px py-4px",
    default: "text-body px-12px py-10px",
    large: "text-body px-16px py-16px",
  };

  const buttonClasses = {
    solid: {
      default:
        "bg-white hover:bg-gray-50 border-outline-default active:bg-gray-100",
      primary: `${
        !disabled &&
        "bg-primary-base hover:bg-primary-hover active:bg-primary-active border-primary-base hover:border-primary-hover"
      }  `,
      secondary: `${
        !disabled &&
        "bg-secondary-base hover:bg-secondary-hover active:bg-secondary-active border-secondary-base hover:border-secondary-hover"
      }`,
      success: `${
        !disabled &&
        "bg-success-base hover:bg-success-hover active:bg-secondary-active border-success-base hover:border-success-hover"
      }`,
      danger: `${
        !disabled &&
        "bg-danger-base hover:bg-danger-hover active:bg-danger-active border-danger-base hover:border-danger-hover"
      }`,
      info: `${
        !disabled &&
        "bg-info-base hover:bg-info-hover active:bg-info-active border-info-base hover:border-info-hover"
      }`,
      warning: `${
        !disabled &&
        "bg-warning-base hover:bg-warning-hover active:bg-warning-active border-warning-base hover:border-warning-hover"
      }`,
      dark: "bg-black hover:bg-gray-900 active:bg-gray-800 border-black",
    },
    outline: {
      default:
        "bg-white hover:bg-gray-50 border-outline-default active:bg-gray-100",
      primary:
        "bg-white hover:bg-primary-muted border-primary-base hover:border-primary-hover active:border-primary-active",
      secondary:
        "bg-white hover:bg-secondary-muted border-secondary-base hover:border-secondary-hover active:border-secondary-active",
      success:
        "bg-white hover:bg-success-muted border-success-base hover:border-success-hover active:border-success-active",
      danger:
        "bg-white hover:bg-danger-muted border-danger-base hover:border-danger-hover active:border-danger-active",
      info: "bg-white hover:bg-info-muted border-info-base hover:border-info-hover active:border-info-active",
      warning:
        "bg-white hover:bg-warning-muted border-warning-base hover:border-warning-hover active:border-warning-active",
      dark: "bg-white border-gray-800 hover:bg-gray-100 hover:border-black active:border-black",
    },
    text: {
      default:
        "text-copy-caption hover:bg-gray-50 active:text-gray-800 cursor-pointer",
      primary:
        "text-primary-base hover:bg-primary-muted active:text-primary-active cursor-pointer",
      secondary:
        "text-secondary-base hover:bg-secondary-muted active:text-secondary-active cursor-pointer",
      success:
        "text-success-base hover:bg-success-muted active:text-success-active cursor-pointer",
      danger:
        "text-danger-base hover:bg-danger-muted active:text-danger-active cursor-pointer",
      info: "text-info-base hover:bg-info-muted active:text-info-active cursor-pointer",
      warning:
        "text-warning-base hover:bg-warning-muted active:text-warning-active cursor-pointer",
      white: "text-white cursor-pointer",
      dark: "text-black cursor-pointer",
      disabled: "text-copy-disabled cursor-not-allowed",
    },
  };

  const stateClasses = {
    default: "cursor-pointer",
    disabled:
      "bg-fill-disabled cursor-not-allowed border-outline-default border",
    loading: "opacity-75 cursor-wait",
  };

  const typeClasses = {
    solid: `font-semibold ${
      attached ? "border-l rounded-0px" : "rounded-4px outline border"
    } focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0`,
    outline: `font-semibold ${
      attached ? "border-l rounded-0px" : "rounded-4px outline border"
    } focus:outline-4 focus:outline-focusRing/30 outline-focusRing/0`,
    text: `font-semibold bg-transparent p-4px rounded-4px border-none focus:outline-4 focus:outline-focusRing/30 outline outline-focusRing/0`,
  };

  const buttonClass = buttonClasses[buttonVariant][buttonColor];
  const sizeClass = sizeClasses[buttonSize];
  const textClass =
    state === "disabled"
      ? buttonClasses.text.disabled
      : buttonVariant === "text"
      ? buttonClasses.text[buttonColor]
      : "";
  const stateClass = stateClasses[state];
  const combinedClasses = clsx(
    "relative group justify-center items-center flex font-default transition-colors duration-300 ease-in-out h-fit",
    typeClasses[buttonVariant],
    buttonClass,
    fullWidth ? "w-full" : "w-fit",
    buttonVariant !== "text" ? sizeClass : "",
    stateClass,
    textClass,
    className
  );

  return (
    <button
      id={id}
      type={submit ? "submit" : "button"}
      onClick={onClick}
      disabled={state === "disabled" || state === "loading"}
      className={combinedClasses}
    >
      <label
        className={clsx(
          "inline-flex gap-4px items-center justify-center text-body whitespace-nowrap transition-all duration-300 ease-in-out",
          state !== "disabled"
            ? buttonColor === "default"
              ? buttonClasses.text.default
              : buttonVariant === "solid"
              ? buttonClasses.text.white
              : buttonClasses.text[buttonColor]
            : textClass,
          isLoading && "opacity-20 cursor-wait"
        )}
      >
        {leadingIcon && (
          <div className="text-[16px] flex justify-center items-center h-[16px] w-[16px] relative">
            <div className="absolute">{React.cloneElement(leadingIcon)}</div>
          </div>
        )}
        <span className="select-none">{label ?? "Button"}</span>
        {trailingIcon && (
          <div className="text-[16px] flex justify-center items-center h-[16px] w-[16px] relative">
            <div className="absolute">{React.cloneElement(trailingIcon)}</div>
          </div>
        )}
      </label>

      {isLoading && (
        <span
          className={clsx(
            "absolute cursor-wait top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-8px h-[18px] w-[18px] text-[18px] font-bold",
            state !== "disabled"
              ? buttonColor === "default" //is the button default?
                ? buttonClasses.text.default //if the button is default, apply default color style (copy-caption)
                : buttonVariant === "solid" //is the button solid?
                ? buttonClasses.text.white //if the button is solid, apply color style (text-white)
                : buttonClasses.text[buttonColor] //if it's not solid, apply the appropriate color style (info, success, etc...)
              : textClass
          )}
        >
          <div className="animate-spin">
            <RemixIcon name="loader-fill" />
          </div>
        </span>
      )}
    </button>
  );
};

export default Button;
