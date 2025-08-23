import React from 'react'
import PropTypes from 'prop-types'

const Blurblob = ({ Position, Size }) => {
    const { top, left } = Position;
    const { width, height } = Size;
    
    return (
        <div 
            className='absolute'
            style={{
                top: top,
                left: left,
                width: width,
                height: height,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div className='w-full h-full bg-purple-500 rounded-full blur-3xl opacity-20 animate-blob'></div>
        </div>
    )
}

Blurblob.propTypes = {
    Position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    Size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string,
    }),
}

export default Blurblob