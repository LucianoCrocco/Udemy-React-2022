//import React, {useState, useEffect} from 'react'
import { Fragment } from 'react'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
import {useFetchGifs} from "../hooks/useFetchGifs"

export function GifGrid ({category}) {
/*
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category)
    .then(imgs => setImages(imgs));
  },[category]);
*/

  const {data:images, loading} = useFetchGifs(category);
  //

    return(
      <Fragment>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate__animated animate__flash">Loading</p>}
        <section className='card-grid'>
          {
            images.map(img => {
              return <GifGridItem key={img.id} {...img} />
            })
          
          /*
            images.map(img => {
              return <GifGridItem key={img.id} {...img} />
            })*/
          }
        </section>
      </Fragment>
    );
}
/*
import React, {useState, useEffect} from 'react'
import { Fragment } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export function GifGrid ({category}) {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category)
    .then(imgs => setImages(imgs));
  },[category]);

    return(
      <Fragment>
        <h3>{category}</h3>
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

*/