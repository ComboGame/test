import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {

    return (
        <footer className="bg-[#0B0B0F] pb-[75px] pt-[287px] mt-[272px] px-[25px] xl:px-0">
            <div className="mx-auto w-full max-w-screen-xl pt-6">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 flex flex-col items-center space-y-[35px] md:space-y-0 md:items-start justify-between">
                        <a href="/" className="flex items-center">
                            <Image
                                src="/Logo.svg"
                                className="h-[52px] me-[25px]"
                                width={52}
                                height={52}
                                quality={100}
                                alt="Главная"
                                priority={true}
                            />
                            <span className="flex flex-col items-start justify-start">
                                <span
                                    className="self-center text-[36px] font-semibold leading-none whitespace-nowrap">BOX<span
                                    className="text-[#B8B8FF]">CMS</span></span>
                                <span
                                    className="self-start text-base font-normal leading-none whitespace-nowrap">by BOX STUDIO</span>
                            </span>

                        </a>
                        <div className="text-base font-normal text-[#FFFFFF]/75 text-center md:text-left leading-none space-y-[5px]">
                            <p>Платформа для монетизации игровых серверов.</p>
                            <p>© 2020 - 2024. Все права защищены. 0+</p>
                        </div>

                    </div>
                    <div>
                        <ul className="text-[#FFFFFF] font-medium md:block flex flex-col items-center">
                            <div className="flex space-x-[15px] md:space-x-0 md:block">
                                <li>
                                    <Link href="#" className="py-[5px] md:py-[10px] hover:underline flex items-center">
                                        <Image
                                            src="/footer1.svg"
                                            className="h-[20px] me-[5px] md:me-[15px]"
                                            width={20}
                                            height={20}
                                            quality={100}
                                            alt="Главная"
                                            priority={true}
                                        />
                                        Контакты
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="py-[5px] md:py-[10px] hover:underline flex items-center">
                                        <Image
                                            src="/footer2.svg"
                                            className="h-[20px] me-[5px] md:me-[15px]"
                                            width={20}
                                            height={20}
                                            quality={100}
                                            alt="Главная"
                                            priority={true}
                                        />
                                        Документы
                                    </Link>
                                </li>
                            </div>
                            <li>
                                <Link href="#" className="py-[5px] md:py-[10px] hover:underline flex items-center">
                                    <Image
                                        src="/footer3.svg"
                                        className="h-[20px] me-[5px] md:me-[15px]"
                                        width={20}
                                        height={20}
                                        quality={100}
                                        alt="Главная"
                                        priority={true}
                                    />
                                    Оплата банковскими картами
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="py-[5px] md:py-[10px] hover:underline flex items-center">
                                    <Image
                                        src="/footer4.svg"
                                        className="h-[20px] me-[5px] md:me-[15px]"
                                        width={20}
                                        height={20}
                                        quality={100}
                                        alt="Главная"
                                        priority={true}
                                    />
                                    Мобильные платежи
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </footer>

    );
}
