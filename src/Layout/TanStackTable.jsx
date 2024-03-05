import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

//3 TanStack Libraries!!!
import { flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { QueryClient, QueryClientProvider, useInfiniteQuery } from "@tanstack/react-query";
import { useVirtual } from "react-virtual";
import { BsSortDownAlt, BsSortDown } from "react-icons/bs";
import Input from "../Inputs/Input";
import { rankItem } from "@tanstack/match-sorter-utils";
const queryClient = new QueryClient();

function TanStackTable(props) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <App {...props} />
      </QueryClientProvider>
    </>
  );
}
function App(props) {
  let { columns, getPageData, pageData, enableMultiSelect, fetchSize, globalFilter, setGlobalFilter, ...others } = props;

  if (enableMultiSelect) {
    columns = [
      {
        id: "select",
        header: ({ table }) => (
          <div className="px-1">
            <IndeterminateCheckbox
              {...{
                checked: table.getIsAllRowsSelected(),
                indeterminate: table.getIsSomeRowsSelected(),
                onChange: (e) => {
                  table.getToggleAllRowsSelectedHandler()(e);
                  setSelectAllFlag(e.target.checked);
                },
              }}
            />
          </div>
        ),
        size: 50,
        cell: ({ row, table }) => {
          return (
            <div className="px-1 ">
              <IndeterminateCheckbox
                {...{
                  checked: row.getIsSelected(),
                  disabled: !row.getCanSelect(),
                  indeterminate: row.getIsSomeSelected(),
                  onChange: (e) => {
                    row.getToggleSelectedHandler()(e);
                  },
                }}
              />
            </div>
          );
        },
      },
      ...columns,
    ];
  }
  const rerender = React.useReducer(() => ({}), {})[1];

  //we need a reference to the scrolling element for logic down below
  const tableContainerRef = React.useRef(null);

  const [sorting, setSorting] = React.useState([]);

  const [selectAllFlag, setSelectAllFlag] = React.useState(false);

  //react-query has an useInfiniteQuery hook just for this situation!
  let { data, fetchNextPage, isFetching, isLoading } = useInfiniteQuery(
    ["table-data", sorting], //adding sorting state as key causes table to reset and fetch from new beginning upon sort
    async ({ pageParam = 0 }) => {
      // onScrollBottom()
      const start = pageParam * fetchSize;
      const fetchedData = getPageData(pageParam, start, fetchSize, sorting); //pretend api call
      // const fetchedData = getPageData(pageParam, start, fetchSize, sorting); //pretend api call
      return fetchedData;
    },
    {
      getNextPageParam: (_lastGroup, groups) => groups.length,
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  //we must flatten the array of arrays from the useInfiniteQuery hook
  // const [flatData, setFlatData] = useState(React.useMemo(() => data?.pages?.flatMap((page) => page.data) ?? [], [data]));
  const flatData = React.useMemo(() => data?.pages?.flatMap((page) => page.data) ?? [], [data]);

  const totalDBRowCount = data?.pages?.[0]?.meta?.totalRowCount ?? 0;
  const totalFetched = flatData.length;

  //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
  const fetchMoreOnBottomReached = React.useCallback(
    (containerRefElement) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;

        //once the user has scrolled within 300px of the bottom of the table, fetch more data if there is any
        if (scrollHeight - scrollTop - clientHeight < 300 && !isFetching && totalFetched < totalDBRowCount) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
  );

  //a check on mount and after a fetch to see if the table is already scrolled to the bottom and immediately needs to fetch more data
  React.useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);

  const fuzzyFilter = (row, columnId, value, addMeta) => {
    // console.log(row,columnId,value)
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value);

    // Store the itemRank info
    addMeta({
      itemRank,
    });
    // Return if the item should be filtered in/out
    return itemRank.passed;
  };

  const table = useReactTable({
    data: flatData,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    columns,
    state: {
      sorting,
      // columnFilters,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
  });

  const { rows } = table.getRowModel();

  //Method to select all rows if header checkbox is selected
  //This is for infinite scrolling

  React.useMemo(() => {
    if (selectAllFlag) {
      table.toggleAllRowsSelected(true);
    }
  }, [rows, selectAllFlag]);

  //Virtualizing is optional, but might be necessary if we are going to potentially have hundreds or thousands of rows
  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom = virtualRows.length > 0 ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0) : 0;

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="p-2">
      <div className="h-2" />
      <div className="container" onScroll={(e) => fetchMoreOnBottomReached(e.target)} ref={tableContainerRef}>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <th key={header.id} colSpan={header.colSpan} style={{ width: header.getSize() }}>
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort() ? "cursor-pointer select-none display-row" : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: <BsSortDownAlt className="icon-size" />,
                            desc: <BsSortDown className="icon-size" />,
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {paddingTop > 0 && (
              <tr>
                <td style={{ height: `${paddingTop}px` }} />
              </tr>
            )}
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index];
              return (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>;
                  })}
                </tr>
              );
            })}
            {paddingBottom > 0 && (
              <tr>
                <td style={{ height: `${paddingBottom}px` }} />
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>
        Fetched {flatData.length} of {totalDBRowCount} Rows.
      </div>
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
    </div>
  );
}

function IndeterminateCheckbox({ indeterminate, className = "", ...rest }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (typeof indeterminate === "boolean") {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate]);

  return <input type="checkbox" ref={ref} className={className + " cursor-pointer input-dimension"} {...rest} />;
}
export default TanStackTable;

function DebouncedInput({ value: initialValue, onChange, debounce = 500, ...props }) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return <input {...props} value={value} onChange={(e) => setValue(e.target.value)} />;
}
