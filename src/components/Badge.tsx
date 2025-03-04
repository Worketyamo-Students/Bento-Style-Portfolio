interface Props{
    content: string,
}
const Badge = ({content}:Props) => {
  return (
    <div  className="flex items-center justify-center p-2 bg-bgColor gap-2 rounded-full">
        <div className="w-3 h-3 bg-[rgba(230,_62,_33,_1)] rounded-full buble"></div>
        <h3 className="font-semibold text-[9px] md:text-[14px]">{content}</h3>
    </div>
  )
}

export default Badge