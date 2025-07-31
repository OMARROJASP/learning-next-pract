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

export default fetchCardData;