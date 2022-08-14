
export default function XRayDetector(targetString) {
    if(targetString.includes("X-Ray")|| targetString.includes("x-ray")){
        return "X-Ray Stasioner 200 mA"
    }
    else{
        return "-"    
    }
    
}
