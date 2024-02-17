import { useRouteError } from "react-router-dom";


const ShowError = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops...!!!</h1>
      <h2>Something went Wrong...!</h2>
      <h3 style = {{color:"red"}}>{err.data}</h3>
      <h3 style = {{color:"red"}}>{err.status }</h3>
      <h3 style = {{color:"red"}}>{err.statusText}</h3>
    </div>
  )
}

export default ShowError;