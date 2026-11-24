import { Bell, Share2, Search } from 'lucide-react'

function Header() {
    return(
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E8E5DC] bg-white px-8 py-5">
            <div>
                <p className="text-sm text-gray-400">
                    Área administrativa
                </p>

                <h2 className="text-x1 font-semibold text-[#536B56]">
                    Olá! Bem-vindo(a) 💚
                </h2>
            </div>

            <div className="flex items-center gap-3">
                <button
                    type="button"
                    aria-label="Notificações"
                    className="rounded-x1 p-2.5 text-gray-500 hover:bg-[#F4F5F0]">
                    <Bell size={20} />
                </button>

                <button
                    type="button"
                    className="flex items-center gap-2 rounded-x1 bg-[#829A83] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#6F896F]">
                    <Share2 size={17} />
                    Compartilhar lista
                </button>
            </div>
        </header>
    )
}

export default Header