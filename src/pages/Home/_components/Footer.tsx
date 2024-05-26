import {GlassCard} from "../../../components/glass-card";

export default function Footer() {
    return <>
        <GlassCard className="w-full py-3 font-light text-sm flex-grow px-4 gap-3 col-span-3">
            I'm always open for new opportunities and collaborations. If you have a project in mind or
            just want to chat, feel free to ping me at hello [@] janyksteenbeek.nl
        </GlassCard>
        <GlassCard
            className="w-full py-3 font-light text-sm  px-4 gap-3 col-span-1 flex items-center justify-center">
            <p className="text-center">Made with ❤️ in 050</p>
        </GlassCard>
    </>
}