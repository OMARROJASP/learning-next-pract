import { InfoCard } from "anjrot-components";
import { bebas } from "../ui/fonts";
import fetchCardData from "../helpers/api";


const Dashboard = async() => {

    const {numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices} = await fetchCardData();

    return (
        <main>
            <h1 className={`${bebas.className} mb-4 text-xl md:text-2xl`}  >Dashboard</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <InfoCard title="Collected" value={totalPendingInvoices} type="collected" currency={{locale: "en-US", currency: "USD"}}/>
                <InfoCard title="Pending" value={totalPaidInvoices} type="pending" currency={{locale: "en-US", currency: "USD"}}/>
                <InfoCard title="Total Invoices" value={numberOfInvoices} type="invoices"/>
                <InfoCard title="Total Customer" value={numberOfCustomers} type="customers"/>
            </div>
        </main>
    )
}

export default Dashboard;