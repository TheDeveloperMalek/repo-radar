import { ROUTE_MAX_DEPTH } from "@/config/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function excludePathnamePagination(pathname: string | undefined) {
  return pathname?.split("/").slice(0, ROUTE_MAX_DEPTH).join("/");
}

export function PhraseSliceFormatter(phrase: string, length: number) {
  return phrase.slice(0, length);
}
