import Link from 'next/link'

export default function SubNavbar() {
  return (
    <nav className="sticky top-0 z-20 bg-[#FF9102] text-white shadow-md">
      <div className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 lg:gap-x-10">
        <Link
          href="/message-from-the-chief-editor"
          className="px-2 py-1 text-center flex items-center gap-2 text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#003366]"
        >
          <i className="ri-edit-box-line" />
          Message from the Chief Editor
        </Link>

        <Link
          href="/editorial-board"
          className="px-2 py-1 text-center flex items-center gap-2 text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#003366]"
        >
          <i className="ri-team-line" />
          Editorial Board
        </Link>

        <Link
          href="/subscription"
          className="px-2 py-1 text-center flex items-center gap-2 text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#003366]"
        >
          <i className="ri-vip-crown-2-line" />
          Subscription
        </Link>

        <Link
          href="/download-pdf"
          className="px-2 py-1 text-center flex items-center gap-2 text-sm font-medium uppercase tracking-wide transition-colors hover:text-[#003366]"
        >
          <i className="ri-git-repository-line" />
          Editor's Library
        </Link>
      </div>
    </nav>
  )
}