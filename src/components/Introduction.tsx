import Body from './Body';
import SocialLinks from './SocialLinks';

const Introduction = () => {
  return (
    <Body heading='Lio Qing Yanzhang'>
      <p>
        Age: 19<br />
        Current Education: Undergraduate at the University of Hong Kong<br />
        Nationality: Hong Kong China<br />
        Languages: Chinese (Mandarin &#38; Cantonese), English
      </p>
      <SocialLinks />
    </Body>
  )
};

export default Introduction;