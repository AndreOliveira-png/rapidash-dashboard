import React from 'react'
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./DataTable";

type UnitConversion = {
    id: string,
    atribuida: string,
    nomeEntregador: string,
    entregue:string,
  };

const data:UnitConversion[] = [
    {
        id: '9b854140-b757-4bbc-ab53-c8be7317a4b4',
        atribuida: 'Sim',
        nomeEntregador: 'Jose dos Santos',
        entregue: 'Não',
    },
    {
        id: '5e643e5c-7d9d-4ef0-b17b-1f8d7f9cab74',
        atribuida: 'Não',
        nomeEntregador: 'Nenhum',
        entregue: 'Não',
    },
    {
        id: 'ed014465-17d7-4adf-9e2e-5481d5ecb41a',
        atribuida: 'Sim',
        nomeEntregador: 'Marcelo Augusto',
        entregue: 'Sim',
    },
    {
        id: 'be188f63-eb3f-4c34-b76c-a6b526f46dc9',
        atribuida: 'Sim',
        nomeEntregador: 'Rodrigo Santos',
        entregue: 'Sim',
    },
    {
        id: 'e6199a3f-56f1-4a46-9df3-b4e6d644db00',
        atribuida: 'Não',
        nomeEntregador: 'Nenhum',
        entregue: 'Não',
    },
    {
        id: 'c61bede1-1d7e-4840-84b9-e670afc725fb',
        atribuida: 'Sim',
        nomeEntregador: 'Marta de Melo',
        entregue: 'Não',
    },
    {
        id: 'b51e0feb-d517-47f3-86af-0835a68de94a',
        atribuida: 'Não',
        nomeEntregador: 'Nenhum',
        entregue: 'Não',
    },
]

const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
    columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: "ID"
    }),
    columnHelper.accessor("atribuida", {
        cell: (info) => info.getValue(),
        header: "Atribuida"
    }),
    columnHelper.accessor("nomeEntregador", {
        cell: (info) => info.getValue(),
        header: "Nome Entregador"
    }),
    columnHelper.accessor("entregue", {
        cell: (info) => info.getValue(),
        header: "Entregue"
    }),
];



function CustomTable() {
    return (
        <DataTable columns={columns} data={data} />
    )
}

export default CustomTable;