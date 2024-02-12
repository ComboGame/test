import Image from 'next/image'

export default function DrawerBtn() {
    return (
        <div className="mt-8 grid lg:hidden">
            <button
                className="grid grid-flow-col items-center justify-center font-medium transition select-none px-7 py-4 gap-3 bg-zinc-100 dark:text-zinc-100 text-zinc-900 ring-1 ring-inset ring-black/15 dark:bg-zinc-700 dark:ring-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dashed outline-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 dark:hover:bg-zinc-750 dark:active:bg-zinc-600 rounded-lg"
                type="button" data-drawer-target="drawer-right" data-drawer-show="drawer-right"
                data-drawer-placement="right" aria-controls="drawer-right">
                <Image
                    src="/drawerbtn.svg"
                    className="w-5 h-5"
                    width={24}
                    height={24}
                    alt="navbar"
                />
                Навигация
            </button>
        </div>
    );
}
