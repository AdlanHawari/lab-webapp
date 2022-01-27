// import { useRouter } from "next/router";

export default function UrlSplitter(url){

    // const router = useRouter();

    const text = url.split("/");
    // console.log("splitter: ",text)
    return text
  }