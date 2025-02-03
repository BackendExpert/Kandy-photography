import React from 'react'
import { quicklink, sociallinks } from './FooterData'
import { Link } from 'react-router'
import { FaLink } from "react-icons/fa6";


const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <div className='relative md:px-24 px-4 pt-8 w-full bg-[url(https://wallpapercave.com/wp/wp4991569.jpg)] bg-cover bg-center'>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-4 py-16 text-white md:ml-0 ml-4">
                <div className="w-full md:my-0 my-4">
                    <h1 className="text-4xl font-semibld">KandyPhoto</h1>
                    <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet animi eos sapiente praesentium iste. Iste sed, itaque ut quae, eveniet, amet cum natus nesciunt soluta necessitatibus dolorum sint nihil nulla.</p>
                </div>
                <div className="w-full md:my-0 my-4">
                    <h1 className="text-xl uppercase">Quick Links</h1>
                    <hr className="border border-white mt-1 w-1/2" />
                    {
                        quicklink.map((qlink, index) => {
                            return (
                                <div className="py-2 mt-4" key={index}>
                                    <Link to={qlink.link}>
                                        <div className="flex">
                                            <FaLink className='h-6 w-auto'/>
                                            <h1 className="pl-2">{qlink.name}</h1>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="md:my-0 my-4" >
                    <h1 className="text-xl uppercase">stay connected</h1>
                    <hr className="border border-white mt-1 w-1/2" />

                    {
                        sociallinks.map((social, index) => {
                            return(
                                <div className="py-2 mt-4" key={index}>
                                    <Link to={social.link}>
                                        <div className="flex">
                                            <social.icon className='h-6 w-auto'/>
                                            <h1 className="pl-2">{social.name}</h1>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="md:my-0 my-4">
                    <h1 className="text-xl uppercase">Location</h1>
                    <hr className="border border-white mt-1 w-1/2" />

                    <div className="mt-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31660.211943998547!2d80.60518184393949!3d7.294587402125593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366266498acd3%3A0x411a3818a1e03c35!2sKandy!5e0!3m2!1sen!2slk!4v1738477948408!5m2!1sen!2slk" 
                            className='h-60 w-auto mt-4'
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>

            <div className="">
                <hr className='w-full border border-white'/>
                <div className="text-white p-1 xl:text-left text-center">&copy; KandyPhoto-test - AllRight Reserved | {currentYear} | Developed and Maintained by <a href="https://www.linkedin.com/in/jehanweerasuriya/" target='blank'>JehanKandy</a> </div>
            </div>
        </div>
    </div>
  )
}

export default Footer