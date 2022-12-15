import React from 'react';

function minutesToRead(minutes){
    const time = minutes < 30 ? 5 : 10;
    const emoji = minutes < 30 ? '☕️' : '🍱';

    let emojis = '';
     for (let i = 0; i < minutes; i += time){
       return emojis += emoji;
    }
     return emojis;
}
function Article( {title, date="January 1, 1970", preview, minutes} ){
    const emojis = minutesToRead(minutes);
    
    return (
    <article>
        <h3>{title}</h3>
        <small>{date} | {emojis} {minutes} min to read </small>
        <p>{preview}</p>
    </article>
    );
}
export default Article;