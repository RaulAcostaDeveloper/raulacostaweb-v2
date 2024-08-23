'use client'
import { useState } from "react";
import { LoadingView } from "../LoadingView/LoadingView";

interface Props {
    src: string;
    children: React.ReactNode;
}

export const VideoContainer = ({src, children}: Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const handleLoaded = () => {
        setIsLoading(false);
    }
    return (
        <div className="videoContainerStyle">
        { isLoading && <LoadingView/> }
        <iframe
            className="iframeVideo"
            src={ src }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded YouTube Video"
            onLoad={ handleLoaded }></iframe>
            <div className="infoVideo">
                {children}
            </div>
    </div>
    )
}