"use client"

import * as React from "react"
import {
  ColumnDef
} from "@tanstack/react-table"

import { DataTable } from "@/components/ui/custom/data-table"

const data: Sales[] = [
  {
    id: "1",
    Driver:"Patrick star",
    Costumer:"Logan",
    amount: 55000,    
    status: "success",
  },
  {
    id: "2",
    Driver:"Kofi Brown",
    Costumer:"Albert",
    amount: 35000,    
    status: "processing",
  },  
  {
    id: "3",
    Driver:"Percy Jackson",
    Costumer:'Natty',
    amount: 75000,    
    status: "success",
  },  
  {
    id: "4",
    Driver:"Ariana Grande",
    Costumer:'brain',
    amount: 155000,    
    status: "success",
  },  
  {
    id: "5",
    Driver:"Mac",
    Costumer:'henry',
    amount: 55000,    
    status: "failed",
  },  
 
]

export type Sales = {
  id: string
  Driver:string
  amount: number
  Costumer:string,
  status: "pending" | "processing" | "success" | "failed"

}

export const columns: ColumnDef<Sales>[] = [
  {
    accessorKey:"Driver",
    header:"Driver"
  },
  {
    accessorKey:"amount",
    header:"Amount"
  },
  {
    accessorKey:"Costumer",
    header:"Costumer"
  },
  {
    accessorKey:"status",
    header:"Status"
  },
]

export function RecentSales() {
  return (
    <div className="w-full">
      <DataTable data={data} columns={columns} ></DataTable>
    </div>
  )
}
