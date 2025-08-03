
import { InfoCard } from "anjrot-components";
import React from "react";
import fetchCardData from "../helpers/api";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CardWrapper = async () => {
  const { numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();

  return (
    <>
      <InfoCard title="Collected" value={totalPaidInvoices} type="collected" currency={{ locale: "en-US", currency: "USD" }} />
      <InfoCard title="Pending" value={totalPendingInvoices} type="pending" currency={{ locale: "en-US", currency: "USD" }} />
      <InfoCard title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <InfoCard title="Total Customers" value={numberOfCustomers} type="customers" />

      <Card >
        <CardHeader >
          <CardDescription>Collection</CardDescription>
          <CardTitle className="text-2xl font-semibold">{totalPaidInvoices}</CardTitle>
        </CardHeader>
      </Card>
    </>
  );
};

export default CardWrapper;