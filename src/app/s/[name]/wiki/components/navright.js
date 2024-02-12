
export default function NavRight({ title, link }) {
    return (
        <li>
            <a
                className="grid cursor-pointer font-semibold items-center justify-start rounded-lg px-3 py-2 text-left transition text-zinc-600 dark:text-zinc-300 text-base hover:bg-zinc-100 dark:hover:bg-zinc-800 ml-[25px]"
                href={`#${link}`}>
                <div className="col-start-2">{title}</div>
            </a>
        </li>
    );
}