// import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid h-screen place-items-center ">
      <h1 className="text-white text-4xl ">To Do List</h1>
      <div className="bg-slate-100 h-auto w-auto rounded-lg justify-center">
          <div className="grid grid-rows-3 grid-flow-col gap-2 bg-gray-600">

              <div className='mx-3 flex'>
                <label className="my-3">Add an Item</label>
                <input className='mx-11 my-3 rounded-lg' type="text" />
                <button className="mx-28 my-3 bg-green-500 w-16 rounded-lg">Add</button>
              </div>
              <div className='mx-3'>
                <label htmlFor="">Items to do:</label> 
              </div>
          </div>
        </div> 
    </main>
  )
}
