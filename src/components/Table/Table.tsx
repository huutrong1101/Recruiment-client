import { useEffect } from "react";
import classNames from "classnames";

export interface TableRow {
  id: string;
  value: any;
}

export interface TableProps<T> {
  rows: TableRow[];
  data: T[];
}

export default function Table<T>({ rows, data }: TableProps<T>) {
  /**
   * Pre-condition for id
   */
  useEffect(() => {
    const set = new Set<string>();
    for (let row of rows) {
      if (set.has(row.id)) {
        throw new Error(`Duplicate row id ${row.id}`);
      } else {
        set.add(row.id);
      }
    }
  }, []);

  return (
    <div className="list-view-table-wrapper w-full">
      {/* Table simulation */}
      <table
        className={classNames(
          `table-auto border-collapse bg-white/40 w-full border`,
        )}
      >
        <thead className={classNames(`rounded uppercase`)}>
          <tr>
            {rows.map((row, _rowIdx) => {
              return (
                <th
                  key={`thead-${row.id}-${_rowIdx}`}
                  className={classNames(
                    `font-semibold text-zinc-400 text-left py-2 px-4 text-xs  rounded-xl`,
                    ` hover:text-emerald-600 transition-color duration-75`,
                  )}
                >
                  {row.value}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr
              key={`tbody-tr-${item.id}-${index}`}
              className={classNames(
                `border-t border-b bg-white text-zinc-600 hover:bg-black/5 transition-colors duration-75`,
              )}
            >
              {rows.map((_row, _index) => {
                const key: string = _row.id;

                return (
                  <td
                    key={`tbody-tr-td-${key}-${index}-${_index}`}
                    className={classNames(
                      `font-normal text-left py-4 px-4 text-sm`,
                    )}
                  >
                    {item[key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
