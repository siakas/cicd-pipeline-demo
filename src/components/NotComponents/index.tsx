const NotComponents = () => {
  return (
    <div className="not-components relative mx-auto max-w-7xl py-48 px-4 sm:px-6 md:px-8 lg:grid lg:grid-cols-12 lg:grid-rows-1 lg:gap-x-8">
      <Title />
      <Demo />
    </div>
  )
}

const Title = () => {
  return (
    <div className="mb-12 lg:col-span-7 lg:row-end-1 xl:col-span-6">
      <h3 className="text-3xl  font-extrabold text-slate-200">
        Not into component frameworks?
      </h3>
      <p className="mt-4 max-w-3xl space-y-6">
        Use Tailwind&apos;s{' '}
        <code className="font-mono font-medium text-slate-200">@apply</code>{' '}
        directive to extract repeated utility patterns into custom CSS classes
        just by copying and pasting the list of class names.
      </p>
    </div>
  )
}

const Demo = () => {
  return (
    <div className="pt-10 lg:col-span-5 lg:row-start-1 lg:row-end-2 xl:col-span-6">
      <div className="highlight-white/10 relative z-10 rounded-xl bg-slate-800 shadow-xl ring-1 ring-slate-900/5">
        <article>
          <h2 className="px-4 pt-4 pb-2 text-lg font-semibold text-slate-100 opacity-25 transition-opacity delay-500 duration-[1.5s] sm:px-6 lg:px-4 xl:px-6">
            Weekly one-on-one
          </h2>
          <dl className="flex flex-wrap divide-y divide-slate-200 divide-slate-200/5 border-b border-slate-200 border-slate-200/5 text-sm sm:text-base lg:text-sm xl:text-base">
            <div className="px-4 pb-4 sm:px-6 lg:px-4 xl:px-6">
              <dt className="sr-only">Date and time</dt>
              <dd className="opacity-25 transition-opacity delay-500 duration-[1.5s]">
                <time dateTime="2020-11-15T10:00:00-05:00">
                  Thu Nov 15, 2020 10:00am
                </time>{' '}
                -{/* */}{' '}
                <time dateTime="2020-11-15T11:00:00-05:00">
                  11:00am<span className="sr-only sm:not-sr-only"> EST</span>
                </time>
              </dd>
            </div>
            <div className="flex w-full flex-none items-center p-4 sm:p-6 lg:p-4 xl:p-6">
              <dt className="w-2/5 flex-none font-medium text-slate-300 opacity-25 transition-opacity delay-500 duration-[1.5s] sm:w-1/4">
                Location
              </dt>
              <dd className="opacity-25 transition-opacity delay-500 duration-[1.5s]">
                Kitchener, <abbr title="Ontario">ON</abbr>
              </dd>
            </div>
            <div className="flex w-full flex-none items-center p-4 sm:p-6 lg:p-4 xl:p-6">
              <dt className="w-2/5 flex-none font-medium text-slate-300 opacity-25 transition-opacity delay-500 duration-[1.5s] sm:w-1/4">
                Description
              </dt>
              <dd className="italic opacity-25 transition-opacity delay-500 duration-[1.5s]">
                No meeting description
              </dd>
            </div>
            <div className="flex w-full flex-none items-center p-4 sm:py-5 sm:px-6 lg:p-4 xl:py-5 xl:px-6">
              <dt className="w-2/5 flex-none font-medium text-slate-300 opacity-25 transition-opacity delay-500 duration-[1.5s] sm:w-1/4">
                Attendees
              </dt>
              <dd className="rounded-full bg-slate-700 py-1 px-3 text-sm font-medium text-slate-300 opacity-25 transition-opacity delay-500 duration-[1.5s]">
                Andrew McDonald
              </dd>
            </div>
          </dl>
          <div className="grid grid-cols-2 gap-x-4 p-4 sm:gap-x-6 sm:px-6 sm:py-5 lg:gap-x-4 lg:p-4 xl:gap-x-6 xl:px-6 xl:py-5">
            <div className="highlight-white/10 cursor-pointer rounded-lg bg-slate-600 py-3 text-center text-base font-medium text-slate-400">
              Decline
            </div>
            <div className="highlight-white/20 cursor-pointer rounded-lg bg-sky-500 py-3 text-center text-base font-medium text-white">
              Accept
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default NotComponents
