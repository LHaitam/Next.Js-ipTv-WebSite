import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mb-24 pt-12"> {/* Ajout de pt-12 pour le padding top */}
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="logo.png" alt="logo" width={110} height={50} />
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link, index) => (
                    <Link href={typeof link === 'string' ? '/' : link.url} key={index}>
                      {typeof link === 'string' ? link : link.title}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}


            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">Copyright © 2014-2024 CRISTALE IPTV. All Rights Reserved </p>
        <div className="flex justify-center items-center gap-4 mt-4">
          <Image src="/bank1.webp" alt="Payment Method 1" width={60} height={60} />
          <Image src="/bank2.webp" alt="Payment Method 2" width={60} height={60} />
          <Image src="/bank3.webp" alt="Payment Method 3" width={60} height={60} />
          <Image src="/bank4.webp" alt="Payment Method 4" width={60} height={60} />
          <Image src="/bank5.webp" alt="Payment Method 5" width={60} height={60} />
          <Image src="/bank6.webp" alt="Payment Method 6" width={60} height={60} />
          <Image src="/bank7.webp" alt="Payment Method 7" width={60} height={60} />
          <Image src="/bank8.webp" alt="Payment Method 8" width={60} height={60} />
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer