import { ProductCard } from '@/components/utils/ProductCard'
import { products } from '@/app/data/products'

export function Products() {
  return(
    <div id='produtos' className="md:w-full bg-circles bg-cover"> {/*bg tela com gradiente*/}
      <section></section>
      {/* Texto inicial */}
      <div data='prod-text' className="flex flex-col gap-2 justify-center items-center mx-6 my-8">
        <p className="text-lg font-light text-amber-400">
          Produtos
        </p>

        <h3 className="text-xl text-center md:text-3xl text-white">
          Escolha o <span className="font-medium text-amber-400">produto ideal</span> para as suas necessidades
        </h3> 
      </div>

      {/* Cards */}
      <div className='flex justify-center items-center my-8'>
        <div className={`
          grid grid-cols-1 gap-8 mx-auto justify-center items-center
          md:grid-cols-2 
          lg:grid-cols-3 lg:gap-x-28 lg:gap-y-16 
        `}>
          <ProductCard key={products[0].id} item={products[0]} />
          <ProductCard key={products[1].id} item={products[1]}/>
          <ProductCard key={products[2].id} item={products[2]}/>
          <div className='hidden lg:block'/>
          <ProductCard key={products[3].id} item={products[3]}/>
          
          {/* {products.map(product => {
            return <ProductCard key={product.id} item={product}/>
          })} */}
        </div>
      </div>
    </div>
  )
}