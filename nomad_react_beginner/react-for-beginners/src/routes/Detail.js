import {useParams} from "react-router-dom"

export default function Detail() {
  const x = useParams();
  console.log(x);
  
  return (
    <h1>Detail</h1>
  )
}
