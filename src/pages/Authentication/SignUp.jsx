function SignUp() {
  return (
    <form action="" className="flex flex-col gap-5">
      <div className="flex flex-col gap-6">
        <input type="text" placeholder="your name" className="text-6xl text-grey-200" />
        <hr className="w-[15%] text-grey-300 border-[1px]" />
      </div>
      <div className="flex flex-col gap-6">
        <input type="email" placeholder="your email" className="text-6xl text-grey-200" />
        <hr className="w-[15%] text-grey-300 border-[1px]" />
      </div>
      <div className="flex flex-col gap-6">
        <input type="tel" placeholder="your phone number" className="text-6xl text-grey-200" />
        <hr className="w-[15%] text-grey-300 border-[1px]" />
      </div>
      <div className="flex flex-col gap-6">
        <input type="password" placeholder="your password" className="text-6xl text-grey-200" />
        <hr className="w-[15%] text-grey-300 border-[1px]" />
      </div>
      <div className="flex flex-col gap-6">
        <input type="password" placeholder="your password again" className="text-6xl text-grey-200" />
        <hr className="w-[15%] text-grey-300 border-[1px]" />
      </div>
      <a type="submit" className="text-3xl mt-5 text-white-400 underline">
        sign up
      </a>
    </form>
  );
}

export default SignUp;
