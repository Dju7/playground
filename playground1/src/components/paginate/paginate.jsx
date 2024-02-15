import ReactPaginate from 'react-paginate';
import { useState } from 'react';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// eslint-disable-next-line react/prop-types
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        // eslint-disable-next-line react/prop-types
        currentItems.map((item) => (
          <div className='  w-44 h-44 border border-black' key={item}>
            <h3>Image{item}</h3>
          </div>
        ))}
    </>
  );
}

// eslint-disable-next-line react/prop-types
function PaginatedItems({ itemsPerPage }) {
   
    const [itemOffset, setItemOffset] = useState(0);
  
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <div className='flex gap-4 mb-6'>
        <Items currentItems={currentItems}  />
        </div>
        
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className='bg-blue-200 flex gap-2'
          
        />
        
      </>
    );
  }

  export default PaginatedItems