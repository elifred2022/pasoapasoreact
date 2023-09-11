import { getImageUrl } from "./Utils";

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profileprops() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
      />
      <Avatar size={80} person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }} />
      <Avatar size={80} person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} />
    </div>
  );
}
