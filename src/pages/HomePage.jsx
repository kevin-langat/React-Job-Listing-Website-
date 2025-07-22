import HeroSection from '../components/hero-section';
import HomeCards from './../components/home-cards';
import JobsListing from './../components/jobs-listing';

function HomePage() {
  return (
    <>
      <HeroSection
        HeroTitle='Become a React Developer Now'
        HeroSubtitle=<p>
          Find the React job that fits your skill set or hire a react <br />
          developer that can deliver you a quality project
        </p>
      />
      <HomeCards
        DevCardtTitle='For Developers'
        DevCardtInfo='Browse our React jobs and start your career today'
      />
      <JobsListing isHome={true} />
    </>
  );
}

export default HomePage;
