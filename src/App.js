import { Header } from "./components/Header"
import { Services } from "./components/Services"
import { Promo } from "./components/Promo"
import { Map } from "./components/Map"
import { FaqComponent } from "./components/FaqComponent"
import { Fleet } from "./components/Fleet"
import { Footer } from "./components/Footer"

export const App = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto px-4 sm:px-2">
                <Services/>
                <Promo/>
                <Fleet/>
                <Map/>
                <FaqComponent/>
            </div>
            <Footer/>
        </>
    )
}