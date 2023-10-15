import MetaHeader from "./Header";

export default function LayoutComp(props: { children: any }) {
  return (
    <>
      <MetaHeader title={"Unwind | Speak freely"} />
      {props.children}
    </>
  );
}
