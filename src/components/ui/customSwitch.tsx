interface SwitchProps {
  isOn: boolean
  onToggle: () => void
}

const CustomSwitch: React.FC<SwitchProps> = ({ isOn, onToggle }) => {
  return (
    <div className="flex items-center">
      <div
        onClick={onToggle}
        className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <div className={`bg-white w-5 h-5 rounded-full shadow-md transform ${isOn ? "translate-x-6" : ""}`}></div>
      </div>
      <span className="ml-3 text-gray-700">{isOn ? "Fake data ON" : "Fake data OFF"}</span>
    </div>
  )
}

export default CustomSwitch
