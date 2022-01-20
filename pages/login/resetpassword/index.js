import LoginLayout from "../../../components/auth/LoginLayout"

export default function ResetPassPage() {
    return (
        <>
        <h1>Reset  Password</h1>
            
        </>
    )
}


ResetPassPage.getLayout = function getLayout(page) {
    return (
        <LoginLayout>{page}</LoginLayout>
    )
  }
