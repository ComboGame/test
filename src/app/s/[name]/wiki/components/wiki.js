import Image from 'next/image'

export function Title({ content }) {
    return (
        <div className="grid items-center justify-start lg:justify-between gap-4 lg:grid-flow-col w-full">
            <h1 className="font-inter text-white text-3xl font-bold tracking-tight">
                {content}
            </h1>
        </div>
    );
}

export function H3({ content, id }) {
    return (
        <h3 id={id} className="scroll-mt-40 text-xl font-bold lg:scroll-mt-24 not-prose group lg:-ml-6 lg:grid lg:grid-cols-[auto_1fr] lg:items-center lg:justify-start lg:gap-2">
            <a className="-m-1.5 hidden p-1.5 opacity-0 transition lg:block focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0 text-zinc-800 dark:text-zinc-200 hover:text-schalker-purple dark:hover:text-schalker-purple" href={`#${id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
            </a>
            {content}
            <a className="-mb-0.5 inline-block opacity-0 transition group-hover:opacity-100 lg:hidden" href={`#${id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
            </a>
        </h3>
    );
}

export function H2({ content, id }) {
    return (
        <h2 id={id} className="scroll-mt-40 text-xl font-bold lg:scroll-mt-24 not-prose group lg:-ml-6 lg:grid lg:grid-cols-[auto_1fr] lg:items-center lg:justify-start lg:gap-2">
            <a className="-m-1.5 hidden p-1.5 opacity-0 transition lg:block focus-visible:opacity-100 group-hover:opacity-100 motion-safe:translate-x-2 motion-safe:focus-visible:translate-x-0 motion-safe:group-hover:translate-x-0 text-zinc-800 dark:text-zinc-200 hover:text-schalker-purple dark:hover:text-schalker-purple" href={`#${id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
            </a>
            {content}
            <a className="-mb-0.5 inline-block opacity-0 transition group-hover:opacity-100 lg:hidden" href={`#${id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
            </a>
        </h2>
    );
}

export function CustomImage({ src, width, height }) {
    return (
        <figure className="grid place-items-center rounded-xl bg-zinc-100/50 p-2 dark:bg-zinc-800/50 md:p-6">
            <div className="relative grid">
                <Image src={src} className="transition duration-500 [grid-area:1/1] opacity-1 max-w-full w-auto h-auto rounded-lg my-0" width={width} height={height} style={{ color: "transparent" }} alt="Wiki Schalker Image" />
            </div>
        </figure>
    );
}