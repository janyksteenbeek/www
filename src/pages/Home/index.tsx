import {GlassCard} from "../../components/glass-card";
import {Blob} from "../../components/blob";
import RevSplit from "../../assets/revsplit_white.svg"
import Webmethod from "../../assets/webmethod_white.svg"
import SocialLinks from "./_components/SocialLinks";
import About from "./_components/About";
import Header from "./_components/Header";
import Quote from "./_components/Quote";
import Footer from "./_components/Footer";

export function Home() {
    return (
        <>
            <Blob className="opacity-15 blur-2xl absolute top-0 left-0 w-full h-full"/>

            <div className="max-w-4xl grid gap-4 p-8">
                <GlassCard>
                    <Header/>
                </GlassCard>

                <div className="grid lg:grid-cols-2 gap-4 opacity-0 animate-fade-in">
                    <div className="flex flex-col gap-4">
                        <GlassCard className="py-14 flex items-center justify-between px-6">
                            <Quote/>
                        </GlassCard>
                        <GlassCard className="py-6 font-light px-6 text-sm">
                            <SocialLinks/>
                        </GlassCard>
                    </div>
                    <div className="flex flex-col gap-4">
                        <GlassCard className="py-6 flex flex-col items-center gap-4 font-light px-6 text-sm">
                            <About/>
                        </GlassCard>
                        <div className={"grid grid-cols-2 gap-4"}>
                            <GlassCard className="p-5 flex items-center justify-center">
                                <a href="https://www.revsplit.net/?ref=janyk" target="_blank" rel="noopener noreferrer">
                                    <img src={RevSplit} alt="RevSplit" className="w-32"/>
                                </a>
                            </GlassCard>
                            <GlassCard className="p-6 flex items-center justify-center">
                                <a href="https://www.webmethod.nl/?ref=janyk" target="_blank" rel="noopener noreferrer">
                                    <img src={Webmethod} alt="Webmethod" className="w-32"/>
                                </a>
                            </GlassCard>
                        </div>
                    </div>
                </div>
                <div class="opacity-0 animate-fade-in [animation-delay:_0.2s]">
                    <Footer/>
                </div>
            </div>
        </>
    );
}