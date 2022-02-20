import React, { useState } from 'react';

function() {
    const [name, setName] = useState({ firstName: "", lastName: "" })


    return ( <
        form >
        <
        input type = "text"
        placeholder = 'Enter First Name'
        value = { name.firstName }
        onChange = { e => setName({...name, firstName: e.target.value }) }
        /> <
        input type = "text"
        placeholder = 'Enter Last Name'
        value = { name.lastName }
        onChange = { e => setName({...name, lastName: e.target.value }) }
        /> <
        h2 > Your first name is - { name.firstName } < /h2> <
        h2 > Your last name is - { name.lastName } < /h2> < /
        form > < form >
        <
        input type = "text"
        placeholder = 'Enter First Name'
        value = { name.firstName }
        onChange = { e => setName({...name, firstName: e.target.value }) }
        /> <
        input type = "text"
        placeholder = 'Enter Last Name'
        value = { name.lastName }
        onChange = { e => setName({...name, lastName: e.target.value }) }
        /> <
        h2 > Your first name is - { name.firstName } < /h2> <
        h2 > Your last name is - { name.lastName } < /h2> <
        /form>
    )
}

export default;