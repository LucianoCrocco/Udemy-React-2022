import { Fragment } from 'react'
import { GifGridItem } from './GifGridItem';
import {useFetchGifs} from "../hooks/useFetchGifs"

export function GifGrid ({category}) {

  const {data:images, loading} = useFetchGifs(category);
    return(
      <Fragment>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading</p>}
        <section className='card-grid'>
          {
            images.map(img => {
              return <GifGridItem key={img.id} {...img} />
            })
          }
        </section>
      </Fragment>
    );
}