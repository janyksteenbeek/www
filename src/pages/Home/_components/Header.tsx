export default function Header() {
    const currentDate = new Date();
    const age = (currentDate.getFullYear() - 1999) - (currentDate.getMonth() > 8 || (currentDate.getMonth() === 8 && currentDate.getDate() >= 15) ? 0 : 1);

    return (
        <header className="py-6 flex items-center justify-between px-6 gap-6">
            <div>
                <h1 className="text-3xl lg:text-4xl font-bold animate-fade-in font-clash">
                    Janyk Steenbeek
                </h1>
                <p className="text-sm lg:text-lg mt-2 opacity-0 animate-fade-in [animation-delay:_0.2s] lg:w-3/4">{age} year
                    old
                    full-stack developer &amp; security engineer
                    from Groningen, NL</p>
            </div>
            <img src="https://avatars.githubusercontent.com/u/3578636?v=4" alt="Janyk Steenbeek"
                 className="lg:w-32 lg:h-32 w-24 h-24 rounded-full border-4 border-white shadow-lg opacity-0 border-opacity-20 animate-fade-in [animation-delay:_0.2s]"/>
        </header>
    );
};