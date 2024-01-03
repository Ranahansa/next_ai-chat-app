import React from 'react'
import Card from '../components/card/Card'






const BlogPage = () => {
    return (
        <div>
            <div>
                <p className='pt-5 text-4xl font-bold'>Latest Posts</p>
                <div className='grid content-start grid-cols-3 gap-5 m-8'>
            <Card
            img = "/post1.jpeg"
            topic="Noteworthy Technology Acquisitions 2021"
            title="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order"/>
            
            <Card
            img = "/post2.jpeg"
            topic="Exploring the Future of AI in Healthcare"
            title="Discover the latest advancements and challenges in the integration of artificial intelligence in the healthcare sector."/>

            <Card
            img = "/post3.jpeg"
            topic="10 Tips for Effective Remote Work Collaboration"
            title="Enhance your remote work experience with these valuable tips for effective collaboration and communication."/>
            
            
        </div>
            </div>
        </div>

    )
}

export default BlogPage