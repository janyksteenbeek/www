import {PropsWithChildren} from "react";

interface GlassCardProps {
    className?: string
}

export function GlassCard({className, children}: PropsWithChildren<GlassCardProps>) {
    return <div
        className={className + ' rounded-2xl shadow-lg backdrop-blur-lg bg-white bg-opacity-10 border border-white border-opacity-20'}>
        {children}
    </div>
}