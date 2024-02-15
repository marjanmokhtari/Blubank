export const metadata = {
    title: 'درباره ما',
    description: 'test'
  }
  export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section className=" w-full ">
        {children}
      </section>
    )
  }
  

