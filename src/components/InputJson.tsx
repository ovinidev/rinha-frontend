"use client";
import { ComponentProps } from "react";

interface InputJsonProps extends ComponentProps<"input"> {}

export function InputJson(props: InputJsonProps) {
  return (
    <>
      <label
        htmlFor="file"
        className="ease cursor-pointer self-center rounded-md border border-slate-900 bg-slate-200 px-4 py-1 text-slate-900 duration-300 hover:brightness-95"
      >
        Load JSON
      </label>

      <input
        className="hidden"
        id="file"
        type="file"
        accept="application/JSON"
        {...props}
      />
    </>
  );
}
