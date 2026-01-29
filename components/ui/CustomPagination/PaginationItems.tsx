import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PAGINATION_MAX_PILLS } from "@/config/constants";

export interface PaginationItemsProps {
  count: number;
  initialActive: number;
}

export default function PaginationItems({
  count,
  initialActive,
  pathname,
}: PaginationItemsProps & { pathname: string }) {
  const previous = initialActive - 1;
  const next = initialActive + 1;
  const baseUrl = `${pathname}/`;
  const paginationArray = Array.from({ length: count }, (_, i) => i);
  let paginationButtons;
  if (count <= 5) {
    paginationButtons = paginationArray.map((page) => (
      <PaginationItem key={page}>
        <PaginationLink
          isActive={page === initialActive}
          href={`${baseUrl}${page}`}
        >
          {page}
        </PaginationLink>
      </PaginationItem>
    ));
  } else {
    const start = Math.max(
      0,
      initialActive - Math.floor(PAGINATION_MAX_PILLS / 2),
    );
    const end = Math.min(count, start + PAGINATION_MAX_PILLS);
    paginationButtons = (
      <>
        {start > 0 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {paginationArray.slice(start, end).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              isActive={page === initialActive}
              href={`${baseUrl}${page}`}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {end < count && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
      </>
    );
  }

  return (
    <>
      {initialActive > 0 && (
        <PaginationItem>
          <PaginationPrevious href={`${baseUrl}${previous}`} />
        </PaginationItem>
      )}
      {paginationButtons}
      {initialActive < count - 1 && (
        <PaginationItem>
          <PaginationNext href={`${baseUrl}${next}`} />
        </PaginationItem>
      )}
    </>
  );
}
