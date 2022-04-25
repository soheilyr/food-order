import classes from "./MealsSummary.module.css";
const MealsSummary = () => {
  console.log(classes);
  return (
    <section className={classes.summary}>
      <h2>Delicious food Delivered To You</h2>
      <p>
        choose your favorite meal from our brand Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ullam eaque eveniet ipsa iusto soluta.
      </p>
      <p>
        Libero dolorum dolor labore quidem. Aspernatur magnam nihil beatae, aut
        et quas numquam ab accusamus necessitatibus.
      </p>
    </section>
  );
};

export default MealsSummary;
