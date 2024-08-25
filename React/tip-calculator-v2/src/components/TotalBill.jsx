const TotalBill = ({ bill, totalBill, setBill }) => {
  function totalBill(e) {
    console.log(e.target.value);
    setBill(Number(e.target.value));
  }
  return (
    <div className="text-white">
      <>
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <p>How much was the Bill?</p>
          <input
            onChange={totalBill}
            value={bill}
            className="h-[38px] w-full sm:w-[600px] bg-transparent border rounded-md outline-none p-4 "
            type="number"
          />
        </div>
      </>
    </div>
  );
};

export default TotalBill;
