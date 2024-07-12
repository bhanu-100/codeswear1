import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const Navbar = ({ Signout, user, userDetail, Cart, addToCart, removeFromCart, clearCart, SubTotal }) => {
    const ref = useRef();

    const toggleCart = () => {
        const cartRef = ref.current;
        cartRef.classList.toggle('translate-x-full');
        cartRef.classList.toggle('translate-x-0');
    };

    return (
        <header className="bg-white text-pink-600 body-font shadow-sm top-0 z-10 w-full fixed">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <Link href="/" className="flex items-center justify-center md:justify-start">
      <Image src="/logo1.png" alt="Codewear Logo" height={40} width={200} />
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
      <Link href="/tshirts" className="mr-10 hover:text-pink-900">Tshirts</Link>
      <Link href="/caps" className="mr-10 hover:text-pink-900">Caps</Link>
      <Link href="/hoodies" className="mr-10 hover:text-pink-900">Hoodies</Link>
      <Link href="/mugs" className="mr-10 hover:text-pink-900">Mugs</Link>
    </nav>
    {user.value ? (
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="cart inline-flex items-center text-pink-500 border-0 py-1 px-3 focus:outline-none rounded text-2xl mt-4 md:mt-0">
              <BiUserCircle />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-pink-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/myaccount"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      My Account
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/orders"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Orders
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={Signout}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                      )}
                    >
                      Sign Out
                    </button>
                  )}
                </Menu.Item>
                {userDetail.admin && (
                  <>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/admin/addproduct"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Add Product
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/admin/vieworder"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          View Orders
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/admin/addadmin"
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Add Admin
                        </a>
                      )}
                    </Menu.Item>
                  </>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    ) : (
      <Link href="/signIn">
        <button className="flex m-1 text-white bg-pink-500 border-0 py-3 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm">
          Sign In
        </button>
      </Link>
    )}
    <button onClick={toggleCart} className="cart inline-flex items-center text-pink-500 border-0 py-1 px-3 focus:outline-none rounded text-2xl mt-4 md:mt-0">
      <AiOutlineShoppingCart />
    </button>
    <div ref={ref} className="sideCart overflow-y-scroll w-72 h-[100vh] z-50 top-0 right-0 absolute p-10 bg-pink-200 transform transition-transform translate-x-full">
      <button onClick={toggleCart} className="close top-5 right-3 absolute text-2xl text-pink-500">
        <AiFillCloseCircle />
      </button>
      <h2 className="font-bold text-xl">Shopping Cart</h2>
      <ol className="list-decimal font-semibold">
        {Object.keys(Cart).length === 0 && <div className="my-2">Your Cart is Empty!</div>}
        {Object.keys(Cart).map((k) => (
          <li key={k}>
            <div className="item flex my-5">
              <div className="font-semibold w-2/3">
                {Cart[k].name} ({Cart[k].size}/{Cart[k].variant})
              </div>
              <div className="flex items-center justify-center font-semibold w-1/3">
                <AiFillMinusCircle
                  onClick={() => removeFromCart(k, 1, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].variant)}
                  className="text-pink-400 text-xl cursor-pointer"
                />
                <span className="mx-2 text-sm">{Cart[k].qty}</span>
                <AiFillPlusCircle
                  onClick={() => addToCart(k, 1, Cart[k].price, Cart[k].name, Cart[k].size, Cart[k].variant)}
                  className="text-pink-400 text-xl cursor-pointer"
                />
              </div>
            </div>
          </li>
        ))}
      </ol>
      <div className="font-bold text-xl">SubTotal: ₹{SubTotal}</div>
      <div className="flex mt-16">
        <Link href="/checkout">
          <button
            disabled={Object.keys(Cart).length === 0}
            className="disabled:bg-pink-300 flex m-1 text-white bg-pink-500 border-0 py-3 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            <BsFillBagCheckFill className="m-1" /> Checkout
          </button>
        </Link>
        <button
          disabled={Object.keys(Cart).length === 0}
          onClick={clearCart}
          className="disabled:bg-pink-300 flex m-1 text-white bg-pink-500 border-0 py-3 px-2 focus:outline-none hover:bg-pink-600 rounded text-sm"
        >
          Clear Cart
        </button>
      </div>
    </div>
  </div>
</header>

    );
};

export default Navbar;
