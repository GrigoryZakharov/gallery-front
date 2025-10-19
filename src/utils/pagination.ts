export function pageArray(page: number, pageQty: number) {
  const pages: (number | string)[] = [];

  if (pageQty < 5) {
    for (let i = 1; i <= pageQty; i++) {
      pages.push(i);
    }
    return pages;
  } else if (pageQty - page < 3) {
    if (pageQty - page === 2) {
      pages.push(1, "...", page - 1, page, page + 1, page + 2);
    } else if (pageQty === page) {
      pages.push(1, "...", page - 2, page - 1, page);
    } else {
      pages.push(1, "...", page - 1, page, page + 1);
    }
    return pages;
  } else if (page <= 3) {
    if (page === 3) {
      pages.push(1, 2, 3, 4, "...", pageQty);
    } else {
      pages.push(1, 2, 3, "...", pageQty);
    }
    return pages;
  } else {
    pages.push(1, "...", page - 1, page, page + 1, "...", pageQty);
    return pages;
  }
}
