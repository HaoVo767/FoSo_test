import GearIcon from "@/assets/icons/gear"
import Logo from "../../assets/icons/logo"
import SearchIcon from "@/assets/icons/search"
import { Input } from "@/components/ui/input"
import avatar from "@/assets/avatar.jpg"

import { Menu } from "lucide-react"
import ConvertIcon from "@/assets/icons/convert"
import MessageIcon from "@/assets/icons/message"
import BellIcon from "@/assets/icons/bell"
import QuestionIcon from "@/assets/icons/question"
import ArrowDown from "@/assets/icons/arrowDown"

const Header = () => {
  const navbar = [
    "Danh mục",
    "Bán & Xuất hàng",
    "Mua & Nhập hàng",
    "Kho & sản xuất",
    "Kế toán",
    "Báo cáo & Thống kê",
    "Tiện ích",
  ]
  return (
    <header className="flex overflow-x-hidden mx-0 px-4 w-full bg-[#003DA0] h-[72px] items-center justify-between md:pl-8 md:pr-8">
      <div className="flex">
        <div className="cursor-pointer mr-0 lg:mr-4">
          <Logo />
        </div>
        <Menu className="block xl:hidden mx-2 text-white mt-1 cursor-pointer" />
        <div className="hidden text-sm md:text-md xl:flex items-center">
          {navbar.map((item, index) => (
            <div
              key={index}
              className="text-white w-max text-sm mx-2 cursor-pointer hover:opacity-80"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-x-4">
        <div
          className="rounded-xl lg:block"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <Input
            icon={<SearchIcon />}
            placeholder={"Tìm kiếm"}
            className="text-white text rounded-xl border-none"
            style={{ color: "#FFF" }}
          />
        </div>
        <div className="hidden items-center md:flex md:gap-x-2 mt-2">
          <div className="cursor-pointer hover:opacity-80">
            <GearIcon />
          </div>
          <div className="cursor-pointer hover:opacity-80">
            <ConvertIcon />
          </div>
          <div className="cursor-pointer hover:opacity-80">
            <MessageIcon />
          </div>
          <div className="cursor-pointer hover:opacity-80">
            <BellIcon />
          </div>
          <div className="cursor-pointer hover:opacity-80">
            <QuestionIcon />
          </div>
        </div>
        <div className="flex mt-2 w-5 h-5 cursor-pointer hover:opacity-80 rounded-full lg:w-6 lg:h-6 ">
          <img
            src={avatar}
            alt="avater"
            className="rounded-full"
          />
          <div className="cursor-pointer hover:opacity-80">
            <ArrowDown />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
