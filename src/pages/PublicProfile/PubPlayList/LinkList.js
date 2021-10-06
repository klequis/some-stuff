import { Link } from "react-router-dom";

const LinkList = ({ list, toPrefix }) => {
  return list.map((l) => {
    const { id, name } = list;
    const toLink = `${toPrefix}${id}`;
    return (
      <p className="pub-li" key={"li" + id}>
        <Link key={id} to={toLink}>
          {name}
        </Link>
      </p>
    );
  });
};

export default LinkList;
