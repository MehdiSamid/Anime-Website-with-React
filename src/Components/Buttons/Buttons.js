import "./Buttons.css"

const PrimaryButton = (props) => {
  return (
    <div className=" button btn-pri">
      <a href={props.link}>{props.children}</a>
        </div>
  )
}

const SecondaryButton = (props) => {

  return (
    <div className=" button btn-sec">
      <a href={props.link}>{props.children} </a>
    </div>
  )
}

export default PrimaryButton
export {SecondaryButton}