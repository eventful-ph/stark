import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import RemixIcon from "./RemixIcon";

const Badge = ({
  label,
  variant = "default",
  type = "solid",
  leadingItem,
  dismissible,
  onDismiss,
  circular = false,
}) => {
  const colorClasses = {
    default:
      type === "outline"
        ? "bg-gray-50 text-copy-caption"
        : "bg-gray-900 text-white border border-outline-gray-900",
    primary:
      type === "outline"
        ? "bg-primary-muted text-primary-base"
        : "bg-primary-base text-white border border-primary-base",
    secondary:
      type === "outline"
        ? "bg-secondary-muted text-secondary-base"
        : "bg-secondary-base text-white border border-secondary-base",
    success:
      type === "outline"
        ? "bg-success-muted text-success-base"
        : "bg-success-base text-white border border-success-base",
    info:
      type === "outline"
        ? "bg-info-muted text-info-base"
        : "bg-info-base text-white border border-info-base",
    warning:
      type === "outline"
        ? "bg-warning-muted text-warning-base"
        : "bg-warning-base text-black border border-warning-base",
    danger:
      type === "outline"
        ? "bg-danger-muted text-danger-base"
        : "bg-danger-base text-white border border-danger-base",
  };

  return (
    <div
      className={clsx(
        `flex flex-row items-center justify-center gap-2px py-2px w-fit ${
          circular ? "rounded-16px px-[6px]" : "rounded-4px px-4px"
        }`,
        colorClasses[variant]
      )}
    >
      {leadingItem && (
        <span className="text-[14px] h-[14px] flex justify-between items-center overflow-clip mr-2px">
          {leadingItem}
        </span>
      )}
      <span className="text-caption font-semibold uppercase whitespace-nowrap">
        {label}
      </span>
      {dismissible && (
        <button
          className="text-[14px] w-[14px] h-[14px] flex justify-between items-center font-bold outline-none"
          onClick={
            onDismiss
              ? onDismiss
              : () =>
                  console.log(
                    "Add dismiss functionality (supply a function to onDismiss prop)"
                  )
          }
        >
          <RemixIcon name="close-fill" />
        </button>
      )}
    </div>
  );
};

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
  ]),
  type: PropTypes.oneOf(["solid", "outline"]),
  leadingItem: PropTypes.node,
  dismissible: PropTypes.bool,
  circular: PropTypes.bool,
  onDismiss: PropTypes.func,
};

export default Badge;
