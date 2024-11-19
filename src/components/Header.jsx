import { useState, useEffect } from "react"


export const Header = () => {
  
  let initialDarkMode =  JSON.parse(localStorage.getItem('dark'))
  
  if(!initialDarkMode){
    initialDarkMode = false
  }
  console.log(initialDarkMode)
  const [dark, setDark] = useState(initialDarkMode)
  
  const handleClick = () => {
    setDark(!dark)
  }

  useEffect(()=>{
    if(dark){
      document.documentElement.classList.add('dark')
      localStorage.setItem('dark', true)
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('dark', false)
    }
  },[dark])

  return (
    <header className="bg-slate-200 dark:bg-slate-800 h-[235px] rounded-b-[20px] pt-8 px-6 mb-[1000px] tablet:mb-[430px] desktop:mb-[200px]">
      <div className="tablet:flex tablet:justify-between max-w-[1140px] mx-auto">
        <div>
          <div className="text-lg tracking-[1px] uppercase font-medium text-xs mb-1 text-Very-Dark-Blue dark:text-slate-300 transition duration-300 ease-in-out">Social Media Dasboard Image</div>
          <br />
          <p className="mb-6 transition duration-300 ease-in-out text-Dark-Grayish-Blue font-Inter">Total Followers: 23,004</p>
        </div>
        <div className="flex justify-between gap-[15px]">
          <p className="text-slate-500 mt-1 font-Inter font-normal uppercase  tracking-[0.7px] text-sm dark:text-White transition duration-300 ease-in-out">Modo</p>

          <label className="relative w-12 h-6 rounded-full cursor-pointer p-[3px] overflow-hidden">
            <input onClick={handleClick} className="sr-only peer" type="checkbox" defaultChecked={dark} />
            <div className="absolute top-0 left-0 w-full h-full bg-Toggle peer-checked:bg-Toggle-Gradient"></div>
            <div className="w-[18px] h-[18px] rounded-full bg-Light-Grayish-Blue dark:bg-Very-Dark-Blue-Top peer-checked:translate-x-[24px] transition duration-300 ease-in-out absolute"></div>
          </label> 
        </div>
      </div>
    </header>
  )
}
