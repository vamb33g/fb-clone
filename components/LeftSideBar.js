import React from 'react'
import LeftSideBarLink from './LeftSideBarLink'
import { BsChevronDown } from 'react-icons/bs'
import { useSession } from 'next-auth/react'

const LeftSideBar = () => {

    const {data: session} = useSession()

  return (
    <div className='px-4 fixed mt-5 hidden lg:block'>
    <div className='flex flex-col gap-2'>

        <LeftSideBarLink image={session?.user?.image}
        text={session.user?.name} />
        <LeftSideBarLink image="/friends.png" text="Friends" />
        <LeftSideBarLink image="/group.png" text="Groups" />
        <LeftSideBarLink image="/market.png" text="Marketplace" />
        <LeftSideBarLink image="/save.png" text="Saved" />
        <LeftSideBarLink image="/pages.png" text="Pages" />
        <LeftSideBarLink image="/events.png" text="Events" />
        <LeftSideBarLink image="/most_recent.png" text="Most Recent" />

        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
            <div className='bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full'>
                <BsChevronDown />
            </div>
            <h1 className='text-[16px] font-medium'>See More</h1>
        </div>

        <p className='text-[14px] text-gray-500 mt-2'>
            Privacy - Terms - Advertising - Ad Choices <br /> Cookies - Meta 2023
        </p>
    </div>

    </div>
  )
}

export default LeftSideBar