"use client";
import { Pagination, PaginationContent } from "@/components/ui/pagination";
import PaginationItems, { PaginationItemsProps } from "./PaginationItems";
import { usePathname } from "next/navigation";
import { excludePathnamePagination } from "@/lib/utils";

export function CustomPagination({
  initialActive,
  count,
  className,
}: PaginationItemsProps & { className?: string }) {
  const pathname = usePathname();
  const pathNameWithNoPagination = excludePathnamePagination(pathname);
  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItems
          pathname={`${pathNameWithNoPagination}`}
          initialActive={initialActive}
          count={count}
        />
      </PaginationContent>
    </Pagination>
  );
}
