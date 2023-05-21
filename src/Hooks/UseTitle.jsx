import { useEffect } from "react"

const UseTitle =title=>{
useEffect(()=>{
    document.title=`RobotToyStore | ${title}`

},[title])
}
export default UseTitle;