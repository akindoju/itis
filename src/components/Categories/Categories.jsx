import React from "react";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__heading">
        <h1>Our Many Varieties</h1>
        <div className="categories__heading--btns">
          <button>All Products</button>
          <button>Drinks</button>
          <button>Snacks</button>
          <button>Swallow</button>
          <button>Fruits</button>
        </div>
      </div>

      <div className="categories__grid">
        <div className="categories__grid--item">
          <div className="categories__grid--item--hovered">
            <div className="categories__grid--item--search">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>search</title>
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
            </div>

            <div className="categories__grid--item--btns">
              <button>Add To Cart</button>

              <div className="categories__grid--item--heart">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>Add to Wishlist</title>
                  <path d="M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="categories__grid--item--percent">-20%</div>
          <div className="categories__grid--item--new">New</div>
          <div className="categories__grid--item--img categories__grid--item--img-1" />
          <h1>Pancake</h1>
          <h4>
            <span>₦9,000</span>
            ₦5,500
          </h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--hovered">
            <div className="categories__grid--item--search">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>search</title>
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
            </div>

            <div className="categories__grid--item--btns">
              <button>Add To Cart</button>

              <div className="categories__grid--item--heart">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>Add to Wishlist</title>
                  <path d="M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="categories__grid--item--img categories__grid--item--img-2" />
          <h1>Burger and Chips</h1>
          <h4>₦7,500</h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--hovered">
            <div className="categories__grid--item--search">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>search</title>
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
            </div>

            <div className="categories__grid--item--btns">
              <button>Add To Cart</button>

              <div className="categories__grid--item--heart">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>Add to Wishlist</title>
                  <path d="M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="categories__grid--item--percent">-20%</div>
          <div className="categories__grid--item--img categories__grid--item--img-3" />
          <h1>Assorted Fruits</h1>
          <h4>
            <span>₦9,000</span>
            ₦6,000
          </h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--hovered">
            <div className="categories__grid--item--search">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>search</title>
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
            </div>

            <div className="categories__grid--item--btns">
              <button>Add To Cart</button>

              <div className="categories__grid--item--heart">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>Add to Wishlist</title>
                  <path d="M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="categories__grid--item--percent">-20%</div>
          <div className="categories__grid--item--new">New</div>
          <div className="categories__grid--item--img categories__grid--item--img-4" />
          <h1>Tasty Pastries</h1>
          <h4>
            <span>₦13,000</span>
            ₦8,000
          </h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--hovered">
            <div className="categories__grid--item--search">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>search</title>
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
            </div>

            <div className="categories__grid--item--btns">
              <button>Add To Cart</button>

              <div className="categories__grid--item--heart">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>Add to Wishlist</title>
                  <path d="M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="categories__grid--item--percent">-20%</div>
          <div className="categories__grid--item--new">New</div>
          <div className="categories__grid--item--img categories__grid--item--img-5" />
          <h1>Steak</h1>
          <h4>
            <span>₦15,000</span>
            ₦10,000
          </h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--hovered">
            <div className="categories__grid--item--search">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>search</title>
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
            </div>

            <div className="categories__grid--item--btns">
              <button>Add To Cart</button>

              <div className="categories__grid--item--heart">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>Add to Wishlist</title>
                  <path d="M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="categories__grid--item--img categories__grid--item--img-6" />
          <h1>Soup</h1>
          <h4>₦3,500</h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--hovered">
            <div className="categories__grid--item--search">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>search</title>
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
            </div>

            <div className="categories__grid--item--btns">
              <button>Add To Cart</button>

              <div className="categories__grid--item--heart">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>Add to Wishlist</title>
                  <path d="M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="categories__grid--item--percent">-20%</div>
          <div className="categories__grid--item--new">New</div>
          <div className="categories__grid--item--img categories__grid--item--img-7" />
          <h1>Pasta</h1>
          <h4>
            <span>₦5,000</span>
            ₦4,500
          </h4>
        </div>

        <div className="categories__grid--item">
          <div className="categories__grid--item--hovered">
            <div className="categories__grid--item--search">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <title>search</title>
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
            </div>

            <div className="categories__grid--item--btns">
              <button>Add To Cart</button>

              <div className="categories__grid--item--heart">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>Add to Wishlist</title>
                  <path d="M20.133 5.317c0.88 0.881 1.319 2.031 1.319 3.184s-0.44 2.303-1.319 3.182l-8.133 8.133-8.133-8.133c-0.879-0.879-1.318-2.029-1.318-3.183s0.439-2.304 1.318-3.183 2.029-1.318 3.183-1.318 2.304 0.439 3.183 1.318l1.060 1.060c0.391 0.391 1.024 0.391 1.414 0l1.062-1.062c0.879-0.879 2.029-1.318 3.182-1.317s2.303 0.44 3.182 1.319zM21.547 3.903c-1.269-1.269-2.934-1.904-4.596-1.905s-3.327 0.634-4.597 1.903l-0.354 0.355-0.353-0.353c-1.269-1.269-2.935-1.904-4.597-1.904s-3.328 0.635-4.597 1.904-1.904 2.935-1.904 4.597 0.635 3.328 1.904 4.597l8.84 8.84c0.391 0.391 1.024 0.391 1.414 0l8.84-8.84c1.269-1.269 1.904-2.934 1.905-4.596s-0.634-3.327-1.905-4.598z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="categories__grid--item--percent">-20%</div>
          <div className="categories__grid--item--img categories__grid--item--img-8" />
          <h1>Soft Drinks</h1>
          <h4>
            <span>₦3,000</span>
            ₦3,500
          </h4>
        </div>
      </div>

      <div className="categories__viewMore">
        <button>View More</button>
      </div>
    </div>
  );
};

export default Categories;
