import React, { useState, useEffect } from 'react'

// CSS imports
import '../ProjectCSS/main.css'
import '../ProjectCSS/searchResult.css'
import '../ProjectCSS/searchInput.css'

// Defining 'ResultDisplay' component
import ResultDisplay from './ResultDisplay'

// Image import
import placeholder from '../images/cc.png'


const Main = () => {
    const [img, setImg] = useState("");
    const [res, setRes] = useState([]);

    // To set limit on initial display
    const [limit, setLimit] = useState(4)


    // Fetching the data from Unsplash API
    const fetchRequest = async () => {
        const data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=AbIP5mbwoShwlGu6BS45uZWdvwB_-DB8vNUd95_e3EM&per_page=50`)
        const dataJ = await data.json()
        const result = dataJ.results
        console.log(result)
        setRes(result)

    };

    useEffect(() => {
        fetchRequest();
    }, []);


    // Function to fetch results and empty the search field
    const onSubmit = () => {
        fetchRequest();
        setImg("");
    };



    // To prevent reloding
    const onFormSubmit = e => {
        e.preventDefault();
    }

    return (

        // main enclosing div
        <div className='main'>

            {/* Main title */}
            <h2 className='m-0'><b>Unsplash Image Search App</b></h2>


            {/* Section for search field (input) and search button */}
            <form className='searchInput' onSubmit={onFormSubmit}>

                {/* Search field (input) */}
                <input type='text' name='photoSearch' placeholder='Type anything and hit enter...' value={img} onChange={(e) => setImg(e.target.value)} />

                {/* Search button */}
                <button type='submit' className='defaultButton' onClick={onSubmit}>
                    <i className="fal fa-search"></i> &nbsp;
                    <span>Search</span>
                </button>
            </form>



            {/* Section where the search result is shown */}
            <div className='searchResult'>
                <div className='resultDisplay'>

                    {/* Images are displayed in grid format */}
                    <div className='viewGrid'>

                        {/* If data exists, then the data are mapped */}
                        {res.length != 0 ?
                            <div className="row" >
                                {res && res.slice(0, limit).map((val) => (

                                    // Component split up in a different page
                                    <ResultDisplay key={val.id} item={val} />
                                ))}
                            </div>


                            // If data does not exist, then placeholder texts and image are shown
                            : <center className='text-muted'>
                                <img src={placeholder} alt='placeholder_img'></img><br />
                                <span>Search something to see results</span>
                            </center>
                        }
                    </div>


                    {/* Section to show view more button */}
                    <div className='viewMore'>
                        {res.length > limit &&
                            <center>

                                {/* View more button */}
                                <button type='button' className='defaultButton' onClick={() => setLimit(limit + 4)}>
                                    <i className="fal fa-arrow-down"></i> &nbsp;
                                    <span>View More</span>
                                </button>
                            </center>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main