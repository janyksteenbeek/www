interface BlobProps {
    className?: string
}

export function Blob({className}: BlobProps) {
    function randomLightColor() {
        return 'hsl(' + Math.floor(Math.random() * 360) + ', 100%, 60%)'
    }


    return <svg className={className + ' w-64 max-h-screen blur-3xl'} viewBox="0 0 310 350">
        <defs>
            <linearGradient id="background-gradient" x1="0%" y1="0%" x2="100%" y2="40%">
                <stop offset="0%" style={'stop-color:' + randomLightColor() + ';stop-opacity:1'}/>
                <stop offset="100%" style={'stop-color:' + randomLightColor() + ';stop-opacity:1'}/>
            </linearGradient>
        </defs>
        <path fill="url(#background-gradient)"
              d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
    </svg>
}