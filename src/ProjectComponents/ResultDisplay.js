import React from 'react'

// CSS imports
import '../ProjectCSS/resultDisplay.css'



const ResultDisplay = (props) => {

    // object destructuring
    const { alt_description, urls, likes } = props.item


    return ( 
        <div className='col-md-6 col-lg-4 col-xl-3 mb-4'>

            {/* Bootstrap 'Card' component for ease of use */}
            <div className='card'>
                <img src={urls.regular} className='card-img-top' alt={alt_description} />


                <div className='card-body text-center p-3'>
                    <p className='card-title text-capitalize'>{alt_description}</p>

                    <small className='text-muted'>
                        <i className='fad fa-heart'></i> &nbsp;
                        {likes} (likes)
                    </small>
                </div>
            </div>
        </div>
    )
}

export default ResultDisplay