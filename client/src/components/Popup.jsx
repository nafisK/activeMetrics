import React from 'react'

function Popup(props) {
    return props.trigger ? (
        <div class='w-96 h-3/5 bg-gray-100 rounded'>
            <div class='relative p-8 w-full max-w-xl bg-white-100 mt-10'>
                <button
                    className='absolute font-bold text-red-500 top-4 right-4 '
                    onClick={() => props.setTrigger(false)}
                >
                    Close
                </button>
                {props.children}
            </div>
        </div>
    ) : (
        ''
    )
}

export default Popup
