import Image from 'next/image'
import login_bg from 'images/loginImage.png'
import sip_logo from 'images/logo.png';

export default function LoginLayout({ children }) {
  return (
        <div className="h-screen w-screen grid grid-cols-2 ">
            <div className="relative flex w-full h-screen" >
                <Image src={login_bg}
                    alt="Login background image"
                    placeholder="blur"
                    objectFit="cover"
                    quality={100}
                    />
                <div className="absolute flex w-auto h-auto top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <div className="space-y-10">
                        <h2 className="text-white text-xl">Selamat Datang di</h2>
                        <h1 className="text-7xl text-white">SIP Lab</h1>
                    </div>
                </div>
            </div>

            <div className="block bg-secondary-100s">
                <div className='px-24 pt-12'>
                    <Image src={sip_logo}
                        alt="SIP Lab Logo image"
                        placeholder="blur"
                        width={207}
                        height={78}
                        quality={100}
                        />
                    <div className='pt-28 block'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}