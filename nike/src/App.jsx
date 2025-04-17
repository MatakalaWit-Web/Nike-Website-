import { CustomerReviews, Footer, Hero, Services, SpecialOffers, 
  Subscribe, PopularProducts, SuperQuality } from "./sections";
import Nav from './components/nav'
const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding-x">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-1 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;