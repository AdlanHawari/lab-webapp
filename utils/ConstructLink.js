export default function constructLink(path, direction){
    const text = path.split("/");
    return text[0]+"/"+text[1]+direction
  }