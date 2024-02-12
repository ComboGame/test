import {Title, H2, H3, CustomImage} from "@/app/s/[name]/wiki/components/wiki";


export default function Rules() {
    return (
        <div className="grid gap-12 pt-[4.5rem] lg:grid-cols-[13rem_1fr_11rem] px-2 lg:px-0 lg:grid-rows-none lg:gap-8 xl:grid-cols-[14rem_1fr_12rem]">
            <div className="hidden lg:block"></div>

            <div className="lg:mx-auto">
                <div className="grid items-start pb-12 lg:mt-8 lg:w-[32rem] xl:w-[40rem] 2xl:w-[48rem]">
                    <Title
                        content="Введение"
                    />
                    <div
                        className="prose max-w-full text-lg bg-transparent p-0 text-zinc-200 underline-offset-2 transition decoration-teal-300/50 hover:decoration-teal-400/50">
                        <article>
                            <p>Википедия проекта. На данном сайте, вы сможете найти ответы на все
                                интересующие вами вопросы.</p>
                            <H3
                                content="Впервые на сервере?"
                                id="first-time"
                            />
                            <ul>
                                <li><a href="/rules">Правила сервера</a></li>
                                <li><a href="/wiki/commands">Команды
                                    сервера</a></li>
                                <li><a href="/rules/mods">Разрешённые и запрещённые
                                    модификации</a></li>
                                <li><a href="/wiki/dictionary">Словарь терминов, используемые на
                                    сервере</a></li>
                            </ul>
                            <H3
                                content="Ищете гайды?"
                                id="guides"
                            />

                            <ul>
                                <li><a href="/wiki/start">Гайд по заходу на
                                    сервер</a></li>
                                <li><a href="/wiki/invisibleframes">Гайд по
                                    невидимым рамкам</a></li>
                                <li><a href="/wiki/2fa">Гайд по двухэтапной
                                    аутентификации</a></li>
                            </ul>
                            <H3
                                content="Остались вопросы?"
                                id="questions"
                            />
                            <p>Возможно ответ на ваш вопрос уже есть на странице с часто задаваемыеми вопросами. Если
                                его нет, то вы можете обратиться за помощью к поддержке</p>
                            <CustomImage
                                src="https://cdn.discordapp.com/attachments/1171053488525017189/1204445002378518548/8db6b889c464be4f.png?ex=65d4c1d2&is=65c24cd2&hm=e1d65948a6d535f8ebdb312314774a96ad61880f01c227b27ea834ad66810de3&"
                                width="720"
                                height="400"
                            />
                        </article>
                    </div>
                </div>
            </div>
            <div className="hidden py-8 lg:block select-none">


            </div>
        </div>
    );
}