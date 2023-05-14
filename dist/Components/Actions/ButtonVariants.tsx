import { VariantOutlineTypes, VariantTypes } from "../sharedTypes"

export const buttonVariants: Record<VariantTypes | VariantOutlineTypes, string> = {
  default: "bg-slate-100  hover:bg-slate-200 active:bg-slate-300",
  danger: "bg-red-500 text-slate-100 hover:bg-red-600 active:bg-red-700",
  success: "bg-green-500 text-slate-100 hover:bg-green-600 active:bg-green-700",
  info: "bg-sky-500 text-slate-100 hover:bg-sky-600 active:bg-sky-700",
  warning: "bg-orange-500 text-slate-100 hover:bg-orange-600 active:bg-warning-700",
  outline_default: "border-slate-500 text-slate-600 hover:bg-slate-50 active:bg-slate-100",
  outline_success: "border-green-500 text-green-600 hover:bg-green-50 active:bg-green-100",
  outline_danger: "border-red-500 text-red-600 hover:bg-red-50 active:bg-red-100",
  outline_info: "border-sky-500 text-sky-600 hover:bg-sky-50 active:bg-sky-100",
  outline_warning: "border-orange-500 text-orange-600 hover:bg-orange-50 active:bg-orange-100",
}
