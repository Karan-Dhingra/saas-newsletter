import { partners } from '@/app/configs/constants'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const Branding = () => {
    return(
        <div className="border-t border-b border-[#000] py-10">
            <h3 className="uppercase text-xl md:text-2xl text-center max-w-3xl mx-auto font-[400] z-20 relative">CREATED BY THE EARLY MORNING BREW TEAM</h3>

            <div className="w-full text-center pt-1">
                <h3 className="uppercase bg-[#F091DD] rounded p-2 text-xl md:text-2xl text-center inline-block">
                    NOW POWERING THE WORLD&pos;S TOP NEWSLETTERS
                </h3>
            </div>

            <Marquee className="w-full flex justify-around" style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                {partners.map((i:PartnersTypes, index: number) => (
                    <>
                        <Image src={i.url} alt='partner-image' key={i.url} width={200} height={200} className="md:mx-8 w-[150px] md:w-[180px] mx-3" />
                    </>
                ))}
            </Marquee>
        </div>
    )
}

export default Branding