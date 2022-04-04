import FormData from "form-data";
import { useAuth } from "hooks/useAuth"

export default function test() {
    // const auth = useAuth();
    // const dataForm = {
    //     username : "mrseptian",
    //     password : "woofer060395"
    // }
    let formData = new FormData();
    //   for (let item in dataForm){
    //     console.log(item, dataForm[item])
    //     formData.append(item, dataForm[item])
    //   }

    formData.append("username", "mrseptian")
    formData.append("password", "woofer060395")

      const handleLogin = () => {
        var requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
          };

        fetch("http://api.play1.musagreen.com/login", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      }


  return (
    <div>test login
        <button onClick={handleLogin}> Login</button>
    </div>
  )
}
