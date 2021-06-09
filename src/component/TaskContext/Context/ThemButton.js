import Them from './them'

const ThemButton = (props)=> (
    <Them.Consumer>
        {theme=><div {...props}>Button with theme :{theme}</div>}
    </Them.Consumer>
)

export default ThemButton