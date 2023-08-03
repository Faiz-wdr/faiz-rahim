import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience } from './data';
import './Timeline.css';

function Timeline() {
  return (
    <div className='timeline'>
    <div className='timeline-cntn'>
        <VerticalTimeline
        className='vertical-timeline-custom-line'>
   {
    Experience && Experience.map(n => (
      <VerticalTimelineElement
      key={n.id}
      className="vertical-timeline-element--work"
    contentStyle={{ background: '#121212', color: '#888888', boxShadow: 'none', borderBottom: '5px solid #222222'}}
    contentArrowStyle={{ borderRight: '7px solid  #121212' }}
    date={n.date}
    iconStyle={{ background: '#020202', color: '#888888' }}
    icon={n.iconsSrc}
    
  >
    <h3 className="vertical-timeline-element-title title">{n.title}</h3>
    <h4 className="vertical-timeline-element-subtitle location">{n.location}</h4>
    <p className='timline-description'>
      {n.description}
    </p>
  </VerticalTimelineElement>
    )) 
   }

 </VerticalTimeline>
 </div>
    </div>
  )
}

export default Timeline