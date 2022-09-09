export default function GetToken(){
    let token
    if (typeof window !== 'undefined') {
        token = localStorage.getItem(`${process.env.NEXT_PUBLIC_LOCAL_TOKEN_KEY}`)
    }
    return token
}