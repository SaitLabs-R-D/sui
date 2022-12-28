import { getPaginationItems } from "../../scripts";
import { PaginationLayoutProps } from "../../../../types";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination({
  count,
  page,
  setPage,
}: PaginationLayoutProps) {
  const pagi = getPaginationItems(count, page);

  return (
    <div className="sui-pagination --charlie">
      <button onClick={() => setPage(page - 1)} disabled={!pagi.prev}>
        <IoIosArrowBack />
      </button>
      {pagi.before !== -1 && (
        <>
          <button onClick={() => setPage(pagi.before)}>{pagi.before}</button>
          <span>...</span>
        </>
      )}
      {pagi.items.map((item) => (
        <button
          key={item}
          onClick={() => setPage(item)}
          className={item === page ? "--active" : ""}
        >
          {item}
        </button>
      ))}
      {pagi.after !== -1 && (
        <>
          <span>...</span>
          <button onClick={() => setPage(pagi.after)}>{pagi.after}</button>
        </>
      )}
      <button onClick={() => setPage(page + 1)} disabled={!pagi.next}>
        <IoIosArrowForward />
      </button>
    </div>
  );
}
