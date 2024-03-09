import Header from '@/shared/widgets/Header'
import Banner from './features/Banner'
import Branding from './features/Branding'
import FeatureHighlight from './features/FeatureHighlight'
import Benifits from './features/Benifits'
import Pricing from './features/Pricing'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Branding />
            <Benifits />
            <FeatureHighlight />
            <Pricing />
        </div>
    )
}

export default Home