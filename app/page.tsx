
import RichTextEditor from "./components/TitTap/RichTextEditor";

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-4 justify-center py-5 gap-5'>
        <div className='col-span-1 md:col-span-2'>
          <div className='flex flex-col gap-y-5'>
            <div className='bg-white p-5 rounded-xl'>
              <div className='flex flex-row gap-x-5 text-black'>
                <div className=' text-white relative bg-black w-[50px] h-[50px] flex justify-center items-center rounded-full'>
                  Pie
                </div>
                <div className=''>
                  <div className='flex flex-col'>
                    <p>Unpaid data</p>
                    <p>Paid data</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-white p-5 rounded-xl'>
              <div className='flex flex-row gap-x-5 text-black'>
                <div className=' text-white relative bg-black w-[50px] h-[50px] flex justify-center items-center rounded-full'>
                  Pie
                </div>
                <div className=''>
                  <div className='flex flex-col'>
                    <p>Unpaid data</p>
                    <p>Paid data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 md:col-span-2'>
          <div className='flex flex-col bg-white rounded-xl p-2 gap-y-3'>
            <h3 className='font-light text-black'>Note</h3>
            <div className='bg-black w-full h-[150px] flex justify-center items-center'>
              <h3 className='text-white'>Chart</h3>
            </div>
          </div>
        </div>
        <div className="col-span-full">
          <RichTextEditor />
        </div>
      </div>
    </>
  );
}
