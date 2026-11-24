import {
    Baby,
    LayoutDashboard,
    Package,
    Tags,
    Gift,
    Settings,
    ExternalLink,
} from "lucide-react";

const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, active: true },
    { label: 'Meu enxoval', icon: Package, active: true },
    { label: 'Categorias', icon: Tags, active: true },
    { label: 'Reservas', icon: Gift, active: true },
]

function Sidebar() {
    return(
        <aside className="flex min-h-screen w-64 flex-col border-r border-[#E8E5DC] bg-white p-5">
            <div className="mb-10 flex items-center gap-3">
                <div className="rounded-x1 bg-[#E5EDE3] p-2">
                    <Baby className="h-7 w-7 text-[#829A83}" />
                </div>

                <div>
                    <h1 className="font-semibold text-[#536B56]">
                        Meu enxoval
                    </h1>
                    <p className="text-xs text-gray-400">
                        Enxoval do Ezequiel
                    </p>
                </div>
            </div>

            <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-winder text-gray-400">
                Menu Principal
            </p>

            <nav className="flex flex-col gap-2">
                {menuItems.map((item) => {
                    const Icon = item.icon

                    return(
                        <button
                            key={item.label}
                            type="button"
                            className={`flex items-center gap-3 rounded-x1 px-4 py-3 text-sm transition-colors ${
                                item.active
                                ? 'bg-[#E5EDE3] font-semibold text-[#536B56]'
                                    : 'text-gray-500 hover:bg-[#F4F5F0]'
                            }`}
                            >
                            <Icon size={19} />
                            {item.label}
                        </button>
                    )
                })}
            </nav>

            <div className="mt-auto flex flex-col gap-2">
                <button className=" flex items-center gap-3 rounded-x1 px-4 py-3 text-sm text-gray-500 hover:bg-[#F4F5F0]">
                    <ExternalLink size={19} />
                    Visualizar lista pública
                </button>
                <button className="flex items-center gap-3 roudend-x1 px-4 py-3 text-sm text-gray-500 hover:bg-[#F4F5F0]">
                    <Settings size={19} />
                    Configurações
                </button>
            </div>

        </aside>
    )
}

export default Sidebar