// import React from 'react'
// import mapIcon from './images/MapIcon.svg'

import product_01 from '../images/product-01.png'
import product_02 from '../images/product-02.png'
import product_03 from '../images/product-03.png'
import product_04 from '../images/product-04.png'

import adidas from '../images/adidas.svg'
import transparent from '../images/transparent.svg'
import store from '../images/store.png'

import userPic from '../images/user.jpg'

export const data = {
  user: { name: 'john', image: userPic },
  types: [
    {
      id: 1,
      title: 'stores',
      list: [
        {
          id: 1,
          name: 'adidas',
          logo: adidas,
          transparent: transparent,
          location: { lat: 30.195345299999997, lng: 31.329883599999997 },
          branch: 'Genena mall branch',
          products: [
            {
              id: 1,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_01,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: null,
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 1,
              pickup: 'genena mall',
            },
            {
              id: 2,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_02,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 3,
              pickup: 'genena mall',
            },
            {
              id: 3,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_03,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
            {
              id: 4,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_04,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 2,
              pickup: 'genena mall',
            },
          ],
          store: {
            title: 'adidas genena mall',
            logo: adidas,
            bg: store,
            url: '',
          },
        },
        {
          id: 2,
          name: 'adidas',
          logo: adidas,
          transparent: transparent,
          location: { lat: 30.162345299999997, lng: 31.489883599999997 },
          branch: 'Genena mall branch',
          products: [
            {
              id: 1,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_01,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '20%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
            {
              id: 2,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_02,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '75%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
            {
              id: 3,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_03,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
            {
              id: 4,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_04,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
          ],
          store: {
            title: 'adidas genena mall',
            logo: adidas,
            bg: store,
            url: '',
          },
        },
        {
          id: 3,
          name: 'adidas',
          logo: adidas,
          transparent: transparent,
          location: { lat: 30.838345299999997, lng: 31.869883599999997 },
          branch: 'Genena mall branch',
          products: [
            {
              id: 1,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_01,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
            {
              id: 2,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_02,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
            {
              id: 3,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_03,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
            {
              id: 4,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_04,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
          ],
          store: {
            title: 'adidas genena mall',
            logo: adidas,
            bg: store,
            url: '',
          },
        },
        {
          id: 4,
          name: 'adidas',
          logo: adidas,
          transparent: transparent,
          location: { lat: 31.000045299999997, lng: 31.989883599999997 },
          branch: 'Genena mall branch',
          products: [
            {
              id: 1,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_01,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
            {
              id: 2,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_02,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
            {
              id: 3,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_03,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
            {
              id: 4,
              title:
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
              image: product_04,
              price: {
                symbol: 'LE',
                oldPrice: 9.999,
                discount: '50%',
                currentPrice: 9.999,
              },
              brand: {
                title: 'adidas',
                img: adidas,
                slogan: 'Famous adidas products coming straight from the UK',
              },
              description:
                'Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.',
              category: {
                title: 'fashion',
                text: 'keep up with the latest fashion trends',
                img: '',
              },
              store: { title: 'adidas', img: store },
              rate: 4,
              pickup: 'genena mall',
            },
          ],
          store: {
            title: 'adidas genena mall',
            logo: adidas,
            bg: store,
            url: '',
          },
        },
      ],
    },
    {
      id: 2,
      title: 'products',
      list: [
        {
          id: 1,
          name: 'levis',
          logo: '',
          location: { lat: 30.062345299999997, lng: 31.479883599999997 },
        },
        {
          id: 2,
          name: 'levis',
          logo: '',
          location: { lat: 30.062345299999997, lng: 31.479883599999997 },
        },
        {
          id: 3,
          name: 'levis',
          logo: '',
          location: { lat: 30.062345299999997, lng: 31.479883599999997 },
        },
        {
          id: 4,
          name: 'levis',
          logo: '',
          location: { lat: 30.062345299999997, lng: 31.479883599999997 },
        },
      ],
    },
  ],
}
