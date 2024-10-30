/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Image from "next/image";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import Products from "@/components/landing_component/product";
import Header from "@/components/navbar/Header";
import Slider from "@/components/landing_component/slider";

import Link from "next/link";


const index = () => {


  const category = [
    {
      id: 1,
      title: "compare",
      image: "/assets/images/audi.png",
      link: "#"
    }
    , {
      id: 2,
      title: "newCars",
      image: "/assets/images/bmw.png",
      link: "#"
    }
    , {
      id: 3,
      title: "usedCars",
      image: "/assets/images/kia.png",
      link: "#"
    }
    , {
      id: 4,
      title: "news",
      image: "/assets/images/volk.png",
      link: "#"
    }
  ];




  return (
    <>
      {/*=============== HEADER ===============*/}

      <main className="main">
        <Header />

        <Slider />
        {/*=============== SPONSOR ===============*/}
        <section className="sponsor section">
          <div className="sponsor__container container grid">
            {
              category.map((item) => (
                <div key={item.title} className="flex flex-col justify-center items-center">
                  <div className="w-48 h-48  overflow-hidden  rounded-full">
                    <Image src={item.image} alt={item.title} className="object-center" width={192} height={192} />
                  </div>
                  <h3 className="sponsor__title absolute mt-20 text-gray-600 text-2xl font-semibold  tracking-wide uppercase">
                    {item.title}</h3>
                </div>
              ))
            }
          </div>
        </section>

        {/*=============== mercedes car description  ===============*/}
        <section className="specs section grid" id="specs">
          <h2 className="section__title section__title-gradient">
            Mercedes
          </h2>
          <div className="specs__container container grid">
            <div className="specs__content grid">
              <div className="specs__data">
                <i className="ri-plug-line specs__icon" />
                <h3 className="specs__title">
                  Germany comp
                </h3>
                <span className="specs__subtitle">

                  text                </span>
              </div>

              <div className="specs__data">
                <i className="ri-plug-line specs__icon" />
                <h3 className="specs__title">
                  text </h3>
                <span className="specs__subtitle">
                  text              </span>
              </div>




            </div>
            <div>

              <Image src="/assets/images/2.png" alt="" width={300}  // Actual width of the image
                height={200} />
            </div>
          </div>
        </section>
        {/*=============== bmw describe ===============*/}
        <section className="case section grid" id="case">
          <h2 className="section__title section__title-gradient">
            text
          </h2>
          <div className="specs__container container grid">
            <div>
              <Image src="/assets/images/3.png" alt="" width={300}  // Actual width of the image
                height={200} />
            </div>
            <div className="case__data">
              <p className="case__description">
                text
              </p>
          
            </div>
          </div>
        </section>
        {/*=============== Tesla ===============*/}
        <section className="discount section">
          <div className="discount__container container grid">
            <div className="discount__animate">
              <h2 className="discount__title text-white">
                Tesla
              </h2>
              <p className="discount__description text-white">
                Model 3
              </p>
              <a href="#" className="button button--flex">
                <i className="ri-shopping-bag-line button__icon" />
                Tesla model 3 is the most selling car for the Tesla company 
                now you can get it with the best price
              </a>
            </div>
            <Image src="/assets/images/4.png" width={300}   // Specify actual width in pixels
              height={200} // Specify actual height in pixels
              alt="" />
          </div>
        </section>
        {/*=============== PRODUCTS ===============*/}
        <Products />
      </main>
      {/*=============== FOOTER ===============*/}
      <footer className="footer section">
        <div className="footer__container container grid">
          <a href="#" className="mx-4">

            <Image src="/assets/images/logo.png" className="w-40 h-40 object-contain" alt="" width={300}  // Actual width of the image
              height={200} />
          </a>
          <div className="footer__content">
            <h3 className="footer__title">
              text
            </h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  طبق
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  کاسات
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  ملاعق
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  سكاكين
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <h3 className="footer__title">
              Category            </h3>
            <ul className="footer__links">
              <li>

                <a href="#" className="footer__link">
                </a>

              </li>
              {category.map((item) => {
                return (
                  <li key={item.id}>

                    <a href="#" className="footer__link">
                      {item.title}
                    </a>

                  </li>
                );
              })}

            </ul>
          </div>
          <div className="footer__content">
            <form action="" className="footer__form">
              <input type="email" placeholder="Email" className="footer__input" />
              <button className="button button--flex">
                <i className="ri-send-plane-line button__icon" /> يشترك
              </button>
            </form>
            {/* when click button send email to this mail  */}

            <div className="footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="footer__social-link"
              >
                <FiFacebook />

              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="footer__social-link"
              >
                <FiInstagram />


              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="footer__social-link"
              >
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>
        <p className="footer__copy">
          <a
            href="https://www.youtube.com/c/Bedimcode/"
            target="_blank"
            className="footer__copy-link"
          >
            all right reserved by carshow.live © 2024
          </a>
        </p>

        <Link href="/privacy_policy"
        >
          <p className="flex justify-center underline">
privacy-policy
          </p>
        </Link>
      </footer>
      {/*=============== SCROLL UP ===============*/}
      <a href="#" className="scrollup" id="scroll-up">
        <i className="ri-arrow-up-s-line scrollup__icon" />
      </a>
   

    </>

  );
};

export default index;
