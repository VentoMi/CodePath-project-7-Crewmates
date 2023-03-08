import React from 'react';
import Event from './Event';
import '../index.css';

const Board = () =>{
    return (
        <div className='Board'>
        <Event title='The Baltimore Waltz' date=' 23 March 2023' img_src='baltimoreWaltz.jpg' img_alt='Baltimore Waltz' link='https://events.williams.edu/event/theatre-honors-performance-eddie-wolfson-23/all/' />
        <Event title='Pizza Friday' date=' 03 March 2023' img_src='PizzaFriday.jpg' img_alt='Pizza Friday' link='https://events.williams.edu/event/theatre-pizza-fridays/2023-05-05/' />
        <Event title='AreaD' date=' 03 March 2023' img_src='AreaD.jpg' img_alt='AreaD' link='https://events.williams.edu/event/theatre-honors-performance-lour-yasin-23/2023-03-03/' />
        <Event title='Witchcraft On Our Lips' date=' 04 March 2023' img_src='WitchcraftOnOurLips.jpg' img_alt='Witchcraft On Our Lips' link='https://events.williams.edu/event/theatre-honors-performance-vanessa-silva-23/all/' />
        <Event title='Master Class: Percussionist James' date=' 7 March 2023' img_src='mclassperc.jpg' img_alt='Master Class: Percussionist James.jpg' link='https://events.williams.edu/event/master-class-percussionist-james-belk/2023-03-07/' />
        <Event title='Pizza Friday' date=' 10 March 2023' img_src='PizzaFriday.jpg' img_alt='Pizza Friday' link='https://events.williams.edu/event/theatre-pizza-fridays/2023-03-10/' />
        <Event title='Theatre performance: The Shakuntala Project' date=' 04 May 2023' img_src='Shakuntala.jpg' img_alt='Theatre performance: The Shakuntala Project' link='https://events.williams.edu/?tribe_event_display=day&tribe-bar-date=2023-05-04' />
        <Event title='Middle Eastern Music Ensemble' date=' 04 May 2023' img_src='mee.png' img_alt='Middle Eastern Music Ensemble' link='https://events.williams.edu/?tribe_event_display=day&tribe-bar-date=2023-05-04' />
        <Event title='Visiting Artist: Soloedad Barrio & Noche Flamenca' date=' 8 April 2023' img_src='CenterSeries.jpg' img_alt='Visiting Artist: Soloedad Barrio & Noche Flamenca' link='https://events.williams.edu/event/visiting-artist-soloedad-barrio-noce-flamenca/' />
        <Event title='Concert Choir' date=' 05 May 2023' img_src='ConcertChoir.jpg' img_alt='Concert Choir' link='https://events.williams.edu/event/concert-choir-chamber-choir-16/' />
        <Event title='Dance performance: PACHEDU Spring All Ensembles with Zambezi Marimba Band' date=' 11 May 2023' img_src='Zambezi.jpg' img_alt='Zambezi.jpg' link='https://events.williams.edu/event/dance-performance-pachedu-spring-all-ensembles-with-zambezi-marimba-band/2023-05-11/' />
       
        </div>
    )
}

export default Board;