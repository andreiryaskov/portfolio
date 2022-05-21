import React from 'react';
import Slide from 'react-reveal/Slide';

const Description = ({description}) => {
    return (
        <Slide left>
            {description}
        </Slide>
    )
};

export default Description;