import React from 'react'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Like from '../imgfeature/Like';
const products = [
  {
    id: 1,
    userName:'jhon doe',
    userImage:'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    prompt:'making a fucking dick that looks like a kaivalya',
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    userName:'jhon doe',
    userImage:'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    prompt:'making a fucking dick that looks like a kaivalya',
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    userName:'jhon doe',
    userImage:'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    prompt:'making a fucking dick that looks like a kaivalya',
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    userName:'jhon doe',
    userImage:'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    prompt:'making a fucking dick that looks like a kaivalya',
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    userName:'jhon doe',
    userImage:'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    prompt:'making a fucking dick that looks like a kaivalya',
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    userName:'jhon doe',
    userImage:'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    prompt:'making a fucking dick that looks like a kaivalya',
    price: '$35',
    color: 'Black',
  },
  {
    id: 1,
    userName:'jhon doe',
    userImage:'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg',
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    prompt:'making a fucking dick that looks like a kaivalya',
    price: '$35',
    color: 'Black',
  },
  // More products...
]

export default function Allcollection() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="mt-4 flex justify-between">
                <div className='flex justify-between'>
                  <span ><img src={product.userImage} className='rounded-full h-7 w-7 mr-3 mb-3'></img></span>
                  <span className="text-sm text-gray-700">
                    <p>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.userName}
                    </p>
                  </span>
                </div>
              </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4">
                <div><Like like={false}></Like></div>
                <div>
                  <h3 className="text-sm text-gray-700">
                    {product.prompt}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
