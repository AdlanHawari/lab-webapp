import Link from "next/link";
import { useEffect, useState } from "react";
import LoginLayout from "/components/auth/LoginLayout"
import Body1 from "/components/small/typography/Body1";
import Button from "/components/small/button_fixed/Button";
import Input from "/components/small/input/Input"
import { MyLink } from "components/general/MyLink";

export default function ForgotPassPage() {
    const [email, setEmail] = useState('');
    const [reqSent, setreqSent] = useState(false);

    return (
        <>
            <h1 className="pb-3.5">Lupa Password</h1>

            <Body1 className="">
                {!reqSent ?
                "Masukkan Email yang anda gunakan di bawah ini, kami akan mengirimkan link untuk merubah password."
                :
                "Terimakasih, email perubahan password telah kami kirimkan ke Email. Silahkan cek Inbox atau Spam."
                }
            </Body1>

            {!reqSent ?
                    <div className="">

                        <form className="pt-11 pb-3 block space-y-20" action="">

                            <Input  type="email" placeholder="Masukkan email anda" id="email" state={email} setState={setEmail}/>

                            <Button type="primary_default"
                            disabled={false}
                            onClick={(e)=>setreqSent(!reqSent)}
                            >Ubah Password</Button>
                        </form>
                    </div>
                    :
                    <div className="pt-11 pb-40">

                    </div>
            }   

            <MyLink href='/login'>
                <div className="">
                    <Button type="secondary_default">Kembali ke halaman awal</Button>
                </div>

            </MyLink>
            {/* <Link href='/login'>
                <div className="">
                    <Button type="secondary_default">Kembali ke halaman awal</Button>
                </div>
                
            </Link> */}
        </>
    )
}


ForgotPassPage.getLayout = function getLayout(page) {
    return (
        <LoginLayout>{page}</LoginLayout>
    )
  }
