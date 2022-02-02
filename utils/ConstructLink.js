export default function constructLink(path, direction){
    const text = path.split("/");
    // console.log(text)
    return text[0]+"/"+text[1]+direction
  }