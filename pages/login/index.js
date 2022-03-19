import classNames from "classnames";
import Link from "next/link";
import { Fragment, useState } from "react"
import LoginLayout from "/components/auth/LoginLayout"
import Body1 from "/components/small/typography/Body1";
import Button from "/components/small/button_fixed/Button";
import Input from "/components/small/input/Input";
import { MyLink } from "components/general/MyLink";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return(
      <>
        <h1 className="pb-9">Log In</h1>

        <form action="" className="">
            <div className="pb-5">
                {/* <label htmlFor="email"></label> */}
                <Input type="email" placeholder="Email" id="email" state={email} setState={setEmail}/>

            </div>

            <div>
                {/* <label htmlFor="email"></label> */}
                <Input type="password" placeholder="Password" id="password" state={password} setState={setPassword}/>
                {/* <input type="password" 
                className= {
                    (classNames
                        (
                          "form-input w-full p-2.5 rounded-xl text-xs border-solid border-2 border-grey-300",
                          password == "" ? "text-grey-500" : "text-black-500"
                        )
                    )
                }
                name="password" id="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" /> */}
            </div>

            {/* <Button disabled={false} primary={true} neutral={false}>Log In</Button> */}

            <div className="py-8">
              <Button disabled={false} buttonStyle={"primary_default"}>Log In</Button>
            </div>

            {/* <button className="block w-full rounded text-white font-semibold bg-primary">Login</button> */}
        </form>

        <div className="flex w-full justify-center">
          <MyLink href="/login/forgotpassword">
            <div className="">
              <Body1 className="text-primary-darken15 cursor-pointer">Lupa Pasword?</Body1>
            </div>

          </MyLink>
          {/* <Link href="/login/forgotpassword">
            <div className="">
              <Body1 className="text-primary-darken15 cursor-pointer">Lupa Pasword?</Body1>
            </div>
            
          </Link> */}
        
        </div>

      </>
        // <div className="block relative w-full h-full bg-primary">
        //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi rem est excepturi. Libero amet ut adipisci, at provident culpa nisi aliquam consequuntur voluptatem, sequi incidunt itaque accusantium perspiciatis debitis. Voluptatem eveniet officia repellendus voluptas hic. Consectetur neque, molestias voluptatibus vero voluptatem harum sequi aut, incidunt quisquam, unde laborum expedita reiciendis delectus eligendi minus omnis ullam consequuntur fuga quasi? Distinctio, accusamus pariatur, autem quas maiores ab adipisci inventore iusto vitae, eius ea porro beatae doloremque aliquam officia? Error illum eos quidem rerum magnam voluptatum voluptatibus labore voluptatem totam corrupti, et dolorem officiis dolores obcaecati placeat doloremque ex eaque officia laboriosam eum.
        // </div>
  )
}

LoginPage.getLayout = function getLayout(page) {
  return (
      <LoginLayout>{page}</LoginLayout>
  )
}
