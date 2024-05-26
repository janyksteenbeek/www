import LinkedIn from "../../../components/icons/LinkedIn";
import X from "../../../components/icons/X";
import Instagram from "../../../components/icons/Instagram";
import GitHub from "../../../components/icons/GitHub";

export default function SocialLinks() {
    const links = [
        {href: "https://www.linkedin.com/in/janyksteenbeek", icon: LinkedIn},
        {href: "https://x.com/janyksteenbeek", icon: X},
        {href: "https://instagram.com/janyk", icon: Instagram},
        {href: "https://github.com/janyksteenbeek", icon: GitHub}
    ];

    return <div className="flex gap-4 items-center justify-center">
        {links.map(({href, icon: Icon}) => <a href={href} target="_blank" rel="noopener noreferrer">
            <Icon className="w-7 h-7"/>
        </a>)}
    </div>;
}