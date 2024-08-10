import { Footer } from 'flowbite-react'
import React from 'react'

const Bottom = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.LinkGroup>
            <Footer.Link href="/">Home</Footer.Link>
            <Footer.Link href="/about">About</Footer.Link>
            <Footer.Link href="/blogs">Blogs</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="/" by="Muzammil Shaikh Blogs" year={2024} />
      </div>
    </Footer>
  )
}

export default Bottom