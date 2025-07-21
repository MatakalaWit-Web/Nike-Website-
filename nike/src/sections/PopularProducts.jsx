import { products } from '../constants';
import PopularProductCard  from '../components/PopularProductCard'; 

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex lex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          our <span className='text-coral-red '>Popular</span>Products
        </h2>
        <p className='lg-max-w-lg mt-2 font-montserrat text-slate-gray'>
          Discover our most popular products that are loved by our customers. From the latest sneakers to stylish apparel, find what suits your style and needs. 
          Whether you're looking for performance gear or everyday wear, our collection has something for everyone. Explore now and elevate your wardrobe with the best from Nike.
        </p>
      

      </div>
      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((product) => (  <PopularProductCard key={product.name}{...product} />))}
         
      </div>

    </section>
  )
}

export default PopularProducts 