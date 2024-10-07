function LoaderSkeleton() {
  return (
    <div className='w-[119%] flex flex-col gap-y-4'>
      <div className='card card-text gap-x-4 justify-start '>
        <div className='skeleton-image '></div>
        <div className='flex flex-col mt-[53px] w-full '>
          <div className='skeleton-header w-[230px] h-[30px] rounded-lg '></div>
          <div className='skeleton-body'>
            <div className='skeleton-line'></div>
            <div className='skeleton-line'></div>
            <div className='skeleton-line'></div>
          </div>
          <div className='skeleton-footer'></div>
        </div>
      </div>
      <div className='card card-text gap-x-4 justify-start '>
        <div className='skeleton-image '></div>
        <div className='flex flex-col mt-[53px] w-full'>
          <div className='skeleton-header w-[230px] h-[30px] rounded-lg '></div>
          <div className='skeleton-body'>
            <div className='skeleton-line'></div>
            <div className='skeleton-line'></div>
            <div className='skeleton-line'></div>
          </div>
          <div className='skeleton-footer'></div>
        </div>
      </div>
      <div className='card card-text gap-x-4 justify-start '>
        <div className='skeleton-image '></div>
        <div className='flex flex-col mt-[53px] w-full'>
          <div className='skeleton-header w-[230px] h-[30px] rounded-lg '></div>
          <div className='skeleton-body'>
            <div className='skeleton-line'></div>
            <div className='skeleton-line'></div>
            <div className='skeleton-line'></div>
          </div>
          <div className='skeleton-footer'></div>
        </div>
      </div>
    </div>
  );
}
export default LoaderSkeleton;
