import { useState } from "react";
import LoginLayout from "../../../components/auth/LoginLayout"
import Body1 from "../../../components/small/body/Body1"
import Button from "../../../components/small/button_fixed/Button";
import Input from "../../../components/small/input/Input";

export default function ResetPassPage() {
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmpassword] = useState('');
    const [reqSent, setreqSent] = useState(false);
    return (
        <>
        <h1 className="pb-3.5">Ubah Password</h1>
        <Body1>Ubah password anda. Gunakan minimal 8 karakter, 1 huruf kapital dan 1 angka.</Body1>

        <form className="pt-11 pb-3 block space-y-8" action="">

            <div className="space-y-2.5">
                <Input  type="password" placeholder="Masukkan Password Baru" id="password" state={password} setState={setPassword}/>
                <Input  type="password" placeholder="Konfirmasi Password Baru" id="confirm_password" state={confirm_password} setState={setConfirmpassword}/>

            </div>
            
            <Button type="primary_default"
            disabled={false}
            onClick={(e)=>setreqSent(!reqSent)}
            >Ubah Password</Button>
        </form>
        
            
        </>
    )
}


ResetPassPage.getLayout = function getLayout(page) {
    return (
        <LoginLayout>{page}</LoginLayout>
    )
  }
