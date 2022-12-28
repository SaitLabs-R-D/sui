export interface PaginationLayoutProps {
  count: number;
  page: number;
  setPage: (page: number) => void;
}

export interface PaginationItems {
  items: number[];
  before: number;
  after: number;
  prev: boolean;
  next: boolean;
}
