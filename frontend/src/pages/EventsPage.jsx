import React from 'react'
import Header from '../components/Layout/Header'
import EventsCard from '../components/Events/EventCard'

const EventsPage = () => {
    return (
        <div>
            <Header activeHeading={4} />
            <EventsCard active={true}/>
            <EventsCard active={true}/>
        </div>
    )
}

export default EventsPage