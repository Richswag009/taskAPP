import classes from "../Card/Card.module.css";
const Card = (parent) => {
  return <div className={classes.card}>{parent.children}</div>;
};
export default Card;
