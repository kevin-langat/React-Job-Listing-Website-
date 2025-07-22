import '../index.css';

function HeroSection({ HeroTitle, HeroSubtitle }) {
  return (
    <div className='hero-section'>
      <div className='hero-content'>
        <h2>{HeroTitle}</h2>
        {HeroSubtitle}
      </div>
    </div>
  );
}

export default HeroSection;
