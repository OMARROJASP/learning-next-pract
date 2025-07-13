import SideNav from "../components/SideNav";


const Dashboard = () => {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <aside className="w-full flex-none md:w-64 bg-slate-700">
                <SideNav/>
                <div className="flex grow p-5 md:overflow-y-auto md:p-12">
                    <h1>El contenido</h1>
                </div>
            </aside>
        </div>
    )
}

export default Dashboard;