import { FaFileInvoice, FaHome, FaUsers } from "react-icons/fa";

const links = [
    {name: "Dashboard", href: "/dashboard", icon: FaHome},
    {name: "Invoice", href: "/dashboard/invoices", icon: FaFileInvoice},
    {name: "Customers", href: "/dashboard/customers", icon: FaUsers},
]


const NavLink = () => {
    return (
       <>
        {links.map(x => {
                            const LinIcon = x.icon;
                            return (
                                <a 
                                key={x.name}
                            href={x.href}
                            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-800
                            p-3 text-lg text-white font-bold hover:bg-slate-400 hover:text-white md:flex-none md:justify-start
                            md:p-2 md:px-3"
                        >
                            <LinIcon className="w-6"/>
                            <p className="hidden md:block">{x.name}</p>
                        </a>
                            )
                        })}  </>
    );
}

export default NavLink;