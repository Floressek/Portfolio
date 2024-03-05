import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox-next'
import {PaletteTree} from './palette'
import RootLayout from "@/app/layout";
import PortfolioPage from "@/app/portfolio/page";
import Navbar from "@/components/navbar";
import Homepage from "@/app/page";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/RootLayout">
                <RootLayout/>
            </ComponentPreview>
            <ComponentPreview path="/PortfolioPage">
                <PortfolioPage/>
            </ComponentPreview>
            <ComponentPreview path="/Navbar">
                <Navbar/>
            </ComponentPreview>
            <ComponentPreview path="/Homepage">
                <Homepage/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews