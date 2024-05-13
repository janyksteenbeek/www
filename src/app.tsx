import {Blob} from "./components/blob.tsx";
import {GlassCard} from "./components/glass-card.tsx";
import RevSplit from "./assets/revsplit_white.svg"
import Webmethod from "./assets/webmethod_white.svg"
import LinkedIn from "./components/icons/LinkedIn.tsx";
import X from "./components/icons/X.tsx";
import Instagram from "./components/icons/Instagram.tsx";
import GitHub from "./components/icons/GitHub.tsx";

export function App() {
    const dateOfBirth = new Date('1999-01-17');
    const age = Math.floor((new Date().getTime() - dateOfBirth.getTime()) / 3.15576e+10);

    return (
        <>
            <Blob className="opacity-15 blur-2xl absolute top-0 left-0 w-full h-full"/>

            <div className="max-w-4xl grid gap-4 p-8">
                <GlassCard>
                    <header className="py-6 flex items-center justify-between px-6 gap-6">
                        <div>
                            <h1 className="text-3xl lg:text-4xl font-bold animate-fade-in font-clash">Janyk
                                Steenbeek</h1>
                            <p className="text-sm lg:text-lg mt-2 opacity-0 animate-fade-in [animation-delay:_0.2s] lg:w-3/4">{age} year
                                old
                                full-stack developer &amp; security engineer
                                from Groningen, NL</p>
                        </div>
                        <img src="https://avatars.githubusercontent.com/u/3578636?v=4" alt="Janyk Steenbeek"
                             className="lg:w-32 lg:h-32 w-24 h-24 rounded-full border-4 border-white shadow-lg opacity-0 border-opacity-20 animate-fade-in [animation-delay:_0.2s]"/>
                    </header>
                </GlassCard>

                <div className="grid lg:grid-cols-2 gap-4 opacity-0 animate-fade-in [animation-delay:_0.4s]">
                    <div className="flex flex-col gap-4">
                        <GlassCard className="py-14 flex items-center justify-between px-6">
                            <p className="font-medium">
                                <span className="text-xl">&ldquo;</span>
                                I am extremely passionate about web development and design in all its forms. Why?
                                Just because I love to see how you can change the world with just a few lines of code.
                                You can do whatever you want, there are no limits.<span
                                className="text-xl">&rdquo;</span>
                            </p>
                        </GlassCard>
                        <GlassCard
                            className="py-6 font-light px-6 text-sm group">
                            <div className="flex gap-4 items-center justify-center">
                                <a href="https://www.linkedin.com/in/janyksteenbeek" target="_blank"
                                   rel="noopener noreferrer">
                                    <LinkedIn className="w-7 h-7"/>
                                </a>
                                <a href="https://x.com/janyksteenbeek" target="_blank" rel="noopener noreferrer">
                                    <X className="w-7 h-7"/>
                                </a>
                                <a href="https://instagram.com/janyk" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="w-7 h-7"/>
                                </a>
                                <a href="https://github.com/janyksteenbeek" target="_blank" rel="noopener noreferrer">
                                    <GitHub className="w-7 h-7"/>
                                </a>
                            </div>
                        </GlassCard>
                    </div>
                    <div className="flex flex-col gap-4">
                        <GlassCard className="py-6 flex flex-col items-center gap-4 font-light px-6 text-sm">
                            <p>
                                I currently work as a Full-Stack Web Developer at
                                the <a href="https://www.rug.nl/gmw" target="_blank" rel="noopener noreferrer"
                                       class="underline">
                                University of Groningen</a>, supporting researchers at the Faculty of Behavioural
                                and Social
                                Science.
                            </p>
                            <p>
                                I also run my company <a href="https://webmethod.nl" className="underline">Webmethod</a>,
                                a software and security
                                agency which provides tailored development and security services. I'm also active as
                                white-hat hacker at major Fortune 500 companies.
                            </p>
                            <p class="text-xs">Before that, I grew Alveum, a YouTube
                                MCN, to 70+ premium creators and &euro;1.5 mln annually. Its tech now lives under the <a
                                    href="https://www.revsplit.net">RevSplit</a> umbrella</p>

                        </GlassCard>
                        <div className={"grid grid-cols-2 gap-4"}>
                            <GlassCard className="p-5 flex items-center justify-center">
                                <a href="https://www.revsplit.net" target="_blank" rel="noopener noreferrer">
                                    <img src={RevSplit} alt="RevSplit" className="w-32"/>
                                </a>
                            </GlassCard>
                            <GlassCard className="p-6 flex items-center justify-center">
                                <a href="https://www.webmethod.nl" target="_blank" rel="noopener noreferrer">
                                    <img src={Webmethod} alt="Webmethod" className="w-32"/>
                                </a>
                            </GlassCard>
                        </div>
                    </div>


                </div>
                <div class="grid grid-cols-4 gap-4 opacity-0 animate-fade-in [animation-delay:_0.6s]">
                    <GlassCard className="w-full py-3 font-light text-sm flex-grow px-4 gap-3 col-span-3">
                        I'm always open for new opportunities and collaborations. If you have a project in mind or
                        just want to chat, feel free to ping me at hello [@] janyksteenbeek.nl
                    </GlassCard>
                    <GlassCard
                        className="w-full py-3 font-light text-sm  px-4 gap-3 col-span-1 flex items-center justify-center">
                        <p className="text-center">Made with ❤️ in 050</p>
                    </GlassCard>
                </div>
            </div>
        </>
    )
}
