'use client'
import Image from "next/image"
export const GlobalShareInSocialMedia = () => {

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    const getCurrentUrl = (): string => {
        // return 'https://www.raulacostadeveloper.com/dev' // para probar en desarrollo
        return window.location.href;
    }
    const shareOnFacebook = () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getCurrentUrl())}`;
        openInNewTab(url);
    }
    const shareOnTwitter = () => {
        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(getCurrentUrl())}`;
        openInNewTab(url);
    }
    const shareOnLinkedIn = () => {
        const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(getCurrentUrl())}`;
        openInNewTab(url);
    }
    return (
        <div className="globalShareInSocialMedia" title="Click to share">
            <h5>¡Comparte!</h5>
            <button onClick={shareOnFacebook} title="share in facebook">
                <Image src={'/images/redes/facebook.png'} width={32} height={32} alt="facebook" />
            </button>
            <button onClick={shareOnTwitter} title="share in twitter (x)">
                <Image src={'/images/redes/twitter.png'} width={32} height={32} alt="twitter" />
            </button>
            <button onClick={shareOnLinkedIn} title="share on linkedin">
                <Image src={'/images/redes/linkedin.png'} width={32} height={32} alt="twitter" />
            </button>
        </div>
    )
}