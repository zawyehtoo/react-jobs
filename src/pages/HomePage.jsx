import Hero from "../components/Hero"
import Navbar from '../components/Navbar.jsx'
import HomeCard from '../components/HomeCard.jsx'
import JobListings from '../components/JobListings.jsx'
import ViewAllJobs from '../components/ViewAllJobs.jsx'

export default function HomePage(){
    return (
        <>
            <Hero title="Hello world" subtitle="Lorem ispum lorem ispsum lorem ispuslmd"/>
            <HomeCard />
            <JobListings isHome={true}/>
            <ViewAllJobs />
        </>
    )
}