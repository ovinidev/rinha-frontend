import dynamic from "next/dynamic";
const ReactJsonView = dynamic(() => import("react-json-view"), { ssr: false });

interface ReactJsonProps {
  data: object;
}

export function ReactJson({ data }: ReactJsonProps) {
  return (
    <ReactJsonView
      src={data}
      name={false}
      iconStyle="circle"
      collapsed={1}
      style={{ width: "100%", fontSize: "1rem" }}
    />
  );
}
