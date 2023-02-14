import "./SectionWrapper.css"
const SectionWrapper = (props) => {
  return (
    <div className='section-wrapper'>
        <div className='section-header'>
            {props.title}
        </div>
            
            {props.children}
        
        </div>
  )
}

export default SectionWrapper