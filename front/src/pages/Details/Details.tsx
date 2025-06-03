import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();

  return (<>
    <h2>Details</h2>
    <h3>{id}</h3>
  </>
  )
}

export default Details;