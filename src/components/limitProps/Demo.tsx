import Vehicle from './type'
export default function Demo(props: Vehicle) {
  return <div>
    <p>name: {props.name}</p>
    <p>speed: {props.speed}</p>
    {
      props.maxHeight ? (
        <p>maxHeight: {props.maxHeight}</p>
      ) : ('')
    }
    {
      props.displacement ? (
        <p>displacement: {props.displacement}</p>
      ) : ('')
    }
  </div>;
}