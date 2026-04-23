import { PAGE } from '../data/page'

export function Footer() {
  const { footer } = PAGE

  return (
    <footer className="bg-[#0a0909] py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
        <img
          src={footer.logoUrl}
          alt="Nail Designer Logo"
          className="h-10 object-contain opacity-80"
          loading="lazy"
        />
        <p className="text-gray-500 text-sm">{footer.copy}</p>
        <p className="text-gray-600 text-xs">{footer.dev}</p>
      </div>
    </footer>
  )
}
