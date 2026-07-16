import { api } from '@/data/api'
import Image from 'next/image'
import Link from 'next/link'

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
  })

  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Home'
}

export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[750px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative flex justify-center col-span-6 row-span-6 rounded-lg bg-[#F9E1E9] overflow-hidden items-center">
        <Image src={highlightedProduct.image}
          className="group-hover:scale-110 transition-transform duration-500"
          width={750}
          height={750}
          quality={100}
          alt="" />
        <div className="absolute bottom-4 right-4 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 borde-zinc-500 bg-white p-1 pl-5 border-black hover:bg-black hover:text-[#fdafcb]">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-[#fdafcb] px-4 font-semibold text-black">{highlightedProduct.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}
          </span>
        </div>
      </Link>

      {otherProducts.map(product => {
        return (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative flex justify-center col-span-3 row-span-3 rounded-lg bg-[#F9E1E9] overflow-hidden items-end">
            <Image src={product.image}
              className="group-hover:scale-110 transition-transform duration-500"
              width={400}
              height={400}
              quality={100}
              alt="" />
            <div className="absolute bottom-4 right-4 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 borde-zinc-500 bg-white p-1 pl-5 border-black hover:bg-black hover:text-[#fdafcb]">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-[#fdafcb] px-4 font-semibold text-black">{highlightedProduct.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
              </span>
            </div>
          </Link>
        )
      })}


    </div>
  )
}