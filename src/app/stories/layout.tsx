export default function StoriesLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <section className="py-16">
        {/* {props.modal} */}
        <div className="container mx-auto">{props.children}</div>
      </section>
    </>
  );
}
