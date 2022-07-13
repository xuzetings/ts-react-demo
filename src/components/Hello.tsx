type HelloProps = {
  name: string;
}

export default function Hello(props: HelloProps) {
  return <div>Hello, {props.name}</div>;
}