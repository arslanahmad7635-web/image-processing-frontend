import React from "react";

function AboutScreenHero() {
  return (
    <section className='w-full relative'>

      <div className="w-9/10 h-60  relative mt-16 flex flex-row justify-center items-center ">
        <div className="mt-4 py-6 px-30 w-5/10 h-40 flex flex-col items-center justify-center leading-7 text-black">
          <p className="font-Poppins text-3xl font-bold ">
            Transforming Pixels Into Insights
          </p>
          <p className="font-Poppins text-md font-normal ">
            We build intuitive image processing solution to enhance, analyze,
            and understand visual data efficiently.
          </p>
        </div>
        <div className=" mt-20 my-10 w-6/10 h-full flex justify-center items-center  ">
          <img
            className=" px-4 py-4 w-1/2 h-full bg-rgb(111, 195, 237) border border-transparent rounded-md"
            src="https://www.aiease.ai/wp-content/uploads/2024/08/enhancing-bird-image-sharpness-and-quality-in-AI-Ease-free-photo-enhancer.webp"
          ></img>
        </div>
      </div>

      <div className="flex items-center w-full mt-7 px-20">
        <div className="flex-1 h-px bg-black"></div>
        <span className="px-4 font-bold font-Poppins text-black text-2xl blackspace-nowrap">
          Who We Are
        </span>
        <div className="flex-1 h-px bg-black"></div>
      </div>

      <div className="mt-7 w-full h-10 flex items-center justify-center">
        <p className="font-Poppins font-medium text-black text-md">
          We are dedicated group of students of Data science from Uet
          Lahore,passionate about creating innovative tools for image anlaysis.
        </p>
      </div>

      <div className="mt-8 flex items-center w-full mt-6 px-20">
        <div className="flex-1 h-px bg-black"></div>
        <span className="px-4 font-bold font-Poppins text-2xl text-black blackspace-nowrap">
          Why This Project Exist
        </span>
        <div className="flex-1 h-px bg-black"></div>
      </div>
      
      <div className="mt-4 w-full h-40 flex flex-row items-center justify-center">

        <div className="w-3/10 h-full flex items-center justify-center">
          <div className="absolute opacity-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              class="injected-svg"
              data-src="https://cdn.hugeicons.com/icons/date-time-solid-standard.svg?v=1.0.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              role="img"
              color="#000000">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17 13.25C14.3766 13.25 12.25 15.3766 12.25 18C12.25 20.6234 14.3766 22.75 17 22.75C19.6234 22.75 21.75 20.6234 21.75 18C21.75 15.3766 19.6234 13.25 17 13.25ZM17.75 16.2656C17.75 15.8514 17.4142 15.5156 17 15.5156C16.5858 15.5156 16.25 15.8514 16.25 16.2656V17.9988C16.25 18.2716 16.3982 18.523 16.6369 18.6551L17.904 19.3562C18.2664 19.5567 18.7228 19.4255 18.9233 19.0631C19.1239 18.7006 18.9926 18.2442 18.6302 18.0437L17.75 17.5567V16.2656Z" fill="#000000"></path>
              <path d="M7.6125 1.25C8.15098 1.25 8.5875 1.68754 8.5875 2.22727V3.20455H15.4125V2.22727C15.4125 1.68754 15.849 1.25 16.3875 1.25C16.926 1.25 17.3625 1.68754 17.3625 2.22727V3.20455H18.825C20.4404 3.20455 21.75 4.51717 21.75 6.13636V12.025C21.75 12.5635 21.3135 13 20.775 13C20.2365 13 19.7999 12.5635 19.7999 12.025V9.75H4.19995V19.8182C4.19995 20.3579 4.63647 20.7955 5.17495 20.7955H11.0227C11.5625 20.7955 12 21.233 12 21.7727C12 22.3125 11.5625 22.75 11.0227 22.75H5.175C3.55957 22.75 2.25 21.4374 2.25 19.8182V6.13636C2.25 4.51717 3.55957 3.20455 5.175 3.20455H6.6375V2.22727C6.6375 1.68754 7.07403 1.25 7.6125 1.25Z"fill="#000000"></path>
            </svg>
          </div>
          <div className="w-30 h-full ">
            <p className="pt-15 flex items-center justify-center font-semibold text-xl text-black font-Montserrat">
              SAVES TIME
            </p>
          </div>
        </div>
        <div className="w-3/10 h-full flex items-center justify-center relative">
          <div className="w-3/10 h-full flex items-center justify-center absolute opacity-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 24 24"
                fill="none"
                class="injected-svg"
                data-src="https://cdn.hugeicons.com/icons/global-search-stroke-standard.svg?v=1.0.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                role="img"
                color="#000000"
              >
                <path
                  d="M11 22C5.94668 21.4983 2 17.1853 2 12C2 6.47715 6.47715 2 12 2C17.1853 2 21.4983 5.94668 22 11"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2"
                  stroke="#000000"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M20.0008 20L22.0008 22M21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17C13 14.7909 14.7909 13 17 13C19.2091 13 21 14.7909 21 17Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
          </div>
              <p className="px-10 py-10 flex items-center justify-center font-semibold text-xl text-black font-Montserrat">
                Reveal Clarity
              </p>
        </div>

        <div className="w-3/10 h-full flex items-center justify-center relative">
          <div className="w-3/10 h-full flex items-center justify-center absolute opacity-40">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 24 24"
                fill="none"
                class="injected-svg"
                data-src="https://cdn.hugeicons.com/icons/gears-solid-rounded.svg?v=1.0.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                role="img"
                color="#fbf8f8ff"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.7507 10.7711C16.5757 10.7499 16.3702 10.7499 16.1776 10.75C15.985 10.7499 15.427 10.7499 15.252 10.7711C15.0486 10.7957 14.7969 10.8572 14.5678 11.0455C14.3359 11.236 14.2278 11.4734 14.167 11.6731C14.1158 11.841 13.9821 12.6311 13.9512 12.8136C13.8215 12.8795 13.6955 12.9514 13.5736 13.029C13.3919 12.962 12.637 12.6836 12.4639 12.6428C12.262 12.5952 12.0044 12.5671 11.7242 12.6646C11.4418 12.7628 11.2574 12.9463 11.1291 13.1126C11.0209 13.2529 10.917 13.43 10.8216 13.5928C10.7288 13.7509 10.4349 14.2518 10.3667 14.4107C10.2864 14.5981 10.2142 14.849 10.2693 15.144C10.3242 15.4378 10.481 15.6456 10.6215 15.7913C10.7417 15.916 11.3771 16.4307 11.5216 16.5477L11.5217 16.9544C11.3772 17.0713 10.7438 17.5844 10.6236 17.7091C10.4831 17.8549 10.3263 18.0627 10.2714 18.3564C10.2163 18.6515 10.2885 18.9023 10.3688 19.0898C10.4369 19.2487 10.7309 19.7496 10.8237 19.9076L10.8237 19.9076L10.8237 19.9077C10.9191 20.0705 11.023 20.2476 11.1312 20.3879C11.2595 20.5541 11.4439 20.7376 11.7263 20.8359C12.0065 20.9334 12.2641 20.9053 12.466 20.8577C12.6391 20.8169 13.3931 20.5388 13.5748 20.4717C13.6963 20.5491 13.8219 20.6207 13.9512 20.6864C13.9821 20.8689 14.1158 21.659 14.167 21.8269C14.2278 22.0266 14.3359 22.264 14.5678 22.4545C14.7969 22.6429 15.0486 22.7044 15.252 22.729C15.427 22.7501 15.9849 22.7501 16.1775 22.75H16.1776C16.3702 22.7501 16.5757 22.7501 16.7507 22.729C16.9541 22.7044 17.2057 22.6429 17.4349 22.4545C17.6667 22.264 17.7748 22.0266 17.8357 21.8269C17.8869 21.659 18.0206 20.8689 18.0514 20.6864C18.1804 20.6209 18.3057 20.5494 18.4269 20.4723C18.6086 20.5394 19.3611 20.8169 19.5341 20.8577C19.7361 20.9053 19.9936 20.9334 20.2739 20.8359C20.5562 20.7376 20.7406 20.5541 20.8689 20.3879C20.9772 20.2476 21.2733 19.7427 21.3688 19.5798C21.4615 19.4218 21.5632 19.2487 21.6313 19.0898C21.7116 18.9023 21.7838 18.6515 21.7287 18.3564C21.6739 18.0627 21.517 17.8549 21.3765 17.7091C21.2563 17.5844 20.6253 17.0733 20.4809 16.9564L20.4809 16.5457C20.6254 16.4288 21.2584 15.916 21.3786 15.7913C21.5191 15.6456 21.6759 15.4378 21.7308 15.144C21.7859 14.849 21.7137 14.5981 21.6334 14.4107C21.5653 14.2518 21.2713 13.7509 21.1785 13.5928C21.0831 13.43 20.9793 13.2529 20.871 13.1126C20.7427 12.9463 20.5583 12.7628 20.2759 12.6646C19.9957 12.5671 19.7381 12.5952 19.5362 12.6428C19.3631 12.6836 18.6098 12.9614 18.4282 13.0285C18.3065 12.9511 18.1808 12.8793 18.0514 12.8136C18.0206 12.6311 17.8869 11.841 17.8357 11.6731C17.7748 11.4734 17.6667 11.236 17.4349 11.0455C17.2057 10.8572 16.9541 10.7957 16.7507 10.7711ZM16 14.75C14.8954 14.75 14 15.6454 14 16.75C14 17.8546 14.8954 18.75 16 18.75C17.1046 18.75 18 17.8546 18 16.75C18 15.6454 17.1046 14.75 16 14.75Z"
                  fill="#000000"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.7507 1.27105C8.57566 1.24988 8.37016 1.24994 8.17756 1.25001C7.98496 1.24994 7.42699 1.24988 7.25195 1.27105C7.04855 1.29566 6.79693 1.35715 6.56779 1.54549C6.33595 1.73604 6.22783 1.97342 6.16696 2.17309C6.11577 2.34103 5.98205 3.13114 5.95122 3.31363C5.82152 3.37952 5.69551 3.45145 5.57357 3.52904C5.3919 3.462 4.63697 3.18359 4.46395 3.14279C4.26198 3.09517 4.00444 3.06705 3.72417 3.16458C3.44182 3.26282 3.25739 3.44635 3.12915 3.61255C3.02086 3.7529 2.91704 3.93001 2.8216 4.09285C2.7288 4.25088 2.43485 4.75176 2.36674 4.91071C2.28642 5.09813 2.21424 5.34895 2.26932 5.64402C2.32417 5.93781 2.48101 6.14556 2.62152 6.29134C2.74169 6.41603 3.37714 6.93073 3.52161 7.04769L3.52171 7.45439C3.37723 7.57135 2.74377 8.08444 2.62361 8.20912C2.4831 8.35491 2.32626 8.56266 2.27141 8.85645C2.21632 9.15152 2.2885 9.40233 2.36882 9.58976C2.43694 9.7487 2.73088 10.2496 2.82368 10.4076L2.82369 10.4076L2.8237 10.4077C2.91914 10.5705 3.02295 10.7476 3.13123 10.8879C3.25948 11.0541 3.44391 11.2376 3.72625 11.3359C4.00653 11.4334 4.26406 11.4053 4.46603 11.3577C4.63906 11.3169 5.39311 11.0388 5.57477 10.9717C5.69634 11.0491 5.82195 11.1207 5.95122 11.1864C5.98205 11.3689 6.11577 12.159 6.16696 12.3269C6.22783 12.5266 6.33595 12.764 6.56779 12.9545C6.79693 13.1429 7.04855 13.2044 7.25195 13.229C7.42699 13.2501 7.98494 13.2501 8.17754 13.25H8.17756C8.37016 13.2501 8.57566 13.2501 8.7507 13.229C8.95409 13.2044 9.20572 13.1429 9.43486 12.9545C9.6667 12.764 9.77482 12.5266 9.83569 12.3269C9.88688 12.159 10.0206 11.3689 10.0514 11.1864C10.1804 11.1209 10.3057 11.0494 10.4269 10.9723C10.6086 11.0394 11.3611 11.3169 11.5341 11.3577C11.7361 11.4053 11.9936 11.4334 12.2739 11.3359C12.5562 11.2376 12.7406 11.0541 12.8689 10.8879C12.9772 10.7476 13.2733 10.2427 13.3688 10.0798C13.4615 9.92179 13.5632 9.7487 13.6313 9.58976C13.7116 9.40233 13.7838 9.15152 13.7287 8.85645C13.6739 8.56266 13.517 8.35491 13.3765 8.20912C13.2563 8.08444 12.6253 7.57333 12.4809 7.45636L12.4809 7.04572C12.6254 6.92875 13.2584 6.41603 13.3786 6.29134C13.5191 6.14556 13.6759 5.93781 13.7308 5.64402C13.7859 5.34895 13.7137 5.09813 13.6334 4.91071C13.5653 4.75176 13.2713 4.25089 13.1785 4.09285C13.0831 3.93001 12.9793 3.7529 12.871 3.61255C12.7427 3.44635 12.5583 3.26282 12.2759 3.16458C11.9957 3.06705 11.7381 3.09517 11.5362 3.14279C11.3631 3.18359 10.6098 3.46141 10.4282 3.52845C10.3065 3.45108 10.1808 3.37935 10.0514 3.31363C10.0206 3.13113 9.88688 2.34103 9.83569 2.17309C9.77482 1.97342 9.66671 1.73604 9.43486 1.54549C9.20572 1.35715 8.9541 1.29566 8.7507 1.27105ZM8 5.25C6.89543 5.25 6 6.14543 6 7.25C6 8.35457 6.89543 9.25 8 9.25C9.10457 9.25 10 8.35457 10 7.25C10 6.14543 9.10457 5.25 8 5.25Z"
                  fill="#000000"
                ></path>
              </svg>

            </div>
            <p className=" px-5 py-6 flex items-center justify-center font-semibold text-xl text-black font-Montserrat">
            Learn By Doing
            </p>
        </div>
      </div>

      <div className="w-full h-200 bg-orange-300 flex items-center justify-center">
        <div className="w-1/2 h-1/2 flex items-center justify-center relative group">
          <span className="w-full h-full absolute backdrop-blur transition-all group-hover:w-0 left-0"></span>
          <img className="w-full h-full" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgo9L_zjW5fvK6lxTLBo42akOhD-BqkwWzBfTB3kusFZ8IhSxptKfGWn9aIrKDL97oFB6-ccjC881sxxzAH1kMS1tgUj_h0hZLU6z0JY4335OXEfr2tgBJwOKUlB_S9IJLdHMQp4I310RHKo2yp0n_aLGCfj8-7fIK60qZFJ6Z_WaOgyv5ZVZsw4255/s1280/1.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default AboutScreenHero;