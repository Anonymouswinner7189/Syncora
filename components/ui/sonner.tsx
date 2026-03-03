"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="border-none"
      position="top-center"
      icons={{
        success: (
          <CircleCheckIcon className="size-4 bg-green-500 rounded-2xl" />
        ),
        info: <InfoIcon className="size-4 bg-blue-500 rounded-2xl" />,
        warning: (
          <TriangleAlertIcon className="size-4 bg-yellow-500rounded-2xl" />
        ),
        error: <OctagonXIcon className="size-4 bg-red-500 rounded-2xl" />,
        loading: <Loader2Icon className="size-4 animate-spin rounded-2xl" />,
      }}
      style={
        {
          "--normal-bg": "#ffffff",
          "--normal-text": "#000000",
          "--normal-border": "#e5e7eb",
          "--border-radius": "12px",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
