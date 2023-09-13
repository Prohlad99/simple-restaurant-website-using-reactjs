import { Helmet } from 'react-helmet-async';
import img from '../../assets/contact/banner.jpg';
import ContactForm from '../../components/contact/form/ContactForm';
import Location from '../../components/contact/location/Location';
import Banner from "../../components/shared/banner/Banner";
import MenuHeader from '../../components/shared/menuHeader/MenuHeader';
const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Contact</title>
      </Helmet>
      <Banner
        bgImg={img}
        heading="CONTACT US"
        text="Would You Like To Try A Dish?"
        size="text-4xl"
      />
      <MenuHeader title="Visit Us" subtitle="Our Location" />
      <Location />
      <MenuHeader title="Send Us a Message" subtitle="CONTACT FORM" />
      <ContactForm />
    </div>
  );
}

export default Contact
