import Header from '@/shared/widgets/Header'
import Banner from './elements/Banner'
import Branding from './elements/Branding'
import FeatureHighlight from './elements/FeatureHighlight'
import Benifits from './elements/Benifits'
import Pricing from './elements/Pricing'
import Footer from '@/shared/widgets/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Branding />
            <Benifits />
            <FeatureHighlight />
            <Pricing />
            <Footer />
        </div>
    )
}

export default Home