const headers = {  
                "Content-Type": "application/json",
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NGVmNzAwMmYzNGFjMWVlY2UxNzc2ZCIsImVtYWlsIjoibmV4dFR1dG9yaWFsQHRlc3QuY29tIiwibmFtZSI6Im5leHRUdXRvcmlhbCIsImlhdCI6MTc1Mzk4NDYxOH0.Ol6CtFO14kt3XKvvuay_qCWNz9GW564k_1rU6uplKlE`  
                  }


const fetchCardData = async () => {
    try {
        const [getCustomerCount, getInvoiceCount, getInvoiceStatusCount] = await Promise.all([
            fetch(`${process.env.BACKEND_URL}/customer/count`, { headers }),        
            fetch(`${process.env.BACKEND_URL}/invoices/count`, { headers }),
            fetch(`${process.env.BACKEND_URL}/invoices/status-count`, { headers })
        ]);
       
        const resultCustomerCount = await getCustomerCount.json();
        const resultInvoiceCount = await getInvoiceCount.json();
        const resultInvoicesStatusCount = await getInvoiceStatusCount.json();

        const numberOfInvoices = Number(resultInvoiceCount ?? "0");
        const numberOfCustomers = Number(resultCustomerCount ?? "0");
        const totalPaidInvoices = resultInvoicesStatusCount.paid ?? "0";
        const totalPendingInvoices = resultInvoicesStatusCount.pending || 0;


        return {
            numberOfInvoices,
            numberOfCustomers,
            totalPaidInvoices,
            totalPendingInvoices
        };
    } catch (error) {
        console.error('Error fetching card data:', error);
        return [];
    }
}


export const fetchRevenue = async () => {
  try {
    const fetchRevenue = await fetch(`${process.env.BACKEND_URL}/revenues`, {
      headers
    });
    const revenueResult = await fetchRevenue.json();
    console.log("Fetching Revenue data...");
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Data completed after 3 seconds.");

    return revenueResult;
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Failed to fetch fetchRevenue data.");
  }
};

export const fetchLatestInvoices = async () => {
  try {
    const fetchInvoices = await fetch(`${process.env.BACKEND_URL}/invoices`, {
      headers
    });
    const resultFetchInvoices = await fetchInvoices.json();
    console.log("Fetching Latest Invoices data...", resultFetchInvoices);
    return resultFetchInvoices;
  } catch (error) {
    console.log("error :>> ", error);
    throw new Error("Failed to fetch fetchLatestInvoices data.");
  }
};

export default fetchCardData;