import classes from "../_styles/CssModule.module.scss"

export const CssModule = () => {
  return (
    <div className={classes.container}>
      <button className={classes.button}>ボタン</button>
    </div>
  )
}