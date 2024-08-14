import { hello } from "@burzomir/color-mode-detector";

type HelloProps = {
  children: string;
};

export default function Hello(props: HelloProps) {
  return <h1>{hello(props.children)}</h1>;
}
