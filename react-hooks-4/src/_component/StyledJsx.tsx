import classes from "../_styles/CssModule.module.scss"

export const StyledJsx = () => {
  return (
    <div className={classes.container}>
      <button className={classes.button}>jsx ボタン</button>
    </div>
  )
}