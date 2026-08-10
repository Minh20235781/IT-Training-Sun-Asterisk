interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number; // số trang hiện xung quanh trang hiện tại
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageRange(currentPage, totalPages, siblingCount);

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="pagination__button pagination__button--nav"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        aria-label="Previous page"
      >
        ‹
      </button>

      {pages.map((page, idx) =>
        page === 'ellipsis' ? (
          <span 
            key={`ellipsis-${idx}`} 
            className="pagination__button pagination__button--nav"
            style={{ cursor: 'default', pointerEvents: 'none' }}
          >
            …
          </span>
        ) : (
          <button
            key={page}
            className={`pagination__button ${
              page === currentPage ? 'pagination__button--active' : ''
            }`}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        )
      )}

      <button
        className="pagination__button pagination__button--nav"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        aria-label="Next page"
      >
        ›
      </button>
    </nav>
  );
}

/**
 * Tính danh sách trang hiển thị, chèn "ellipsis" khi có khoảng trống.
 * Ví dụ: currentPage=1, totalPages=8 -> [1,2,3,'ellipsis',8]
 */
function getPageRange(
  current: number,
  total: number,
  siblingCount: number
): (number | 'ellipsis')[] {
  const totalVisible = siblingCount * 2 + 5; // first + last + current + 2 ellipsis + siblings

  if (total <= totalVisible) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSibling = Math.max(current - siblingCount, 1);
  const rightSibling = Math.min(current + siblingCount, total);

  const showLeftEllipsis = leftSibling > 2;
  const showRightEllipsis = rightSibling < total - 1;

  const pages: (number | 'ellipsis')[] = [1];

  if (showLeftEllipsis) pages.push('ellipsis');

  for (let i = leftSibling; i <= rightSibling; i++) {
    if (i !== 1 && i !== total) pages.push(i);
  }

  if (showRightEllipsis) pages.push('ellipsis');

  pages.push(total);

  return pages;
}