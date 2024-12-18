
interface BannerProps {
    title: string
    text: string
    children?: React.ReactNode
    picture: React.ReactNode
}

export default function Banner({title, text, children, picture}: BannerProps) {
  return (
    <section>
        <div className="flex-col-reverse lg:flex-row max-w-[1280px] mx-auto flex items-center justify-between p-7 gap-x-8">
            <div className=" max-w-lg mt-10 ">
            <h1 className="text-base text-center lg:text-left lg:text-3xl font-bold">{title}</h1>
                <p className="font-medium text-xs lg:text-lg text-center lg:text-left">{text}</p>
                {children}
            </div>
            <picture>
                {picture}
            </picture>
        </div>
    </section>
  )
}