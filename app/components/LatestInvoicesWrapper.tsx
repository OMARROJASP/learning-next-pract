"use client"

import * as React from "react"
import Image from "next/image";

interface Props {
    amount: {
        _id: string;
        month: string;
        amount: number | string;    
        image_url: string;
        name: string;
    }[]
}



const LatestInvoicesWrapper = ({ amount }: Props) => {
    
     return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 text-left text-sm font-semibold text-gray-600">
          <tr>
            <th className="px-6 py-3">Avatar</th>
            <th className="px-6 py-3">Nombre</th>
            <th className="px-6 py-3">Monto</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white text-sm text-gray-700">
          {amount.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4">
                <Image
                  src={row.image_url}
                  alt={row.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </td>
              <td className="px-6 py-4">{row.name}</td>
              <td className="px-6 py-4 font-medium text-gray-900">{row.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default LatestInvoicesWrapper;   