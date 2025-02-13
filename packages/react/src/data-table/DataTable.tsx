import {
  type CellContext,
  flexRender,
  type Table as ReactTable,
} from "@tanstack/react-table";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { forwardRef } from "react";

import { Box, type BoxProps } from "../box";
import { DataTableHeaderCell } from "../data-table-header-cell";
import { Pagination } from "../pagination";
import { Skeleton } from "../skeleton";
import { Table } from "../table";
import { TableBody } from "../table-body";
import { TableCell } from "../table-cell";
import { TableHeader } from "../table-header";
import { TableRow } from "../table-row";
import * as styles from "./DataTable.css";

type DataTableProps = BoxProps<
  "div",
  {
    /**
     * Indicates if the table is loading
     */
    loading: boolean;
    /**
     * Pass the table instance returned from `useReactTable()` hook.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    table: ReactTable<any>;
  }
>;

export const DataTable = forwardRef<HTMLDivElement, DataTableProps>(
  ({ loading, table, ...props }, ref) => {
    return (
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        maxW="full"
        ref={ref}
        {...props}
      >
        <Table
          layout="fixed"
          style={assignInlineVars({
            [styles.leftTotalSizeVar]: `${table.getLeftTotalSize()}px`,
            [styles.rightTotalSizeVar]: `${table.getRightTotalSize()}px`,
          })}
          {...styles.table({
            pinned:
              table.getLeftTotalSize() > 0 && table.getRightTotalSize() > 0
                ? "both"
                : table.getLeftTotalSize() > 0
                  ? "left"
                  : table.getRightTotalSize() > 0
                    ? "right"
                    : "none",
          })}
        >
          <TableHeader {...styles.header()}>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <DataTableHeaderCell
                    header={header}
                    key={header.id}
                    style={{
                      ...assignInlineVars({
                        [styles.cellOffsetVar]: `${header.column.getStart(header.column.getIsPinned() || "left")}px`,
                        [styles.cellSizeVar]: `${header.getSize()}px`,
                      }),
                    }}
                    {...styles.cell({
                      pinned: header.column.getIsPinned() || undefined,
                      pinnedType: header.column.getIsPinned()
                        ? "header"
                        : undefined,
                    })}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </DataTableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {(loading
              ? Array.from({ length: 10 }, (_, i) => ({
                  getVisibleCells: () =>
                    table.getVisibleFlatColumns().map((column) => ({
                      column,
                      getContext: () => ({}) as CellContext<unknown, unknown>,
                      id: column.id,
                    })),
                  id: "loading" + i,
                }))
              : table.getRowModel().rows
            ).map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <TableCell
                      key={cell.id}
                      style={{
                        ...assignInlineVars({
                          [styles.cellOffsetVar]: `${cell.column.getStart(cell.column.getIsPinned() || "left")}px`,
                          [styles.cellSizeVar]: `${cell.column.getSize()}px`,
                        }),
                      }}
                      {...styles.cell({
                        pinned: cell.column.getIsPinned() || undefined,
                        pinnedType: cell.column.getIsPinned()
                          ? "body"
                          : undefined,
                      })}
                    >
                      {loading ? (
                        <Skeleton h="24" w="64"></Skeleton>
                      ) : (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {table.getPageCount() > 1 && (
          <Box mt="8">
            <Pagination
              onPageChange={(newPage) => table.setPageIndex(newPage - 1)}
              page={table.getState().pagination.pageIndex + 1}
              total={table.getPageCount()}
            />
          </Box>
        )}
      </Box>
    );
  },
);

DataTable.displayName = "@optiaxiom/react/DataTable";
