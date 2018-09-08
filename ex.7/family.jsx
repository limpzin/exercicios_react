import React from 'react'

export default props => (
    <div> 
        <h1>Família</h1>
        {/* {...props} é um clone da propriedade pai, para nao passar direto pois é uma má pratica!! */}
        {React.cloneElement(props.children, {...props})}
    </div>
)