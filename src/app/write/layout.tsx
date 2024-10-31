import { FotoBanner } from "@/Components/FotoBanner/FotoBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <FotoBanner imageName="3" title="Mis escritos" />
            {children}
        </>
    )
}