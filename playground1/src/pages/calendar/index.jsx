import PaginatedItems from "../../components/paginate/paginate";



export default function Calendar() {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="mb-10 text-3xl">Calendar</h1>
      <PaginatedItems itemsPerPage={5} />
    </section>
  )
}
