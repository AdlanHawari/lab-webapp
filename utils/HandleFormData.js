export default function handleFormData(objects){
    let formData = new FormData();
      for (let item in objects){
        formData.append(item, objects[item])
      }
    return formData
}