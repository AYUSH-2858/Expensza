import React from 'react'
import home from '../assets/home.png'
import { Link } from 'react-router-dom'

const Landing = ({setIsloginPage}) => {
    const user = localStorage.getItem("expensza-user")
   
  return (
    <>
    <div className='bg-background h-screen'>
      <nav className='text-black flex justify-between items-center pt-8 px-10'>
        <div>
          <h1 className='text-2xl font-bold'>Expensza</h1>
        </div>
        <div className='flex gap-5  font-semibold'>
            {!user?(<><Link to={"/auth"} onClick={()=>{setIsloginPage(true)}} className='outline-none border-none'>
          <button className=' border-2 px-8 py-3 rounded-full hover:text-background hover:bg-black duration-200'>LogIn</button>
            </Link>
            <Link to={"/auth"} onClick={()=>{
                setIsloginPage(false)
            }} className='outline-none border-none'>
          <button className='bg-blue-600 px-8 py-3 rounded-full text-background hover:bg-transparent hover:text-black border duration-200 '>SignUp</button>
            </Link></>):
            <Link to={"/dashboard"} onClick={()=>{
                setIsloginPage(true)
            }
            } className='outline-none border-none'>
          <button className=' bg-blue-600 px-8 py-3 rounded-full text-background hover:bg-transparent hover:text-black border duration-200'>My Dashborad</button>
            </Link>
            }
          
        </div>
      </nav>
      <div className='flex items-center justify-between px-20 mt-10'>
        <div className=''>
          <div className='bg-[#F1E8FA] p-1 rounded-full px-2 inline-block'>
           <p className='text-[#AF75E4] font-semibold'>Finance Solution For You</p> 
          </div>
          <div className='text-6xl font-semibold *:mt-2'>
            <h2 className='flex justify-start items-center'>Maximize
            <svg className='w-16 h-16' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fbfawerwerwerwbfb">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M4.875 13V11C4.875 7.68629 7.49413 5 10.725 5H12.675C15.9059 5 18.525 7.68629 18.525 11V13C18.525 16.3137 15.9059 19 12.675 19H10.725C7.49413 19 4.875 16.3137 4.875 13Z" stroke="#2563eb" strokeWidth="0.768" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M13.65 9.74998C14.0642 9.74998 14.4 9.41419 14.4 8.99998C14.4 8.58576 14.0642 8.24998 13.65 8.24998V9.74998ZM10.1683 8.24998C9.75406 8.24998 9.41828 8.58576 9.41828 8.99998C9.41828 9.41419 9.75406 9.74998 10.1683 9.74998V8.24998ZM10.161 8.25001C9.74679 8.25404 9.41429 8.59307 9.41831 9.00727C9.42234 9.42146 9.76137 9.75397 10.1756 9.74994L10.161 8.25001ZM12.2567 11.1L13.0067 11.1075C13.0067 11.1025 13.0067 11.0975 13.0067 11.0924L12.2567 11.1ZM10.1683 13.2L10.1756 12.45H10.1683V13.2ZM8.775 13.2V12.45C8.47201 12.45 8.19878 12.6323 8.08246 12.9121C7.96615 13.1918 8.02961 13.5141 8.2433 13.7289L8.775 13.2ZM11.0289 16.5289C11.321 16.8226 11.7959 16.8238 12.0895 16.5317C12.3832 16.2395 12.3844 15.7647 12.0923 15.471L11.0289 16.5289ZM10.1683 9.74998C10.5825 9.74998 10.9183 9.41419 10.9183 8.99998C10.9183 8.58576 10.5825 8.24998 10.1683 8.24998V9.74998ZM8.775 8.24998C8.36079 8.24998 8.025 8.58576 8.025 8.99998C8.025 9.41419 8.36079 9.74998 8.775 9.74998V8.24998ZM13.65 11.85C14.0642 11.85 14.4 11.5142 14.4 11.1C14.4 10.6858 14.0642 10.35 13.65 10.35V11.85ZM8.775 10.35C8.36079 10.35 8.025 10.6858 8.025 11.1C8.025 11.5142 8.36079 11.85 8.775 11.85V10.35ZM13.65 8.24998H10.1683V9.74998H13.65V8.24998ZM10.1756 9.74994C10.8856 9.74304 11.499 10.3324 11.5068 11.1075L13.0067 11.0924C12.9909 9.52515 11.7348 8.23471 10.161 8.25001L10.1756 9.74994ZM11.5068 11.0924C11.499 11.8675 10.8856 12.4569 10.1756 12.45L10.161 13.9499C11.7348 13.9652 12.9909 12.6748 13.0067 11.1075L11.5068 11.0924ZM10.1683 12.45H8.775V13.95H10.1683V12.45ZM8.2433 13.7289L11.0289 16.5289L12.0923 15.471L9.3067 12.671L8.2433 13.7289ZM10.1683 8.24998H8.775V9.74998H10.1683V8.24998ZM13.65 10.35H8.775V11.85H13.65V10.35Z" fill="#2563eb"></path> </g></svg>
            </h2>
            <h2>Your <span className='text-blue-500'>Financial</span></h2>
            <h2>Potential</h2>
            <p className='text-base font-normal w-96 text-black/60'>Welcome to Expensza, where financial managment meets simplicity and efficiency</p>
          </div>
          <div>
          <Link to={"/auth"} onClick={()=>{
            setIsloginPage(false)
          }}>
            <button className='bg-blue-600 hover:bg-transparent hover:text-black border transition-all px-5 py-4 text-white rounded-full mt-3'>
              Get Started 
            </button>
            </Link>
          </div>
        </div>
        <div>
            <img src={home} width={500} alt="" />
        </div>
      </div>
    </div>


      {/* Empower Your Financial Future with us */}

      <section className="p-20">
          <div className="container mx-auto px-4 md:px-6 text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="text-blue-600">Empower</span> Your Financial Future with us
              </h2>
              <div className="w-24 h-1 bg-blue-600 rounded-xl mx-auto mb-6"></div>
          </div>
  
          <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="lg:w-1/2">
                      <div className="bg-white rounded-2xl shadow-xl p-6 relative hover-scale transition duration-300">
                          <div className="flex items-center justify-between mb-6">
                              <div>
                                  <h3 className="text-sm text-gray-500">My Balance</h3>
                                  <p className="text-2xl font-bold">₹9,823.28</p>
                              </div>
                              <div className="flex space-x-2">
                                  <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                                      </svg>
                                  </span>
                              </div>
                          </div>
                          <div className="h-48 bg-gradient-to-b from-blue-500 to-purple-500 rounded-xl mb-6 flex items-end overflow-hidden">
                              <div className="w-full flex justify-between items-end p-4">
                                  <div className="bg-white/20 w-12 h-32 rounded-t-lg"></div>
                                  <div className="bg-white/20 w-12 h-20 rounded-t-lg"></div>
                                  <div className="bg-white/20 w-12 h-40 rounded-t-lg"></div>
                                  <div className="bg-white/20 w-12 h-24 rounded-t-lg"></div>
                                  <div className="bg-white/20 w-12 h-36 rounded-t-lg"></div>
                              </div>
                          </div>
                          <div className="flex justify-between text-sm">
                              <div className="text-gray-500">Jan</div>
                              <div className="text-gray-500">Feb</div>
                              <div className="text-gray-500">Mar</div>
                              <div className="text-gray-500">Apr</div>
                              <div className="text-gray-500">May</div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">Comprehensive Financial <span className="text-blue-600">Analytics</span> Dashboard</h3>
                      <p className="text-gray-600 mb-6">
                          Gain real-time visibility into your financial performance with intuitive dashboards. Track spending patterns, monitor income sources, and identify opportunities for savings.
                      </p>
                      <div className="space-y-4">
                          <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                  </svg>
                              </div>
                              <p className="font-medium">Keep tracking balance</p>
                          </div>
                          <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                  </svg>
                              </div>
                              <p className="font-medium">Receive money easily</p>
                          </div>
                          <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                  </svg>
                              </div>
                              <p className="font-medium">Send money easily</p>
                          </div>
                          <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center mr-3">
                                  <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                  </svg>
                              </div>
                              <p className="font-medium">Convert currency</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
      {/* Track  */}

      <section className="p-20 ">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/2 order-2 lg:order-1">
                    <h3 className="text-2xl font-bold mb-4">
                        <span className="text-primary">Track</span> Your all the Expense Easily
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Effortlessly monitor and manage all your expenses with our intuitive tracking system. 
                        Stay on top of your finances by easily recording and categorizing expenses, 
                        ensuring you have a clear overview of your spending habits.
                    </p>
                    <Link to={"/auth"}>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-white border hover:text-blue-600 transition duration-300 shadow-lg shadow-primary/20">
                        Get Started
                    </button>
                    </Link>
                    
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2">
                    <div className="bg-white rounded-2xl shadow-xl p-6 hover-scale transition duration-300">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold">Expense Distribution</h3>
                            <div className="flex space-x-2">
                                <span className="text-sm text-gray-500">This Month</span>
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 mb-6">
                            <div className="w-32 h-32 rounded-full border-8 border-t-blue-600 border-r-blue-600 border-l-blue-300 border-b-blue-300  flex items-center justify-center relative">
                                
                                <div className="z-10 text-xl font-bold">₹1,928.92</div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                    <span className="text-sm">Rent and Living - $3,838 (55%)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                    <span className="text-sm">Transportation - $1,220.45 (20%)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                                    <span className="text-sm">Saving - $984.93 (15%)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                                    <span className="text-sm">Entertainment - $735 (10%)</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="font-medium">Recent Expenses</h4>
                                <a href="#" className="text-primary text-sm">See all</a>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Shopping</p>
                                            <p className="text-xs text-gray-500">Today, 12:30 PM</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-red-500">-$42.50</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Groceries</p>
                                            <p className="text-xs text-gray-500">Yesterday</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-red-500">-$85.20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Achieve Financial Excellence Section */}
    <section className="p-20">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/2">
                    <div className="relative">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-6 shadow-xl hover-scale transition duration-300">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white rounded-full p-2">
                                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                                </svg>
                            </div>
                            <div className="text-white mb-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-sm opacity-80">VISA</p>
                                    </div>
                                    <div>
                                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2"/>
                                            <path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="white" strokeWidth="2"/>
                                            <path d="M12 7V5" stroke="white" strokeWidth="2" />
                                            <path d="M12 17V19" stroke="white" strokeWidth="2" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-sm opacity-80">Card Number</p>
                                    <p className="text-xl font-medium">**** **** **** 4589</p>
                                </div>
                                <div className="mt-6 flex justify-between">
                                    <div>
                                        <p className="text-sm opacity-80">Card Holder</p>
                                        <p className="font-medium">code red</p>
                                    </div>
                                    <div>
                                        <p className="text-sm opacity-80">Expires</p>
                                        <p className="font-medium">09/25</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">
                        Achieve Financial <span className="text-primary">Excellence</span>
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Effortlessly add your credit or debit card with convenience and simplicity. Our streamlined process makes it easy to manage your finances in one place.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 text-green-600">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold">Receive Money from Card</p>
                                <p className="text-sm text-gray-500">Instantly receive funds directly to your account</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 text-green-600">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
                                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold">Send Money from Card</p>
                                <p className="text-sm text-gray-500">Securely send money to anyone, anywhere in the world</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

     {/* Support Options Section */}
    <section className="p-20">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-600 text-white rounded-2xl p-8 hover-scale transition duration-300">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold">Live Chat</h3>
                    </div>
                    <p className="mb-6">
                        Connect with our support team instantly. Get answers to your questions in real-time.
                    </p>
                    <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-medium hover:bg-white/90 transition duration-300">
                        Start a Chat
                    </button>
                </div>
                <div className="bg-green-500 text-white rounded-2xl p-8 hover-scale transition duration-300">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold">Watch a Demo</h3>
                    </div>
                    <p className="mb-6">
                        Learn how to use FinSafe with our comprehensive video tutorials and demos.
                    </p>
                    <button className="bg-white text-green-500 px-6 py-2 rounded-lg font-medium hover:bg-white/90 transition duration-300">
                        Watch Now
                    </button>
                </div>
            </div>
        </div>
    </section>
    {/* Footer  */}
    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between mb-8">
                <div className="mb-6 md:mb-0">
                    <div className="flex items-center mb-4">
                      
                        <h1 className="text-xl font-bold ml-2">Expensza</h1>
                    </div>
                    <p className="text-gray-400 max-w-xs">
                        The complete financial management platform for individuals.
                    </p>
                </div>
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Press</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">News</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Features</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Security</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Roadmap</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Documentation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Guides</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Help Center</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy</a></li>
                        </ul>
                    </div>
                </div> */}
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">©️ 2025 Expensza. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
      </>
  )
}

export default Landing
