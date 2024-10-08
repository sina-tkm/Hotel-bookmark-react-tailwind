function LocationSkleton() {
  return (
    <div className='cards card-text mt-6 w-full box-shadow-bar rounded-[12px] p-[20px]  '>
      <div className='flex flex-col w-[500px] gap-y-4 mt-[90px] order-1'>
        <div className='skeleton-headers'></div>
        <div className='skeleton-bodys'>
          <div className='skeleton-lines'></div>
          <div className='skeleton-lines'></div>
          <div className='skeleton-lines'></div>
          <div className='skeleton-lines'></div>
          <div className='skeleton-lines'></div>
          <div className='skeleton-lines'></div>
          <div className='skeleton-lines'></div>
        </div>
      </div>
      <div className='skeleton-images'></div>
    </div>
  );
}

export default LocationSkleton;
