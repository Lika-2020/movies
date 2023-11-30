import React from 'react';

function Movie(props) {
    const {
        Title: title,
        Year: year,
        // eslint-disable-next-line no-unused-vars
        imdbID: id,
        Type: type,
        Poster: poster

    } = props;


    return (
        <div id='id' class="card movie">
        <div class="card-image waves-effect waves-block waves-light">

            {
                poster === 'N/A' ? <img alt='poster' class="activator" src={"data:image/png;base64,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"}/>
                :
                <img alt='poster' class="activator" src={poster}/>
            }

        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year} <span className='right'>{type}</span></p>
        </div>
        <div class="card-reveal">
        
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
                
    )
}

export { Movie };