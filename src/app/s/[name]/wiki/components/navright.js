
export default function NavRight({ title, link }) {
    return (
        <li>
            <a
                className="grid cursor-pointer items-center justify-start rounded-lg px-3 py-2 text-left transition text-zinc-600 dark:text-zinc-300  hover:bg-zinc-100 dark:hover:bg-zinc-800 ml-7"
                href={`#${link}`}>
                <div className="col-start-2">{title}</div>
            </a>
        </li>
    );
}