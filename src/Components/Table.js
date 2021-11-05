import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import SampleData from "./SampleData.json";
import BigData from "./BigData.json";
import { Columns } from "./Columns";
import { TextFilter } from "./TextFilter";
import { CSVLink } from "react-csv";

export const DataTable = () => {
  //UseMemo hook ensures data isn't recreated on every render.
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => SampleData, []);
  // const tableRender = useTable({ columns, data });

  const instance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    setPageSize,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = instance;

  const { globalFilter, pageIndex, pageSize } = state;

  //Filters data for CSV download
  const rowData = instance.rows.map((row) => {
    prepareRow(row);
    return row.cells.map((cell) => cell.value);
  });

  const headers = [
    "Player",
    "Team",
    "Position",
    "Att",
    "AttG",
    "Yds",
    "Avg",
    "YdsG",
    "TD",
    "Lng",
    "1st",
    "1st%",
    "20+",
    "40+",
    "FUM",
  ];

  //Adds header row to front of rowData array. Easier than pulling it and cleaning it from instance.
  rowData.unshift(headers);

  return (
    <>
      {console.log(rowData)}
      <row id="header">
        <CSVLink data={rowData}>Download CSV</CSVLink>
        <TextFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <label id="styled-select">
          Entries
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </label>
      </row>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className={"fas fa-sort-down"} />
                      ) : (
                        <i className={"fas fa-sort-up"} />
                      )
                    ) : (
                      <i />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <row id="header">
          <div>
            <button
              className="button button-rounded-hover"
              disabled={!canPreviousPage}
              onClick={() => gotoPage(0)}
            >
              {"<<"}
            </button>
            <button
              className="button button-rounded-hover"
              disabled={!canPreviousPage}
              onClick={() => previousPage()}
            >
              Prev
            </button>
          </div>
          <span id="header">
            <strong>
              {pageIndex + 1} / {pageOptions.length}
            </strong>
          </span>
          <div>
            <button
              className="button button-rounded-hover"
              disabled={!canNextPage}
              onClick={() => nextPage()}
            >
              Next
            </button>
            <button
              className="button button-rounded-hover"
              disabled={!canNextPage}
              onClick={() => gotoPage(pageCount - 1)}
            >
              {">>"}
            </button>
          </div>
        </row>
      </div>
    </>
  );
};
