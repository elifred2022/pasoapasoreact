import Avatar from "./Avatar";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profileprops() {
  return (
    <Card>
      <Avatar
        size={400}
        person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
      />
    </Card>
  );
}
