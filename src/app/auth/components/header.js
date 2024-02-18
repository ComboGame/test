import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="py-[40px] absolute w-full top-0 left-0">
            <div className="w-1/2 hedr">
                <div className="">
                    <Link className="flex items-center text-lg font-bold" href="/public">
                        <Image
                            src="/Logo.svg"
                            className="mr-[15px]"
                            width={30}
                            height={30}
                            quality={100}
                            alt="Главная"
                            priority={true}
                        />
                        <p>BOX<span className="text-[#B8B8FF]">CMS</span></p>
                    </Link>
                </div>
            </div>
        </header>
    );
}
