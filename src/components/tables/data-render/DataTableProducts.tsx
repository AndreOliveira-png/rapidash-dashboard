import * as React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, chakra, Button } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useMedia } from 'react-use'

import {
    useReactTable,
    flexRender,
    getCoreRowModel,
    ColumnDef,
    SortingState,
    getSortedRowModel
} from "@tanstack/react-table";

export type DataTableProps<Data extends object> = {
    data: Data[];
    columns: ColumnDef<Data, any>[];
    removeProduct: any;
};

export function DataTableProducts<Data extends object>({
    data,
    columns,
    removeProduct
}: DataTableProps<Data>) {
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting
        }
    });
    const isMobile = useMedia('(max-width: 40em)')
    let headerId = ''
    let cellId = ''
    return (
        <Table variant='simple' colorScheme='blue'>
            <Thead bg='#2F576D'>
                {table.getHeaderGroups().map((headerGroup) => (
                    <Tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                            // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                            const meta: any = header.column.columnDef.meta;
                            headerId = Number(header.id + 1).toString();
                            return (
                                <Th
                                    textAlign="center"
                                    borderColor='#46738B'
                                    color='white'
                                    fontSize={isMobile ? 'lg' : 'md'}
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    isNumeric={meta?.isNumeric}
                                >

                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}

                                    <chakra.span pl="4">
                                        {header.column.getIsSorted() ? (
                                            header.column.getIsSorted() === "desc" ? (
                                                <TriangleDownIcon aria-label="sorted descending" />
                                            ) : (
                                                <TriangleUpIcon aria-label="sorted ascending" />
                                            )
                                        ) : null}
                                    </chakra.span>
                                </Th>
                            );
                        })}
                        <Th
                            key={headerId}
                            borderColor='#46738B'
                            color='white'
                            fontSize={isMobile ? 'lg' : 'md'}
                        >
                        </Th>
                    </Tr>
                ))}
            </Thead>
            <Tbody>
                {table.getRowModel().rows.map((row) => (
                    <Tr

                        color='#DDDDDD'
                        borderColor='#46738B'

                        key={row.id}>
                        {row.getVisibleCells().map((cell) => {
                            // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                            const meta: any = cell.column.columnDef.meta;
                            cellId = Number(cell.id + 1).toString();
                            return (
                                <Td
                                    textAlign="center"
                                    borderColor='#46738B'
                                    key={cell.id} isNumeric={meta?.isNumeric}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </Td>
                            );
                        })}
                        <Td key={cellId} textAlign="end" borderColor='#46738B'><Button colorScheme="close" onClick={() => { removeProduct(row.id) }}>Remover</Button></Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
}
