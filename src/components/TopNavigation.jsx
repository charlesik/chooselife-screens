function TopNavigation({color}) {
  
  return (
    <div className="flex justify-between h-[77px]  p-5  w-[90%] m-auto">
      <div>
        <img src="/logo.png" alt="" />
      </div>
      <ul className="flex w-[495px] justify-around text-[16px] font-semibold pt-3">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">FAQs</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Market</a>
        </li>
      </ul>
      <div>
      <button className={`border border-[${color}] w-[103px] h-[40.9px] rounded-lg mx-2`}>
          Get Started
        </button>
        <button className={`bg-[${color}] w-[103px] h-[40.9px] rounded-lg mx-2`}>
          Login
        </button>
      </div>
    </div>
  );
}

export default TopNavigation;
