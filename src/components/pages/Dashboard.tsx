import {
    Package,
    Gift,
    CheckCircle2,
    Plus,
} from "lucide-react"
import Sidebar from "../layout/Sidebar.tsx";
import Header from "../layout/Header.tsx";
import SummaryCard from "../dashboard/SummaryCard.tsx";

const recentItems = [
    {
        name: 'Body Manga Curta',
        category: 'Roupinhas',
        quantity: 5,
        status: 'Pendente',
    },
    {
        name: 'Carrinho de Bebê',
        category: 'Passeio',
        quantity: 1,
        status: 'Reservado',
    },
    {
        name: 'Toalha com Capuz',
        category: 'Higiene',
        quantity: 4,
        status: 'Adquirido',
    },
]

function Dashboard() {
    return(
        <div className="flex min-h-screen bg-[#F7F6F1]">
            <Sidebar />

            <main className="min-w-0 flex-1">
                <Header />

                <div className="p-8">
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2x1 font-semibold text-[#536B56]">
                                Visão Geral do Enxoval
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                Acompanhe os preparativos para a chegada do Ezequiel.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="flex items-center gap-2 rouded-x1 bg-[#829A83] px-5 py-3 text-sm font-medium text-white hover:bg-[#6F896F]">
                            <Plus size={18} />
                            Adicionar Produto
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                        <SummaryCard
                            title="Total de produtos"
                            value={45}
                            description="Itens cadastrados"
                            icon={Package}
                            color="bg-[#E5EDE3] text-[#829A83]" />

                        <SummaryCard
                            title="Adquiridos"
                            value={18}
                            description="Itens já conquistados"
                            icon={CheckCircle2}
                            color="bg-[#E7F0E8] text-green-700" />

                        <SummaryCard
                            title="Reservados"
                            value={12}
                            description="Presentes escolhidos"
                            icon={Gift}
                            color="bg-[#F4EBDD] text-[#B18A5A]" />

                        <SummaryCard
                            title="Pendentes"
                            value={15}
                            description="Itens que ainda faltam"
                            icon={Package}
                            color="bg-[#F3E7E2] text-[#B17D68]" />
                    </div>

                    <div className="mt-8 rounded-2x1 border border-[#E8E5DC] bg-white p-6 shadow-sm">
                        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <h2 className="text-lg fonte-semibold text-{#536B56]">
                                    Produtos do Enxoval
                                </h2>

                                <p className="text-sm text-gray-400">
                                    Acompanhe os últimos itens cadastrados.
                                </p>
                            </div>

                            <button className="text-sm font-medium text-[#829A83] hover:underline">
                                Ver todos
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                <tr className="border-b border´[#E8E5DC] text-gray-400">
                                    <th className="px-4 py-3 font-medium">Produto</th>
                                    <th className="px-4 py-3 font-medium">Categoria</th>
                                    <th className="px-4 py-3 font-medium">Quantidade</th>
                                    <th className="px-4 py3 font-medium">Status</th>
                                </tr>
                                </thead>

                                <tbody>
                                {recentItems.map((item) => (
                                    <tr
                                    key={item.name}
                                    className="border-b border-[#F1EFEA] last:border-0">
                                        <td className="px-4 py3 font-medium text-gray-700">
                                            {item.name}
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">
                                            {item.category}
                                        </td>
                                        <td className="px-4 py-4 text-gray-500">
                                            {item.quantity}
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="roundede-full bg-[#F0F3EC] px-3 py-1 text-xs font-medium text-[#657D66]">
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard