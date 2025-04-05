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
    <header className="flex bg-[#003DA0] h-[72px] items-center gap-x-16 justify-between px-8">
      <div className="flex">
        <div className="cursor-pointer">
          <Logo />
        </div>
        <Menu className="sm:block md:hidden ml-4 text-white mt-1 cursor-pointer" />
        <div className="hidden md:flex items-center">
          {navbar.map((item, index) => (
            <div
              key={index}
              className="text-white w-max text-[14px] mx-4 cursor-pointer hover:opacity-80"
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
            placeholder="Tìm kiếm"
            className="text-white text rounded-xl border-none"
          />
        </div>
        <div className="hidden lg:flex gap-x-4 mt-2">
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
        <div className="flex mt-2 cursor-pointer hover:opacity-80 rounded-full w-6 h-6 ">
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
