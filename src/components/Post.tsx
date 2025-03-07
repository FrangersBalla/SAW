import React from 'react';

export default function PostItem(){
    //ogni post sarà dotato di titolo, img + descrzione(opzionale)/messaggio(audio/di testo), commenti, like
     const item = [
      { title: 'slurp', content: '/images/avatar/1.jpg', key: 0, description: 'Developer from NYC' },
      { title: 'guy', content: '/images/avatar/1.jpg', key: 1, description: 'Designer from LA' },
      { title: 'siuuu', content: '/images/avatar/2.jpg', key: 2, description: 'Artist from Berlin' },
    ];
    return(
      {item}
    )
}