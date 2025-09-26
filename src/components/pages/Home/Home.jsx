import IMG from "../../../assets/img/screen-0.webp";
import { Link } from "react-router";
import {
  Section,
  Content,
  Title,
  Description,
  BuyButton,
  ImageWrapper,
} from "./Home.Styled";

const Home = () => {
  return (
    <Section>
      <Content>
        <Title>
          Explore Shopedia
          <br />
          with
          <span>Real-Time Data</span>
        </Title>

        <Description>
          Discover details about every country around the Shopedia
          <br />
          from capitals to regions!
        </Description>

        {/* لینک خرید */}
        <Link to="/products">
          <BuyButton>Buy now</BuyButton>
        </Link>
      </Content>

      <ImageWrapper>
        <img src={IMG} alt="Shopedia Screen" />
      </ImageWrapper>
    </Section>
  );
};

export default Home;
